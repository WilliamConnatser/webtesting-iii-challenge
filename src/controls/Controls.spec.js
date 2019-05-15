import React from 'react';
import Controls from './Controls';
import Dashboard from './Controls';
import {render,fireEvent} from 'react-testing-library';
import helpers from '../../helpers';

describe('Controls Component',() => {
    it('the closed toggle button is disabled if the gate is locked', () => {
        const spy = jest.fn();
        const {getByText} = render(<Controls closed={true} locked={true} toggleClosed={spy}/>);
        const button = getByText(/Open Gate/);
        fireEvent.click(button);
        expect(spy).not.toBeCalled();
    });

    it('the locked toggle button is disabled if the gate is open', () => {
        const spy = jest.fn();
        const {getByText} = render(<Controls closed={false} locked={false} toggleClosed={spy}/>);
        const button = getByText(/Lock Gate/);
        fireEvent.click(button);
        expect(spy).not.toBeCalled();
    });

    it('the closed toggle button text changes when clicked', () => {
        const spy = jest.fn();
        const {getByText} = render(<Controls closed={false} locked={false} toggleClosed={spy}/>);
        const button = getByText(/Close Gate/);
        fireEvent.click(button);
        expect(spy).toHaveBeenCalled();
    });
})