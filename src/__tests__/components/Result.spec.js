import React from 'react';
import { shallow } from 'enzyme';
import { TestableResult, mapStateToProps } from '../../components/Result';
import { LOADING_ERROR, LOADING_IN_PROGRESS, LOADING_SUCCESS } from '../../constants/steps';

describe('Result Component', () => {
    let props;

    beforeEach(() =>{
        props = {
            actionHandleReset: jest.fn(),
            loadingStatus: LOADING_SUCCESS,
            searchResults: [{
                type: 'mockType',
                price: {
                    amount: 100,
                    periodicity: 'month'
                }
            }]
        };
    });

    it('should render correctly', () => {
        const renderedModule = shallow(<TestableResult {...props} />);
        expect(renderedModule).toMatchSnapshot();
    });

    it('should render correctly when loadingStatus is in Progress', () => {
        props.loadingStatus = LOADING_IN_PROGRESS;
        const renderedModule = shallow(<TestableResult {...props} />);
        expect(renderedModule).toMatchSnapshot();
    });

    it('should render correctly when loadingStatus is in Error', () => {
        props.loadingStatus = LOADING_ERROR;
        const renderedModule = shallow(<TestableResult {...props} />);
        expect(renderedModule).toMatchSnapshot();
    });

    it('should call actionHandleReset when RESET button is clicked', () => {
        const renderedModule = shallow(<TestableResult {...props} />);
        renderedModule.find('#reset-button').at(0).simulate('click');
        expect(props.actionHandleReset).toHaveBeenCalledTimes(1);
    });

    describe('mapStateToProps', () => {
        const loadingStatusMock = 'loadingStatusMock';
        const searchResultsMock = [{
            mockkey: 'mockValue',
        }]

        const mockedState = {
            searchResults: searchResultsMock,
            loadingStatus: loadingStatusMock,
        };

        it('should return the module state from the redux store', () => {
            const mockPropsFromRedux = mapStateToProps(mockedState);
            expect(mockPropsFromRedux).toEqual(
                {
                    searchResults: searchResultsMock,
                    loadingStatus: loadingStatusMock
                }
            )
        })
    })
})