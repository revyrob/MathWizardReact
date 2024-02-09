import "./Header.scss";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <Button text="Home"></Button>
      </Link>
      <Link to="/">
        <Button text="Back"></Button>
      </Link>
    </header>
  );
}

export default Header;
