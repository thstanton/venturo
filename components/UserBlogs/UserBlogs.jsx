import { Card, Stack, Button } from "@mui/joy"
import Link from "next/link"

export default function UserBlogs({user}) {

    return(
        <Card> 
            <Stack
            direction="column"
            spacing={2}
            sx={{ display: { xs: 'flex' }, my: 1 }}>
            
            <Stack direction="row" spacing={2}>
                {/* display user avatar image */}
                <Stack direction="column" spacing={1}>
                    <Link href="/form"> 
                        <Button variant="outlined" color="primary">Add Blog</Button>
                    </Link>
                </Stack>
            </Stack>
            </Stack>
        </Card>
    )
}