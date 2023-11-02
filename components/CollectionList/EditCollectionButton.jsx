"use client"
import { useState } from "react"
import { Button, Modal } from "@mui/joy"
import CollectionForm from "../CollectionForm/CollectionForm"

export default function EditCollectionButton({ collection }) {
    const [showModal, setShowModal] = useState(false)
    
    function closeModal() {
        setShowModal(false)
    }

    return (
        <>
            <Button variant="soft" color="primary" onClick={() => setShowModal(true)}>Edit</Button>
            <Modal
                open={showModal}
                onClose={() => setShowModal(false)}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <>
                <CollectionForm collection={collection} closeModal={closeModal} />
                </>
            </Modal>
        </>
    )
}
