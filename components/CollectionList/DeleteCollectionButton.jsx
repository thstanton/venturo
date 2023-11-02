"use client"
import { useRouter } from "next/navigation"
import { Button, Modal, ModalDialog, DialogTitle, DialogActions, DialogContent, Divider } from "@mui/joy"
import { WarningRounded } from "@mui/icons-material"
import { useState } from "react"

export default function DeleteCollectionButton({ id }) {
    const [showModal, setShowModal] = useState(false)
    const router = useRouter()

    async function handleDelete() {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/collections`, {
                method: 'DELETE',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(id)
            })
            const data = await res.json()
            if (data.status !== 200) {
                throw new Error('Collection not deleted')
            } else {
                console.log(data.message)
                setShowModal(false)
                router.refresh()
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <Button variant="outlined" color="danger" onClick={() => setShowModal(true)}>Delete</Button>
            <Modal
                open={showModal}
                onClose={() => setShowModal(false)}
                className="flex justify-center items-center"
            >
                <ModalDialog variant="outlined" role="alertdialog">
                    <DialogTitle>
                        <WarningRounded />
                        Confirmation
                    </DialogTitle>
                    <Divider />
                    <DialogContent>
                        Are you sure you want to delete this collection?
                    </DialogContent>
                    <DialogActions>
                        <Button variant="solid" color="danger" onClick={handleDelete}>
                            Delete Collection
                        </Button>
                        <Button variant="plain" color="neutral" onClick={() => setShowModal(false)}>
                            Cancel
                        </Button>
                    </DialogActions>
                </ModalDialog>
            </Modal>
        </>

    )
}
