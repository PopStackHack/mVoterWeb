import { useRouter } from 'next/router';
import Card from '../Common/Card/Card';

import './PartyItem.module.scss';
import { route } from 'next/dist/next-server/server/router';

const PartyCard = (props) => {
  const router = useRouter();
  const {
    id = 1,
    name,
    eng_name,
    party_seal
  } = props;

  return (
    <Card className="PartyItem cursor-pointer" onClick={() => router.push(`/parties/[party]`, `/parties/${id}`)}>
      <div style={{
        width: 64,
        height: 64,
        backgroundImage: `url("//via.placeholder.com/150}")`
      }}></div>
      <div className="PartyItem__Description">
        <div>စမ်းသပ်ခံ ပါတီ</div>
        <div className="text-muted constituency">ပြည်ထောင်စုတစ်ဝန်းလုံး</div>
      </div>
    </Card>
  );
};

export default PartyCard;
