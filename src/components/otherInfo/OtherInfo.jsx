import "./OtherInfo.css"
import RightImage from "../../../public/rightImage.png"
import BottomImage from "../../../public/bottomImage.png"
import SanniSahil from "../../../public/sanniSahil.png"

export default function OtherInfo(){
    return (
        <div className="other-info-component">
            <div className="other-info-first-container">
                <div className="other-info-first-container-left-block">
                    <div className="other-info-first-container-text-block">
                        <h2 className="other-info-title">Buy, more plants, it helps you to be relaxed</h2>
                        <p className="other-info-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium magnam minus mollitia, nisi quo sed ullam voluptas. Aliquid dignissimos dolorem ea expedita labore minus mollitia, provident quisquam rerum sint, voluptate?</p>
                    </div>
                    <img className="other-info-bottomImage" src={BottomImage} alt="bottomImage"/>
                </div>
                <img className="other-info-rightImage" src={RightImage} alt="rightImage"/>
            </div>
            <div className="other-info-second-container">
                <div className="other-info-second-container-left-block">
                    <h2 className="other-info-title">Get your favourites plant on our shop now</h2>
                    <button className="other-info-button">Visit Shop</button>
                </div>
                <img className="other-info-sanniSahil" src={SanniSahil} alt="sanniSahil"/>
            </div>
        </div>
    )
}