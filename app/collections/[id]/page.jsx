import BlogList from "@/components/BlogList/BlogList"
import { Typography } from "@mui/joy"

export default async function SingleCollectionPage({ params }) {

    async function fetchData() {
        try {
            const res = await fetch(`${process.env.API_URL}/collections/blogs/${params.id}`, {
                method: 'GET',
                headers: { 'content-type': 'application/json' }
            })
            const data = await res.json()
            if (data.status !== 200) {
                throw new Error('Collections not retrieved from database')
            }
            console.log(data)
            return data
        } catch (error) {
            console.error(error)
        }
    }

    const { collection, blogs } = await fetchData()



    return (
        <div>
            {collection &&
                <div
                    className='BlogHeaderBlock'
                    style={{
                        width: '100%',
                        height: '60vmin',
                        backgroundSize: 'cover',
                        backgroundImage: `url('${collection.image}')`,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center'
                    }}
                >
                    <div>
                        <Typography level="h1">{collection.name}</Typography>
                        <Typography level="h3">{collection.desc}</Typography>
                    </div>
                </div>
            }
            <div className="d-block">
                {blogs && <BlogList blogs={blogs} />}
            </div>
        </div>
    )
}
