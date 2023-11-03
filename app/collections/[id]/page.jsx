import BlogList from "@/components/BlogList/BlogList"
import { Typography } from "@mui/joy"
import dbConnect from "@/config/database";
import Blog from "@/models/blogs";
import Collection from "@/models/collections";

export default async function SingleCollectionPage({ params }) {

    async function fetchData() {
        try {
            await dbConnect()
            const collection = await Collection.findById(params.id)
            console.log(collection)
            const blogs = await Blog.find({ "collectionIds" : params.id})
            console.log(blogs)
            const data = { collection: JSON.parse(JSON.stringify(collection)), blogs: JSON.parse(JSON.stringify(blogs)) }
            return data
        } catch (error) {
            throw new Error('Something went wrong!', error)
        }
    }

    const { collection, blogs } = await fetchData()

    return (
        <div>
            {collection &&
                <>
                    <div
                        className='BlogHeaderBlock'
                        style={{
                            width: '100%',
                            height: '60vmin',
                            backgroundSize: 'cover',
                            backgroundImage: `url('${collection.image}')`,
                            backgroundPosition: 'center',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            textAlign: 'center'
                        }}
                    >
                    </div>
                    <div className="a-block">
                        <Typography level="h1">{collection.name}</Typography>
                        <Typography level="h3">{collection.desc}</Typography>
                    </div>
                </>
            }
            <div className="d-block">
                {blogs && <BlogList blogs={blogs} />}
            </div>
        </div>
    )
}
