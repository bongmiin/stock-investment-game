import BaseBalanceCard from './BaseBalanceCard';

const PRICES_R1 = {
  '나무바이오': 10000,
  '그린팜': 50000,
  'LOL전자': 40000,
  '나무자동차': 200000,
  '그린에너지': 250000,
};

export default function BalanceCard_r1({ teamName }: { teamName: string }) {
  return <BaseBalanceCard teamName={teamName} stockPrices={PRICES_R1} />;
}
