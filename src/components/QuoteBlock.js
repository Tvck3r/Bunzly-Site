import React from 'react';
import './component-css/QuoteBlock.css'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { checkPropTypes } from 'prop-types';

const QuoteBlock = (props) => {
    return(
        <div>
            <blockquote class="blockquote">
                <p>Morales ha convertido la ya dúctil democracia boliviana en una plastilina con la que sus manos juegan a su antojo.</p>
            </blockquote>
            <br />
            <p>quote guy</p>
        </div>

    );
}


export default QuoteBlock;