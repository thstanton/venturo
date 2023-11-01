import SingleBlogCard from "../SingleBlogCard/SingleBlogCard";
import './BlogList.css'

export default function BlogList({ blogs }) {
  return (
    <div className="BlogList">
      {
        blogs &&
          blogs.map(blog => (
            <SingleBlogCard key={ blog._id } blog={ blog } />
          ))
      }
    </div>
  )
}
