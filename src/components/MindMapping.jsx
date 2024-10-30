import React, { useState } from 'react';

function MindMapping() {
    const steps = [
        {
            boldText: 'Memulai dengan Ide Utama\n',
            text: 'Buat lingkaran dengan topik utama di tengah, kemudian tarik cabang-cabang yang mengarah ke sub-topik.', size: 'w-16 h-16' },
        {
            boldText: 'Menggunakan Kata Kunci\n',
            text: 'Setiap cabang mencerminkan konsep penting untuk memudahkan ingatan.', size: 'w-16 h-16' },
        {
            boldText: 'Menggabungkan Visual\n',
            text: 'Tambahkan warna, simbol, atau gambar untuk membantu memvisualisasikan ide dengan lebih baik.', size: 'w-16 h-16' },
    ];

    const [currentStep, setCurrentStep] = useState(0);

    const nextStep = () => setCurrentStep((prev) => (prev + 1) % steps.length);
    const prevStep = () => setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);

    return (
        <div className="flex flex-col items-center p-4">
            {/* Text */}
            <p
                className="md:text-justify text-left mb-4 max-w-md transition-opacity duration-500 ease-in-out whitespace-pre-line"
                key={currentStep}
            >
                <strong>{steps[currentStep].boldText}</strong> {steps[currentStep].text}
            </p>

            <div className="flex items-center justify-center relative">
                <button
                    onClick={prevStep}
                    className="text-white bg-gray-500 p-2 rounded-full text-3xl mr-4"
                >
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M5 12h14M5 12l4-4m-4 4 4 4"/>
                    </svg>
                </button>

                {/* Circles */}
                <div className="flex items-center space-x-4 relative z-10">
                    {steps.map((_, index) => (
                        <div
                            key={index}
                            className={`rounded-full transition-all duration-300 ${
                                currentStep === index ? 'w-10 h-10 bg-gray-500' : 'w-8 h-8 bg-gray-300'
                            }`}
                        />
                    ))}
                </div>

                <button
                    onClick={nextStep}
                    className="text-white bg-gray-500 p-2 rounded-full text-3xl ml-4"
                >
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M19 12H5m14 0-4 4m4-4-4-4"/>
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default MindMapping