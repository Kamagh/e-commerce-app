import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import CategoryList from "@/Pages/Products/CategoryList.jsx";
import ProductList from "@/Pages/Products/ProductList.jsx";

export default function Dashboard({ auth }) {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch categories and products data from your Laravel backend
        fetch('/categories')
            .then(response => response.json())
            .then(data => setCategories(data));

        fetch('/products')
            .then(response => response.json())
            .then(data => setProducts(data));
    }, []);

    useEffect(() => {
        // Fetch products based on the selected category
        const url = selectedCategory
            ? `/api/categories/${selectedCategory}/products`
            : '/api/products';

        fetch(url)
            .then(response => response.json())
            .then(data => setProducts(data));
    }, [selectedCategory]);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <CategoryList
                                categories={categories}
                                selectedCategory={selectedCategory}
                                onSelectCategory={setSelectedCategory}
                            />
                            <ProductList products={products} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
