import { Link, NavLink } from "react-router";

export default function Navigation() {
  return (
    <header className="navbar bg-base-100 shadow">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          Starter
        </Link>
      </div>
      <nav className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/servers"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Servers
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
