export default function Inicio() {
    return (
        <>
            <section className="flex bg-helado bg-no-repeat bg-cover bg-center bg-fixed" id='Inicio'
            >
                <div class="hidden sm:flex w-1/2 p-4 bg-gradient-to-r from-transparent to-white80 "
                >
                </div>
                <div className="hidden sm:flex w-1/2 p-4 flex flex-col items-center justify-center h-screen  
                bg-gradient-to-r from-white80 to-white bg-opacity-80">
                    <strong className="mb-4 text-5xl text-center text-blue23 font-title" data-aos="fade-up">Helados</strong>
                    <strong className="mb-4 text-5xl text-center text-blue23 font-title" data-aos="fade-up">Rey de los Andes</strong>
                    <p className="mb-4 text-xl text-center text-blue23" data-aos="fade-up">Orgullo y Tradición de Salcedo</p>
                </div>
                <div class="sm:hidden flex flex-col items-center justify-center h-screen w-screen
                bg-gradient-to-r from-white40 to-white">
                    <strong className="mb-4 text-5xl text-center text-blue23 font-title">Helados</strong>
                    <strong className="mb-4 text-5xl text-center text-blue23 font-title">Rey de los Andes</strong>
                    <p className="mb-4 text-xl text-center text-blue23">Orgullo y Tradición de Salcedo</p>
                </div>
            </section>
        </>
    );
}