import BottomNav from '../BottomNav/BottomNav';

const Layout = ({ children, shouldHideBottomNav = false }) => {
  return (
    <main id="app">
      {children}
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
        width: 100%;
        height: 100vh;
        max-height: 100vh;
        overflow: hidden;
      }
    `}</style>
    </main>
  );
};

export default Layout;
