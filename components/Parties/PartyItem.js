import { useRouter } from 'next/router';
import Card from '../Common/Card/Card';

import './PartyItem.module.scss';
import { route } from 'next/dist/next-server/server/router';

const PartyCard = (props) => {
  const router = useRouter();
  const {
    party: {
      id,
      attributes: {
        name_burmese: nameBurmese,
        region,
      }
    },
  } = props;

  return (
    <li className="PartyItem">
      <Card className="PartyItem__Card cursor-pointer" onClick={() => router.push(`/parties/[party]`, `/parties/${id}`)}>
        <div style={{
          width: 64,
          height: 64,
          backgroundImage: `url("//via.placeholder.com/150}")`
        }}></div>
        <div className="PartyItem__Description">
          <div className="name">{nameBurmese}</div>
          <div className="text-muted constituency">{region}</div>
        </div>
      </Card>
    </li>
  );
};

export default PartyCard;
