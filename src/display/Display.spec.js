// Test away!
import React from 'react';
import Display from './Display';
import {render,fireEvent} from 'react-testing-library';

describe('Display Component',() => {

    it('hen unlocked or open use the green-led class', () => {
        const {getByText} = render(<Display closed={false} locked={false}/>);
        const unlockedButton = getByText(/Unlocked/i);
        const openButton = getByText(/Open/i);
        expect(unlockedButton.classList).toContain('green-led');
        expect(openButton.classList).toContain('green-led');
    });
})