import BottomNav from '../BottomNav/BottomNav';

const Layout = ({ children }) => {
  return (
    <main>
      {children}
      <BottomNav />
      <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        position: relative;
        min-height: 100vh;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
    </main>
  );
};

export default Layout;
