import { Typography } from '@mui/joy'
import './BlogTitleBlock.css'

export default function BlogTitleBlock({ title, intro }) {
  return (
    <div className='BlogTitleBlock'>
        <Typography level="h1">{ title }</Typography>
        <Typography level="h4">{ intro }</Typography>
    </div>
  )
}
