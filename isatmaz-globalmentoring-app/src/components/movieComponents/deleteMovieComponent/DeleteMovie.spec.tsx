import { render } from '@testing-library/react';
import React from 'react';
import DeleteMovie from './DeleteMovie';
import { movieResponse } from '../../../../__mocks__/response-mock';

jest.mock('../../../hooks',() => ({
  useAppSelector: () => jest.fn(),
  useAppDispatch: () => jest.fn()
}))

describe('DeleteMovie component', () => {
  it("should match the snapshot", () => {  
    const setIsConfirmationOpen=jest.fn();     
    const { asFragment } = render(<DeleteMovie movieId={movieResponse.data.id} setIsConfirmationOpen={setIsConfirmationOpen}/>);    
    expect(asFragment).toMatchSnapshot();
  });
  it("should work for null", () => {    
    const { asFragment } = render(<DeleteMovie movieId={movieResponse.data.id}/>);    
    expect(asFragment).toMatchSnapshot();
  });
})