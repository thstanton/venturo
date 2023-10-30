"use client"

import './BlogForm.css'
import { Input, Select, Option, Textarea, Card, Button } from '@mui/joy';
import ReactGoogleAutocomplete from 'react-google-autocomplete';
import { onPlaceSelectedHandler } from '../ReactGoogleAutocomplete/ReactGoogleAutocomplete';

export default function BlogForm() {
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
            />
            <div className="LocationAndCollectionContainer">
                <ReactGoogleAutocomplete className='locationAndCollection'
                apiKey={process.env.YOUR_GOOGLE_MAPS_API_KEY}           
                onPlaceSelected={onPlaceSelectedHandler}
                />
                <Select className='locationAndCollection'
                placeholder="Collection"
                size="md"
                variant="outlined"
                >
                <Option value="location1">Collection 1</Option>
                <Option value="location2">Collection 2</Option>
                </Select>
            </div>
            <Textarea className="blogIntro"
            size="lg" 
            name="Size" 
            placeholder="Introduction" />
            <Textarea className="blogBody"
            size="lg" 
            name="Size" 
            placeholder="Body" />
            <Card className="uploadPhotos"
            size="lg">
                <Input className='url'
                color="neutral"
                disabled={false}
                size="md"
                placeholder="Url"
                variant="outlined"
                required
                />
                <div className="photoContainer">
                    <Card className="photo">Photo</Card>        
                    <Card className="photo">Photo</Card>        
                    <Card className="photo">Photo</Card>
                </div>        
            </Card> 
            <Button className='submit'
            // onClick={function(){}}
            size="md"
            variant="outlined"
            >Submit
            </Button>
        </form>
    </div>
  )
}
