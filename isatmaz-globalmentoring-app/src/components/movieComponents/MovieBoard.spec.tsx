import { render } from '@testing-library/react';
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { TypeOf } from 'yup';
import MovieBoard from './MovieBoard';

jest.mock('../../hooks',() => ({
    useAppSelector: () => jest.fn(),
    useAppDispatch: () => jest.fn(),    
}));

jest.mock('./MovieList',() => {
    const MovieList = () => <div>MovieList component</div>
    return MovieList
  })

const mockNavigate = jest.fn();
let mockedFetch: jest.Mocked<typeof useSearchParams>;
jest.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate,
  useSearchParams: () => [new URLSearchParams({ title: "galaxy", sortBy: "release_date", genre: "Action" })],
}));
  
describe('MovieBoard component', () => {
  it("should match the snapshot", () => {  
    const searchText=jest.fn();
    const setSearchText=jest.fn();
    const mockFn=jest.fn();
    const { asFragment } = render(<MovieBoard searchText={searchText} setSearchText={setSearchText} onMovieClick={mockFn}/>);
    
    expect(asFragment).toMatchSnapshot();
  });
})