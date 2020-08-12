import { useRouter } from 'next/router';

import Link from '../Common/Link/Link';
import PeopleIcon from '../Common/Icons/people';
import FlagIcon from '../Common/Icons/flag';
import StarIcon from '../Common/Icons/star';
import CheckboxIcon from '../Common/Icons/checkbox';
import LightBulbIcon from '../Common/Icons/lightbulb';
import NewsIcon from '../Common/Icons/news';

import './BottomNav.module.scss';

const BottomNav = () => {
  const router = useRouter();
  const currentPath = router.pathname;

  function activeFillIcon(link) {
    return currentPath === link ? '#0071dd' : '#000000';
  }

  return (
    <nav className="BottomNav">
      <ul className="row center-xs text-center">
        <li className="col-xs">
          <Link href="/candidates" activeClassName="active">
            <div className="BottomNav__NavItem">
              <PeopleIcon fill={activeFillIcon('/candidates')} />
              <div className="text">ကိုယ်စားလှယ်</div>
            </div>
          </Link>
        </li>
        <li className="col-xs">
        <Link href="/parties" activeClassName="active">
          <div>
            <FlagIcon fill={activeFillIcon('/parties')}/>
            <div className="text">ပါတီ</div>
          </div>
        </Link>
        </li>
        <li className="col-xs">
          <Link href="/how_to_vote" activeClassName="active">
            <div>
              <CheckboxIcon fill={activeFillIcon('/how_to_vote')}/>
              <div className="text">မဲပေးနည်း</div>
            </div>
          </Link>
        </li>
        <li className="col-xs">
          <Link href="/faq" activeClassName="active">
            <div>
              <LightBulbIcon fill={activeFillIcon('/faq')}/>
              <div className="text">သိမှတ်ဖွယ်</div>
            </div>
          </Link>
        </li>
        <li className="col-xs">
        <Link href="/news" activeClassName="active">
          <div>
            <div>
              <NewsIcon fill={activeFillIcon('/news')}/>
              <div className="text">သတင်း</div>
            </div>
          </div>
        </Link>
        </li>
      </ul>
    </nav>
  );
};

export default BottomNav;
