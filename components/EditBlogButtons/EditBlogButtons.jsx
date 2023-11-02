"user client"
import { Button } from "@mui/joy"
import Link from "next/link"

export default function EditBlogButtons({blog, deleteBlog }) {
    return (
        <>
        {/* request to open BlogForm to edit a blog data, 'blog._id' is the id of selected blod */}
        <Link href={`/form/blogform/${blog._id}`}> 
            <Button variant="soft" color="primary">Edit</Button>
        </Link>
        <Button variant="soft" color="primary" onClick={() => deleteBlog()}>Delete</Button>
        </>
    )
}