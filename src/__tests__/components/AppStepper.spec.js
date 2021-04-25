import React from 'react';
import { shallow } from 'enzyme';
import { TestableAppStepper, mapStateToProps} from '../../components/Shared/AppStepper';

describe('AppStepper Component', () => {
    let props;

    beforeEach(() =>{
        props = {
            actionSetActiveStep: jest.fn(),
            steps: ['step-1', 'step-2', 'step-3'],
            activeStep: 2,
            completedSteps: {mockkey: 'step-1'},
        };
    });

    it('should render correctly', () => {
        const renderedModule = shallow(<TestableAppStepper {...props} />);
        expect(renderedModule).toMatchSnapshot();
    });

    it('should call actionSetActiveStep when any step button is clicked', () => {
        const renderedModule = shallow(<TestableAppStepper {...props} />);
        renderedModule.find('#step-button').at(0).simulate('click');
        expect(props.actionSetActiveStep).toHaveBeenCalledTimes(1);
    });

    describe('mapStateToProps', () => {
        const completedStepsMock = {
            mockkey: 'mockValue',
        };
        const activeStepMock = 1;

        const mockedState = {
            completedSteps: completedStepsMock,
            activeStep: activeStepMock,
        };

        it('should return the module state from the redux store', () => {
            const mockPropsFromRedux = mapStateToProps(mockedState);
            expect(mockPropsFromRedux).toEqual(
                {
                    completedSteps: completedStepsMock,
                    activeStep: activeStepMock,
                }
            )
        })
    })
})