import Link from 'next/link';

const Navbar = () => (
  <nav className="bg-blue-600 p-4">
    <ul className="flex space-x-4">
      <li><Link href="/">Home</Link></li>
      <li><Link href="/services">Services</Link></li>
      <li><Link href="/masters">Masters</Link></li>
      <li><Link href="/schedule">Schedule</Link></li>
    </ul>
  </nav>
);

export default Navbar;
