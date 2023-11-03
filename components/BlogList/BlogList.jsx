import SingleBlogCard from "../SingleBlogCard/SingleBlogCard";
import './BlogList.css'

export default function BlogList({ blogs, editMode, removeBlog }) {
  // console.log(blogs);
  return (
    <div className="BlogList">
      {
        blogs &&
          blogs.map(blog => (
            <SingleBlogCard key={ blog._id } blog={ blog } editMode={editMode} removeBlog={removeBlog}/>
          ))
      }
    </div>
  )
}
