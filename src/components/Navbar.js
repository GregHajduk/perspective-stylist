import { NavLink } from "react-router-dom";
import profile from "../assets/images/profile.jpg";

const navLinks = [
  { title: "home", path: "/" },
  { title: "about", path: "/about" },
  { title: "projects", path: "/projects" },
  { title: "blogs", path: "/blogs" },
  { title: "contact", path: "/contact" },
];

function Navbar({ toggle }) {
  return (
      <nav className="nav">
        <div className="nav__profile">
          <img src={profile} alt="profile" />
        </div>
        <ul className="nav__items">
          <li onClick={() => toggle()} className="nav__item">
            {navLinks.map(({ title, path }, index) => (
              <NavLink activeClassName="active" to={path} key={index}>
                {title}
              </NavLink>
            ))}
          </li>
        </ul>
        <footer className="nav__footer">
          <p>@2021 perspective stylist</p>
        </footer>
      </nav>
  );
}

export default Navbar;
