import  { useEffect, useRef, useState } from 'react';
import thunder from '../../public/thunder.png';
import styled, { keyframes, css } from 'styled-components';

const animateContainer = keyframes`
  0% {
    opacity: 0;
    transform: scale(0);
    box-shadow: 0px 0px 0px 65px rgba(255, 255, 255, 0.25) inset, 0px 0px 0px 65px rgba(255, 255, 255, 0.25) inset;
  }
  25% {
    opacity: 1;
    transform: scale(0.9);
    box-shadow: 0px 0px 0px 65px rgba(255, 255, 255, 0.25) inset, 0px 0px 0px 65px rgba(255, 255, 255, 0.25) inset;
  }
  43.75% {
    transform: scale(1.15);
    box-shadow: 0px 0px 0px 43.334px rgba(255, 255, 255, 0.25) inset, 0px 0px 0px 65px rgba(255, 255, 255, 0.25) inset;
  }
  62.5% {
    transform: scale(1);
    box-shadow: 0px 0px 0px 0px rgba(255, 255, 255, 0.25) inset, 0px 0px 0px 21.667px rgba(255, 255, 255, 0.25) inset;
  }
  81.25% {
    box-shadow: 0px 0px 0px 0px rgba(255, 255, 255, 0.25) inset, 0px 0px 0px 0px rgba(255, 255, 255, 0.25) inset;
  }
  100% {
    opacity: 1;
    box-shadow: 0px 0px 0px 0px rgba(255, 255, 255, 0.25) inset, 0px 0px 0px 0px rgba(255, 255, 255, 0.25) inset;
  }
`;

const animateCheck = keyframes`
  from { stroke-dashoffset: 80; }
  to { stroke-dashoffset: 0; }
`;

const MainContainer = styled.div`
  ${({ isVisibleTwo }) =>
    isVisibleTwo
        ? css`
          animation: ${animateContainer} 0.75s ease-out forwards;
          display: flex;
          width: 100%;
          height: 100%;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        `
        : css`
          display: none;
        `}
`;

const CheckBackground = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom right, #2565f0, #2463eb);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transform: scale(0.84);
  animation: ${animateContainer} 0.75s ease-out forwards;
`;

// SVG에 적용할 스타일
const Svg = styled.svg`
  width: 65%;
  transform: translateY(0.25rem);
  stroke-dasharray: 80;
  stroke-dashoffset: 80;
  animation: ${animateCheck} 0.35s forwards 0.75s ease-out;
`;

const heartburst = keyframes`
  0% {
    transform: scale(0);
  }
  30% {
    transform: scale(0.1);
  }
  35% {
    transform: scale(0.5);
  }
  40% {
    transform: scale(1);
  }
  100% {
    transform: scale(1);
  }
`;

const LikeSVGColor = styled.svg`
  width: 65%;
  fill: #f91880;
  z-index: 2;
  animation: ${heartburst} 1s linear;
`;

const circleToOrbit = keyframes`
  0% {
    width: 4%;
    height: 4%;
    background-color: #dd4588;
  }

  20% {
    width: 24%;
    height: 24%;
    background-color: #d56ac0;
  }

  25% {
    width: 32%;
    height: 32%;
    background-color: #d56ac0;
  }

  30% {
    width: 36%;
    height: 36%;
    background-color: transparent;
    border: 7px solid #cc8ef5;
  }

  35% {
    width: 52%;
    height: 52%;
    background-color: transparent;
    border: 5px solid #cc8ef5;
  }

  40% {
    width: 80%;
    height: 80%;
    border: 1px solid #cc8ef5;
  }

  45% {
    width: 88%;
    height: 88%;
    background-color: #cc8ef5;
    border: none;
  }

  100% {
    width: 100%;
    height: 100%;
    background-color: #f9e3eb;
    border: none;
  }
`;

const Orbit = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #f9e3eb;
  animation: ${circleToOrbit} 1s linear;
  transform: translate(-50%, -50%);
`;

const moveOutwards = keyframes`
  0% {
    transform: translateX(0px);
    opacity: 0;
  }
  28% {
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
  50% {
    transform: translateX(-2px) scale(0.9);
  }
  75% {
    transform: translateX(-4px) scale(0.7);
  }
  100% {
    transform: translateX(-7px) scale(0);
  }
`;

