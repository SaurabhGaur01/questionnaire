import React from 'react';
import { shallow } from 'enzyme';
import { TestableUserName, mapStateToProps} from '../../components/CustomerInputs/UserName';

describe('UserName Component', () => {
    let props;

    beforeEach(() =>{
        props = {
            actionSetName: jest.fn(),
            firstName: 'mockFirstName',
        };
    });

    it('should render correctly', () => {
        const renderedModule = shallow(<TestableUserName {...props} />);
        expect(renderedModule).toMatchSnapshot();
    });

    it('should call actionSetName when any input entered', () => {
        const renderedModule = shallow(<TestableUserName {...props} />);
        renderedModule.find('#userName-required').at(0).simulate('change', {"target":{"value": 'mockName'}});
        expect(props.actionSetName).toHaveBeenCalledTimes(1);
    });

    describe('mapStateToProps', () => {
        const firstNameMock = 'mockName';

        const mockedState = {
            userInput: {
                firstName: firstNameMock,
            }
        };

        it('should return the module state from the redux store', () => {
            const mockPropsFromRedux = mapStateToProps(mockedState);
            expect(mockPropsFromRedux).toEqual(
                {
                    firstName: firstNameMock,
                }
            )
        })
    })
})