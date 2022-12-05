import React from 'react';
import ReactDom from 'react-dom';

import App from './components/app/app';
import {Films} from './mock-data';

ReactDom.render(
    <App films={Films}/>,
    document.querySelector(`#root`)
);
