import React from 'react';
import { phrase } from '../../utils/phrase';
import './StillNeedHelp.scss';

const StillNeedHelp = () => (
            <div className="section">
               <h2 className='section__title'>{phrase.stillNeedHelpTitle}</h2>
               <div className='section__body'>{phrase.stillNeedHelpBody}</div>
            </div>
);

export default StillNeedHelp;
