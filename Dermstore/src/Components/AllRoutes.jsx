import React from "react"
import {Routes, Route} from "react-router-dom"
import Ususd from "../NavbarPages/Ususd"
import Home from "../NavbarPages/Home"
import Account from "../NavbarPages/Account"
import Cart from "../NavbarPages/Cart"

import Skincare from "../NavbarPages/ProductPages/Skincare"
import Brands from "../NavbarPages/ProductPages/Brands"
import Bestsellers from "../NavbarPages/ProductPages/Bestsellers"
import Sell from "../NavbarPages/ProductPages/Sell"
import Browseby from "../NavbarPages/ProductPages/Browseby"
import Beautyfix from "../NavbarPages/ProductPages/Beautyfix"
import Haircare from "../NavbarPages/ProductPages/Haircare"
import Makeup from "../NavbarPages/ProductPages/Makeup"
import ToolsandDevices from "../NavbarPages/ProductPages/ToolsandDevices"
import Spf from "../NavbarPages/ProductPages/Spf"
import BathandBody from "../NavbarPages/ProductPages/BathandBody"
import Fragrance from "../NavbarPages/ProductPages/Fragrance"
import Freeshipping from "../NavbarPages/SSREDPages/Freeshipping"
import Newcustomer from "../NavbarPages/SSREDPages/Newcustomer"
import Rewards from "../NavbarPages/SSREDPages/Rewards"
import Esthetician from "../NavbarPages/SSREDPages/Esthetician"
import Downloadapp from "../NavbarPages/SSREDPages/Downloadapp"
import Referfriend from "../NavbarPages/SSREDPages/Referfriend"

import {useState} from "react"

export default function AllRoutes(){
    const [cartItems, setCartItems] = useState([])
    return(
        <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/usd" element={<Ususd/>}/>
            <Route path="/account" element={<Account/>}/>

            <Route path="/cart" element={<Cart cartItems={cartItems}/>}/>
            <Route path="/skin-care.list" element={<Skincare/>}/>
            <Route path="/brands.list" element={<Brands/>}/>
            <Route path="/best-sellers.list" element={<Bestsellers/>}/>
            <Route path="/sale.list" element={<Sell/>}/>
            <Route path="/*" element={<Browseby/>}/>
            <Route path="/beautyfix.list" element={<Beautyfix/>}/>
            <Route path="/hair-care.list" element={<Haircare/>}/>
            <Route path="/makeup.list" element={<Makeup/>}/>
            <Route path="/tools-devices.list" element={<ToolsandDevices/>}/>
            <Route path="/spf.list" element={<Spf/>}/>
            <Route path="/bath-body.list" element={<BathandBody/>}/>
            <Route path="/fragrance.list" element={<Fragrance/>}/>
            <Route path="/blog/" element={<Fragrance/>}/>

            <Route path="/info/delivery-information.list" element={<Freeshipping/>}/>
            <Route path="/shop/welcome-to-dermstore.list" element={<Newcustomer/>}/>
            <Route path="/account/redeem-points.list" element={<Rewards/>}/>
            <Route path="/dermstore-concierge.list" element={<Esthetician/>}/>
            <Route path="/download-app.list" element={<Downloadapp/>}/>
            <Route path="/myreferrals.list" element={<Referfriend/>}/>
        </Routes>
        </>
    )
    
}