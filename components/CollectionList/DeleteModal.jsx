"use client"
import { Button, Modal, ModalDialog, DialogTitle, DialogActions, DialogContent, Divider } from "@mui/joy"
import { WarningRounded } from "@mui/icons-material"

export default function DeleteModal({ showDeleteModal, handleCloseDeleteModal, handleDelete }) {

    return (
        <div>
            <Modal
                open={showDeleteModal}
                onClose={handleCloseDeleteModal}
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
                        <Button variant="plain" color="neutral" onClick={handleCloseDeleteModal}>
                            Cancel
                        </Button>
                    </DialogActions>
                </ModalDialog>
            </Modal>
        </div>
    )
}
