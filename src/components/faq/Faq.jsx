import React from 'react';
import { phrase } from '../../utils/phrase';
import './Faq.scss';

const currentEnv = process.env.NODE_ENV;

const Faq = () => (
<div className='faq'>
  <h2 className='faq__headline'>{phrase.searchHeadline}</h2>
    <div data-cytest='faq'>
      <km-search-integration lang='nl-NL'></km-search-integration>
      {currentEnv === 'development' ? <km-faq-accordion lazyLoad="true" listTitle="" widget="m13" faqLang="en"></km-faq-accordion> : <km-faq-accordion lazyLoad="true" listTitle="" widget="m6" faqLang="nl"></km-faq-accordion>}
    </div>
</div>
);

export default Faq;
