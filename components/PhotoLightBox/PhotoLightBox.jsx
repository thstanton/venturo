import { Sheet, ModalClose } from "@mui/joy"
import Modal from "@mui/joy/Modal"

export default function PhotoLightBox({ open, photo, setShowModal }) {
  return (
    <Modal 
        open={open}
        onClose={() => setShowModal(false)}
        className="flex justify-center items-center"
    >
        <Sheet className="w-3/4">
            <ModalClose variant="plain" sx={{ m: 1 }} />
            <img src={ photo } />
        </Sheet>
    </Modal>
  )
}
