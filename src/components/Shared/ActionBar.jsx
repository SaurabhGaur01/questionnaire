import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { setActiveStep } from '../../ducks/activeStep';

const ActionBar = ({
    activeStep,
    handleComplete,
    stepsLength,
    completedSteps,
    actionSetActiveStep,
}) => {
    const handleBack = () => {
        actionSetActiveStep(activeStep - 1);
    };

    return (
        <div className="action-buttons">
            <button 
                id ="back-button" 
                type="button" 
                className="btn btn-secondary"
                disabled={activeStep === 0} 
                onClick={handleBack}
            >
                Back
            </button>
            <button 
                id ="complete-button" 
                type="button" 
                className="btn btn-primary"
                onClick={handleComplete}
            >
            {
                Object.keys(completedSteps).length === stepsLength - 1 
                ? 'Finish' : 'Next'
            }
            </button>
        </div> 
    )
}

ActionBar.propTypes = {
    stepsLength: PropTypes.number.isRequired,
    activeStep: PropTypes.number.isRequired,
    handleComplete: PropTypes.func.isRequired,
    actionSetActiveStep: PropTypes.func.isRequired,
    completedSteps: PropTypes.shape({}).isRequired,
}

const mapDispatchAsProps = {
    actionSetActiveStep: setActiveStep,
}

export const mapStateToProps = state => ({
    stepsLength: state.stepsLength,
    completedSteps: state.completedSteps,
    activeStep: state.activeStep,
});

const hocChain = compose(
    connect(mapStateToProps, mapDispatchAsProps),
);

export { ActionBar as TestableActionBar };

export default hocChain(ActionBar);