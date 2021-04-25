import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import handleReset from '../thunks/handleReset';

const ResetAction = ({
    actionHandleReset,
}) => {
    const handleReset = () => {
        actionHandleReset();
    };

    return (
        <div className="action-buttons">
            <button 
                id ="reset-button" 
                type="button" 
                className="btn btn-primary"
                onClick={handleReset}
            >
                Reset
            </button>
        </div>  
    );
}

ResetAction.propTypes = {
    actionHandleReset: PropTypes.func.isRequired,
};

const mapDispatchAsProps = {
    actionHandleReset: handleReset,
}

const hocChain = compose(
    connect(null, mapDispatchAsProps),
);

export { ResetAction as TestableResetAction };

export default hocChain(ResetAction);