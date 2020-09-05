import BottomNav from '../BottomNav/BottomNav';

import './Layout.module.scss';

const Layout = (props) => {
  const {
    children,
    shouldHideBottomNav = false,
    ...other
  } = props;

  return (
    <main id="app" className="Layout">
      <div id="Layout" className="Layout__wrapper" {...other}>
        {children}
      </div>
      {
        !shouldHideBottomNav &&
          <BottomNav />
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
    `}</style>
    </main>
  );
};

export default Layout;
