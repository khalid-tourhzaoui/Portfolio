import { FaHome, FaRegUserCircle } from 'react-icons/fa';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { SiHyperskill } from 'react-icons/si';

export const NavElements = [
  { id: 1, name: 'home', path: '/', icon: <FaHome /> },
  { id: 2, name: 'about', path: '/about', icon: <FaRegUserCircle /> },
  {
    id: 3,
    name: 'service',
    path: '/service',
    icon: <SiHyperskill />,
  },
  {
    id: 5,
    name: 'contact me',
    path: '/contactme',
    icon: <MdOutlineAlternateEmail />,
  },
];
export default NavElements;
