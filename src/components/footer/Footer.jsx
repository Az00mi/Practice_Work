import "./Footer.css"

export default function Footer(){
    return(
        <footer>
            <div className="address-container">
                <p className="footer-name">Plant</p>
                <div className="address-block">
                    <p className="footer-titles address-name">Plantku House</p>
                    <p className="footer-address">Jl. Laksda Adisucipto No.51, Demangan, Kec. Depok, Kota Yogyakarta,
                        Daerah Istimewa Yogyakarta 55282</p>
                </div>
            </div>
            <div className="links-container">
                <p className="footer-titles">Company</p>
                <div className="links-block">
                    <a href="/" className="footer-link">About Us</a>
                    <a href="/" className="footer-link">Contact Us</a>
                </div>
            </div>
            <div className="links-container">
                <p className="footer-titles">Product</p>
                <div className="links-block">
                    <a href="/" className="footer-link">Plant</a>
                    <a href="/" className="footer-link">Other Crops</a>
                </div>
            </div>
            <div className="email-block">
                <p className="footer-titles">Subscribe to Our Emails</p>
                <input className="footer-input" type="email" placeholder="Enter Email Address" />
                <button className="footer-button">Submit</button>
            </div>
        </footer>
    )
}