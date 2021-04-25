import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { setName } from '../../ducks/userInput/inputName';

const UserName = ({
    actionSetName,
    firstName,
}) =>{
    const addName = event => {
        actionSetName(event.target.value);
    }

    return (
        <div className="card card-container">
            <div className="card-body">
                <h5 className="card-title"> What's your First Name ?</h5>
                <div className="form-group">
                    <input 
                        id="userName-required" 
                        className="form-control" 
                        type="text" 
                        placeholder="User Name" 
                        onChange={addName}
                        value={firstName}
                    />
                </div>
            </div>
        </div>
    );
}    

UserName.propTypes = {
    actionSetName: PropTypes.func.isRequired,
    firstName: PropTypes.string.isRequired,
}

const mapDispatchAsProps = {
    actionSetName: setName,
}

export const mapStateToProps = state => ({
    firstName: state.userInput.firstName,
});

const hocChain = compose(
    connect(mapStateToProps, mapDispatchAsProps),
);

export { UserName as TestableUserName };

export default hocChain(UserName);