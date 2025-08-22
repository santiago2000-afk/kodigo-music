import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-purple-700 text-white p-4 flex justify-between">
      <h1 className="font-bold text-xl">Kodigo Music</h1>
      <ul className="flex gap-4">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/about">Acerca</Link></li>
        <li><Link to="/register">Registro</Link></li>
      </ul>
    </nav>
  );
}
