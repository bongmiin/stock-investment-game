import BaseBalanceCard from './BaseBalanceCard';

const PRICES_R1 = {
  '나무바이오': 110000,
  '그린팜': 55000,
  'LOL전자': 39000,
  '나무자동차': 82000,
  '그린에너지': 74000,
};

export default function BalanceCard_r1({ teamName }: { teamName: string }) {
  return <BaseBalanceCard teamName={teamName} stockPrices={PRICES_R1} />;
}
