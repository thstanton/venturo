"use client"
import { Button, Card, Grid, Input, Textarea, Typography } from "@mui/joy"
import { useEffect, useState } from "react"
import './CollectionForm.css'

export default function CollectionForm({ collection, closeModal, updateList }) {
    const [message, setMessage] = useState()
    const [newCollection, setNewCollection] = useState({
        name: '',
        desc: '',
        image: ''
    })

    // If updating collection set inital values
    useEffect(() => {
        if (collection) {
            setNewCollection({
                _id: collection._id,
                name: collection.name,
                desc: collection.desc,
                image: collection.image
            })
        }
    }, [collection])

    function handleChange(e) {
        const { name, value } = e.target
        setNewCollection((prevNewCollection => ({ ...prevNewCollection, [name]: value })))
    }

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
                setNewCollection({
                    name: '',
                    desc: '',
                    image: ''
                })
                updateList(newCollection.name)
                closeModal()
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

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/collections`, {
                method: 'PUT',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(newCollection)
            })

            const data = await res.json()

            // Handle errors and display message
            if (data.status === 200) {
                setMessage('Collection updated')
                closeModal()
                updateList()
            } else {
                setMessage('Error: collection not updated')
                throw new Error('Collection not updated')
            }
        } catch (error) {
            console.error(error)
            setMessage('Error: collection not updated')
        }
    }

    return (
        <Card className="CollectionForm">
            {/* Conditionally render title */}
            {!collection ?
                <Typography level="h3">Create new collection:</Typography>
                :
                <Typography level="h3">Edit collection:</Typography>}

            <form onSubmit={!collection ? handleNew : handleUpdate}>
                <Grid container rowSpacing={2}>
                    <Grid xs={12}>
                        <Input
                            name="name"
                            value={newCollection.name}
                            onChange={handleChange}
                            placeholder='Collection name'
                            required
                        />
                    </Grid>
                    <Grid xs={12}>
                        <Textarea
                            name="desc"
                            value={newCollection.desc}
                            onChange={handleChange}
                            placeholder='Briefly describe the contents of the collection in 2-3 sentences'
                            required
                        />
                    </Grid>
                    <Grid xs={12}>
                        <Input
                            name="image"
                            value={newCollection.image}
                            onChange={handleChange}
                            placeholder='Paste image url here'
                            required
                        />
                    </Grid>
                    <Grid xs={12}>
                        <Button type="submit">Submit</Button>
                    </Grid>
                </Grid>
            </form>
            {newCollection.image && <img src={newCollection.image} />}
            {message && <p>{message}</p>}
        </Card>
    )
}
