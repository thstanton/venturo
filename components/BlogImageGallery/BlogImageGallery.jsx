import { Grid } from '@mui/joy'
import './BlogImageGallery.css'

export default function BlogImageGallery() {
  return (
    <div className="BlogImageGallery">
        <Grid container spacing={2} sx={{ flexGrow: 1 }}>
            <Grid sx={3}>
                <img src="https://img.freepik.com/free-vector/gradient-mountain-landscape_23-2149159772.jpg" />
            </Grid>
            <Grid sx={3}>
                <img src="https://img.freepik.com/free-vector/gradient-mountain-landscape_23-2149159772.jpg" />
            </Grid>
            <Grid sx={3}>
                <img src="https://img.freepik.com/free-vector/gradient-mountain-landscape_23-2149159772.jpg" />
            </Grid>
        </Grid>
    </div>
  )
}
