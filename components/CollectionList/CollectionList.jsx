"use client"
import { useEffect, useState } from "react"
import { Accordion, AccordionGroup, AccordionDetails, AccordionSummary, Button, Typography, Card } from "@mui/joy";
import './CollectionList.css'
import EditModal from "./EditModal";
import NewModal from "./NewModal";
import DeleteModal from "./DeleteModal";

export default function CollectionList() {
    const [showEditModal, setShowEditModal] = useState(false)
    const [editTarget, setEditTarget] = useState({})
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [deleteTarget, setDeleteTarget] = useState({})
    const [showNewModal, setShowNewModal] = useState(false)
    const [collections, setCollections] = useState([])
    // const [blogs, setBlogs] = useState([])
    const [change, setChange] = useState(null)
    // const [addBlogs, setAddBlogs] = useState([])

    useEffect(() => {
        async function fetchCollections() {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/collections`, {
                    method: 'GET',
                    headers: { 'content-type': 'application/json' },
                    next: { revalidate: 0 }
                })

                const data = await res.json()
                console.log(data)
                if (data.status !== 200) {
                    throw new Error('Collections not retrieved from database')
                }
                setCollections(data.data)
                return

            } catch (error) {
                console.error(error)
            }
        }

        // async function fetchBlogs() {
        //     try {
        //         const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs`)
        //         if (res.ok) {
        //             const data = await res.json()
        //             console.log(data)
        //             setBlogs(data.data)
        //             return
        //         }
        //         console.log('Something went wrong')
        //     } catch (error) {
        //         console.error(error)
        //     }
        // }

        // fetchBlogs()
        fetchCollections()
    }, [change])

    async function handleDelete() {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/collections`, {
                method: 'DELETE',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(deleteTarget)
            })
            const data = await res.json()
            if (data.status !== 200) {
                throw new Error('Collection not deleted')
            } else {
                console.log(data.message)
                handleCloseDeleteModal()
                setChange(deleteTarget)
            }
        } catch (error) {
            console.error(error)
        }
    }

    function handleNew(newCollection) {
        setChange(newCollection)
    }

    function handleEdit() {
        setChange(editTarget)
    }

    function handleEditModal(collection) {
        setEditTarget(collection)
        setShowEditModal(true)
    }

    function handleDeleteModal(id) {
        setDeleteTarget(id)
        setShowDeleteModal(true)
    }

    function handleNewModal() {
        setShowNewModal(true)
    }

    function handleCloseEditModal() {
        setShowEditModal(false)
    }

    function handleCloseDeleteModal() {
        setShowDeleteModal(false)
    }

    function handleCloseNewModal() {
        setShowNewModal(false)
    }

    // function handleAddBlog(e, id) {
    //     setAddBlogs(prevAddBlogs => [...prevAddBlogs, id])
    // }

    return (
        <>
            <div className="CollectionList">
                <Card>
                    <div className="card-header">
                        <Typography level="h2">Collections</Typography>
                        <Button
                            variant="solid"
                            color="success"
                            onClick={handleNewModal}
                        >
                            Create New
                        </Button>
                    </div>
                    <AccordionGroup>
                        {collections && collections.map(collection => (
                            <Accordion key={collection._id}>
                                <AccordionSummary>
                                    <div className="accordion-summary">
                                        <span>{collection.name}</span>

                                    </div>
                                </AccordionSummary>
                                <AccordionDetails>
                                    {/* <form>
                                        <div role="group">
                                            {blogs && blogs.map(blog => (
                                                <p key={blog._id} onClick={() => handleAddBlog(blog._id)}>{blog.title}</p>
                                            ))}
                                        </div>
                                    </form> */}
                                    <div>
                                        <Button variant="soft" color="primary" onClick={() => handleEditModal(collection)}>Edit Collection Details</Button>
                                        <Button variant="outlined" color="danger" onClick={() => handleDeleteModal(collection._id)}>Delete Collection</Button>
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </AccordionGroup>
                </Card>
            </div>
            <NewModal
                showNewModal={showNewModal}
                handleCloseNewModal={handleCloseNewModal}
                updateList={handleNew}
            />
            <EditModal
                showEditModal={showEditModal}
                handleCloseEditModal={handleCloseEditModal}
                editTarget={editTarget}
                updateList={handleEdit}
            />
            <DeleteModal
                showDeleteModal={showDeleteModal}
                handleCloseDeleteModal={handleCloseDeleteModal}
                deleteTarget={deleteTarget}
                handleDelete={handleDelete}
            />
        </>
    )
}
