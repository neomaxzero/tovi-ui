//Change with https://github.com/zeit/next.js/commits/master/examples/with-external-scoped-css
const Logo = ({ onClick }) => {
  return (
    <div className="logoContainer" onClick={onClick}>
      <img className="logo" src='static/logo.png' alt='Tovi logo' />
      <style jsx>{`
        .logoContainer {
          height: 4em;
          margin-left: 1em;
          padding-top: 0.5em; 
          cursor: pointer;
        }
        .logo {
          height: 100%
        }
      `}</style>
    </div>
  );
};

export default Logo;