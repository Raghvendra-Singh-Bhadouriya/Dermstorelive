import "./Footer.css"
import "boxicons"
import {Link} from "react-router-dom"


export default function Footer(){
    return(
        <>
        <div id="footer-main-div">
            <hr/>
            <div id="signup-and-contactus-main-div">
                <div className="signup-and-discountdeals">
                    <p>Sign up to our newsletters and receive the latest exclusive discounts and deals</p>
                    <button>SIGN ME UP</button>
                </div>
                <div className="contact-with-us">
                    <p>Connect with us</p>
                    <div className="social-icons">
                    <box-icon type='logo' name='facebook-circle'></box-icon>
                    <box-icon type='logo' name='twitter'></box-icon>
                    <box-icon type='logo' name='instagram-alt'></box-icon>
                    <box-icon type='logo' name='youtube'></box-icon>
                    <box-icon type='logo' name='pinterest'></box-icon>
                    <box-icon type='logo' name='tiktok'></box-icon>
                    </div>
                </div>
            </div>
            <div id="Main-div-CACL">
                <div className="child-div-CACL">
                    <div className="CACL">
                        <hr/>
                        <p>Customer Service</p>
                    </div>
                    <div className="CACL">
                        <hr/>
                        <p>My Account</p>
                        <Link to="/page" className="link">Manage My Auto-Replenishments</Link><br/>
                        <br/>
                        <Link to="/page" className="link">My Rewards</Link><br/>
                        <br/>
                        <Link to="/page" className="link">My Favorites</Link><br/>
                        <br/>
                        <Link to="/page" className="link">Refer a Friend</Link><br/>
                        <br/>
                        <Link to="/page" className="link">Order History</Link><br/>
                    </div>
                    <div className="CACL">
                        <hr/>
                        <p>Company</p>
                        <Link to="/page" className="link">Affiliate Program</Link><br/>
                        <br/>
                        <Link to="/page" className="link">Key Workers Discount</Link><br/>
                        <br/>
                        <Link to="/page" className="link">About Us</Link><br/>
                        <br/>
                        <Link to="/page" className="link">Press</Link><br/>
                        <br/>
                        <Link to="/page" className="link">What is Klarna?</Link><br/>
                    </div>
                    <div className="CACL">
                        <hr/>
                        <p>Legal</p>
                        <Link to="/page" className="link">Privacy Policy</Link><br/>
                        <br/>
                        <Link to="/page" className="link">Site Wide Exclusions</Link><br/>
                        <br/>
                        <Link to="/page" className="link">Terms & Conditions</Link><br/>
                        <br/>
                        <Link to="/page" className="link">Modern Slavery Statement</Link><br/>
                        <br/>
                        <Link to="/page" className="link">Product Recall</Link><br/>
                        <br/>
                        <Link to="/page" className="link">Accessibility</Link><br/>
                    </div>
                </div>
            </div>
            <hr/>
            <div id="pay-securly-main-div">
                <div className="pay-securly-child-div">
                    <div className="company">
                        <div className="THG-img-div">
                            <img src="https://customers.twilio.com/content/dam/twilio-com/core-assets/customer-logos/t-z/thg.svg"/>
                            <p>2024 © The Hut.com Ltd.</p>
                        </div>
                    </div>
                    <div className="company">
                        <p>Pay securely with</p>
                        <div id="company-name-img-div">
                            <div className="cmpny-imgs">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr8wbwhMgx0ZtvQia3LcS4KWUps0FTnkO1QMGdIscUAA9K7V_Y6FRkH5RmGem7WNn1Y9I&usqp=CAU"/>
                            </div>
                            <div className="cmpny-imgs">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr8wbwhMgx0ZtvQia3LcS4KWUps0FTnkO1QMGdIscUAA9K7V_Y6FRkH5RmGem7WNn1Y9I&usqp=CAU"/>
                            </div>
                            <div className="cmpny-imgs">
                                <img src="https://1000logos.net/wp-content/uploads/2021/04/Paypal-logo.png"/>
                            </div>
                            <div className="cmpny-imgs">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNojE81lgFIFiCPsb-uDHwpEIpbgyTYEnAI3TxF4M2ntJmn8rTXlrP9ibUwWEnqiaZtV0&usqp=CAU"/>
                            </div>
                            <div className="cmpny-imgs">
                                <img src="https://1000logos.net/wp-content/uploads/2021/05/Maestro-logo.png"/>
                            </div>
                            <div className="cmpny-imgs">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3PDXjS8cxZpIsNmUPIHM0dQO73rq2PLojyZG3sbkj3xSkB9jW3SZJeM9jx6XyQ4cAzWc&usqp=CAU"/>
                            </div>
                            <div className="cmpny-imgs">
                                <img src="data:image/jpeg;base64,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D4aHe9+rpG+9sHXj5Tu4eOBxXUftX095R5R7BWvp856XyOPe9eMqVa1rGhrAGtAwABgBB5bTbqa0Wylt1CzcpqaJsUbScnAHX2lV7tT2Wxarc662d0dNeA0B4fwZUgct49Tscj4HtFmog4zuNqv2lLi3y2mrbZVxk9HKMsOe1jxwPpBXtdr7VzqfoDqO5bmMZFQ4O/W5/SuvJY45mGOVjXsPNrhkHwUezTtjjl6VlmtzZfltpWA+vCCgNg9BcqjXUd0fS1UlMIpulq3McWFxHW88CSfFX5qCyQ3iBuSGVMWeikxyzzB7ipVoDQA0AAcAB1L6oXpXJWa27SnjyWx2i1Z+sKuqaCehmMNVEWPHLPI94PWvjWKzp4Iqhm5PGyRnY8ZCjn6dtjjkQFvc2R381hZuj5N/jtGvLYp1Wsx98fXw0YABTNlscta9ss7THTDjk8C/uH81s1NZrfTEOjpmFw635d/Fe9Wcbo/pt6s078Qpz9S3Gsca8vjGtYxrGANa0YAHIBfURbjKcybd9Oewus3V0DN2lujTOMDAEo4SD14d+mrF+58057G6ZmvVQzE9yf73nmIWEgejLt4943VZNztFsuzGMutupK1sZJY2pgbIGnu3gcL008ENLBHT00UcMMTQyOONoa1jRyAA4AIMigde/EfUPzZUfVuU8iDh+GWSCaOaCR8csbg5j2OIc1w4ggjkVLe23Uv5Q3f9ul+0uykQca+23Uv5Q3f9ul+0i7KRAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERB//Z"/>
                            </div>
                            <div className="cmpny-imgs">
                                <img src="data:image/jpeg;base64,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"/>
                            </div>
                            <div className="cmpny-imgs">
                                <img src="data:image/png;base64,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"/>
                            </div>
                            <div className="cmpny-imgs">
                                <img src="data:image/png;base64,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"/>
                            </div>
                            <div className="cmpny-imgs">
                                <img src="data:image/png;base64,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"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}