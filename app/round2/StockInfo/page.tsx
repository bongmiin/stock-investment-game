import NavButton from '@/components/NavButton';
import StockViewer from "@/components/StockViewer";


const stocks = [
  { nameImg: '/name_namuBio.png', desc: `의료 파업으로 인해 
비대면 진료 기기를 개발하는 나무 바이오에 관심이 집중됨.
또한, 세계 최초로 약물투여 원천기술을 개발하였다는 발표를 함.`, price: '110,000원  ▲10,000(10%)', icon: '/namuBio.png' },
  { nameImg: '/name_greenParm.png',
    desc: `전체적인 주식 시장 불황에 가격 하락`,
    price: '40,000원   ▼10,000(20%)',
    icon: '/greenParm.png' },
  { nameImg: '/name_lolElec.png',
    desc: '고환율에도 불구하고, 국제 경기 침체에 수출 실적이 악화됨.',
    price: '30,000원   ▼10,000(25%)',
    icon: '/lolElec.png' },
  { nameImg: '/name_namuCar.png',
    desc: '전기차 시장이 기대처럼 확대되지 않았으며, 오히려 하이브리드 자동차 시장이 성장함.',
    price: '190,000원,  ▼10,000(5%)',
    icon: '/namuCar.png' },
  { nameImg: '/name_greenEnergy.png', 
    desc: '내수 부진으로 전력 수요가 감소',
    price: '230,000원   ▼20,000(8%)',
    icon: '/greenEnergy.png' },
];

export default function Page() {
  return (
    <main className="inner-content">
      <StockViewer stocks={stocks} />
      <NavButton to="/round2/step3" label="투자 시작" className="button" />
    </main>

  );
}