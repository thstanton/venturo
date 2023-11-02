import { Card, ModalClose } from "@mui/joy"
import Modal from "@mui/joy/Modal"

export default function PhotoLightBox({ open, photo, setShowModal }) {
  return (
    <Modal 
        open={open}
        onClose={() => setShowModal(false)}
        className="flex justify-center items-center"
        sx={{ 
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
    >
        <Card 
          sx={{ 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
            <ModalClose variant="plain" sx={{ m: 1 }} />
            <img src={ photo } style={{ maxWidth: '90vmin', maxHeight: '70vmin' }} />
        </Card>
    </Modal>
  )
}
