import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
// Icons
import { AiFillDashboard, AiFillProject } from 'react-icons/ai';
import { BsFillPeopleFill } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { BiLogOut } from 'react-icons/bi';

const MainNav = (props) => {
    return (
        <ul className={`nav nav-pills flex-column fs-6 mt-4 align-self-center ${props.class}`} ref={props.navRef}>
            <li className="nav-item my-2">
                <Link href="/">
                    <AiFillDashboard/>
                </Link>
                <Link href="/">
                    <a> 
                        Dashboard
                    </a>
                </Link>
            </li>
            <li className="nav-item my-2">
                <Link href="/projects">
                    <AiFillProject/>
                </Link>
                <Link href="/projects">
                    <a> 
                        Projects
                    </a>
                </Link>
            </li>
            <li className="nav-item my-2">
                <Link href="/our-customers">
                    <BsFillPeopleFill/>
                </Link>
                <Link href="/our-customers">
                    <a> 
                        Our Cutomers
                    </a>
                </Link>
            </li>
            <li className="nav-item my-2">
                <Link href="/profile">
                    <CgProfile/>
                </Link>
                <Link href="/profile">
                    <a> 
                        Profile
                    </a>
                </Link>
            </li>
            <hr />
            <li className="nav-item my-2">
                <Link href="/login">
                    <BiLogOut/>
                </Link>
                <Link href="/login">
                    <a>
                        Log-Out
                    </a>
                </Link>
            </li>
        </ul>
    );
}
export default MainNav;