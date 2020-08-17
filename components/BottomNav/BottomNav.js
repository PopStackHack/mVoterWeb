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

  const NavComponent = ({
    link, activeIcon, inActiveIcon, text,
  }) => {
    const isSamePath = currentPath
      .split('/')
      .indexOf(link.replace('/', '')) > -1;

    if (isSamePath) {
      return (
        <>
          {activeIcon}
          <div className="text active">{text}</div>
        </>
      );
    }
    return (
      <>
        {inActiveIcon}
        <div className="text">{text}</div>
      </>
    );
  }

  return (
    <nav className="BottomNav">
      <ul className="row center-xs text-center">
        <li className="col-xs">
          <Link href="/candidates">
            <div className="BottomNav__NavItem">
              <NavComponent
                link='/candidates'
                activeIcon={ActivePeopleIcon}
                inActiveIcon={PeopleIcon}
                text="ကိုယ်စားလှယ်"
              />
            </div>
          </Link>
        </li>
        <li className="col-xs">
        <Link href="/parties" activeClassName="active">
          <div>
            <NavComponent
              link='/parties'
              activeIcon={ActiveFlagIcon}
              inActiveIcon={FlagIcon}
              text="ပါတီ"
            />
          </div>
        </Link>
        </li>
        <li className="col-xs">
          <Link href="/how_to_vote" activeClassName="active">
            <div>
              <NavComponent
                link='/how_to_vote'
                activeIcon={ActiveStarIcon}
                inActiveIcon={StarIcon}
                text="မဲပေးနည်း"
              />
            </div>
          </Link>
        </li>
        <li className="col-xs">
          <Link href="/faq" activeClassName="active">
            <div>
              <NavComponent
                link='/faq'
                activeIcon={ActiveLightBulbIcon}
                inActiveIcon={LightBulbIcon}
                text="သိမှတ်ဖွယ်"
              />
            </div>
          </Link>
        </li>
        <li className="col-xs">
        <Link href="/news" activeClassName="active">
          <div>
            <NavComponent
              link='/news'
              activeIcon={ActiveNewsIcon}
              inActiveIcon={NewsIcon}
              text="သတင်း"
            />
          </div>
        </Link>
        </li>
      </ul>
    </nav>
  );
};

export default BottomNav;
