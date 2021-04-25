import React from 'react';
import { shallow } from 'enzyme';
import { TestableResetAction } from '../../components/ResetAction';

describe('ResetAction Component', () => {
    let props;

    beforeEach(() =>{
        props = {
            actionHandleReset: jest.fn(),
        };
    });

    it('should render correctly', () => {
        const renderedModule = shallow(<TestableResetAction {...props} />);
        expect(renderedModule).toMatchSnapshot();
    });

    it('should call actionHandleReset when RESET button is clicked', () => {
        const renderedModule = shallow(<TestableResetAction {...props} />);
        renderedModule.find('#reset-button').at(0).simulate('click');
        expect(props.actionHandleReset).toHaveBeenCalledTimes(1);
    });
})