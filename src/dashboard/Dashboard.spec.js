import React from 'react';
import Dashboard from './Dashboard';
import {render} from 'react-testing-library';

describe('Dashboard Component', () => {
    it('rendered display', () => {
        const {getByText} = render(<Dashboard/>);
        getByText(/Lock Gate/);
        getByText(/Unlocked/);
    })

    it('defaults to unlocked and open', () => {
        const {getByText} = render(<Dashboard/>);
        getByText(/Unlocked/);
        getByText(/Open/);
    })
})