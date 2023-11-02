"use client"
import { Card, Typography, CardContent, CardOverflow, CardCover, LocationOnRoundedIcon, Link } from '@mui/joy';
// import Link from 'next/link';
// import './SingleBlogCard.css'
import EditBlogButtons from '../EditBlogButtons/EditBlogButtons';

export default function SingleBlogCard({ blog, editMode, removeBlog }) {
  console.log(blog);
  let mainImageUrl = '';
  async function getMainImage(blog) {
    if (blog.photos !== null) {
      blog.photos.forEach(element => {
        if (element.isMain) mainImageUrl = element.url;
      });
    }
  }

  getMainImage(blog)

  async function deleteBlog() {
    try {
      console.log(`Delete User Blog : )//${blog.title}`)
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs/${blog._id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const data = await response.json()
      if (data.status === 200) {
        console.log('Okay!');
        console.log(response);
        //TODO call remove blog
        removeBlog(blog)
      } else {
        console.log('Bad!');
      }

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Card
      className="blogCard"
      size="lg"
      variant='outlined'
      orientation='vertical'
      >

      <CardCover>
        <img
          src={mainImageUrl}//'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D'
          loading="lazy" />
      </CardCover>

      <CardContent className="cardContent">
        {/* Blog Title view */}
        <Typography
          className="blogTitle"
          level="title-lg"
          textColor="#fff">
          {blog.title}
        </Typography>
      </CardContent>

      <CardCover
        className="cardCover"
        sx={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
        }} />

      <CardContent sx={{ justifyContent: 'flex-end' }}>
        {/* view blog location address */}
        <Typography level="title-lg" textColor="#fff">
          {(blog.location) ? blog.location.formatted_address : ''}
        </Typography>

        {/* blog collections view */}
        <Typography
          // startDecorator={<LocationOnRoundedIcon />}
          textColor="neutral.300"
          level='body-sm'>
          {/* {(blog.collectionIds && blog.collectionIds.length>0) ? blog.collectionIds[0].name: null} */}
        </Typography>
      </CardContent>
      {/* add edit and delete blog component in case of user selected blogs */}
      {editMode ? <EditBlogButtons key={blog._id} blog={blog} deleteBlog={deleteBlog} /> : null}
    </Card>
  )
}