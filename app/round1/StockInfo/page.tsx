import NavButton from '@/components/NavButton';
import StockViewer from "@/components/StockViewer";


const stocks = [
  { nameImg: '/name_namuBio.png', desc: '바이오 및 의료 기술 분야에 특화된 기업으로, 신약 개발과 첨단 의료기기 개발에 주력하고 있다.', price: '1주당 10만원', icon: '/namuBio.png' },
  { nameImg: '/name_greenParm.png', desc: '친환경 농업 기술을 바탕으로 스마트팜 사업을 영위하는 기업이다. 기후변화와 식량 안보 이슈가 부각되면서 주목받고 있다.', price: '1주당 5만원', icon: '/greenParm.png' },
  { nameImg: '/name_lolElec.png', desc: '가전 및 IT 기기 제조 기업으로, 반도체를 생산하여 국내외로 판매하고 있으며, 최근 5G, AI 등 신기술 분야에 진출하고 있다.', price: '1주당 4만원', icon: '/lolElec.png' },
  { nameImg: '/name_namuCar.png', desc: '친환경 자동차 및 배터리 기술 개발에 주력하는 기업. 전기차 시장 확대와 탄소중립 기조로 주목받고 있다.', price: '1주당 20만원', icon: '/namuCar.png' },
  { nameImg: '/name_greenEnergy.png', desc: '신재생에너지 발전 및 관련 기술 개발에 주력하는 기업', price: '1주당 20만원', icon: '/greenEnergy.png' },
];

export default function Page() {
  return (
    <main className="inner-content">
      <StockViewer stocks={stocks} />
      <NavButton to="/round1/step3" label="투자 시작" className="button" />
    </main>

  );
}