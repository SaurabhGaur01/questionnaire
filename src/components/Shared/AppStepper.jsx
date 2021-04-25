import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import { setActiveStep } from '../../ducks/activeStep';

const AppStepper = ({ 
    activeStep,
    completedSteps,
    steps,
    actionSetActiveStep
}) =>{
    const handleStep = (step) => () => {
        actionSetActiveStep(step);
    };

    return (
        <Stepper nonLinear activeStep={activeStep}>
            {steps.map((label, index) => (
                <Step key={label}>
                    <StepButton id="step-button" onClick={handleStep(index)} completed={completedSteps[index]}>
                        {label}
                    </StepButton>
                </Step>
            ))}
        </Stepper>
    );
}    

AppStepper.propTypes = {
    activeStep: PropTypes.number.isRequired,
    completedSteps: PropTypes.shape({}).isRequired,
    steps: PropTypes.arrayOf(PropTypes.string).isRequired,
    actionSetActiveStep: PropTypes.func.isRequired,
}

const mapDispatchAsProps = {
    actionSetActiveStep: setActiveStep,
}

export const mapStateToProps = state => ({
    completedSteps: state.completedSteps,
    activeStep: state.activeStep,
});

const hocChain = compose(
    connect(mapStateToProps, mapDispatchAsProps),
);

export { AppStepper as TestableAppStepper };

export default hocChain(AppStepper);