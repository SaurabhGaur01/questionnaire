import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { setStepsLength } from '../ducks/stepsLength';
import { setStepAsCompleted } from '../ducks/completedSteps';
import { setActiveStep } from '../ducks/activeStep';
import { QUESTIONNAIRE_STEPS } from '../constants/steps';
import AppStepper from './Shared/AppStepper';
import Result from './Result';
import ActionBar from './Shared/ActionBar';
import handleResult from '../thunks/handleResult';
import GetStepContent from './GetStepContent';

const Questionnaire = ({ 
    stepsLength,
    activeStep, 
    actionSetStepsLength,
    completedSteps,
    actionSetStepAsCompleted,
    actionSetActiveStep,
    actionHandleResult, 
}) => {
    React.useEffect(() => {
        // getting all steps required for Questionnaire 
        // and set FirstName as a active step for persistance
        actionSetStepsLength();
        actionSetActiveStep(0);
    }, [actionSetStepsLength, actionSetActiveStep]);

    const allStepsCompleted = () => {
        return Object.keys(completedSteps).length === stepsLength;
    };

    const handleNext = () => {
        const newActiveStep = (activeStep === stepsLength - 1) 
        && !(allStepsCompleted())
        ? // It's the last step, but not all steps have been completed,
        // find the first step that has been completed
        QUESTIONNAIRE_STEPS.findIndex((step, i) => !(i in completedSteps))
        : activeStep + 1;
        actionSetActiveStep(newActiveStep);

        // if all steps completed, make an API call
        if(allStepsCompleted()) {
            actionHandleResult();
        }
    };
    
    const handleComplete = () => {
        const newCompleted = completedSteps;
        // updating object with completed ones
        newCompleted[activeStep] = true;
        actionSetStepAsCompleted(newCompleted);
        handleNext();
    };

    return(
        <React.Fragment>
            <AppStepper steps={QUESTIONNAIRE_STEPS} />
            {
                allStepsCompleted() ? (
                    <Result allStepsCompleted={allStepsCompleted} />
                ) : (
                <React.Fragment>
                    <div className="row">
                        <div className="container">
                            <div className="col-md-4"></div>
                            <div className="col-md-6">
                                <GetStepContent />
                                <ActionBar handleComplete={handleComplete} />
                            </div>
                        </div>
                    </div>
                </React.Fragment>
                )
            }
        </React.Fragment>
    );
}    

Questionnaire.propTypes = {
    stepsLength: PropTypes.number.isRequired,
    activeStep: PropTypes.number.isRequired,
    actionSetStepsLength: PropTypes.func.isRequired,
    actionSetStepAsCompleted: PropTypes.func.isRequired,
    actionSetActiveStep: PropTypes.func.isRequired,
    completedSteps: PropTypes.shape({}).isRequired,
    actionHandleResult: PropTypes.func.isRequired,
};

// Actions dispatchers
const mapDispatchAsProps = {
    actionSetStepsLength: setStepsLength,
    actionSetStepAsCompleted: setStepAsCompleted,
    actionSetActiveStep: setActiveStep,
    actionHandleResult: handleResult,
}

// Redux store access
export const mapStateToProps = state => ({
    stepsLength: state.stepsLength,
    completedSteps: state.completedSteps,
    activeStep: state.activeStep,
});

const hocChain = compose(
    connect(mapStateToProps, mapDispatchAsProps),
);

// this is required for creating a wrapper for test coverage
export { Questionnaire as TestableQuestionnaire };

export default hocChain(Questionnaire);