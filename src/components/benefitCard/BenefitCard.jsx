import "./BenefitCard.css"

export default function BenefitCard({content}) {
    return (
        <div className="benefit-cards-container">
            {content.map((cont) => (
                    <div key={cont.id} className="benefit-card">
                        <div className="benefit-card-name">
                            <img className="benefit-card-image" src={cont.image} alt="benefit card image"/>
                            <p className="benefit-card-title">{cont.title}</p>
                        </div>
                        <p className="benefit-card-text">{cont.text}</p>
                    </div>
                ))}
        </div>
    )
}