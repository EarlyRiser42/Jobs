import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({ navOpen, navAnimation }) => {
    // 모달, 팝업 창 열릴 시 부모 요소 스크롤 차단
    useEffect(() => {
        if (navOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [navOpen]);

    return (
        <div
            className={`flex-1 flex flex-col bg-white lg:bg-transparent lg:flex lg:flex-row justify-evenly lg:justify-evenly items-center w-screen lg:w-1/2 h-dvh lg:h-full absolute inset-0 lg:relative ${navAnimation} ${navOpen ? 'block' : 'hidden'} lg:block lg:animate-none`}
        >
            <ul className="flex flex-col justify-start lg:justify-between w-11/12 h-4/5 lg:h-auto lg:w-4/5 ml-0 lg:flex-row text-2xl lg:text-lg">
                <li className="cursor-pointer text-black dark:text-white hover:font-bold mt-5 lg:mt-0 mb-10 lg:mb-0">
                    <Link to="/">SERVICE</Link>
                </li>
                <li className="cursor-pointer text-black dark:text-white hover:font-bold mt-5 lg:mt-0 mb-10 lg:mb-0">
                    <Link to="/introduce">COMPANY</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navigation;
