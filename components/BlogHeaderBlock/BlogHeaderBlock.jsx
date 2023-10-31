import './BlogHeaderBlock.css'

export default function BlogHeaderBlock({ photo }) {
  return (
    <div className='BlogHeaderBlock' style={{ backgroundImage: `url('${photo}')` }}>
    </div>
  )
}
