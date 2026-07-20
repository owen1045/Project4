import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="link">
        <Link to="/">Create Note</Link>
        <Link to="allNotes">All Notes</Link>
      </div>
    </nav>
  );
}
