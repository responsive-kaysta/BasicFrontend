
import * as React from 'react';

import Hello from './Hello';
import StatefulHello from './StatefulHello';

import { Route } from 'react-router';

export default class Nav extends React.Component {
    public render() {
        return (

            <div>
                <Route path='/about' component={Hello} />
                <Route path='/contact' component={StatefulHello} />
            </div>

        );
    }
}