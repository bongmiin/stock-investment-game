import NavButton from '@/components/NavButton';
import StockViewer from "@/components/StockViewer";


const stocks = [
  { nameImg: '/name_namuBio.png', desc: `개발한 약물투여 원천기술에 대해 미국 대형 제약회사와 독점 계약을 맺어 앞으로의 기술 상용화와 의료 환경의 개선이 기대됨
`, price: '150,000원  ▲50,000(50%)', icon: '/namuBio.png' },
  { nameImg: '/name_greenParm.png',
    desc: `스마트팜에 대한 
정부의 대규모 지원에 힘입어 해외 20개 국에 스마트팜 
기기 수출 계약을 맺음.`,
    price: '70,000원   ▲20,000(40%)',
    icon: '/greenParm.png' },
  { nameImg: '/name_lolElec.png',
    desc: '반도체 시장의 지속적인 성장과 더불어 새롭게 출시한 스마트폰의 히트로 인해 영업이익의 대폭 상승이 기대됨',
    price: '60,000원  ▲15,000(33.3%)',
    icon: '/lolElec.png' },
  { nameImg: '/name_namuCar.png',
    desc: '내연기관 자동차 판매에 대한 정부의 제재가 강해지며 전기차에 대한 수요가 증가함',
    price: '200,000원,  ▲20,000(11.1%)',
    icon: '/namuCar.png' },
  { nameImg: '/name_greenEnergy.png', 
    desc: '내수 주목받았던 신 기술에 대한 실망감으로 인해 주가 대폭 하락 전력 수요가 감소',
    price: '190,000원  ▼190,000(50%)',
    icon: '/greenEnergy.png' },
];

export default function Page() {
  return (
    <main className="inner-content">
      <StockViewer stocks={stocks} />
      <NavButton to="step3" label="게임 종료" className="button" />
    </main>

  );
}