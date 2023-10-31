import BlogHeaderBlock from '@/components/BlogHeaderBlock/BlogHeaderBlock'
import BlogTitleBlock from '@/components/BlogTitleBlock/BlogTitleBlock'
import BlogImageGallery from '@/components/BlogImageGallery/BlogImageGallery'
import BlogLocationWidget from '@/components/BlogLocationWidget/BlogLocationWidget'
import Grid from '@mui/joy/Grid'

export default function SinglePost({ params }) {

  return (
    <div className='SinglePost'>
      <BlogHeaderBlock />
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
        <Grid xs={8}>
            <BlogTitleBlock />
        </Grid>
        <Grid xs={4}>
            <BlogLocationWidget />
        </Grid>
        <Grid xs={12}>
          <BlogImageGallery />
        </Grid>
        <Grid xs={8}>
          <p>{ params.id } This will be the body of the post Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia maiores voluptate earum eligendi sit obcaecati, repellat id maxime reiciendis, modi, quisquam praesentium enim? Harum quam debitis quaerat, obcaecati totam nam?</p>
        </Grid>
      </Grid>
    </div>
  )
}