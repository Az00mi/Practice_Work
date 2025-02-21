import "./ProductsList.css"
import { useState, useEffect } from "react";

export default function ProductsList({productsList}){
    const [sortValue, setSortValue] = useState("default");
    const [sortedList, setSortedList] = useState([...productsList]);

    useEffect(() => {
        setSortedList(sortProductsList(productsList, sortValue));
    }, [sortValue, productsList]);

    const handleChange = (event) => {
        setSortValue(event.target.value);
    };

    const sortProductsList = (products, value) => {
        switch (value) {
            case "Cheaper":
                return [...products].sort((a, b) => a.price - b.price);
            case "Expensive":
                return [...products].sort((a, b) => b.price - a.price);
            case "Default":
            default:
                return products;
        }
    };

    return(
        <div className="products-list-component">
            <div className="products-list-header">
                <p className="products-list-header-title">Featured Plants</p>
                <select className="products-list-header-select" value={sortValue} onChange={handleChange}>
                    <option className="products-list-header-select-option" value="Default">Default</option>
                    <option className="products-list-header-select-option" value="Cheaper">Cheaper First</option>
                    <option className="products-list-header-select-option" value="Expensive">Expensive First</option>
                </select>
            </div>
            <hr className="products-list-header-line"/>
            <div className="products-container">
                {sortedList.map((product) => (
                    <div key={product.id}  className="product">
                        <img className="product-image" alt="plant1" src={product.image}/>
                        <p className="product-title">{product.title}</p>
                        <p className="product-price">{product.price} $</p>
                    </div>
                ))}
            </div>
        </div>
    )
}