import { useLocation, Link } from "react-router-dom";

const NotFound = () => {
  
  const location = useLocation();
  console.log(location)

  return (
    <div className="not-found">
      <h2>Not Found</h2>
      <p>This page cannot be found: <strong>"{location.pathname}"</strong></p>
      <Link to="/">Go Home</Link>
    </div>
  );
}
 
export default NotFound;