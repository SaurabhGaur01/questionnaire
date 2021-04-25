import React from 'react';
import { shallow } from 'enzyme';
import { TestableActionBar, mapStateToProps} from '../../components/Shared/ActionBar';

describe('ActionBar Component', () => {
    let props;

    beforeEach(() =>{
        props = {
            actionSetActiveStep: jest.fn(),
            stepsLength: 3,
            activeStep: 2,
            handleComplete: jest.fn(),
            completedSteps: {mockkey: 'mockValue'},
        };
    });

    it('should render correctly', () => {
        const renderedModule = shallow(<TestableActionBar {...props} />);
        expect(renderedModule).toMatchSnapshot();
    });

    it('should show finish button when completed steps length equal to steps length', () => {
        props.stepsLength = 2;
        const renderedModule = shallow(<TestableActionBar {...props} />);
        expect(renderedModule).toMatchSnapshot();
    });

    it('should call actionSetActiveStep when BACK button is clicked', () => {
        const renderedModule = shallow(<TestableActionBar {...props} />);
        renderedModule.find('#back-button').at(0).simulate('click');
        expect(props.actionSetActiveStep).toHaveBeenCalledTimes(1);
    });

    describe('mapStateToProps', () => {
        const stepsLengthMock = 5;
        const completedStepsMock = {
            mockkey: 'mockValue',
        };
        const activeStepMock = 1;

        const mockedState = {
            stepsLength: stepsLengthMock,
            completedSteps: completedStepsMock,
            activeStep: activeStepMock,
        };

        it('should return the module state from the redux store', () => {
            const mockPropsFromRedux = mapStateToProps(mockedState);
            expect(mockPropsFromRedux).toEqual(
                {
                    stepsLength: stepsLengthMock,
                    completedSteps: completedStepsMock,
                    activeStep: activeStepMock,
                }
            )
        })
    })
})