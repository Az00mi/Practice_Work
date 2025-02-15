import "./MainPart.css"
import Description from "../description/Description.jsx";
import BenefitCard from "../benefitCard/BenefitCard.jsx";
import Delivery from "../../../public/delivery.svg"
import Service from "../../../public/service.svg"
import Plant from "../../../public/plant.svg"
import Price from "../../../public/price.svg"

const content = [
    {
        id: 1,
        image: Delivery,
        title: "Fast Delivery",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
    },
    {
        id: 2,
        image: Service,
        title: "Great Customer Service",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
    },
    {
        id: 3,
        image: Plant,
        title: "Original Plants",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
    },
    {
        id: 4,
        image: Price,
        title: "Affordable Price",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
    }
]

export default function MainPart(){
    return(
        <main>
            <Description/>
            <div className="page-content">
                <BenefitCard content={content}/>
            </div>
        </main>
    )
}