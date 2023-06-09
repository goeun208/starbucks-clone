export interface MenuType {
    menu: string[];
}

export interface DropDownType {
    dropTitle: string;
    dropDownMenu: MenuType[];
}

export const DropdownData: DropDownType[] = [
    {
        dropTitle: "COFFEE",
        dropDownMenu: [
                {
                    menu: ["커피","스타벅스 원두", "스타벅스 비아", "스타벅스 앳홈 by 캡슐", "나와 어울리는 커피"],
                },
                {
                    menu: ["커피 이야기","농장에서 우리의 손으로", "최상의 아라비카 원두", "스타벅스 로스트 스펙트럼", "스타벅스 디카페인"],
                },
                {
                    menu: [ "스타벅스 리저브","RESERVE MAGAZINE"],
                },
                {
                    menu: ["에스프레소 음료", "도피오", "에스프레스 마키아또", "아메리카노", "마키아또", "카푸치노", "라떼", "모카"],
                },
                {
                    menu: ["최상의 커피를 즐기는 법", "커피 프레스", "푸어 오버", "아이스 푸어 오버", "커피 메이커"],
                },
            ]
    },
    {
        dropTitle: "MENU",
        dropDownMenu: [
                {
                    menu: ["음료", "콜드 브루", "브루드 커피", "에스프레소", "프라푸치노", "블렌디드", "스타벅스 리프레셔", "스타벅스 피지오", "티(티바나)", "기타 제조 음료", "스타벅스 주스(병음료)"],
                },
                {
                    menu: ["푸드", "브레드", "케이크", "샌드위치 & 샐러드", "따뜻한 푸드", "과일 & 요거트", "스낵 & 미니 디저트", "아이스크림"],
                },
                {
                    menu: [ "상품", "머그", "글라스", "플라스틱 텀블러", "스테인리스 텀블러", "보온병", "액세서리", "선물세트", "커피 용품", "패키지 티(티바나)", "시럽"],
                },
                {
                    menu: ["카드", "실물카드", "e-Gift 카드"],
                },
                {
                    menu: ["메뉴 이야기", "스타벅스 티바나", "콜드 브루", "나이트로 콜드브루"],
                },
            ]
    },
    {
        dropTitle: "STORE",
        dropDownMenu: [
                {
                    menu: ["매장 찾기", "퀵 검색", "지역 검색"],
                },
                {
                    menu: ["드라이브 스루 매장"],
                },
                {
                    menu: [ "스타벅스 리저브 매장"],
                },
                {
                    menu: ["커뮤니티 스토어 매장"],
                },
            ]
    },
    {
        dropTitle: "RESPONSIBILITY",
        dropDownMenu: [
                {
                    menu: ["사회공헌 캠페인 소개"],
                },
                {
                    menu: ["지역 사회 참여 활동", "희망배달 캠페인", "재능기부 카페 소식", "커뮤니티 스토어", "청년 지원 프로그램", "우리 농산물 사랑 캠페인", "우리 문화 지키기"],
                },
                {
                    menu: [ "환경보호 활동", "친환경 활동", "일회용 컵 없는 매장", "커피 원두 재활용"],
                },
                {
                    menu: ["윤리 구매", "윤리적 원두 구매", "공정무역 인증", "커피 농가 지원 활동"],
                },
                {
                    menu: ["글로벌 사회 공헌", "윤리경영 보고서", "스타벅스 재단", "지구촌 봉사의 달"],
                },
            ]
    },
    {
        dropTitle: "STARBUCKS REWARDS",
        dropDownMenu: [
                {
                    menu: ["스타벅스 리워드", "스타벅스 리워드 소개", "등급 및 혜택", "스타벅스 별", "자주 하는 질문"],
                },
                {
                    menu: ["스타벅스 카드", "스타벅스 카드 소개", "등록 및 조회", "충전 및 이용안내", "분실신고/환불신청", "자주 하는 질문"],
                },
                {
                    menu: [ "스타벅스 e-Gift Card", "스타벅스 e-Gift Card 소개", "이용안내", "선물하기", "자주 하는 질문"],
                },
            ]
    },
    {
        dropTitle: "CORPORATE SALES",
        dropDownMenu: [
                {
                    menu: ["단체 및 기업 구매 안내"],
                },
                {
                    menu: ["단체 주문 배달 안내", "단체 주문 배달 안내", "단체 주문 신청", "신청 내역 조회"],
                },
               
            ]
    },
    {
        dropTitle: "WHAT'S NEW",
        dropDownMenu: [
                {
                    menu: ["이벤트", "전체", "스타벅스 카드", "스타벅스 리워드", "온라인"],
                },
                {
                    menu: ["뉴스", "전체", "상품 출시", "스타벅스와 문화", "스타벅스 사회공헌", "스타벅스 카드출시"],
                },
                {
                    menu: ["매장별 이벤트", "일반 매장", "신규 매장"],
                },
                {
                    menu: ["공지사항"],
                },
                {
                    menu: ["월페이퍼"],
                },
            ]
    },
]