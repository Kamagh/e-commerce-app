// Create a new file: resources/js/Components/ProductList.jsx

import React from 'react';

const ProductList = ({ products }) => {
    return (
        <div>
            <h3 className="text-lg font-semibold mt-8 mb-4">Products</h3>
            <ul>
                {products.map(product => (
                    <li key={product.id}>{product.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
