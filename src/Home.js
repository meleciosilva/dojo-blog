import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  
  const { data: blogs, error } = useFetch("http://localhost:8000/blogs");

  if (error) return <div>{ error }</div>
  return ( 
    <div className="home">
      { blogs ? <BlogList blogs={blogs} title="All Blogs" /> :  <div>Loading...</div> }
    </div>
  )
}
 
export default Home;