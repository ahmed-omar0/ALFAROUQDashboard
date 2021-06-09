import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef } from 'react';
import TogglerIcon from './TogglerIcon'
// Icons
import { BiWorld } from 'react-icons/bi';
// Redux
import { useDispatch } from 'react-redux';
import CloseNav from './CloseNav';
import MainNav from './MainNav';

const SideNavbar = () => {
    const dispatch = useDispatch()
    // Refs
    const navbarRef = useRef()
    const navRef = useRef()
    const closeNavRef = useRef()
    const logoRef= useRef()
    // Toggle Navbar
    const navbarToggle = () => {
        navbarRef.current.classList.toggle('close');
        navRef.current.classList.toggle('hidden');
        navRef.current.classList.toggle('d-none');
        closeNavRef.current.classList.toggle('hidden');
        logoRef.current.classList.toggle('hidden');
    }
    return (
        <nav className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark navbar-dark" ref={navbarRef}>
            <TogglerIcon dispatch={dispatch} navbarToggle={navbarToggle}/>
            <div className='navbar-logo d-flex align-items-center justify-content-center' ref={logoRef}>
                <BiWorld className="fs-3"/>
                <h2 className="fs-3 fw-bold text-warning fst-italic mb-0 mx-1">AL.F.C</h2>
            </div>
            <hr />
            <MainNav navRef={navRef}/>
            <CloseNav closeNavRef={closeNavRef}/>
        </nav>
    );
}
 
export default SideNavbar;