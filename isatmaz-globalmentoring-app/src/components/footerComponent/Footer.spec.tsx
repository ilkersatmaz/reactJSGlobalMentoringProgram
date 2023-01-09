import { render } from '@testing-library/react';
import React from 'react';
import Footer from './Footer';

describe('Footer component', () => {
  it("should match the snapshot", () => {  
    const { asFragment } = render(<Footer/>);
    
    expect(asFragment).toMatchSnapshot();
  });
})