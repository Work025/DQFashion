import stnposition from "../../Assents/stn-star.svg";
import stntextcss from "../../Assents/stn-text-css.svg"
import "../../Styles/Section.css";

function Section() {
    return (
        <div className="section">
            <div className="section-img">
               
            </div>

            <div className="section-text">
                <h2>
                    Keep your head <span>HEELS</span> & standards
                </h2>
                <p>HIGH</p>
                <img src={stntextcss} />
                <button>VIEW TRENDS</button>
            </div>

            <div className="stn-img-remove">
                <img src={stnposition} alt="star decoration" />
            </div>
        </div>
    );
}

export default Section;
