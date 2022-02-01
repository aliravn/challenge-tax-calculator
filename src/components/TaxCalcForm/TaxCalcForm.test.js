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


    it('calculates the tax and shows the result', () => {
    const testCases = {
        'case1': {
            'income': 9000,
            'tax': '0.00',
        },
        'case2': {
            'income': 10000,
            'tax': '0.00',
        },
        'case3': {
            'income': 10009,
            'tax': '0.90',
        },
        'case4': {
            'income': 10010,
            'tax': '1.00',
        },
        'case5': {
            'income': 12000,
            'tax': '200.00',
        },
        'case6': {
            'income': 56789,
            'tax': '8697.25',
        },
        'case7': {
            'income': 1234567,
            'tax': '473326.80',
        }
    };

        render(<TaxCalcForm />);

        const inputField = screen.getByLabelText(/annual income/i);
        const submitButton = screen.getByText(/calculate tax/i);
        const resultsArea = screen.getByLabelText(/tax to pay/i);

        const checkTaxCalculation = (key, obj) => {
            const {income, tax} = obj[key];
            userEvent.clear(inputField);
            userEvent.type(inputField, income.toString());
            userEvent.click(submitButton);
            expect(resultsArea).toHaveValue(`${tax} EUR`);
        }

        Object.keys(testCases).forEach(key => {
            checkTaxCalculation(key, testCases);
          });
    });
})
