import { render } from '@testing-library/react';
import React from 'react';
import ConfirmationPopup from './ConfirmationPopup';

describe('Confirmation Popup component', () => {
  it("should match the snapshot", () => {  
    const setIsConfirmationOpen=jest.fn();
    const { asFragment } = render(<ConfirmationPopup setIsConfirmationOpen={setIsConfirmationOpen}/>);
    
    expect(asFragment).toMatchSnapshot();
  });
})