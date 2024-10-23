type ShopLocation =
  | '서울시 강남구'
  | '서울시 강동구'
  | '서울시 강북구'
  | '서울시 강서구'
  | '서울시 관악구'
  | '서울시 광진구'
  | '서울시 구로구'
  | '서울시 금천구'
  | '서울시 노원구'
  | '서울시 도봉구'
  | '서울시 동대문구'
  | '서울시 동작구'
  | '서울시 마포구'
  | '서울시 서대문구'
  | '서울시 서초구'
  | '서울시 성동구'
  | '서울시 성북구'
  | '서울시 송파구'
  | '서울시 양천구'
  | '서울시 영등포구'
  | '서울시 용산구'
  | '서울시 은평구'
  | '서울시 종로구'
  | '서울시 중구'
  | '서울시 중랑구';

type ShopMenuCategory =
  | '한식'
  | '중식'
  | '일식'
  | '양식'
  | '분식'
  | '카페'
  | '편의점'
  | '기타';

interface ShopBase {
  id: string;
  name: string;
  category: ShopMenuCategory;
  address1: ShopLocation;
  address2: string;
  description: string;
  imageUrl: string;
  originalHourlyPay: number;
}

interface ShopEmployee extends ShopBase {}
interface ShopEmployer extends ShopBase {
  user: UserData;
}

type Shop = ShopEmployee | ShopEmployer;

interface ShopData {
  item: Shop;
  href: string;
}

interface DaumPostcodeData {
  address: string;
  addressType: 'R' | 'J';
  bname: string;
  buildingName: string;
  zonecode: string;
  roadAddress: string;
  roadname: string;
  jibunAddress: string;
  sido: string;
  sigungu: string;
  userSelectedType: 'R' | 'J';
}
