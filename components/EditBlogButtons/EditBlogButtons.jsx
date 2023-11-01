"user client"
import { Button } from "@mui/joy"

export default function EditBlogButtons({ deleteBlog, editBlog }) {
    return (
        <>
            <Button variant="soft" color="primary" onClick={() => editBlog()}>Edit</Button>
            <Button variant="soft" color="primary" onClick={() => deleteBlog()}>Delete</Button>
        </>
    )
}