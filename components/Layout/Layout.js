import BottomNav from '../BottomNav/BottomNav';

const Layout = ({ children, shouldHideBottomNav = false }) => {
  return (
    <main>
      {children}
      {
        !shouldHideBottomNav &&
          <BottomNav />
      }
      <style jsx global>{`\
      * {
        box-sizing: border-box;
      }

      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        position: relative;
        min-height: 100vh;
        max-height: 100vh;
      }
    `}</style>
    </main>
  );
};

export default Layout;
