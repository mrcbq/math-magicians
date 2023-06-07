import { fireEvent, render } from '@testing-library/react';
import React from 'react';
// import '@testing-library/jest-dom/extend-expect';
import Button from './Button';

describe('<Button />', () => {
  let component;

  // beforeEach(() => {
  //   component = render(<Button value="testButton" />);
  // });

  it('value as a content', () => {
    component = render(<Button value="testButton" />);

    // component.debug();
    expect(component.getByText('testButton').innerHTML).toBe('testButton');
  });

  it('test_onclick_function_is_called_when_button_is_clicked', () => {
    const handleClick = jest.fn();
    const { getByRole } = render(
      <Button value="Click me" onClick={handleClick} />,
    );
    const button = getByRole('button');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
  });
});
