import React from 'react';
import { shallow } from 'enzyme';
import { TestableUserEmail, mapStateToProps} from '../../components/CustomerInputs/UserEmail';

describe('UserChildren Component', () => {
    let props;

    beforeEach(() =>{
        props = {
            actionSetEmail: jest.fn(),
            email: 'mockEmail',
        };
    });

    it('should render correctly', () => {
        const renderedModule = shallow(<TestableUserEmail {...props} />);
        expect(renderedModule).toMatchSnapshot();
    });

    it('should call actionSetEmail when any input entered', () => {
        const renderedModule = shallow(<TestableUserEmail {...props} />);
        renderedModule.find('#UserEmail-required').at(0).simulate('change', {"target":{"value": '2'}});
        expect(props.actionSetEmail).toHaveBeenCalledTimes(1);
    });

    describe('mapStateToProps', () => {
        const emailMock = 'mockEmail';

        const mockedState = {
            userInput: {
                email: emailMock,
            }
        };

        it('should return the module state from the redux store', () => {
            const mockPropsFromRedux = mapStateToProps(mockedState);
            expect(mockPropsFromRedux).toEqual(
                {
                    email: emailMock,
                }
            )
        })
    })
})