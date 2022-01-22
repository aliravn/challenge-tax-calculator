import { render, screen } from '@testing-library/react';
import TaxCalcForm from './TaxCalcForm';

describe('TaxCalcForm', () => {
    it('renders TaxCalcForm', () => {
        render(<TaxCalcForm />);

        const inputField = screen.getByLabelText(/Annual income/i);
        expect(inputField).toBeInTheDocument();

        const submitButton = screen.getByText(/calculate tax/i)
        expect(submitButton).toBeInTheDocument();
      });
})
