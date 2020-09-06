import { useRouter } from 'next/router';
import Card from '../../Common/Card/Card';

import './PartyItem.module.scss';
import { route } from 'next/dist/next-server/server/router';

const PartyCard = (props) => {
  const router = useRouter();
  const {
    party: {
      id,
      attributes: {
        flag_image: flagImage,
        seal_image: sealImage,
        name_burmese: nameBurmese,
        region,
      }
    },
  } = props;

  const sealImageStyle = {
    width: 64,
    height: 64,
    backgroundImage: `url(${sealImage})`
  };

  return (
    <li className="PartyItem">
      <Card className="PartyItem__Card cursor-pointer" onClick={() => router.push(`/parties/[party]`, `/parties/${id}`)}>
        <div className="PartyItem__image" style={sealImageStyle}></div>
        <div className="PartyItem__Description">
          <div className="name">{nameBurmese}</div>
          <div className="text-muted constituency">{region}</div>
        </div>
      </Card>
    </li>
  );
};

export default PartyCard;
