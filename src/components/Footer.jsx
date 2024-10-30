import React from 'react'

const Footer = () => {
    return (
        <div className="p-3 lg:px-52 md:px-20 sm:px-12 px-8 bg-gray-600">
            <div className="container mx-auto flex justify-center items-center text-white">
                <p className="text-md cursor-default">&copy; { new Date().getFullYear() } Hikaru&apos;s Domain</p>
            </div>
        </div>
    )
}

export default Footer