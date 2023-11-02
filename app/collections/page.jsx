import VideoBlock from "./VideoBlock"
import SingleCollectionCard from "@/components/SingleCollectionCard/SingleCollectionCard"

async function fetchCollections() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/collections`, {
            method: 'GET',
            headers: { 'content-type': 'application/json' },
        })

        const data = await res.json()
        console.log(data)
        if (data.status !== 200) {
            throw new Error('Collections not retrieved from database')
        }
        return data.data

    } catch (error) {
        console.error(error)
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
