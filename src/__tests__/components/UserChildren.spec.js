import React from 'react';
import { shallow } from 'enzyme';
import { TestableUserChildren, mapStateToProps} from '../../components/CustomerInputs/UserChildren';

describe('UserChildren Component', () => {
    let props;

    beforeEach(() =>{
        props = {
            actionSetChildren: jest.fn(),
            actionSetChildrenPresent: jest.fn(),
            numberOfChildren: 2,
            hasChildren: 'yes',
        };
    });

    it('should render correctly', () => {
        const renderedModule = shallow(<TestableUserChildren {...props} />);
        expect(renderedModule).toMatchSnapshot();
    });

    it('should call actionSetChildren when any input entered', () => {
        const renderedModule = shallow(<TestableUserChildren {...props} />);
        renderedModule.find('#children-number').at(0).simulate('change', {"target":{"value": '2'}});
        expect(props.actionSetChildren).toHaveBeenCalledTimes(1);
    });

    describe('mapStateToProps', () => {
        const numberOfChildrenMock = 2;
        const hasChildrenMock = 'yes';

        const mockedState = {
            userInput: {
                numberOfChildren: numberOfChildrenMock,
            },
            hasChildren: hasChildrenMock,
        };

        it('should return the module state from the redux store', () => {
            const mockPropsFromRedux = mapStateToProps(mockedState);
            expect(mockPropsFromRedux).toEqual(
                {
                    numberOfChildren: numberOfChildrenMock, 
                    hasChildren: hasChildrenMock,
                }
            )
        })
    })
})