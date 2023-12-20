// Create a new file: resources/js/Components/CategoryList.jsx

import React from 'react';

const CategoryList = ({ categories, selectedCategory, onSelectCategory }) => {
    return (
        <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul>
                <li
                    onClick={() => onSelectCategory(null)}
                    className={selectedCategory === null ? 'font-bold' : ''}
                >
                    All
                </li>
                {categories.map(category => (
                    <li
                        key={category.id}
                        onClick={() => onSelectCategory(category.id)}
                        className={selectedCategory === category.id ? 'font-bold' : ''}
                    >
                        {category.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryList;
