import React from 'react';
import PropTypes from 'prop-types';

// Typography
import '@ingka/base/style.scss';
// Page container
import '@ingka/page-container/style.scss';

function Layout({ children }) {
  return (
    <main className="page-container">
      <div className="page-container__inner">
        <div className="page-container__main">{children}</div>
      </div>
    </main>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
