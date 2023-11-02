"use client"
import { Modal } from "@mui/joy"
import CollectionForm from "../CollectionForm/CollectionForm"

export default function EditModal({ showEditModal, handleCloseEditModal, editTarget, updateList }) {
    return (
        <div>
            <Modal
                open={showEditModal}
                onClose={handleCloseEditModal}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <>
                    <CollectionForm
                        collection={editTarget}
                        closeModal={handleCloseEditModal}
                        updateList={updateList}
                    />
                </>
            </Modal>
        </div>
    )
}
