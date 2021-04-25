import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { setEmail } from '../../ducks/userInput/inputEmail';

const UserEmail = ({
    actionSetEmail,
    email,
}) =>{
    const addEmail = event => {
        actionSetEmail(event.target.value);
    }

    return (
        <div className="card card-container">
            <div className="card-body">
                <h5 className="card-title"> What's your email ?</h5>
                <div className="form-group">
                    <input 
                        id="UserEmail-required" 
                        className="form-control" 
                        type="email" 
                        placeholder="User Email" 
                        onChange={addEmail}
                        value={email}
                    />
                </div>
            </div>
        </div>
    );
}    

UserEmail.propTypes = {
    actionSetEmail: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
}

const mapDispatchAsProps = {
    actionSetEmail: setEmail,
}

export const mapStateToProps = state => ({
    email: state.userInput.email,
});

const hocChain = compose(
    connect(mapStateToProps, mapDispatchAsProps),
);

export { UserEmail as TestableUserEmail };

export default hocChain(UserEmail);