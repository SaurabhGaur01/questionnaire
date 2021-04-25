import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { setAddress } from '../../ducks/userInput/inputAddress';

const UserAddress = ({
    actionSetAddress,
    address,
}) =>{
    const addAddress = event => {
        actionSetAddress(event.target.value);
    }

    return (
        <div className="card card-container">
            <div className="card-body">
                <h5 className="card-title"> What's your Address ?</h5>
                <div className="form-group">
                    <input 
                        id="UserAddress-required" 
                        className="form-control" 
                        type="text" 
                        placeholder="User Address" 
                        onChange={addAddress}
                        value={address}
                    />
                </div>
            </div>
        </div>
    );
}    

UserAddress.propTypes = {
    actionSetAddress: PropTypes.func.isRequired,
    address: PropTypes.string.isRequired,
}

const mapDispatchAsProps = {
    actionSetAddress: setAddress,
}

export const mapStateToProps = state => ({
    address: state.userInput.address,
});

const hocChain = compose(
    connect(mapStateToProps, mapDispatchAsProps),
);

export { UserAddress as TestableUserAddress };

export default hocChain(UserAddress);