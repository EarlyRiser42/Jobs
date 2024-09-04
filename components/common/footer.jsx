import { FaInstagram } from 'react-icons/fa';
import { SiNaver } from 'react-icons/si';
import { RiKakaoTalkFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { Logo } from "./Icons.jsx";

const Footer = () => {
    return (
        <div className="flex-col flex  pt-10 w-full justify-center items-center">
            <div className="flex flex-col sm:flex-row w-full justify-evenly pb-4 items-center sm:items-start">
                <div className="text-center sm:text-left">
                    <div className="text-lg font-bold">(주) Jobs</div>
                    <div className="flex flex-col sm:flex-row ">
                        <div className="text-sm text-gray-600 pb-2 sm:pb-0">
                            사업자 등록번호 : 120-87-65763
                        </div>
                        <div className="hidden sm:block text-sm text-gray-600 whitespace-pre"> | </div>
                        <div className="text-sm text-gray-600 break-keep">
                            주소 : 서울시 송파구 위례성대로 2 (방이동, 장은빌딩)
                        </div>
                    </div>

                </div>
                {/* Social media icons */}
                <div className="flex flex-col mt-4 sm:mt-0">
                    <div className="flex justify-center items-start pb-2">
                        <Logo/>
                    </div>
                    <div className="flex flex-row gap-3">
                        <Link to={'/'} target="_blank">
                            <div className="p-4 bg-[#EAEAEA] rounded-full cursor-pointer">
                                <FaInstagram size={20} />
                            </div>
                        </Link>
                        <Link to={'/'} target="_blank">
                            <div className="p-4 bg-[#EAEAEA] rounded-full cursor-pointer">
                                <SiNaver size={20} />
                            </div>
                        </Link>
                        <Link to={'/'} target="_blank">
                            <div className="p-4 bg-[#EAEAEA] rounded-full cursor-pointer">
                                <RiKakaoTalkFill size={20} />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex flex-1 flex-col items-center py-4 border-t border-white_700 w-full">
                <div className="flex flex-col justify-center items-center gap-3 text-base font-normal">
                    <span className="text-xs text-gray_600">
                        © 2024 Jobs. All rights reserved.
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Footer;
