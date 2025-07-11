import BaseBalanceCard from './BaseBalanceCard';

const PRICES_R3 = {
  '나무바이오': 10000,
  '그린팜': 50000,
  'LOL전자': 45000,
  '나무자동차': 180000,
  '그린에너지': 380000,
};

export default function BalanceCard_r3({ teamName }: { teamName: string }) {
  return <BaseBalanceCard teamName={teamName} stockPrices={PRICES_R3} />;
}
