import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
// Icons
import { AiFillDashboard, AiFillProject } from 'react-icons/ai';
import { BsFillPeopleFill } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { BiLogOut } from 'react-icons/bi';

const CloseNav = (props) => {
    return (
        <ul className={`nav flex-column close align-self-center ${props.class}`} ref={props.closeNavRef}>
            <li className="nav-item">
                <Link href="/">
                    <a className="nav-link">
                        <AiFillDashboard title="Dashboard"/>
                    </a>
                </Link>
            </li>
            <li className="nav-item">
                <Link href="/">
                    <a className="nav-link">
                        <AiFillProject title="Projects"/>
                    </a>
                </Link>
            </li>
            <li className="nav-item">
                <Link href="/">
                    <a className="nav-link">
                        <BsFillPeopleFill title="Our Cutomers"/>
                    </a>
                </Link>
            </li>
            <li className="nav-item">
                <Link href="/">
                    <a className="nav-link">
                        <CgProfile title="Profile"/>
                    </a>
                </Link>
            </li>
            <li className="nav-item">
                <Link href="/">
                    <a className="nav-link">
                        <BiLogOut title="Log-Out"/>
                    </a>
                </Link>
            </li>
        </ul>
    );
}
 
export default CloseNav;