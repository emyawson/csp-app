import React, { Fragment } from 'react';
import { ReactComponent as Angry } from '../../../public/assets/img/smiley_angry_gray.svg';
import { ReactComponent as Annoyed } from '../../../public/assets/img/smiley_annoyed_gray.svg';
import { ReactComponent as Happy } from '../../../public/assets/img/smiley_happy_gray.svg';
import { ReactComponent as Neutral } from '../../../public/assets/img/smiley_neutral_gray.svg';
import { ReactComponent as VeryHappy } from '../../../public/assets/img/smiley_very_happy_gray.svg';

// styles
import './Survey.scss';

const Survey = () => (
        <Fragment>
            <div className="container">
                <div className="container__title">
                    <h4>How was your experience today?</h4>
                </div>
                <div className="container__images">
                    <Angry alt="Angry" className="container__images__angry" />
                    <Annoyed alt="Annoyed" className="container__images__annoyed" />
                    <Happy alt="Neutral" className="container__images__neutral" />
                    <Neutral alt="Happy" className="container__images__happy" />
                    <VeryHappy alt="Very Happy" className="container__images__very-happy" />
                </div>
            </div>
        </Fragment>
);

export default Survey;
