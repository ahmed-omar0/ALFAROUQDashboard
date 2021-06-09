import SideNavbar from "./navbar/SideNavbar";
import Footer from "./Footer";
import { useSelector } from 'react-redux';


const LayOut = ({children}) => {
    const navbarOpened  = useSelector(state => state.navbarIsOpened)
    return (
        <div className="container-fluid p-0" style={{paddingRight: '12px !important'}}>
            <div className="row">
                {
                    navbarOpened ?
                        <div className="col-xl-1 col-md-1 col-sm-1 col-2">
                            <SideNavbar/>
                        </div>
                    :
                        <div className="col-xl-2 col-md-3 col-sm-4 col-12">
                            <SideNavbar/>
                        </div>
                }
                <div className="col-xl-10 col-md-9 col-sm-8 col-9">
                    {
                        children
                    }
                    <Footer/>
                </div>
            </div>
        </div>
    );
}
export default LayOut;