"use client"

import { React, useState, useEffect } from 'react';
import './BlogForm.css'
import { Input, Select, Option, Textarea, Card, Button, Checkbox } from '@mui/joy';
import SelectLocation from '../SelectLocation/SelectLocation';

import { checkUserObject } from "@/utilities/utility";

export default function BlogForm({ blogId }) {

    const [titleData, setTitleData] = useState('');
    const [collectionIdsData, setCollectionIdsData] = useState([]);
    const [introductionData, setIntroductionData] = useState('');
    const [bodyData, setBodyData] = useState('');
    const [photosData, setPhotosData] = useState([]);
    const [location, setLocation] = useState({})

    const [mainPhoto, setMainPhoto] = useState();

    const [urlValue, setUrlValue] = useState('');

    // fetch blog from database and mount the form with it
    useEffect( () => {
        if (blogId) {
            getBlogFromDB(blogId)
        }

        async function getBlogFromDB(blogId) {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs/${blogId}`)
                const data = await res.json()
                console.log(`getBlogFromDB fetch object:  ${JSON.stringify(data)}`)
                if(data && data.blog)
                {
                    // set Title
                    setTitleData(data.blog.title)

                    // set collections
                    // setCollectionIdsData(data.blog.collectionIds)

                    // set Introduction Text
                    setIntroductionData(data.blog.introduction)

                    // set Body Text
                    setBodyData(data.blog.body)

                    // set photos array objects
                    setPhotosData(data.blog.photos)

                    // set locations
                    setLocation(data.blog.location)
                }
            } catch (error) {
                console.log(`Get Object Error :: ${error}`)
            }
        }
    }, [blogId])

    async function saveBlog(body) {
        // edit blog
        if (blogId) {
            editBlogInDB(body)
        }// add blog
        else {
            addBlogInDB(body)
        }
    }

    /**
     * send updated blog to server to be editted and saved
     * @param {*} body 
     */
    async function editBlogInDB(body) {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs/${blogId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });

            if (response.ok) {
                console.log('Okay!');
                console.log(response);
            } else {
                console.log('Bad!');
            }
        } catch (error) {
            console.error(error);
        }
    }

    /**
     * send new blog to server to be added 
     * @param {*} body 
     */
    async function addBlogInDB(body) {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs/new`, {
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
        } catch (error) {
            console.error(error);
        }
    }

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
    function handleCollectionIdsChange(event, newValue) {
        console.log(`New Collection Object ${newValue}`)
        // setCollectionIdsData([...collectionIdsData,newValue])
        // TODO add the collection object
        setCollectionIdsData((oldCollectionIds) => [...oldCollectionIds, newValue])
    }
    function handleIntroductionChange(e) {
        setIntroductionData(e.target.value)
    }
    function handleBodyChange(e) {
        setBodyData(e.target.value)
    }


    async function submitBlog(e) {
        e.preventDefault();
        if (titleData === '') return          // if any of these are empty, don't submit (these are currently the only required)

        if (introductionData === '') return

        if (bodyData === '') return

        // const mainPhotoObject = photosData.filter(photo => photo.url===mainPhoto)
        // console.log(mainPhotoObject);
        // const updatedMainPhoto = mainPhotoObject[0].mainPhoto=true
        // console.log(updatedMainPhoto);
        const updatedPhotoArray = photosData.map(photo => {
            if (photo.url === mainPhoto) {
                return { ...photo, isMain: true }
            }
            else {
                return photo
            }
        })
        console.log('updatedPhotoArray', updatedPhotoArray);

        // get user from database before saving new blog
        const user = await checkUserObject();
        console.log(`Session User : ${JSON.stringify(user)}`);

        const body = {
            title: titleData,
            introduction: introductionData,
            body: bodyData,
            //...(collectionIdsData.length !== 0)&& {collectionIds: collectionIdsData},
            ...(updatedPhotoArray.length !== 0) && { photos: updatedPhotoArray },
            location: location,
            userId: user
        }
        // if collectionIds data isn't empty, populate collectionIds        if photosData is not an empty string, populate photos
        console.log(body);
        // handle submit button for add or edit blog                                                            
        saveBlog(body);
    };

    return (
        <div className="blogFormMain">
            <h1 className='blogH1'>Create a blog post</h1>
            <form className='blogForm'>

                <Input className='blogTitle'
                    color="neutral"
                    disabled={(blogId) ? true : false}
                    size="md"
                    placeholder="Title"
                    variant="outlined"
                    required
                    onChange={handleTitleChange}
                    name='title'
                    value={titleData}/>
                    
                <div className="LocationAndCollectionContainer">
                    <SelectLocation className='locationAndCollection' setLocation={setLocation} location={location}/>

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
                    value={introductionData}
                />
                <Textarea className="blogBody"
                    size="lg"
                    placeholder="Body"
                    onChange={handleBodyChange}
                    value={bodyData}
                />
                <Card className="uploadPhotos"
                    size="lg">
                    <div className="urlAndSubmitContainer">
                        <Input className='url'
                            value={urlValue}
                            onChange={(e) => {
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
                    {photosData.length > 0 &&
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
                                            checked={mainPhoto === photo.url}
                                            onChange={(e) => setMainPhoto(e.target.value)}
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
