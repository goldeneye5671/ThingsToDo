import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
        <Link to={"/"}>Home</Link><br></br>
        <Link to={"/bliss"}>Bliss</Link><br></br>
        <Link to={"/businesses"}>Businesses</Link><br></br>
        <Link to={"/sign-in"}>Sign In</Link><br></br>
        <Link to={"/sign-up"}>Sign Up</Link><br></br>
    </nav>
  )
}

export default NavBar
