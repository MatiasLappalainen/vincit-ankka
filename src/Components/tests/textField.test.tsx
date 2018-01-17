import * as React from 'react';
import { shallow } from 'enzyme';

import TextField from '../TextField';

const minProps = {
    name: 'testField',
    value: '',
    variant: 'form-control',
    placeholder: '',
    onChange: () => {return 0; }
};

describe('Component: textField', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<TextField {...minProps} />);
        expect(
            wrapper.length
        ).toBe(1);
    });
});