import imageOne from "../images/icons/5.1.png"; 
import imageTwo from "../images/icons/5.2.png"; 
import imageThree from "../images/icons/5.3.png"; 
import imageFour from "../images/icons/5.4.png"; 
import imageFive from "../images/icons/5.5.png"; 

const SectionFive =()=>{
    return(
        <div className="section-five-container">
            <div className="sub-section-five-container">
                <img src={imageOne} alt="img not found"/>
                <div className="sub-section-head">Adept Technology Knowledge</div>
            </div>
            <div className="sub-section-five-container">
                <img src={imageTwo} alt="img not found"/>
                <div className="sub-section-head">Quick Turnaround</div>
            </div>
            <div className="sub-section-five-container">
                <img src={imageThree} alt="img not found"/>
                <div className="sub-section-head">10000+ Man Hours Worked</div>
            </div>
            <div className="sub-section-five-container">
                <img src={imageFour} alt="img not found"/>
                <div className="sub-section-head">1 MN+ Customer Hits</div>
            </div>
            <div className="sub-section-five-container">
                <img src={imageFive} alt="img not found"/>
                <div className="sub-section-head">Best Support Tools</div>
            </div>
        </div>
    )
}

export default SectionFive;