import React from 'react';
import { shallow } from 'enzyme';
import { TestableGetStepContent } from '../../components/GetStepContent';

describe('GetStepContent Component', () => {
    let props;

    beforeEach(() =>{
        props = {
            activeStep: 7,
        };
    });

    it('should render UserName as default page when active step is not defined', () => {
        const renderedModule = shallow(<TestableGetStepContent {...props} />);
        expect(renderedModule).toMatchSnapshot();
    });

    it('should call UserName component when active step is 0', () => {
        props.activeStep = 0;
        const renderedModule = shallow(<TestableGetStepContent {...props} />);
        expect(renderedModule).toMatchSnapshot();
    });

    it('should cal UserAddress component when active step is 1', () => {
        props.activeStep = 1;
        const renderedModule = shallow(<TestableGetStepContent {...props} />);
        expect(renderedModule).toMatchSnapshot();
    });

    it('should render UserOccupation component when active step is 0', () => {
        props.activeStep = 2;
        const renderedModule = shallow(<TestableGetStepContent {...props} />);
        expect(renderedModule).toMatchSnapshot();
    });

    it('should render UserChildren component when active step is 0', () => {
        props.activeStep = 3;
        const renderedModule = shallow(<TestableGetStepContent {...props} />);
        expect(renderedModule).toMatchSnapshot();
    });
    
    it('should render UserEmail component when active step is 0', () => {
        props.activeStep = 4;
        const renderedModule = shallow(<TestableGetStepContent {...props} />);
        expect(renderedModule).toMatchSnapshot();
    });
})