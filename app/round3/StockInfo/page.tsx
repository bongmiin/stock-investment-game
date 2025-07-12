import NavButton from '@/components/NavButton';
import StockViewer from "@/components/StockViewer";


const stocks = [
  { nameImg: '/name_namuBio.png', 
    desc: `개발한 약물투여 원천기술의 수요처가 없어 난항을 겪음.`, 
price: '100,000원  ▼10,000(9.1%)', 
icon: '/namuBio.png' },
  { nameImg: '/name_greenParm.png',
    desc: `주식 시장 호황으로 
ESG 관련 사업에 
관심이 집중됨.`,
    price: '50,000원   ▲10,000(25%)',
    icon: '/greenParm.png' },
  { nameImg: '/name_lolElec.png',
    desc: '국제 시장에서 반도체 수요가 회복되고, 환율 상승으로 인한 수출이 증가하면서 매출 증가',
    price: '45,000원  ▲15,000(50%)',
    icon: '/lolElec.png' },
  { nameImg: '/name_namuCar.png',
    desc: '전기차 시장의 성장이 미미하고, 수소차에 대한 개발에 관심이 집중됨.',
    price: '180,000원,  ▼10,000(5.2%)',
    icon: '/namuCar.png' },
  { nameImg: '/name_greenEnergy.png', 
    desc: '초고효율 양자 발전 기술을 개발하여 우리나라에서도 탄소제로, RE100을 달성할 수 있을 것이라는 기대가 생김.',
    price: '380,000원   ▲150,000(65%)',
    icon: '/greenEnergy.png' },
];

export default function Page() {
  return (
    <main className="inner-content">
      <StockViewer stocks={stocks} />
      <NavButton to="/music" label="미니게임" className="button" />
    </main>

  );
}