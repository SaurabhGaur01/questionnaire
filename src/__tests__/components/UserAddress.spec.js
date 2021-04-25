import React from 'react';
import { shallow } from 'enzyme';
import { TestableUserAddress, mapStateToProps} from '../../components/CustomerInputs/UserAddress';

describe('UserAddress Component', () => {
    let props;

    beforeEach(() =>{
        props = {
            actionSetAddress: jest.fn(),
            address: 'mockAddress',
        };
    });

    it('should render correctly', () => {
        const renderedModule = shallow(<TestableUserAddress {...props} />);
        expect(renderedModule).toMatchSnapshot();
    });

    it('should call actionSetAddress when any input entered', () => {
        const renderedModule = shallow(<TestableUserAddress {...props} />);
        renderedModule.find('#UserAddress-required').at(0).simulate('change', {"target":{"value": 'mockKey'}});
        expect(props.actionSetAddress).toHaveBeenCalledTimes(1);
    });

    describe('mapStateToProps', () => {
        const addressMock = 'mockAddress';

        const mockedState = {
            userInput: {
                address: addressMock,
            }
        };

        it('should return the module state from the redux store', () => {
            const mockPropsFromRedux = mapStateToProps(mockedState);
            expect(mockPropsFromRedux).toEqual(
                {
                    address: addressMock, 
                }
            )
        })
    })
})