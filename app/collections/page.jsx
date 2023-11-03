import VideoBlock from "./VideoBlock"
import SingleCollectionCard from "@/components/SingleCollectionCard/SingleCollectionCard"
import dbConnect from "@/config/database"
import Collection from "@/models/collections"

async function fetchCollections() {
    try {
        await dbConnect()
        const collections = await Collection.find()
        return JSON.parse(JSON.stringify(collections))
    } catch (error) {
        throw new Error('Something went wrong', error)
    }
}

export default async function CollectionsPage() {
    const collections = await fetchCollections()

  return (
    <div>
        <VideoBlock />
        <div className="c-block">
            <div style={{ display: 'flex', flexFlow: 'row wrap', gap: '4vmin'}}>
            { collections && collections.map(collection => (
                <SingleCollectionCard key={collection._id} collection={collection} />
            ))}
            </div>
        </div>
        
    </div>
  )
}
