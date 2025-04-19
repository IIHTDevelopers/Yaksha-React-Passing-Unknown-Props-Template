import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom';

describe('boundary', () => {
  test('AppComponent boundary renders App component with heading', () => {
    const { getByText } = render(<App />);
    expect(getByText('Custom Button with Dynamic Props')).toBeInTheDocument();
  });

  test('AppComponent boundary renders and clicks first button', () => {
    const { getByText } = render(<App />);
    const button = getByText('Click Me');

    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle('background-color: blue');
    expect(button).toHaveStyle('color: white');

    fireEvent.click(button);
  });

  test('AppComponent boundary renders disabled button', () => {
    const { getByText } = render(<App />);
    const button = getByText('Disabled Button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle('background-color: gray');
    expect(button).toHaveStyle('color: darkgray');
    expect(button).toBeDisabled();
  });

  test('AppComponent boundary renders and clicks another button', () => {
    const { getByText } = render(<App />);
    const button = getByText('Another Button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle('background-color: green');
    expect(button).toHaveStyle('color: white');

    fireEvent.click(button);
  });
});
