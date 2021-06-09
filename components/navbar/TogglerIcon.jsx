import 'bootstrap/dist/css/bootstrap.min.css';
import { toggleNavbar } from '../../redux/action';
import { AiFillCloseCircle } from 'react-icons/ai';
import { useSelector } from 'react-redux';

const TogglerIcon = ({dispatch, navbarToggle}) => {
    const navbarIsOpened  = useSelector(state => state.navbarIsOpened)
    const navbarToggleState = () => {
        navbarToggle()
        navbarIsOpened ?
        dispatch(toggleNavbar(false)) 
        :
        dispatch(toggleNavbar(true)) 
    }
    return (
        <>
            <div 
                className="navbar-toggler m-3 w-25 hidden" 
                onClick={navbarToggleState}>
                <span className="navbar-toggler-icon" aria-hidden="true"></span>
            </div>
            <div className="close-icon d-md-none" onClick={navbarToggleState}>
                <AiFillCloseCircle/>
            </div>
        </>
    );
}
 
export default TogglerIcon;