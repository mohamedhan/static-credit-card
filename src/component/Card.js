import React from 'react'
import Chip from '../component/chip.jpg';
import VisaCard from '../component/visa-card.jpg'




const Card = () => {
    return (
        <div className="card">
            <h1 className="title"> Credit Card</h1>
            <img className="chip" src={Chip}></img>
            {/* <div className="criteria"> */}
           
                <div className="display-card">
                    <div className="ttt">
                    <h3 class="card-number">7253 3256 7835 1245</h3>
                        <div className="sect-valid">
                            <p className="number">5422</p>
                            <div className="valid-card">
                                <p className="valid-thru">Valid<br/>thru</p>
                                <div className="valid">
                                    <p className="valid-thruu">Moth/Year</p>
                                    <p className="date-exp">11/50</p>
                                </div>
                            </div>



                        </div>
                        <p className="card-holder">CARDHOLDER</p>
                    </div>


                    <img className="visa-image" src={VisaCard} />

                </div>
            {/* </div> */}
        </div>
    )

}

export default Card;


