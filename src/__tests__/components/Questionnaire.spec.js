import React from 'react';
import { shallow } from 'enzyme';
import { TestableQuestionnaire, mapStateToProps} from '../../components/Questionnaire';

describe('Questionnaire Component', () => {
    let props;

    beforeEach(() =>{
        props = {
            actionHandleResult: jest.fn(),
            actionSetActiveStep: jest.fn(),
            actionSetStepAsCompleted: jest.fn(),
            actionSetStepsLength: jest.fn(),
            stepsLength: 3,
            activeStep: 2,
            completedSteps: {mockkey: 'mockValue'},
        };
    });

    it('should render correctly', () => {
        const renderedModule = shallow(<TestableQuestionnaire {...props} />);
        expect(renderedModule).toMatchSnapshot();
    });

    it('should render correctly when all steps completed', () => {
        props.stepsLength = 1;
        const renderedModule = shallow(<TestableQuestionnaire {...props} />);
        expect(renderedModule).toMatchSnapshot();
    });

    it('should call actionSetStepsLength when component mounts', () => {
        jest.spyOn(React, 'useEffect').mockImplementationOnce(f => f());
        const { actionSetStepsLength, actionSetActiveStep} = props;
        shallow(<TestableQuestionnaire {...props} />);
        expect(actionSetStepsLength).toHaveBeenCalledTimes(1);
        expect(actionSetActiveStep).toHaveBeenCalledTimes(1);
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