"use client"
import { Button, Input, Textarea, Typography } from "@mui/joy";
import { useState } from "react";


export default function CollectionForm({ mode, collection }) {
    // const [name, setName] = useState('')
    // const [desc, setDesc] = useState('')
    // const [url, setUrl] = useState('')
    console.log(collection)
    const [message, setMessage] = useState()
    const [newCollection, setNewCollection] = useState({
        name: '',
        desc: '',
        image: ''
    })

    // If updating collection set inital values
    if (mode === 'update') {
        setNewCollection({
            name: collection.name,
            desc: collection.desc,
            image: collection.image
        })
    }

    function handleChange(e) {
        const { name, value } = e.target
        setNewCollection((prevNewCollection => ({...prevNewCollection, [name]: value})))
    }
    // function handleNameChange(e) {
    //     setName(e.target.value)
    // }

    // function handleDescChange(e) {
    //     setDesc(e.target.value)
    // }

    // function handleUrlChange(e) {
    //     setUrl(e.target.value)
    // }

    // Create new collection
    async function handleNew(e) {
        e.preventDefault()
        
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/collections`, {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(newCollection)
            })

            const data = await res.json()

            // Handle errors and display message
            if (data.status === 200) {
                setMessage('Collection saved')
            } else {
                setMessage('Error: collection not saved')
                throw new Error('Collection not saved')
            }
        } catch (error) {
            console.error(error)
            setMessage('Error: collection not saved')
        }
    }

    // Update existing collection
    async function handleUpdate(e) {
        e.preventDefault()

        if (collection) newCollection._id = collection._id
        
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/collections`, {
                method: 'PUT',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(newCollection)
            })

            const data = await res.json()

            // Handle errors and display message
            if (data.status === 200) {
                setMessage('Collection saved')
            } else {
                setMessage('Error: collection not saved')
                throw new Error('Collection not saved')
            }
        } catch (error) {
            console.error(error)
            setMessage('Error: collection not saved')
        }
    }

    return (
        <>
            { mode === 'new' && <Typography level="h1">Create new collection:</Typography> }
            <form onSubmit={ (mode === 'new') ? handleNew : handleUpdate }>
                <Input
                    name="name"
                    value={ newCollection.name }
                    onChange={ handleChange }
                    placeholder='Collection name'
                    required
                />
                <Textarea
                    name="desc"
                    value={ newCollection.desc }
                    onChange={handleChange}
                    placeholder='Briefly describe the contents of the collection in 2-3 sentences'
                    required
                />
                <Input
                    name="image"
                    value={ newCollection.image }
                    onChange={handleChange}
                    placeholder='Paste image url here'
                    required
                />
                <Button type="submit">Submit</Button>
            </form>
            { newCollection.image && <img src={ newCollection.image } /> }
            { message && <p>{ message }</p> }
        </>
    )
}
