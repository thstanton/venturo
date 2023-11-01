"use client"

import { React, useState } from 'react';
import './BlogForm.css'
import { Input, Select, Option, Textarea, Card, Button, Checkbox } from '@mui/joy';

export default function BlogForm() {
    const [titleData, setTitleData]=useState('');
    const [collectionIdsData, setCollectionIdsData]=useState('');
    const [introductionData, setIntroductionData]=useState('');
    const [bodyData, setBodyData]=useState('');
    const [photosData, setPhotosData]=useState([]);
    const [location, setLocation] = useState({})

    const [mainPhoto, setMainPhoto]=useState();

    const [urlValue, setUrlValue]=useState('');

    function addPhoto() {
       const newItem = { url: urlValue, isMain: false }
        if (photosData.length >= 7) {
            return
        }
        setPhotosData([...photosData, newItem])
        setUrlValue('')
        console.log('photosData:', photosData);
       }
    

    // Functions to handle data change   
    function handleTitleChange(e) {     // set the states to the user's inputs
        setTitleData(e.target.value)
    }
    function handleCollectionIdsChange(e) {
        setCollectionIdsData(e.target.value)
    }
    function handleIntroductionChange(e) {
        setIntroductionData(e.target.value)
    }
    function handleBodyChange(e) {
        setBodyData(e.target.value)
    }


    async function submitBlog(e) {
        e.preventDefault();
        if (titleData==='') return          // if any of these are empty, don't submit (these are currently the only required)

        if (introductionData==='') return

        if (bodyData==='') return

        // const mainPhotoObject = photosData.filter(photo => photo.url===mainPhoto)
        // console.log(mainPhotoObject);
        // const updatedMainPhoto = mainPhotoObject[0].mainPhoto=true
        // console.log(updatedMainPhoto);
        const updatedPhotoArray = photosData.map(photo => {if (photo.url===mainPhoto) {
            return {...photo, isMain: true}
        }
        else {
            return photo
        }
    })
    console.log('updatedPhotoArray', updatedPhotoArray);

        const body = {title: titleData, introduction: introductionData, body: bodyData, ...(collectionIdsData !== '')&& {collectionIds: collectionIdsData}, ...(updatedPhotoArray.length !== 0)&& {photos: updatedPhotoArray}}
        console.log(body);                                                                 // if collectionIds data isn't empty, populate collectionIds        if photosData is not an empty string, populate photos
        try {
           const response = await fetch('http://localhost:3000/api/blogs/new', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body) // post the body object initialized above
            });
            
            if (response.ok) {
                console.log('Okay!');
                console.log(response);
            } else {
                console.log('Bad!');
            }
        } catch (error){
            console.error(error);
        }
    };

  return (
    <div className="blogFormMain">
        <h1 className='blogH1'>Create a blog post</h1>
        <form className='blogForm'>
            <Input className='blogTitle'
            color="neutral"
            disabled={false}
            size="md"
            placeholder="Title"
            variant="outlined"
            required
            onChange={handleTitleChange}
            name='title'
            />
            <div className="LocationAndCollectionContainer">
                <SelectLocation className='locationAndCollection' setLocation={setLocation}/>
                {/* <ReactGoogleAutocomplete className='locationAndCollection'
                apiKey={process.env.YOUR_GOOGLE_MAPS_API_KEY}           
                onPlaceSelected={onPlaceSelectedHandler}
                /> */}
                <Select className='locationAndCollection'
                placeholder="Collection"
                size="md"
                variant="outlined"
                onChange={handleCollectionIdsChange}
                >
                <Option value="location1">Collection 1</Option>
                <Option value="location2">Collection 2</Option>
                </Select>
            </div>
            <Textarea className="blogIntro"
            size="lg" 
            placeholder="Introduction"
            onChange={handleIntroductionChange}
            />
            <Textarea className="blogBody"
            size="lg"  
            placeholder="Body"
            onChange={handleBodyChange}
            />
            <Card className="uploadPhotos"
            size="lg">
                <div className="urlAndSubmitContainer">
                    <Input className='url'
                    value={urlValue}
                    onChange={(e)=> {
                        setUrlValue(e.target.value)
                    }}
                    color="neutral"
                    size="md"
                    placeholder="Url"
                    variant="outlined"
                    disabled={photosData.length >= 7}
                    required
                    />
                    <Button id='submitPhoto'
                    onClick={addPhoto}
                    size="md"
                    variant="outlined"
                    disabled={photosData.length >= 7}
                    >Upload
                    </Button>
                </div>
                    { photosData.length > 0 &&
                    <div className="photoContainer">
                        {photosData.map((photo, index) => {
                              return (
                            <div key={index} className="photoCard">
                                <Card className="photo">
                                    <img src={photo.url} alt="img" className="photoImg" />
                                </Card>
                                <Checkbox
                                label="Main"
                                color='primary'
                                size="sm"
                                variant="solid"
                                checked={mainPhoto===photo.url}
                                onChange={(e)=> setMainPhoto(e.target.value)}
                                value={photo.url}
                                />      
                            </div>
                            );  
                         })}      
                    </div>
                     }      
            </Card> 
            <Button className='submitForm'
            onClick={submitBlog}
            size="md"
            variant="outlined"
            >Submit
            </Button>
        </form>
    </div>
  )
}
