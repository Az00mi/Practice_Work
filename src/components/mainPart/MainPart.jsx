import "./MainPart.css"
import Description from "../description/Description.jsx";
import BenefitCard from "../benefitCard/BenefitCard.jsx";
import ProductsList from "../productsList/ProductsList.jsx";
import OtherInfo from "../otherInfo/OtherInfo.jsx";
import Delivery from "../../../public/delivery.svg"
import Service from "../../../public/service.svg"
import PlantIcon from "../../../public/plantIcon.svg"
import Price from "../../../public/price.svg"
import Plant1 from "../../../public/plant1.png"
import Plant2 from "../../../public/plant2.png"
import Plant3 from "../../../public/plant3.png"
import Plant4 from "../../../public/plant4.png"
import Plant5 from "../../../public/plant5.png"

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
        image: PlantIcon,
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

const productsList = [
    {
        id: 1,
        image: Plant1,
        title: "Star Cactus Plant",
        price: 10.52
    },
    {
        id: 2,
        image: Plant2,
        title: "Haworthia pumila Plant",
        price: 4.31
    },
    {
        id: 3,
        image: Plant3,
        title: "Mammillaria Plant",
        price: 7.89
    },
    {
        id: 4,
        image: Plant4,
        title: "Gasteria Plant",
        price: 2.32
    },
    {
        id: 5,
        image: Plant5,
        title: "Haworthia fasciata Plant",
        price: 6.18
    }
];

export default function MainPart(){
    return(
        <main>
            <Description/>
            <div className="page-content">
                <BenefitCard content={content}/>
                <ProductsList productsList={productsList}/>
                <OtherInfo/>
            </div>
        </main>
    )
}