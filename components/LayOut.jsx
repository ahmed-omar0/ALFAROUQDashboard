import SideNavbar from "./navbar/SideNavbar";
import Footer from "./Footer";
import { useSelector } from 'react-redux';
import useWindowWidth from "../custom hooks/useWindowWidth";


const LayOut = ({children}) => {
    const width = useWindowWidth()
    const navbarOpened  = useSelector(state => state.navbarIsOpened)
    return (
        <div className="container-fluid d-flex flex-wrap p-0">
            {
                navbarOpened || width > 767.99?
                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-12">
                        <SideNavbar/>
                    </div>
                :
                    <div className="col-sm-1 col-2">
                        <SideNavbar/>
                    </div>

            }
            {
                navbarOpened || width > 767.99 ?
                    <div className="col-xl-10 col-lg-9 col-md-8 col-sm-8 col-9">
                        {
                            children
                        }
                        <Footer/>
                    </div>
                :
                    <div className="col-sm-11 col-10">
                        {
                            children
                        }
                        <Footer/>
                    </div>
            }
        </div>
    );
}
export default LayOut;