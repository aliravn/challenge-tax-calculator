import { render, screen } from '@testing-library/react';
import TaxCalcForm from './TaxCalcForm';

describe('TaxCalcForm', () => {
    it('renders TaxCalcForm correctly', () => {
        render(<TaxCalcForm />);

        const inputField = screen.getByLabelText(/Annual income/i);
        expect(inputField).toBeInTheDocument();
        expect(inputField).toHaveValue('');

        const submitButton = screen.getByText(/calculate tax/i)
        expect(submitButton).toBeInTheDocument();
      });
})
