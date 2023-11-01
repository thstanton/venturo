import { Button, Grid, Typography } from "@mui/joy";
import CollectionForm from "../CollectionForm/CollectionForm";
import EditCollectionButton from "../EditCollectionButton/EditCollectionButton";

async function getCollections() {
    try {
        const res = await fetch(`${process.env.API_URL}/collections`, {
            method: 'GET',
            headers: { 'content-type': 'application/json' }
        })
        const data = await res.json()

        if (data.status !== 200) {
            throw new Error('Collections not retrieved from database')
        }
        
        return data.data

    } catch (error) {
        console.error(error)
    }
}

export default async function EditCollections() {
    const collections = await getCollections()

    return (
        <div>
            <Typography level="h1">Collections</Typography>
            <div className="grid-container" style={{ width: '100%' }}>
                { collections && collections.map(collection => (
                    <Grid container spacing={2} key={collection._id}>
                        <Grid xs={10}>
                            <Typography level="body-lg" >{ collection.name }</Typography>
                        </Grid>
                        <Grid xs={1}>
                            <EditCollectionButton collection={collection} />
                        </Grid>
                        <Grid xs={1}>
                            <Button variant="outlined" color="danger">Delete</Button>
                        </Grid>
                    </Grid>
                ))}
            </div>
            <CollectionForm mode="new" />
        </div>
    )
}
