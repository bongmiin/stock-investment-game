import BaseBalanceCard from './BaseBalanceCard';

const PRICES_R4 = {
  '나무바이오': 15000,
  '그린팜': 70000,
  'LOL전자': 60000,
  '나무자동차': 200000,
  '그린에너지': 190000,
};

export default function BalanceCard_r4({ teamName }: { teamName: string }) {
  return <BaseBalanceCard teamName={teamName} stockPrices={PRICES_R4} isFinalRound={true}/>;
}
