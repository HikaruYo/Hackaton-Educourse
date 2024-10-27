import React from 'react'

const Header = () => {
    return (
        <nav className="p-5 lg:px-52 md:px-20 sm:px-12 px-8 bg-red-600">
            <div className="container mx-auto flex justify-between items-center text-white">
                <h2 className="text-3xl font-bold cursor-default">Hikaru's Domain</h2>
                <ul className="flex gap-8 text-lg items-center">
                    <li><a href="#home">Home</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header