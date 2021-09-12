import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

function ScrollToTop({ history }) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      // Smooth behaviour from smoothscroll.polyfill() in index.js
      window.scroll({ top: 50, left: 0, behavior: 'smooth' });
    });
    return () => {
      unlisten();
    };
  }, []);

  return (null);
}

export default withRouter(ScrollToTop);
