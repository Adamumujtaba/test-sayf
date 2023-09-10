import { useState } from "react";
import { Nav } from "./nav.style";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
function Navbar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Nav>
      <div className="navIcon">
        <div>
          <a href="/">SAYF</a>
        </div>
      </div>

      <div className="navToggle" onClick={toggle}>
        {isOpen ? <MenuOutlined size={22} /> : <CloseOutlined size={22} />}
      </div>

      <ul className={!isOpen ? "navLinksOpen" : "navLinksClose"}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="students">Student</a>
        </li>
        <li>
          <a href="/ziyara">Ziyara</a>
        </li>
        <li>
          <a href="/committees">Committees</a>
        </li>
      </ul>
    </Nav>
  );
}

export default Navbar;
