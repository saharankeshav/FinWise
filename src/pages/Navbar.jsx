import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Dashboard</Link> | 
      <Link to="/add">Add Expense</Link> | 
      <Link to="/ai">AI Advisor</Link>
    </nav>
  );
}