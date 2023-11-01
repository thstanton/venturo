import SingleBlogCard from "../SingleBlogCard/SingleBlogCard";

export default function BlogList({ blogs }) {
  return (
    <div>
      {
        blogs &&
          blogs.map(blog => (
            <SingleBlogCard key={ blog._id } blog={ blog } />
          ))
      }
    </div>
  )
}
