import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="max-w-7xl mx-auto h-16 flex items-center gap-3 px-5">
      <div className="flex items-center font-bold ml-2">
        <img src="../../../src/assets/task.png" className="w-10" alt="" />
        <h1>Task</h1>
      </div>

      <Link to="/">Tasks</Link>
      <Link to="/users">Users</Link>
    </nav>
  );
};

export default Navbar;
