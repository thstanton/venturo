import Typography from '@mui/joy/Typography'
import { AspectRatio, Stack, Card, Button, Modal, ModalClose, ModalDialog, Sheet } from '@mui/joy'
import SelectLocation from '../SelectLocation/SelectLocation'
import { useState } from 'react'

export default function UserInfo({user}) {
    const [location, setLocation] = useState(null)
    const [showEditLocation, setShowEditLocation] = useState(false);
  
    async function handleOnEditClicked(){
        // case of edit mode is shown
        if(showEditLocation)
        {
            console.log('In Edit Mode');
            console.log(`User After Udating Location ${JSON.stringify(location)}`);
            
            const URL = `${process.env.NEXT_PUBLIC_API_URL}/user`
            await fetch(URL,{
                method: "PUT",
                headers:{
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({
                    email: user.email,
                    locationObject: location
                })
            })
            .then(res => 
            {
                if(res.status === 200){
                    console.log('User Location has been updated');
                    setShowEditLocation(false)
                    user.location = location;
                }
            }).catch (error => {
                console.log(`Saving error : ${error}`);
            })
            
        }else{
            console.log('In View Mode');
            setShowEditLocation(true)
        }
    }

    return(
        <>        
        {user ?
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
                        sx={{ flex: 1, minWidth: 108, borderRadius: '100vh' }}>
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
                        {showEditLocation ? 
                            // case of edit mode is ON
                            <SelectLocation setLocation={setLocation}/> : 
                            // case of edit mode is OFF
                            <Stack direction="row" spacing={2}>
                                {/*import pin icon from google map api */}
                                <img src="https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"  width={20} height={20}/>
                                {/* display user saved address */}
                                <Typography component="h1" variant="h5">
                                    {user.location.formatted_address}
                                </Typography>
                            </Stack>
                        }
                        <Button variant="outlined" color="primary" onClick={handleOnEditClicked}>Edit Location</Button>
                    </Stack>
                </Stack>
            </Stack>
            </Stack>
        </Card> 
        : null}
        </>
    )
}