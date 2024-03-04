import Ususd from "../NavbarPages/Ususd"
import Account from "../NavbarPages/Account"
import {Link} from "react-router-dom"
import 'boxicons'
import './Navbar.css'


export default function Navbar(){
    
    return(
        <>
            <div>

                <div className="Usd_container">
                    <img src="https://media.istockphoto.com/id/958480284/vector/united-states-round-flag-vector-flat-icon.jpg?s=612x612&w=0&k=20&c=hbGvthdwXaSPntH3ck8vlARP00gA46dWqFF-5vstjTw="/>
                    <label >
                        <Link to="/usd" className="usd_link">us-USD</Link>
                    </label>
                </div>

             {/*==============================================Dermstore Logo and Input Container===============================================*/}
                <div id="parent_container_logo_allpages">
                    <div className="dermstore_logo_search_container">
                        <div className="dermstore_logo_container">
                            <Link to="/" className="logo_home_link">
                                <img src="https://cdn.freelogovectors.net/wp-content/uploads/2022/11/dermstore-logo-freelogovectors.net_.png"/>
                            </Link>
                        </div>
                    
                        <div id="input_container">
                            <input className="input" type="search" placeholder="search for a product or brand..."/>
                            <button className="search_btn"><box-icon name="search"></box-icon></button>
                        </div>

                        <div id="user_cart_container">
                            <Link className="user" to="/account">
                                <box-icon name="user" style={{width:"35%"}}></box-icon><label>Account</label>
                            </Link>

                            <Link to="/cart" className="cart">
                                <box-icon name="shopping-bag" style={{width:"48%"}}></box-icon><label>Cart</label>
                            </Link>
                        </div>
                    </div>

                    <div id="navbar-pages-container">
                        <div>
                            <Link to="/skin-care.list" className="page">Skin Care</Link>
                        </div>
                        <div>
                            <Link to="/brands.list" className="page">Brands</Link>
                        </div>
                        <div>
                            <Link to="/best-sellers.list" className="page">Bestsellers</Link>
                        </div>
                        <div>
                            <Link to="/sale.list" className="page">Sale</Link>
                        </div>
                        <div>
                            <Link to="/" className="page">Browse By</Link>
                        </div>
                        <div>
                            <Link to="/beautyfix.list" className="page">BeautyFIX</Link>
                        </div>
                        <div>
                            <Link to="/hair-care.list" className="page">Hair Care</Link>
                        </div>
                        <div>
                            <Link to="/makeup.list" className="page">Makeup</Link>
                        </div>
                        <div>
                            <Link to="/tools-devices.list" className="page">Tools  Devices</Link>
                        </div>
                        <div>
                            <Link to="/spf.list" className="page">SPF</Link>
                        </div>
                        <div>
                            <Link to="bath-body.list" className="page">Bath Body</Link>
                        </div>
                        <div>
                            <Link to="/fragrance.list" className="page">Fragrance</Link>
                        </div>
                        <div>
                            <Link to="/blog/" className="page">Skin 101</Link>
                        </div>  
                    </div>
                </div>

             {/*==========Container==========Shipping=Saving=Rewards=Esthetician=Download=========Container=========*/}
                <div id="SSRED-div-parent">
                  <div className="margin">
                    <div className="SSRED-div-child">
                        <div className="SSRED-child-imagesbox">
                            <box-icon name="truck"></box-icon>
                        </div>
                        <Link to="/info/delivery-information.list" className="SSRED-page-link">Free US Shipping $50+</Link>   
                    </div>
                    <div className="SSRED-div-child">
                        <div className="SSRED-child-imagesbox">                 
                            <box-icon name="dollar-circle"></box-icon>
                        </div>
                        <Link to="/shop/welcome-to-dermstore.list" className="SSRED-page-link">New Customers Save 15%*</Link>
                    </div>
                    <div className="SSRED-div-child">
                        <div className="SSRED-child-imagesbox">                          
                            <box-icon name="list-check"></box-icon>
                        </div>
                        <Link to="/account/redeem-points.list" className="SSRED-page-link">Dermstore Rewards</Link>
                    </div>
                    <div className="SSRED-div-child">
                        <div className="SSRED-child-imagesbox">
                            <box-icon name="time"></box-icon>
                        </div>
                        <Link to="/dermstore-concierge.list" className="SSRED-page-link">Ask The Esthetician</Link>
                    </div>
                    <div className="SSRED-div-child">
                        <div className="SSRED-child-imagesbox">
                            <box-icon name="mobile"></box-icon>
                        </div>
                        <Link to="/download-app.list" className="SSRED-page-link">Download Our App</Link>
                    </div>
                  </div>

                  <div className="refer-earn">
                    <div className="refer-earn-child">
                        <div style={{}}className="refer-earn-child-imagesbox">
                            <box-icon name="share"></box-icon>
                        </div>
                        <Link to="/myreferrals.list" className="refer-earn-page-link">Refer a friend, GEt $20</Link>
                    </div>
                  </div>
                </div>

                {/*==========================================================*/}
                <div id="shop-new-arrivals">
                    <p>Shop New Arrivals + TWO free gifts with any $250+ purchase. SHOP NOW</p>
                </div>

            </div>

        </>
    )
}

