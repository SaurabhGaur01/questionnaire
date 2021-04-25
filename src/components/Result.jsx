import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { LOADING_ERROR, LOADING_IN_PROGRESS } from '../constants/steps';
import handleReset from '../thunks/handleReset'; 

const Result = ({ 
    searchResults,
    loadingStatus,
    actionHandleReset,
}) => {
    const handleReset = () => {
        actionHandleReset();
    };

    if(loadingStatus === LOADING_ERROR) {
        return (
            <div className="alert alert-danger" role="alert">
                There is an error, Please try again after sometime
            </div>
        )
    }

    if(loadingStatus === LOADING_IN_PROGRESS){
        return (
            <div className="progress">
                <div 
                    className="progress-bar progress-bar-striped bg-success progress-bar" 
                    role="progressbar" 
                    aria-valuenow="25" 
                    aria-valuemin="0" 
                    aria-valuemax="100" />
            </div> 
        );
    }

    return (
        <React.Fragment>
            <div className="card mt-3">
                <div className="card-body">
                    <div className="result-heading">We got your recommendation</div>
                    <div className="result-sub-heading">Based on your answers, this is what make sense for you and what you should pay.</div>
                    {
                        searchResults.map(({ type, price: { amount, periodicity }}, index) => (
                            <div className="card mt-2 mb-2" key={index}>
                                <div className="card-body">
                                    <div className="inner-content">
                                        <div className="row-1">{type.split('_').join(' ')}</div>
                                        <div className="row-1">£{amount} per {periodicity.toLowerCase()}</div>
                                    </div>
                                </div>    
                            </div>    
                        ))
                    }
                </div>    
            </div>
        
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
        </React.Fragment> 
    );
}    

Result.propTypes = {
    actionHandleReset: PropTypes.func.isRequired,
    searchResults: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.string.isRequired,
        price: PropTypes.shape({
            amount: PropTypes.number.isRequired,
            periodicity: PropTypes.string.isRequired,
        })
    })),
    loadingStatus: PropTypes.string.isRequired,
}

export const mapStateToProps = state => ({
    searchResults: state.searchResults,
    loadingStatus: state.loadingStatus,
});

const mapDispatchAsProps = {
    actionHandleReset: handleReset,
}

const hocChain = compose(
    connect(mapStateToProps, mapDispatchAsProps),
);

export { Result as TestableResult };

export default hocChain(Result);