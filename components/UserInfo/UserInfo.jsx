import Grid from '@mui/joy/Grid'
import Typography from '@mui/joy/Typography'
import { AspectRatio,Divider, Avatar, Box, FormControl, IconButton, Stack,FormLabel,Input, Card } from '@mui/joy'

export default function UserInfo({user}) {

    return(
        <Card> 
            <Stack
            direction="column"
            spacing={2}
            sx={{ display: { xs: 'flex', md: 'none' }, my: 1 }}>
            
            <Stack direction="row" spacing={2}>
                {/* display user avatar image */}
                <Stack direction="column" spacing={1}>
                    <AspectRatio
                        ratio="1"
                        maxHeight={108}
                        sx={{ flex: 1, minWidth: 108, borderRadius: '100%' }}>
                        <img
                        src={user.avatar}
                        loading="lazy"
                        alt=""/>
                    </AspectRatio>
                </Stack>
                {/* display user profile details*/}
                <Stack spacing={1} sx={{ flexGrow: 1 }}>
                    {/* display user name address */}
                    <Typography component="h1" variant="h5">
                        {user.name}
                    </Typography>
                    {/* display user email */}
                    <Typography component="h1" variant="h5">
                        {user.email}
                    </Typography>
                    <Stack direction="row" spacing={2}>
                        {/*import pin icon from google map api */}
                        <img src="https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"  width={20} height={20}/>
                        {/* display user saved address */}
                        <Typography component="h1" variant="h5">
                            {user.location.formatted_address}
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
            </Stack>
        </Card>
    )
}