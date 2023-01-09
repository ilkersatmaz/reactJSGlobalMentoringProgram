import { render } from '@testing-library/react';
import React from 'react';
import MovieCard from './MovieCard';
import { movieResponse } from '../../../__mocks__/response-mock';


describe('MovieCard component', () => {
  it("should match the snapshot", () => {
    const mockFn=jest.fn();
    const { asFragment } = render(<MovieCard movieData={movieResponse.data} onMovieClick={mockFn}/>);
    
    expect(asFragment).toMatchSnapshot();
  });
})