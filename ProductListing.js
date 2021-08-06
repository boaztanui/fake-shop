import React, { useEffect } from 'react';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from '../redux/actions/productAction';

import Product from './Product';



function ProductListing() {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response = await axios.get("https://fakestoreapi.com/products")

        dispatch(setProducts(response.data))

    };

    useEffect(() => {
        fetchProducts()
    }, [])
    console.log("Products:", products);
    return (
        <div className="ui grid container">
            <Product />
        </div>
    )
}

export default ProductListing;
