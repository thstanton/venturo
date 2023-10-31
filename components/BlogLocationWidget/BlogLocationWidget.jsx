import { Card, Typography } from "@mui/joy"

export default function BlogLocationWidget() {
  return (
    <Card
        color="primary"
        orientation="vertical"
        size="lg"
        variant="soft"
        sx={{ m: 3 }}
    >
        <Typography level="h3">Location Info</Typography>
    </Card>
  )
}
