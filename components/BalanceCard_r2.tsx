import BaseBalanceCard from './BaseBalanceCard';

const PRICES_R2 = {
  '나무바이오': 11000,
  '그린팜': 40000,
  'LOL전자': 30000,
  '나무자동차': 190000,
  '그린에너지': 230000,
};

export default function BalanceCard_r2({ teamName }: { teamName: string }) {
  return <BaseBalanceCard teamName={teamName} stockPrices={PRICES_R2} />;
}
