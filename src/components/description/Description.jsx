import { useState } from "react";
import "./Description.css"
import ArrowLeft from "../../../public/arrow-previous.svg"
import ArrowRight from "../../../public/arrow-next.svg"
import Photo1 from "../../../public/photo1.jpg"
import Photo2 from "../../../public/photo2.jpg"
import Photo3 from "../../../public/photo3.jpg"

const descriptionData = [
    {
        image: Photo1,
        title: "Опис проєкту",
        text: <>Hello world! Цю сторінку створено для демонстрації виконаного під час практики завдання :)</>,
    },
    {
        image: Photo2,
        title: "Трошки про автора",
        text: <>Мене звати Богданова Анна, я навчаюсь на 4 курсі за спеціальністю Комп'ютерні Науки. Темою практики був обраний саме React з декількох причин. По-перше, моя дипломна робота присвячена написанню фронтенду для сайту саме на React. По-друге, через бажання поглибити знання та навички користування цією бібліотекою. Посилання на мій GitHub: <a href="https://github.com/Az00mi" target="_blank">Az00mi</a></>,
    },
    {
        image: Photo3,
        title: "Оригінал дизайну",
        text: <>Оригінал дизайну був створений для сторінки магазину рослин, але для цього компоненту мені були потрібні додаткові фото, тому тут фото котиків :3 Посилання на оригінал дизайну: <a href="https://www.figma.com/design/r74vhd12rfrukxGazYRSkf/Plant-shop?node-id=0-1&p=f&t=6fIMdOrHHP8Wo8hA-0" target="_blank">Figma</a></>,
    }
]


const getPreviousTitle = (index) => {
    const prevIndex = index === 0 ? descriptionData.length - 1 : index - 1;
    return descriptionData[prevIndex].title;
};


const getNextTitle = (index) => {
    const nextIndex = (index + 1) % descriptionData.length;
    return descriptionData[nextIndex].title;
};


export default function Description(){

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((nextIndex) => (nextIndex + 1) % descriptionData.length);
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? descriptionData.length - 1 : prevIndex - 1
        );
    };

    const { image, title, text } = descriptionData[currentIndex];

    return(
        <div className="description-container">
            <img className="description-image" src={image} alt={title}/>
            <div className="info-container">
                <div className="text-container">
                    <h1 className="title">{title}</h1>
                    <p className="description">{text}</p>
                </div>
                <div className="description-buttons-container">
                    <div className="button-container previous" onClick={handlePrevious}>
                        <div className="button-info">
                            <img className="arrows" src={ArrowLeft} alt="arrow-left"/>
                            <p className="previous-button-name">Previous</p>
                        </div>
                        <h2 className="previous-button-title">{getPreviousTitle(currentIndex)}</h2>
                    </div>
                    <div className="button-container next" onClick={handleNext}>
                            <div className="button-info">
                                <p className="next-button-name">Next</p>
                                <img className="arrows" src={ArrowRight} alt="arrow-right"/>
                            </div>
                            <h2  className="next-button-title">{getNextTitle(currentIndex)}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}