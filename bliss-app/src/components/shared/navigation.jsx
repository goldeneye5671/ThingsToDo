import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
        <Link to={"/"}>Home</Link><br></br>
        <Link to={"/bliss"}>Bliss</Link><br></br>
        <Link to={"/businesses"}>Businesses</Link><br></br>
    </nav>
  )
}

export default NavBar
