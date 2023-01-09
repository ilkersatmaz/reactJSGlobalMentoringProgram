import { render } from '@testing-library/react';
import React from 'react';
import Header from './Header';

describe('Header component', () => {
  it("should match the snapshot", () => {  
    const onSearchClick = jest.fn();
    const isMovieBannerOpen=jest.fn();
    const { asFragment } = render(<Header isMovieBannerOpen={isMovieBannerOpen} onSearchClick={onSearchClick}/>);
    
    expect(asFragment).toMatchSnapshot();
  });
})