import BlogHeaderBlock from '@/components/BlogHeaderBlock/BlogHeaderBlock'
import BlogTitleBlock from '@/components/BlogTitleBlock/BlogTitleBlock'
import BlogImageGallery from '@/components/BlogImageGallery/BlogImageGallery'
import BlogLocationWidget from '@/components/BlogLocationWidget/BlogLocationWidget'
import Grid from '@mui/joy/Grid'

export default function SinglePost({ params }) {

  return (
    <div className='SinglePost'>
      <BlogHeaderBlock image={image} />
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
        <Grid xs={8}>
            <BlogTitleBlock title={title} intro={intro} />
        </Grid>
        <Grid xs={4}>
            <BlogLocationWidget location={location} />
        </Grid>
        <Grid xs={12}>
          <BlogImageGallery images={images} />
        </Grid>
        <Grid xs={8}>
          <p>{ params.id } This will be the body of the post Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia maiores voluptate earum eligendi sit obcaecati, repellat id maxime reiciendis, modi, quisquam praesentium enim? Harum quam debitis quaerat, obcaecati totam nam?</p>
        </Grid>
      </Grid>
    </div>
  )
}