import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '../../components/Button';
import '@testing-library/jest-dom';

describe('boundary', () => {
    test('ButtonComponent boundary renders Button component with children', () => {
        const { getByText } = render(<Button>Test Button</Button>);
        expect(getByText('Test Button')).toBeInTheDocument();
    });

    test('ButtonComponent boundary applies passed props to Button component', () => {
        const { getByText } = render(
            <Button style={{ backgroundColor: 'blue', color: 'white' }}>Styled Button</Button>
        );
        const button = getByText('Styled Button');
        expect(button).toHaveStyle('background-color: blue');
        expect(button).toHaveStyle('color: white');
    });

    test('ButtonComponent boundary handles click event', () => {
        const handleClick = jest.fn();
        const { getByText } = render(<Button onClick={handleClick}>Clickable Button</Button>);
        const button = getByText('Clickable Button');

        fireEvent.click(button);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    test('ButtonComponent boundary renders disabled Button component', () => {
        const { getByText } = render(
            <Button disabled>Disabled Button</Button>
        );
        const button = getByText('Disabled Button');
        expect(button).toBeDisabled();
    });
});