const fadeout = keyframes`
  0% {
    transform: scale(1);
    opacity: 0;
  }
  33% {
    opacity: 0;
  }
  35% {
    opacity: 1;
  }
  50% {
    transform: translateX(-1px) scale(0.7);
  }
  75% {
    transform: translateX(-2px) scale(0.5);
  }
  85% {
    transform: translateX(-4px) scale(0.3);
  }
  90% {
    transform: scale(0);
  }
`;

const OrbitDot = styled.div`
  position: absolute;
  top: 0;
  left: 25%;
  width: 10%;
  height: 10%;
  opacity: 0;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: ${(props) =>
    props.$index % 2 === 0
        ? css`
          ${moveOutwards} 1.1s linear 0.4s;
        `
        : css`
          ${fadeout} 1.1s linear 0.4s;
        `};
`;

const OrbitDotWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%) ${(props) => `rotate(${props.$angle}deg)`} translateX(-15px);
  transform-origin: 50% 50%;
`;

const SvgContainer = styled.div`
  ${({ isVisibleThree }) =>
    isVisibleThree
        ? css`
          display: flex;
          width: 100%;
          height: 100%;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        `
        : css`
          display: none;
        `}
`;

export const AnimatedCheckBox = ({ isVisibleTwo }) => {
    return (
        <MainContainer isVisibleTwo={isVisibleTwo}>
            <CheckBackground>
                <Svg viewBox="0 0 65 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M7 25L27.3077 44L58.5 7"
                        stroke="white"
                        strokeWidth="13"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </Svg>
            </CheckBackground>
        </MainContainer>
    );
};

export const LikeContainer = ({ isVisibleThree }) => {
    const colors = ['#A0D6D8', '#92D2FC', '#B28FF6', '#A0D6D8', '#EE91AC', '#92D2FC'];
    const angleBetweenPairs = 60;
    const angleOffsetWithinPair = 15;

    const dots = colors.flatMap((color, i) => {
        const firstAngle = i * angleBetweenPairs;
        const secondAngle = firstAngle + angleOffsetWithinPair;

        return [
            <OrbitDotWrapper key={`dot-first-${firstAngle}-${i}`} $angle={firstAngle}>
                <OrbitDot color={color} $index={firstAngle} />
            </OrbitDotWrapper>,
            <OrbitDotWrapper key={`dot-second-${secondAngle}-${i}`} $angle={secondAngle}>
                <OrbitDot color={color} $index={secondAngle} />
            </OrbitDotWrapper>,
        ];
    });

    return (
        <SvgContainer isVisibleThree={isVisibleThree}>
            <Orbit>{dots}</Orbit>
            <LikeSVGColor viewBox="0 0 24 24">
                <path d="M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z" />
            </LikeSVGColor>
        </SvgContainer>
    );
};


export default function Component3() {
    // Intersection Observer를 활용하여 각 섹션이 화면에 나타날 때 애니메이션을 시작하도록 설정
    const [isVisibleOne, setIsVisibleOne] = useState(false);
    const [isVisibleTwo, setIsVisibleTwo] = useState(false);
    const [isVisibleThree, setIsVisibleThree] = useState(false);
    const divRefOne = useRef(null);
    const divRefTwo = useRef(null);
    const divRefThree = useRef(null);

    useEffect(() => {
        const createObserver = (ref, setShow, threshold) => {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setShow(true);
                            observer.unobserve(entry.target);
                        }
                    });
                },
                {
                    root: null,
                    rootMargin: '0px',
                    threshold,
                }
            );

            if (ref.current) {
                observer.observe(ref.current);
            }

            return () => {
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            };
        };

        const cleanupOne = createObserver(divRefOne, setIsVisibleOne, 0.9);
        const cleanupTwo = createObserver(divRefTwo, setIsVisibleTwo, 0.9);
        const cleanupThree = createObserver(divRefThree, setIsVisibleThree, 0.9);

        return () => {
            cleanupOne();
            cleanupTwo();
            cleanupThree();
        };
    }, []);

    return (
        <section
            aria-label="proSection"
            className="flex flex-col justify-start items-center w-full h-auto py-16 sm:py-20 lg:py-24 cxl:py-28 bg-light_gray dark:bg-gray"
        >
            <div
                className="flex flex-col items-start w-9/10 clg:min-w-970 clg:max-w-1250 cxl:w-85/100 c2xl:w-1900 c3xl:w-2400">
                <div className="w-full flex flex-col">
                    <h1 className="font-bold mb-1 w-full text-2xl sm:text-3xl lg:text-4xl lg:w-4/5 cxl:text-5xl">
                        모두 한 곳에서.
                    </h1>
                    <h4 className="font-medium w-full text-xl sm:text-2xl lg:text-3xl lg:w-4/5 mt-2 cxl:text-4xl">
                        이런 앱 써보셨나요?
                    </h4>
                </div>
            </div>
            <div
                className="w-9/10 mt-12 clg:h-360 clg:min-w-940 clg:max-w-1250 clg:w-9/10
            cxl:w-85/100 cxl:h-410 c2xl:w-1900 c2xl:h-490 c3xl:w-2400 c3xl:h-430"
            >
                <div className="w-full h-full flex flex-col justify-center items-center cmd:flex-row">
                    <div className="w-full flex flex-col justify-center items-start lg:items-center clg:w-1/2">
                        <h4 className="font-bold text-xl mb-0.5 lg:mb-2 sm:text-2xl lg:text-3xl lg:w-4/5 cxl:text-4xl">
                            눈 깜짝할 시간
                        </h4>
                        <span className="text-base mb-0.5 lg:mb-1 cs:text-lg sm:text-xl lg:text-xl lg:w-4/5 cxl:text-2xl">
                          최대 5시간이 걸리는 치료로
                        </span>
                        <span className="text-base mb-0.5 lg:mb-1 cs:text-lg sm:text-xl lg:text-xl lg:w-4/5 cxl:text-2xl">
                          당일에 미소를 되찾으세요.
                        </span>
                        <span className="text-base mb-0.5 lg:mb-1 cs:text-lg sm:text-xl lg:text-xl lg:w-4/5 cxl:text-2xl">
                          최신 미백 기술로
                        </span>
                        <span className="text-base mb-0.5 lg:mb-1 cs:text-lg sm:text-xl lg:text-xl lg:w-4/5 cxl:text-2xl">
                          즉각적인 결과를 제공합니다.
                        </span>
                    </div>
                    <div
                        ref={divRefOne}
                        className="bg-white flex flex-col justify-evenly items-center w-full h-52 rounded-3xl mt-4 cs:h-60 sm:h-80 cmd:h-96 clg:w-490 clg:mt-0 clg:h-80  shadow-speechBalloon dark:shadow-speechBalloonBlack"
                    >
                        <div className="relative aspect-square w-12 cs:w-16 clg:w-20">
                            <div
                                className={`absolute aspect-square w-full rounded-full bg-yellow ${isVisibleOne ? 'animate-balloonAppear' : 'hidden'}`}
                            >
                                <img
                                    src={thunder}
                                    alt="thunder"
                                    className="aspect-square scale-75"
                                />
                            </div>
                        </div>
                        <div className="text-center">
                            <span className="text-black font-semibold cs:text-lg sm:text-2xl cmd:text-xl clg:text-2xl ">
                                시간은 금이죠, 우리는 초를 다툽니다!
                            </span>
                            <br/>
                            <span
                                className="mt-2 block text-black font-semibold cs:text-lg sm:text-2xl cmd:text-xl clg:text-2xl">
                                당신의 시간을 소중히 여기는 올인원 앱.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="w-9/10 mt-12 clg:h-360 clg:min-w-940 clg:max-w-1250 clg:w-9/10
            cxl:w-85/100 cxl:h-410 c2xl:w-1900 c2xl:h-490 c3xl:w-2400 c3xl:h-430"
            >
                <div className="w-full h-full flex flex-col justify-center items-center cmd:flex-row">
                    <div
                        className="w-full flex flex-col justify-center items-start cmd:ml-6 cmd:items-center cmd:w-1/2 cmd:order-2">
                        <h4 className="font-bold text-lg mb-0.5 lg:mb-2 sm:text-2xl lg:text-3xl cmd:w-4/5 cxl:text-4xl">
                            아무 문제 없이.
                        </h4>
                        <span className="text-base mb-0.5 lg:mb-1 cs:text-lg sm:text-xl lg:text-xl lg:w-4/5 cxl:text-2xl">
                            잡스가 알아서 모든 과정을 해드려요.
                        </span>
                        <span className="text-base mb-0.5 lg:mb-1 cs:text-lg sm:text-xl lg:text-xl lg:w-4/5 cxl:text-2xl">
                          모든 과정에서 문제 없게
                        </span>
                        <span className="text-base mb-0.5 lg:mb-1 cs:text-lg sm:text-xl lg:text-xl lg:w-4/5 cxl:text-2xl">
                          믿을 수 있는 올인원 앱.
                        </span>
                    </div>
                    <div className="w-full cmd:w-1/2">
                        <div
                            ref={divRefTwo}
                            className="bg-white flex flex-col justify-evenly items-center w-full h-52 rounded-3xl mt-4 cs:h-60 sm:h-80 clg:max-w-490 clg:mt-0 clg:h-80  shadow-speechBalloon dark:shadow-speechBalloonBlack"
                        >
                            <div className="relative aspect-square w-12 cs:w-16 clg:w-20">
                                <AnimatedCheckBox isVisibleTwo={isVisibleTwo}/>
                            </div>
                            <div className="text-center">
                                <span
                                    className="text-black font-semibold cs:text-lg sm:text-2xl cmd:text-xl clg:text-2xl ">
                                    모든 과정이 처리되었습니다.
                                </span>
                                <br/>
                                <span
                                    className="mt-2 block text-black font-semibold cs:text-lg sm:text-2xl cmd:text-xl clg:text-2xl">
                                    아무 문제없이요!
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="w-9/10 mt-12 clg:h-360 clg:min-w-940 clg:max-w-1250 clg:w-9/10
            cxl:w-85/100 cxl:h-410 c2xl:w-1900 c2xl:h-490 c3xl:w-2400 c3xl:h-430"
            >
                <div className="w-full h-full flex flex-col justify-center items-center cmd:flex-row">
                    <div className="w-full flex flex-col justify-center items-start lg:items-center clg:w-1/2">
                        <h4 className="font-bold text-lg mb-0.5 lg:mb-2 sm:text-2xl lg:text-3xl lg:w-4/5 cxl:text-4xl">
                            여러분들의 만족만을 바랍니다.
                        </h4>
                        <span className="text-base mb-0.5 lg:mb-1 cs:text-lg sm:text-xl lg:text-xl lg:w-4/5 cxl:text-2xl">
                            잡스의 모든 구성원이 바라봅니다.
                        </span>
                        <span className="text-base mb-0.5 lg:mb-1 cs:text-lg sm:text-xl lg:text-xl lg:w-4/5 cxl:text-2xl">
                           오직 사용자의 만족만을.
                        </span>
                        <span className="text-base mb-0.5 lg:mb-1 cs:text-lg sm:text-xl lg:text-xl lg:w-4/5 cxl:text-2xl">
                            올인원 앱.
                        </span>
                    </div>
                    <div
                        ref={divRefThree}
                        className="bg-white flex flex-col justify-evenly items-center w-full h-52 rounded-3xl mt-4 cs:h-60 sm:h-80 clg:w-490 clg:mt-0 clg:h-80  shadow-speechBalloon dark:shadow-speechBalloonBlack"
                    >
                        <div className="relative aspect-square w-12 cs:w-16 clg:w-20">
                            <LikeContainer isVisibleThree={isVisibleThree}/>
                        </div>
                        <div className="text-center">
                            <span className="text-black font-semibold cs:text-lg sm:text-2xl cmd:text-xl clg:text-2xl ">
                                잡스를 써본 모두가 만족합니다.
                            </span>
                            <br/>
                            <span
                                className="mt-2 block text-black font-semibold cs:text-lg sm:text-2xl cmd:text-xl clg:text-2xl">
                                최고의 올인원 앱이라고요.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
    ;
}
