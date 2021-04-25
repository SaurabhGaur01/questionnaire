import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { setOccupation } from '../../ducks/userInput/inputOccupation';

const UserOccupation = ({
    actionSetOccupation,
    occupation,
}) =>{
    const handleChange = (event) => {
        actionSetOccupation(event.target.value);
    };

    return (
        <div className="card card-container">
            <div className="card-body">
                <h5 className="card-title">What's your Occupation ?</h5>
                <div className="form-check">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="occupation" 
                        value="EMPLOYED"
                        checked={occupation === "EMPLOYED"}
                        onChange={handleChange}
                        id="occupation-id"
                    />
                    <label className="form-check-label">
                        Employed
                    </label>
                </div>

                <div className="form-check"> 
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="occupation" 
                        value="STUDENT" 
                        checked={occupation === "STUDENT"}
                        onChange={handleChange}
                    />
                    <label className="form-check-label">
                        Student
                    </label>
                </div>

                <div className="form-check">    
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="occupation" 
                        value="SELF_EMPLOYED"
                        checked={occupation === "SELF_EMPLOYED"}
                        onChange={handleChange} 
                    />
                    <label className="form-check-label">
                        Self-employed
                    </label>
                </div>
            </div>
        </div>
    );
}    

UserOccupation.propTypes = {
    actionSetOccupation: PropTypes.func.isRequired,
    occupation: PropTypes.string.isRequired,
}

const mapDispatchAsProps = {
    actionSetOccupation: setOccupation,
}

export const mapStateToProps = state => ({
    occupation: state.userInput.occupation,
});

const hocChain = compose(
    connect(mapStateToProps, mapDispatchAsProps),
);

export { UserOccupation as TestableUserOccupation };

export default hocChain(UserOccupation);