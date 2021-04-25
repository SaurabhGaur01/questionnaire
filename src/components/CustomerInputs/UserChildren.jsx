import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { setChildren } from '../../ducks/userInput/inputChildren';
import { setChildrenPresent } from '../../ducks/userInput/hasChildren';

const UserChildren = ({
    actionSetChildren,
    numberOfChildren,
    actionSetChildrenPresent,
    hasChildren,
}) =>{
    const handleChange = (event) => {
        actionSetChildrenPresent(event.target.value);
    };

    const handleNoOfChildren = (event) => {
        actionSetChildren(parseInt(event.target.value));
    };

    return (
        <div className="card card-container">
            <div className="card-body">
                <h5 className="card-title">Do you have any children ?</h5>
                <div className="form-check">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="children" 
                        value="yes"
                        checked={hasChildren === "yes"}
                        onChange={handleChange}
                    />
                    <label className="form-check-label">
                        Yes
                    </label>
                </div>

                <div className="form-check">    
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="children" 
                        value="no"
                        checked={hasChildren === "no"}
                        onChange={handleChange} 
                    />
                    <label className="form-check-label">
                        No
                    </label>
                </div>
                {
                    hasChildren === 'yes' && (
                        <div className="mt-5">
                            <h5 className="card-title"> How many children do you have ?</h5>
                            <div className="form-group">
                                <input 
                                    id="children-number" 
                                    className="form-control" 
                                    type="number" 
                                    placeholder="No of Children" 
                                    onChange={handleNoOfChildren}
                                    value={numberOfChildren}
                                />
                            </div>
                        </div> 
                    )
                }   
            </div>
        </div>
    );
}    

UserChildren.propTypes = {
    actionSetChildren: PropTypes.func.isRequired,
    numberOfChildren: PropTypes.number.isRequired,
    hasChildren: PropTypes.string.isRequired,
    actionSetChildrenPresent: PropTypes.func.isRequired,
}

const mapDispatchAsProps = {
    actionSetChildren: setChildren,
    actionSetChildrenPresent: setChildrenPresent,
}

export const mapStateToProps = state => ({
    numberOfChildren: state.userInput.numberOfChildren,
    hasChildren: state.hasChildren,
});

const hocChain = compose(
    connect(mapStateToProps, mapDispatchAsProps),
);

export { UserChildren as TestableUserChildren };

export default hocChain(UserChildren);