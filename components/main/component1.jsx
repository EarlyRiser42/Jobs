export default function Component1() {
    return (
        <section className="relative h-100dvh lg:h-100vh w-full overflow-hidden">
            <video
                className="absolute inset-0 w-full h-full object-cover overflow-hidden"
                poster="https://firebasestorage.googleapis.com/v0/b/hyukplant.appspot.com/o/public%2Fhero.webp?alt=media&token=7e8ff63b-ea5e-4e5e-9160-1a9f8ecb5434"
                autoPlay
                muted
                loop
                playsInline
            >
                <source
                    src="https://firebasestorage.googleapis.com/v0/b/hyukplant.appspot.com/o/public%2Fhero.mp4?alt=media&token=10a65782-5f44-4e0a-935d-2ac8395a9857"
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
                <div className="text-center text-white p-4 mb-8">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Our Site</h1>
                    <p className="text-xl md:text-2xl">Discover amazing content and experiences</p>
                </div>
                <div className="relative group">
                    <button
                        className="w-30 h-12 text-base font-semibold leading-loose bg-blue_600 rounded-3xl text-white">
                        앱 다운로드
                    </button>
                </div>
            </div>
            <div
                className="absolute bottom-6 inset-x-0 flex flex-col items-center justify-center"
                onClick={() => window.scrollBy({top: window.innerHeight * 0.9, behavior: 'smooth'})}
            >
                <svg
                    className="relative w-12 h-12 text-white ml-2 animate-bounce cursor-pointer"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="white"
                >
                    <path d="M12 21l-7-7m14 0l-7 7"></path>
                </svg>
            </div>
        </section>
    )
}
