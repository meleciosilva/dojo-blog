import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [isPending, setIsPending] = useState(false);

  const history = useHistory();
  
  function handleSubmit(e) {
    e.preventDefault(); //prevents page from refreshing
    const blog = { title, body, author };

    setIsPending(true);

    setTimeout(() => {
      fetch('http://localhost:8000/blogs', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog)
      }).then(() => {
        setIsPending(false);
        history.push("/");
      })
    }, 1000)

  }

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input 
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog Body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog Author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        >
          <option value="" disabled >Select an Option</option>
          <option value="mario">Mario</option>
          <option value="yoshi">Yoshi</option>
          {/* <option value="" >Other</option> */}
        </select>
          {/* <input 
            type="text"
            required
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />  */}
        { isPending ? <button disabled style={{backgroundColor: "#855f6b"}}>Adding Blog...</button> : <button>Add Blog</button>}
      </form>
    </div>
  )
}

export default Create;