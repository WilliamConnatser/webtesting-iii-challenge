// Test away!
import React from 'react';
import Display from './Display';
import {render,fireEvent} from 'react-testing-library';

describe('Display Component',() => {

    it('unlocked or open have the green-led class', () => {
        const {getByText} = render(<Display closed={false} locked={false}/>);
        const unlocked = getByText(/Unlocked/i);
        const open = getByText(/Open/i);
        expect(unlocked.classList).toContain('green-led');
        expect(open.classList).toContain('green-led');
    });

    it('locked or closed have the red-led class', () => {
        const {getByText} = render(<Display closed={true} locked={true}/>);
        const locked = getByText(/Locked/i);
        const closed = getByText(/Closed/i);
        expect(locked.classList).toContain('red-led');
        expect(closed.classList).toContain('red-led');
    });
})