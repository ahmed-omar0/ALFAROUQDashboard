import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
// Icons
import { AiFillDashboard, AiFillProject } from 'react-icons/ai';
import { BsFillPeopleFill } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { BiLogOut } from 'react-icons/bi';

const MainNav = ({navRef}) => {
    return (
        <ul className="nav nav-pills flex-column fs-6 " ref={navRef}>
            <li className="nav-item mt-2">
                <Link href="/">
                    <a className="nav-link"> 
                        <AiFillDashboard/>
                        Dashboard
                    </a>
                </Link>
            </li>
            <li className="nav-item mt-2">
                <Link href="/">
                    <a className="nav-link"> 
                        <AiFillProject/>
                        Projects
                    </a>
                </Link>
            </li>
            <li className="nav-item mt-2">
                <Link href="/">
                    <a className="nav-link"> 
                        <BsFillPeopleFill/>
                        Our Cutomers
                    </a>
                </Link>
            </li>
            <li className="nav-item mt-2">
                <Link href="/">
                    <a className="nav-link"> 
                        <CgProfile/>
                        Profile
                    </a>
                </Link>
            </li>
            <hr />
            <li className="nav-item mt-2">
                <Link href="/">
                    <a className="nav-link">
                        <BiLogOut/>
                        Log-Out
                    </a>
                </Link>
            </li>
        </ul>
    );
}
export default MainNav;