import { render } from '@testing-library/react';
import React from 'react';
import { movieResponse } from '../../../__mocks__/response-mock';
import MovieBanner from './MovieBanner';
describe('MovieBanner component', () => {
  it("should match the snapshot", () => { 
    const { asFragment } = render(<MovieBanner movieData={movieResponse.data}/>);
    
    expect(asFragment).toMatchSnapshot();
  });
})