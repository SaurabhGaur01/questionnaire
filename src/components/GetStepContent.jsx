import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import UserName from './CustomerInputs/UserName';
import UserChildren from './CustomerInputs/UserChildren';
import UserEmail from './CustomerInputs/UserEmail';
import UserAddress from './CustomerInputs/UserAddress';
import UserOccupation from './CustomerInputs/UserOccupation';

const GetStepContent = ({ activeStep }) => {
    switch (activeStep) {
        case 0:
            return (
                <UserName />
            );
        case 1:
            return (
                <UserAddress />
            );
        case 2:
            return (
                <UserOccupation />
            );
        case 3:
            return (
                <UserChildren />
            );
        case 4:
            return (
                <UserEmail />
            );
        default:
            return <UserName />;
    }
}

GetStepContent.propTypes = {
    activeStep:  PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
    activeStep: state.activeStep,
});

const hocChain = compose(
    connect(mapStateToProps),
);

export { GetStepContent as TestableGetStepContent };

export default hocChain(GetStepContent);