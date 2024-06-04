import "./navbar.css"
import {Link, NavLink} from "react-router-dom"
const Navbar = () => {

  return (
    <div className="navbar">
      <img src="/logo.png" alt="logo" />
      <ul className="items">
        <NavLink to={"/"} exact activeClassName="active">
          <li>Home</li>
        </NavLink>
        <NavLink to={"/contact"} activeClassName="active">
          <li>Contact Us</li>
        </NavLink>
      </ul>
      <button className="button">Log In</button>
    </div>
  );
}
export default Navbar