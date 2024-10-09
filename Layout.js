import {Link, Outlet} from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Layout(){
    const navigate = useNavigate()

    return(

        <div className="container"> 
            <div className="row" >
                <div className="col-2 border border-black p"><h1>Logo</h1></div>
                <div className='col border border-secondary ' ><Link to="/transactions">Allsummery</Link> </div>
                <div className='col border border-secondary ' ><Link to="/transactions/add">AddNewEntery</Link> </div>
                <div className='col border border-secondary '><button className='btn btn-info ' 
                onClick={() => navigate("/transactions/profit-loss")}>
                     View Profit/Loss
                </button></div>
            </div>
            <div className='row'>
                <div className='col-3 border border-primary'>sidebar</div>
                <div className='col border border-primary'><Outlet/></div>
                
            </div>
            <div className='row'>
                <div className='col border border-primary'>footer</div>               
            </div>
        </div>
    )
}
export default Layout;