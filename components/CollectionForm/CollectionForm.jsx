"use client"
import { Button, Input, Textarea } from "@mui/joy";
import { useState } from "react";


export default function CollectionForm() {
    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    const [url, setUrl] = useState('')
    const [message, setMessage] = useState()

    function handleNameChange(e) {
        setName(e.target.value)
    }

    function handleDescChange(e) {
        setDesc(e.target.value)
    }

    function handleUrlChange(e) {
        setUrl(e.target.value)
    }

    async function handleSubmit(e) {
        e.preventDefault()
        const collection = {
            name: name,
            desc: desc,
            image: url
        }
        
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/collections`, {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(collection)
            })

            if (!res.ok) {
                setMessage('Error: collection not saved')
                throw new Error('Collection not saved')
            } else {
                console.log(await res.json())
                setMessage('Collection saved')
            }
        } catch (error) {
            console.error(error)
            setMessage('Error: collection not saved')
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Input
                    placeholder="Collection Name"
                    onChange={handleNameChange}
                />
                <Textarea
                    placeholder="Add 2-3 sentences to describe the collection"
                    onChange={handleDescChange}
                />
                <Input
                    placeholder="Image URL"
                    onChange={handleUrlChange}
                />
                <Button type="submit">Submit</Button>
            </form>
            { message && <p>{ message }</p> }
        </>
    )
}
