"use client"
import { Grid } from '@mui/joy'
import './BlogImageGallery.css'
import { useState } from 'react'
import PhotoLightBox from '../PhotoLightBox/PhotoLightBox'

export default function BlogImageGallery({ photos }) {
    const [showModal, setShowModal] = useState(false)
    const [modalPhoto, setModalPhoto] = useState(photos[0])

    function handleModal(photoSrc) {
        setModalPhoto(photoSrc)
        setShowModal(true)
    }

  return (
    <div className="BlogImageGallery a-block">
        <Grid container spacing={2} sx={{ flexGrow: 1 }}>
            { photos 
                ? 
                    photos.map(photo => (
                        <Grid key={photo._id} xs={3}>
                            <img src={photo.url} onClick={(e) => handleModal(e.target.src)} />
                        </Grid>
                    ))
                :  
                    <Grid xs={3}>
                        <img src="https://img.freepik.com/free-vector/gradient-mountain-landscape_23-2149159772.jpg" />
                    </Grid>
            }
        </Grid>
        <PhotoLightBox photo={modalPhoto} open={showModal} setShowModal={setShowModal} />
    </div>
  )
}
