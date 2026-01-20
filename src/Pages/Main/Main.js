import mainstar from "../../Assents/mainstar.svg"
import "../../Styles/Main.css"

function Main() {
    return (
        <div className="main">
            <div className="main-about">
                <h2>FAST SELLING</h2>
                <div className="main-imgs">
                    <div className="main-text">
                        <h3><span>CODE:</span>HIGH50</h3>
                        <hr />
                        <button>BUY NOW</button>
                    </div>
                    <div className="main-card">
                        <img src={mainstar} />
                    </div>
                </div>
            </div>
            <div className="main-sale">
                <h2>50 % <br /> SALE</h2>
            </div>
        </div>
    )
}

export default Main;