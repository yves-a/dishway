import React from 'react';
import { Helmet } from "react-helmet";
import '../styles/survey.scss';
import Margins from './Margins';

function Survey(props) {
    return (
        <div className='background' ref={props.innerRef}>
            <Margins>
                <Helmet>
                    <script src="https://tally.so/widgets/embed.js"></script>
                </Helmet>
                <div className='survey'>
                    <iframe data-tally-src="https://tally.so/embed/meqpee?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" width="100%" height="200" frameborder="0" marginheight="0" marginwidth="0" title="DishWay Waitlist"></iframe>
                </div>
            </Margins>
        </div>
    )
}

export default Survey;