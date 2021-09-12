import React from 'react';
import { useSelector } from 'react-redux';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { selectPages } from '../store/selectors';

const MetaTags = () => {
  const pages = useSelector(selectPages);
  return (
    <HelmetProvider>
      <Helmet>
        <title>{pages.metaTitle}</title>
        <meta name="description" content={pages.metaDescription} />
      </Helmet>
    </HelmetProvider>

  );
};

export default MetaTags;
