"use client"
import { useState } from "react"
import { Button, Modal, ModalDialog } from "@mui/joy"
import CollectionForm from "../CollectionForm/CollectionForm"

export default function EditCollectionButton({ collection }) {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <Button variant="soft" color="primary" onClick={() => setShowModal(true)}>Edit</Button>
            <Modal
                open={showModal}
                onClose={() => setShowModal(false)}
                className="flex justify-center items-center"
            >
                <ModalDialog>
                    <CollectionForm mode="update" collection={collection} />
                </ModalDialog>
            </Modal>
        </>
    )
}
