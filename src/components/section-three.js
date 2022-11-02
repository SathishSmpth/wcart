import CardIconOne from "../images/icons/card-one.png";
import CardIconTwo from "../images/icons/card-two.png";
import CardIconThree from "../images/icons/card-three.png";
import CardIconFour from "../images/icons/card-four.png";
import CardIconFive from "../images/icons/card-five.png";
import CardIconSix from "../images/icons/card-six.png";






const SectionThree = () => {
    return (
        <div className="section-three-container">
            <div className="section-header">Node.js Headless Ecommerce Solutions</div>
            <div className="card">
                <div className="card-icon">
                    <img src={CardIconOne} alt="Img Not found" ></img>
                </div>
                <div className="card-header">Node.js Headless Ecommerce Solutions</div>
                <div className="card-content">
                    Let it possible for customers to shop wherever they are i.e.online, in an app, or from all devices.
                </div>
            </div>
            <div className="card">
                <div className="card-icon">
                    <img src={CardIconTwo} alt="Img Not found" ></img>
                </div>
                <div className="card-header">Backend Flexibility</div>
                <div className="card-content">
                    Run a promotion with your marketing team at any time by making changes to the content layer without refiguring the back-end system.
                </div>
            </div>
            <div className="card">
                <div className="card-icon">
                    <img src={CardIconThree} alt="Img Not found" ></img>
                </div>
                <div className="card-header">Products Catalog</div>
                <div className="card-content">
                    Run a promotion with your marketing team at any time by making changes to the content layer without refiguring the back-end system.
                </div>
            </div>
            <div className="card">
                <div className="card-icon">
                    <img src={CardIconFour} alt="Img Not found" ></img>
                </div>
                <div className="card-header">Easy Connect</div>
                <div className="card-content">
                    Go with any categories or business categories that you want to connect across commerce and sales channels.
                </div>
            </div>
            <div className="card">
                <div className="card-icon">
                    <img src={CardIconFive} alt="Img Not found" ></img>
                </div>
                <div className="card-header">Payment Gateway</div>
                <div className="card-content">
                    Easy to integrate and connect with any payment gateway that you desire. We have the world's payment gateway added default for you, so you just have to start selling!
                </div>
            </div>
            <div className="card">
                <div className="card-icon">
                    <img src={CardIconSix} alt="Img Not found" ></img>
                </div>
                <div className="card-header">Manage Orders</div>
                <div className="card-content">
                    Orders are processed with ease by either getting them sent directly to the vendor's backed eCommerce solution via a dedicated API.
                </div>
            </div>
            <button className="section-button">Explore All Features</button>
        </div>
    )
}

export default SectionThree;