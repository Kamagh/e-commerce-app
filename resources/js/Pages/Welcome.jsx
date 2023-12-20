import { Link, Head } from '@inertiajs/react';

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Welcome" />
            <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center">
                <div className="absolute top-6 right-6 text-end">
                    {auth.user ? (
                        <Link
                            href={route('dashboard')}
                            className="font-semibold text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route('login')}
                                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline-none focus:ring focus:border-red-500"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route('register')}
                                className="ml-4 font-semibold text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>
                <div className='bg-secondary-200 w-full h-1/2 flex items-center justify-center'>
                    <div className="welcome-box bg-white bg-opacity-75 p-8 rounded-md text-center">
                        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                            Welcome to Our E-Commerce Website
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-400">
                            Explore a wide range of products and find the best deals for your needs.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
