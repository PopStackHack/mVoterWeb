import Navigation from '../Navigation/Navigation';

import './Layout.module.scss';

const Layout = (props) => {
  const {
    children,
    shouldHideBottomNav = false,
    ...other
  } = props;

  return (
    <main id="app" className="Layout">
      <div className="d-none d-lg-block Layout__desktopLogo">
        <img src="/mvoter2020-transparent-vertical.png" alt="mVoterLogo" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 d-none-xs Layout__sideNav">
            <Navigation />
          </div>
          <div className="col-xs-12 col-lg-9">
            <div id="Layout" className="Layout__wrapper" {...other}>
              {children}
            </div>
          </div>
        </div>
      </div>
      {
        !shouldHideBottomNav &&
          <div className="d-lg-none">
            <Navigation />
          </div>
      }
      <style jsx global>{`\
      * {
        box-sizing: border-box;
      }
      html, body {
        padding: 0px;
        margin: 0px;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        position: relative;
        font-size: 15px;
        width: 100%;
        height: 100%;
        min-height: 100%;
      }

      @media (min-width: 1200px) {
        overflow: auto;
      }
    `}</style>
    </main>
  );
};

export default Layout;
