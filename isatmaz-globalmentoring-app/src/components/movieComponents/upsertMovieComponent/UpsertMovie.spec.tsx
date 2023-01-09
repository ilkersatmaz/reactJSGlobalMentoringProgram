import { render } from '@testing-library/react';
import React from 'react';
import UpsertMovie from './UpsertMovie';
import { movieResponse } from '../../../../__mocks__/response-mock';

jest.mock('../../../hooks',() => ({
  useAppSelector: () => jest.fn(),
  useAppDispatch: () => jest.fn()
}))

describe('Upsert Popup component', () => {
  it("should match the snapshot", () => {  
    const { asFragment } = render(<UpsertMovie movieData={movieResponse.data}/>);
    
    expect(asFragment).toMatchSnapshot();
  });
})