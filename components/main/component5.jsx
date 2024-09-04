import profile1 from '../../public/profile (1).jpg';
import profile2 from '../../public/profile (2).jpg';
import profile3 from '../../public/profile (3).jpg';
import profile4 from '../../public/profile (4).jpg';
import profile5 from '../../public/profile (5).jpg';
import profile6 from '../../public/profile (6).png';


export default function Component5() {
    const logos = [
        { src: profile1, alt: 'profile1' },
        { src: profile2, alt: 'profile2' },
        { src: profile3, alt: 'profile3' },
        { src: profile4, alt: 'profile4' },
        { src: profile5, alt: 'profile5' },
        { src: profile6, alt: 'profile6' },
        { src: profile1, alt: 'profile1' },
        { src: profile2, alt: 'profile2' },
        { src: profile3, alt: 'profile3' },
        { src: profile4, alt: 'profile4' },
        { src: profile5, alt: 'profile5' },
        { src: profile6, alt: 'profile6' },
    ];

    const reviews = [
            {
                "nickname": "하얀돌맹이",
                "reviewCount": "리뷰 827",
                "photoCount": "사진 211",
                "followerCount": "팔로워 88",
                "message": "제가 여태 다녀본 치과 중 최고였어요! 임플란트 치료가 필요해서 방문했는데, 처음부터 끝까지 너무 친절하게 잘 설명해주시고, 치료도 아프지 않게 해주셔서 감동받았습니다. 치과에 대한 두려움이 많았는데, 이제는 더 이상 걱정이 없어요. 정말 신뢰가 가는 치과입니다. 다음에도 또 방문할 예정이에요. 감사합니다!"
            },
            {
                "nickname": "정현맘241",
                "reviewCount": "리뷰 172",
                "photoCount": "사진 220",
                "followerCount": "팔로워 94",
                "message": "급 치과 갈 일이 생겨 네이버 검색해 리뷰 많고 평 좋아서 방문했어요 리뷰가 많은건 병원 방문때 보니 리뷰이벤트를 하더라구요 그래서 이거 잘못 왔나 했는데 진찰 받고 상담하고 치료 해 보니 잘 온거 같아요 치료 내내 미리 미리 안내 해 주시면서 치료해 주시니깐 긴장 안하고 편안하게 치료 받을 수 있었내요 원장님부터 모든 바른선택 의료진 분들 친절하고 미남 미녀 분들이심~^^"
            },
            {
                "nickname": "캣홀릭",
                "reviewCount": "리뷰 12",
                "photoCount": "사진 10",
                "followerCount": "팔로워 4",
                "message": "약점이 안 보이는 치과네요. 이가 약한 편이라 꽤나 다양한 치과를 다녔는데, 각 치과마다 전문이 있어서 그 부분에 관한 이야기만 하는 경우들이 대부분이었습니다. 이 치과는 과잉진료 없이, 두루 꼼꼼히 체크해주시고 설명해주십니다. 선생님이 저한테 너무 오래 계신 것 아닌가 싶을 정도로 자세히 설명해주셔서 신뢰가 갑니다. 간호사 선생님들도 이런 분위기를 만드는데 큰 역할을 하십니다. 너무 친절하고, 자세히 안내해주십니다. 여기서 이제 정기검진 정착하려고 합니다."
            },
            {
                "nickname": "루콤미쉬",
                "reviewCount": "리뷰 12",
                "photoCount": "사진 2",
                "followerCount": "팔로워 1",
                "message": "임플란트 치료로 많은 곳을 알아봤는데, 여기만큼 만족스러운 곳이 없었어요. 전문적인 설명과 세심한 치료 과정이 인상 깊었습니다. 치료 후 결과에 매우 만족하며, 모든 과정이 통증 없이 진행되어 너무 감사드려요. 직원분들의 친절함과 전문성 덕분에 앞으로도 정기적으로 이용할 계획입니다. 강력 추천합니다!"
            },
            {
                "nickname": "사룡신",
                "reviewCount": "리뷰 12",
                "photoCount": "사진 2",
                "followerCount": "팔로워 1",
                "message": "이번에 임플란트 치료를 처음 받아봤는데, 여기 치과의 섬세한 손길과 전문적인 상담 덕분에 큰 걱정 없이 치료를 받을 수 있었습니다. 치료 과정 전반에 걸쳐 상세하게 설명해 주셔서, 어떤 절차를 거치는지 정확히 이해할 수 있었어요. 또한, 치료 후 관리에 대해서도 꼼꼼하게 안내받았습니다. 정말 감사드리고, 앞으로도 계속 이용할 생각입니다."
            },
            {
                "nickname": "asdz891",
                "reviewCount": "리뷰 91",
                "photoCount": "사진 21",
                "followerCount": "팔로워 4",
                "message": "친구 추천으로 방문한 치과인데, 기대 이상이었습니다. 특히 임플란트에 대한 깊은 지식과 경험을 바탕으로 한 상담이 인상 깊었어요. 치료 과정이 생각보다 편안하고, 결과도 매우 만족스러웠습니다. 모든 직원분들이 환자를 편안하게 해주시려는 노력이 느껴져서 좋았고, 위생 상태도 매우 청결했습니다. 다음에도 무조건 여기로 결정했어요!"
            }
        ];


    const doubledLogos = [...logos, ...logos];
    const reviewsLength = reviews.length;

    return (
        <section
            aria-label="ReviewSlider"
            className="w-full h-auto flex flex-col justify-start items-center mt-16 sm:mt-20 lg:mt-24 cxl:mt-28"
        >
            <div className="flex flex-col justify-center w-9/10 h-auto mb-2 sm:mb-4 clg:min-w-940 clg:max-w-1250 cxl:w-85/100 c2xl:w-1900 c3xl:w-2400">
                <h1 className="font-bold mb-1 w-full text-xl sm:text-2xl lg:text-3xl lg:w-4/5 cxl:text-4xl">
                    리뷰가 만족하는 앱.
                </h1>
                <h4 className="font-medium w-full mt-2 text-lg sm:text-xl lg:text-2xl lg:w-4/5 cxl:text-3xl">
                    모두가 만족하는 잡스의 리뷰를 확인해보세요.
                </h4>
            </div>
            <div className="w-9/10 h-auto overflow-hidden clg:w-88/100 clg:min-w-940 clg:max-w-1250 cxl:w-85/100 c2xl:w-1900 c3xl:w-2400">
                <div className="w-max flex flex-nowrap gap-4 p-4 animate-slide hover:[animation-play-state:paused]">
                    {doubledLogos.map((logo, index) => (
                        <Card
                            key={index}
                            review={reviews[index % reviewsLength]}
                            src={logo.src}
                            alt={logo.alt}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

const Card = ({ review, src, alt }) => {
    return (
        <div className="w-80 cs:w-96 sm:w-330 lg:w-410 h-auto bg-white p-3 rounded-lg shadow-md flex flex-col items-start">
            <div className="flex justify-center items-center">
                <div className="w-12 h-12 flex justify-start items-center relative">
                    <img
                        alt={alt}
                        src={src}
                        className="rounded-full object-cover"
                    />
                </div>
                <div className="pl-2 flex h-auto flex-col">
                    <span className="text-base text-black font-semibold cs:text-lg lg:text-xl ">
                        {review.nickname}
                    </span>
                    <span className="text-sm text-gray_500 cs:text-base lg:text-lg">
                        {review.reviewCount} · {review.photoCount} ·
                        {review.followerCount}
                    </span>
                </div>
            </div>
            <div className="h-auto flex justify-center items-center">
                <p className="text-sm mt-2 h-auto text-black cs:text-base lg:text-lg">
                    {review.message}
                </p>
            </div>
        </div>
    );
};
