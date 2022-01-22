import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TaxCalcForm from './TaxCalcForm';

describe('TaxCalcForm', () => {
    it('renders TaxCalcForm correctly', () => {
        render(<TaxCalcForm />);

        const inputField = screen.getByLabelText(/Annual income/i);
        expect(inputField).toBeInTheDocument();
        expect(inputField).toHaveValue('');

        const submitButton = screen.getByText(/calculate tax/i)
        expect(submitButton).toBeInTheDocument();

        const resultsArea = screen.getByText(/Tax to pay/i)
        expect(resultsArea).toBeInTheDocument();
    });


    it('calculates the tax and shows the result', async () => {
        render(<TaxCalcForm />);

        const inputField = screen.getByLabelText(/annual income/i);
        const submitButton = screen.getByText(/calculate tax/i);
        const resultsArea = screen.getByText(/tax to pay/i);
        userEvent.type(inputField, '100');
        userEvent.click(submitButton);
        expect(resultsArea).toHaveTextContent('10');

        
    });
})
