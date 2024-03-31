import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
    render(<Counter />);
})

test('renders counter message', () => {
    const title = screen.getByText(/Counter/i);
    expect(title).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
    const count = screen.getByTestId("count");
    expect(count).toHaveTextContent("0");
});

test('clicking + increments the count', () => {
    const incrementBtn = screen.getByText('+');
    fireEvent.click(incrementBtn);

    const count = screen.getByTestId("count");
    expect(count).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
    const decrementBtn = screen.getByText('-');
    fireEvent.click(decrementBtn);

    const count = screen.getByTestId("count");
    expect(count).toHaveTextContent('-1');
});