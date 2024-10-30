import React, { useEffect} from 'react'
import ScrollReveal from 'scrollreveal'
import MindMapping from "./MindMapping.jsx";

const Home = () => {
    useEffect(() => {
        ScrollReveal().reveal('.reveal', {
            distance: '50px',
            duration: 1000,
            easing: 'ease-in-out',
            origin: 'bottom',
            reset: true,
        });
    }, []);

    const handleScroll = (id) => {
        document.getElementById(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };

    return (
        <section className="bg-gray-200 lg:px-52 md:px-20 sm:px-12 px-8" id="home">
            <div className="h-full flex justify-center text-center">
                <div className="flex-col reveal">

                    <h1 className="pt-12 text-4xl font-bold">
                        Membangun Generasi Cerdas dengan Speed Learning
                    </h1>
                    <p className="pt-6 px-10">
                        Menginspirasi pemuda Indonesia untuk belajar dengan teknik efektif yang memungkinkan pemahaman
                        lebih cepat dan mendalam.
                    </p>
                    <hr className="border-t-2 border-gray-700 my-4 w-full mx-auto"/>
                    <p className="text-justify pt-8 text-lg">
                        Sumpah Pemuda bukan sekadar deklarasi. Itu adalah tekad anak muda Indonesia untuk bersatu,
                        menuntut ilmu, dan berjuang untuk kemerdekaan. Pada website ini, kami mengambil semangat
                        tersebut untuk mendorong setiap individu belajar lebih cepat dan efektif demi masa depan yang
                        lebih baik.
                    </p>
                    <h3 className="text-justify pt-4 font-semibold text-2xl">
                        Apa itu Speed Learning?
                    </h3>
                    <p className="text-justify pt-2 text-lg">
                        Speed Learning adalah teknik untuk memahami materi pelajaran secara mendalam dalam waktu singkat
                        dengan metode berpikir efektif.
                    </p>
                    <h3 className="md:text-justify text-left pt-4 font-semibold text-2xl">
                        Mengapa Belajar Cepat Penting?
                    </h3>
                    <p className="text-justify pt-2 text-lg">
                        Di era modern, informasi datang dengan cepat. Dengan metode belajar cepat seperti Six Thinking
                        Hats dan Mind Mapping, Anda bisa tetap kompetitif, menghemat waktu, dan belajar dengan lebih
                        efektif.
                    </p>

                    <div className="lg:w-1/3 w-auto p-4 px-7 mt-10 bg-gray-400 text-start rounded-lg">
                        <h2 className="text-lg">Daftar Isi</h2>
                        <ul className="pt-2 pl-5 list-disc">
                            <li>
                                <button onClick={() => handleScroll("speed-learning")} className="hover:text-blue-200 transition duration-300">
                                    Metode Speed Learning
                                </button>
                            </li>
                            <ol className="pl-4 list-decimal">
                                <li>
                                    <button onClick={() => handleScroll("six-thinking-hats")} className="hover:text-blue-200 transition duration-300">
                                        Six Thinking Hats
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => handleScroll("mind-mapping")} className="hover:text-blue-200 transition duration-300">
                                        Mind Mapping
                                    </button>
                                </li>
                            </ol>
                            <li>
                                <button onClick={() => handleScroll("tips")} className="hover:text-blue-200 transition duration-300">
                                    Tips dan Trik Belajar Efektif
                                </button>
                            </li>
                        </ul>
                    </div>

                    <hr className="border-t-2 border-gray-700 mb-2 mt-10 w-full mx-auto"/>
                    <h3 id="speed-learning" className="md:text-justify text-left pt-10 font-semibold text-3xl">
                        Metode Speed Learning
                    </h3>
                    <h4 id="six-thinking-hats" className="text-justify pt-8 font-semibold text-2xl">1. Six Thinking
                        Hats</h4>
                    <p className="text-justify pt-2 pb-2 text-lg">
                        Metode ini dikembangkan oleh Edward de Bono untuk berpikir kreatif dan memecahkan masalah secara
                        sistematis.
                        <br/><br/>
                        <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                            <div className="bg-white text-black py-4 p-2 items-center text-center rounded-lg">
                                <p className="font-semibold">Topi Putih</p>
                                <p>Fokus pada informasi fakta dan data.</p>
                            </div>
                            <div className="bg-red-600 text-white py-4 p-2 items-center text-center rounded-lg shadow-lg">
                                <p className="font-semibold">Topi Merah</p>
                                <p>Menekankan emosi dan intuisi dalam proses berpikir.</p>
                            </div>
                            <div className="bg-black text-white py-4 p-2 items-center text-center rounded-lg shadow-lg">
                                <p className="font-semibold">Topi Hitam</p>
                                <p>Analisis risiko dan aspek negatif dari keputusan.</p>
                            </div>
                            <div className="bg-yellow-500 text-white py-4 p-2 items-center text-center rounded-lg shadow-lg">
                                <p className="font-semibold">Topi Kuning</p>
                                <p>Menyusun segala keuntungan yang mungkin ada.</p>
                            </div>
                            <div className="bg-green-600 text-white py-4 p-2 items-center text-center rounded-lg shadow-lg">
                                <p className="font-semibold">Topi Hijau</p>
                                <p>Mendorong kreativitas dan ide baru.</p>
                            </div>
                            <div className="bg-blue-700 text-white py-4 p-2 items-center text-center rounded-lg shadow-lg">
                                <p className="font-semibold">Topi Biru</p>
                                <p>Mengarahkan dan mengatur jalannya pemikiran.</p>
                            </div>
                        </div>
                    </p>

                    <h4 id="mind-mapping" className="text-justify pt-6 font-semibold text-2xl">2. Mind Mapping</h4>
                    <p className="text-justify pt-2 pb-2 text-lg">
                        Mind Mapping adalah teknik visualisasi yang dapat membantu mengatur informasi secara efektif,
                        mempercepat pemahaman, dan memudahkan proses belajar.
                        <br/>
                        <MindMapping />
                    </p>
                    <hr className="border-t-2 border-gray-700 my-6 w-full mx-auto"/>

                    <h3 id="tips" className="text-justify pt-10 font-semibold text-3xl">
                        Tips dan Trik Belajar Efektif
                    </h3>
                    <p className="text-justify pt-2 pb-10 text-lg">
                        <li>
                            <i className="font-semibold">Atur Waktu dan Tentukan Prioritas :</i> Buat jadwal belajar
                            terstruktur dengan waktu khusus untuk berfokus pada materi inti.
                        </li>
                        <li>
                            <i className="font-semibold">Belajar dalam Sesi Singkat :</i>Fokus selama 25 menit dengan
                            istirahat 5 menit di antara setiap sesi (teknik Pomodoro).
                        </li>
                        <li>
                            <i className="font-semibold">Manfaatkan Teknologi :</i> Gunakan aplikasi untuk Mind Mapping
                            atau membuat catatan digital.
                        </li>
                    </p>

                </div>
            </div>
        </section>
    )
}

export default Home