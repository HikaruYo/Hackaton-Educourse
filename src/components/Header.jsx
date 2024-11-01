import React from 'react'

const Header = () => {
    return (
        <nav className="p-4 lg:px-52 md:px-20 sm:px-12 px-8 bg-red-600">
            <div className="container mx-auto flex justify-between items-center text-white">
                <h2 className="text-2xl font-bold cursor-default">Hikaru&apos;s Domain</h2>
            </div>
        </nav>
    )
}

export default Header