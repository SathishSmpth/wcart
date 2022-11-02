import image from "../images/image1.jpg";
import userIcon from "../images/user-icon.png";
import vendorIcon from "../images/vendor-icon.png";
import image2 from "../images/sub-section-3.png";

const SectionTwo = () => {
    return (
        <div className="section-two-container">
            <div className="sub-section-one">
                <div className="sub-section-header">Front-End Theme Editor</div>
                <div className="sub-section-one-content">
                    Initiative To Use For Non-Technical Users-
                    Activate Custom Front-<br /><br />
                    End Theme Creation Render Dynamic Product Listing Using <br /><br />
                    Templates Made With Real-
                    Time Bootstrap Page Builder Flexible <br /><br />
                    Mobile-First Design Easy To Use Drag And Drop Builder Unlimited <br /><br />
                    Theme Flexibility
                </div>
                <div className="image-section"><img src={image} alt="Img not found" /></div>
            </div>
            <div className="sub-section-two">
                <div className="sub-section-header">Headless Commerce API-First Approach</div>
                <div className="user-and-vendor-section">
                    <div>
                        <img src={userIcon} alt="img not found" />
                    </div>
                    <div className="user-and-vendor-header">For users</div>
                    <div className="user-and-vendor-content">
                        <div>Authentication API</div>
                        <div>Products API</div>
                        <div>Cart API</div>
                        <div>Checkout API</div>
                        <div>Categories API</div>
                        <div>Orders API</div>
                        <div>Payment Gateway API</div>
                    </div>
                </div>
                <div className="user-and-vendor-section">
                    <div>
                        <img src={vendorIcon} alt="img not found" />
                    </div>
                    <div className="user-and-vendor-header">For Vendors</div>
                    <div className="user-and-vendor-content">
                        <div>Authentication API</div>
                        <div>Products API</div>
                        <div>Cart API</div>
                        <div>Checkout API</div>
                        <div>Categories API</div>
                        <div>Orders API</div>
                        <div>Payment Gateway API</div>
                    </div>
                </div>
            </div>
            <div className="sub-section-three-four">
                <div className="sub-section-three">
                    <div className="sub-section-header">Feature Rich Addons</div>
                    <div className="sub-section-three-content">
                        <div>ShipStation API, TaxJar/Avalara APIs (Addon )</div>
                        <div>Real-time split payment via Stripe Connect ( Addon )</div>
                        <div>Automated Tax & shipping management ( Addon )</div>
                        <div>Hyperlocal Marketplace System ( Addon )</div>
                    </div>
                    <div className="image-section-three">
                        <img src={image2} alt="Img Not Found"></img>
                    </div>
                </div>
                <div className="sub-section-four">
                    <div className="sub-section-header">Why Choose Node.js Headless Commerce?</div>
                    <ul className="sub-section-four-content">
                        <li>Consistent and Better User Experience</li>
                        <li>Enhanced Security</li>
                        <li>Generate More Organic Traffic & Less Ad Spend</li>
                        <li>Speed In Market Penetration And Trend Adoption</li>
                        <li>Increase Conversions And Lower Customer Acquisition Costs</li>
                    </ul>
                    <ul className="sub-section-four-content">
                        <li>Ability To Handle Large User Base</li>
                        <li>Faster Time To Market</li>
                        <li>Omnichannel Reach</li>
                        <li>Lightweight And Much Faster Response Time</li>
                        <li>Composable Commerce & MACH</li>
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default SectionTwo;