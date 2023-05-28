import { render,screen } from '@testing-library/react';
import Contact from './Contact';

test("h2 renders correctly", () => {
    render(<Contact />);
    const element = screen.getAllByText(/Contact/i);
    expect(element[0]).toBeInTheDocument();
})