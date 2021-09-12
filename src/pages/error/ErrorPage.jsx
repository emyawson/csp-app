import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BCrumb from '../../components/Bcrumb/BCrumb.jsx';
import Layout from '../../components/layout/Layout.jsx';
import { selectPages } from '../../store/selectors';
import './ErrorPage.scss';

const ErrorPage = () => {
  const pages = useSelector(selectPages);
  const [messageError, setMessageError] = useState('');

  useEffect(() => {
    if (pages.error) {
      setMessageError(pages.error.message);
    }
  }, [pages]);

  return (
    <Layout>
      <BCrumb />
      <div className="error-page">
        <h1>Ups!, something went wrong!</h1>
        <p>{messageError}</p>
      </div>
    </Layout>
  );
};

export default withRouter(ErrorPage);
