import jogging from '../../public/baseball.jpg';
import basketball from '../../public/baseball.jpg';
import footsal from '../../public/baseball.jpg';
import cycle from '../../public/baseball.jpg';
import baseball from '../../public/baseball.jpg';

function Card({ src, alt, name, index }) {
    const isEven = index % 2 === 0;

    return (
        <div className="w-40 h-52 flex flex-col items-start relative">
            <div
                className={`absolute w-full h-full rounded-3xl shadow-lg ${
                    isEven ? '-top-4' : 'top-4'
                }`}
            >
                <img
                    alt={alt}
                    src={src}
                    className="w-full h-full object-cover rounded-3xl"
                />
                <p className="absolute bottom-2 left-2 text-white font-bold m-0">
                    {name}
                </p>
            </div>
        </div>
    );
}

export default function Component2() {
    const logos = [
        { src: jogging, alt: 'jogging', name: '보세창고' },
        { src: basketball, alt: 'basketball', name: '검역' },
        { src: footsal, alt: 'footsal', name: '보수작업' },
        { src: cycle, alt: 'cycle', name: '출고업무' },
        { src: baseball, alt: 'baseball', name: '운송' },
    ];

    // 슬라이드가 끊기지 않도록 더 많은 복제
    const doubledLogos = [...logos, ...logos, ...logos, ...logos];

    return (
        <section className="w-screen h-100dvh sm:h-screen flex flex-col justify-evenly items-center">
            <div className="flex flex-col justify-center items-center w-90 mb-5">
                <h1 className="font-semibold mb-0.25 text-center w-full text-4xl wordBreak-keep mb-4">
                    모든 운송 과정을 한 곳에서 관리하세요.
                </h1>
                <h1 className="font-semibold mb-0.25 text-center w-full text-4xl wordBreak-keep mb-4">
                    이제껏 경험 못 했던 슈퍼앱 서비스
                </h1>
                <h1 className="font-semibold mb-0.25 text-center w-full text-4xl wordBreak-keep">
                    잡스와 함께 새로운 일상을 만들어 보세요.
                </h1>
            </div>
            <div className="w-full h-72 flex items-center overflow-hidden">
                <div className="w-max flex flex-nowrap gap-1 p-1 animate-slide_fast">
                {doubledLogos.map((logo, index) => (
                        <Card
                            key={index}
                            src={logo.src}
                            alt={logo.alt}
                            name={logo.name}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
