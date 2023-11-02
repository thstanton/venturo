import SingleBlogCard from "../SingleBlogCard/SingleBlogCard";
import './BlogList.css'

export default function BlogList({ blogs, editMode }) {
  console.log(blogs);
  return (
    <div className="BlogList">
      {
        blogs &&
          blogs.map(blog => (
            <SingleBlogCard key={ blog._id } blog={ blog } editMode={editMode}/>
          ))
      }
    </div>
  )
}
