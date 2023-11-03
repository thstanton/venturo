import { Card, Typography } from "@mui/joy"

export default function BlogLocationWidget({ locationData }) {
  
  return (
    <Card
      color="primary"
      orientation="vertical"
      size="lg"
      variant="soft"
      sx={{ m: 3 }}
    >
      <Typography level="h3">Location Info</Typography>
      <Typography level="h5">{locationData.country}</Typography>
      <Typography level="title-md">{locationData.city}</Typography>
    </Card>
  )
}
