"use client"
import { Modal } from "@mui/joy"
import CollectionForm from "../CollectionForm/CollectionForm"

export default function NewModal({ showNewModal, handleCloseNewModal, updateList }) {
    return (
        <div>
            <Modal
                open={showNewModal}
                onClose={handleCloseNewModal}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <>
                    <CollectionForm closeModal={handleCloseNewModal} updateList={updateList} />
                </>
            </Modal>
        </div>
    )
}
