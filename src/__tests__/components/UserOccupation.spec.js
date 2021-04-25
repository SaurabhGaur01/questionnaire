import React from 'react';
import { shallow } from 'enzyme';
import { TestableUserOccupation, mapStateToProps} from '../../components/CustomerInputs/UserOccupation';

describe('UserOccupation Component', () => {
    let props;

    beforeEach(() =>{
        props = {
            actionSetOccupation: jest.fn(),
            occupation: 'mockOccupation',
        };
    });

    it('should render correctly', () => {
        const renderedModule = shallow(<TestableUserOccupation {...props} />);
        expect(renderedModule).toMatchSnapshot();
    });

    it('should call actionSetOccupation when any input entered', () => {
        const renderedModule = shallow(<TestableUserOccupation {...props} />);
        renderedModule.find('#occupation-id').at(0).simulate('change', {"target":{"value": 'mockName'}});
        expect(props.actionSetOccupation).toHaveBeenCalledTimes(1);
    });

    describe('mapStateToProps', () => {
        const occupationMock = 'mockOccupation';

        const mockedState = {
            userInput: {
                occupation: occupationMock,
            }
        };

        it('should return the module state from the redux store', () => {
            const mockPropsFromRedux = mapStateToProps(mockedState);
            expect(mockPropsFromRedux).toEqual(
                {
                    occupation: occupationMock,
                }
            )
        })
    })
})