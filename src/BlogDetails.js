import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  
  const { id } = useParams();
  const { data: blog, error } = useFetch(`http://localhost:8000/blogs/${id}`);
  const history = useHistory();
  
  function handleDelete() {
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: "DELETE"
    })
      .then(() => history.push("/"))
  }

  if (error) return <div>{ error }</div>
  return (
    <div className="blog-details">
      {blog ? 

        <>
          <article>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
            <div>{blog.body}</div>
          </article>
          <button onClick={() => history.go(-1)}>Go Back</button>
          <button onClick={handleDelete}>Delete</button>
        </>

      : <div>Loading...</div> }
    </div>
  )
}

export default BlogDetails;