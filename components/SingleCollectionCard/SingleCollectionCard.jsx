import { Card, CardContent, CardCover, Link } from "@mui/joy";


export default function SingleCollectionCard({ collection }) {
  return (
    <Card
        size="lg"
        variant='solid'
        sx={{ width: '45vmin', height: '45vmin', '&:hover': { boxShadow: 'md' }}}
    >
        <CardCover>
            <img src={ collection.image } />
        </CardCover>
        <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <h1>
                <Link
                    overlay
                    underline="none"
                    href={`/collections/${collection._id}`}
                    sx={{ 
                        fontFamily: 'DM Serif', 
                        textShadow: '-0.5vmin 0.5vmin 1.5vmin #1b1c12', 
                        fontSize: '8vmin', 
                        textAlign: 'center',
                        color: 'white'
                    }}
                >
                    { collection.name }
                </Link>
            </h1>
        </CardContent>
    </Card>
  )
}
