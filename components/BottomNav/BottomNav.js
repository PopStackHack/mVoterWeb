import Link from '../Common/Link/Link';
import './BottomNav.scss';

const BottomNav = () => {
  return (
    <nav className="BottomNav">
      <ul className="row center-xs text-center">
        <li className="col-xs">
          <Link href="/candidates" activeClassName="active">
            <div>
              <i className="material-icons">people</i>
              <div>ကိုယ်စားလှယ်</div>
            </div>
          </Link>
        </li>
        <li className="col-xs">
        <Link href="/parties" activeClassName="active">
          <div>
            <i className="material-icons">outlined_flag</i>
            <div>ပါတီ</div>
          </div>
        </Link>
        </li>
        <li className="col-xs">
          <Link href="/how_to_vote">
            <div>
              <i className="material-icons">how_to_vote</i>
              <div>မဲပေးနည်း</div>
            </div>
          </Link>
        </li>
        <li className="col-xs">
          <Link href="/faq" activeClassName="active">
            <div>
              <i className="material-icons">question_answer</i>
              <div>သိမှတ်ဖွယ်</div>
            </div>
          </Link>
        </li>
        {/* <li className="col-xs">
        <Link href="/results" activeClassName="active">
          <div>
            <i className="material-icons">star_border</i>
            <div>
              မဲရလဒ်
            </div>
          </div>
        </Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default BottomNav;
