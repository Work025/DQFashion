import footerstar from "../../Assets/footer-star .svg"
import "../../Styles/Footer.css"

function Footer() {
    return (
        <div className="footer">
            <img src={footerstar} />
            <div className="footer-data">
                <div className="footer-text">
                    <h2>HAVING FOMO?</h2>
                    <p>Keep up with our latest</p>
                    <a>Offers</a>
                    <a>New Arrivals</a>
                    <a>Fashion Trends 2022 & more</a>
                </div>

                <div className="footer-btn">
                    <h3>Subscribe to us today!</h3>
                    <label>
                        <input placeholder="Email id" /> <button>KEEP ME IN TREND</button>
                    </label>
                </div>
            </div>
            <div className="footer-link">
                <p>Contact Us : highheels@DQfashion.com </p>
                <div className="footer-i">
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-twitter"></i>
                </div>
                <div className="footer-remove">
                    <h3>All rights reserved</h3>
                    <span>© 2022 by</span>
                    <h2>D <span>Q</span></h2>
                </div>
            </div>
        </div>
    )
}

export default Footer;