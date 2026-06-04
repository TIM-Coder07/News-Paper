import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className="bg-base-200 min-h-screen flex flex-col">
            {/* Header */}
            <header className="w-full md:w-11/12 mx-auto py-4 px-4 md:px-0">
                <Navbar />
            </header>

            {/* Main Content */}
            <main className="w-full md:w-11/12 mx-auto flex-1 py-5 px-4 md:px-0">
                <Outlet />
            </main>
        </div>
    );
};

export default AuthLayout;