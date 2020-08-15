import { useRouter } from 'next/router';

import Link from '../Common/Link/Link';
import PeopleIcon from '../Common/Icons/people';
import FlagIcon from '../Common/Icons/flag';
import StarIcon from '../Common/Icons/star';
import CheckboxIcon from '../Common/Icons/checkbox';
import LightBulbIcon from '../Common/Icons/lightbulb';
import NewsIcon from '../Common/Icons/news';
import ActivePeopleIcon from '../Common/Icons/activePeople';
import ActiveFlagIcon from '../Common/Icons/activeFlag';
import ActiveLightBulbIcon from '../Common/Icons/activeLightBulb';
import ActiveStarIcon from '../Common/Icons/activeStar';
import ActiveCheckboxIcon from '../Common/Icons/activeCheckbox';
import ActiveNewsIcon from '../Common/Icons/activeNews';

import './BottomNav.module.scss';

const BottomNav = () => {
  const router = useRouter();
  const currentPath = router.pathname;

  function routeActive(link, ActiveIcon, InActiveIcon) {
    return currentPath === link ? ActiveIcon : InActiveIcon;
  }

  return (
    <nav className="BottomNav">
      <ul className="row center-xs text-center">
        <li className="col-xs">
          <Link href="/candidates" activeClassName="active">
            <div className="BottomNav__NavItem">
              {routeActive('/candidates', ActivePeopleIcon, PeopleIcon)}
              <div className="text">ကိုယ်စားလှယ်</div>
            </div>
          </Link>
        </li>
        <li className="col-xs">
        <Link href="/parties" activeClassName="active">
          <div>
            {routeActive('/parties', ActiveFlagIcon, FlagIcon)}
            <div className="text">ပါတီ</div>
          </div>
        </Link>
        </li>
        <li className="col-xs">
          <Link href="/how_to_vote" activeClassName="active">
            <div>
              {routeActive('/how_to_vote', ActiveStarIcon, StarIcon)}
              <div className="text">မဲပေးနည်း</div>
            </div>
          </Link>
        </li>
        <li className="col-xs">
          <Link href="/faq" activeClassName="active">
            <div>
              {routeActive('/faq', ActiveLightBulbIcon, LightBulbIcon)}
              <div className="text">သိမှတ်ဖွယ်</div>
            </div>
          </Link>
        </li>
        <li className="col-xs">
        <Link href="/news" activeClassName="active">
          <div>
            <div>
              {routeActive('/news', ActiveNewsIcon, NewsIcon)}
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
