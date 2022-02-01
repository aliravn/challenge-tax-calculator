import React, { useState } from 'react';
import { taxBracket } from './taxBracket.mock.js';

import './TaxCalcForm.css';

        // TODO: add taxBracket mock object / done
        // TODO: add progressive tax calculation based on taxBracket / done
        // TODO: show result always with 2 digits after delimiter / 
        // TODO: add validation for dot / comma / letters / special chars
        // TODO: display result with the same delimiter as the input

const {low, medium, high, open} = taxBracket; 

const TaxCalcForm = () => {
    const [income, setIncome] = useState('');
    const [tax, setTax] = useState('');

    const onIncomeValueChange = (event) => {
        setIncome(event.target.value);
    };
  
    const calc = (taxBase, taxRate) =>  taxBase * taxRate;

// test case income = 150.000;
// 150.000 - 100.000 ==> 50.000 x 40% = 20.000;
// 100.000 - 30.000 ==> 70.000 x 25 = 17.500;
// 30.000 - 10.000 ==> 20.000 x 10% = 2.000;
// 10.000 - 0 ==> 10.000 x 0% = 0;
// total to pay: 20.000 + 17.500 + 2.000 + 0 = 39.500;

    const calulateProgressiveTax = () => {
        let taxToPay = 0;
        let taxationBase = 0;

        if(income > 10000) {
           taxationBase = income - low.incomeCap;
        } else {
            return taxToPay;
        }

        if(income <= 30000){
            taxToPay += calc(taxationBase, medium.taxRate);
            return taxToPay;
        } else {
            taxationBase = income - medium.incomeCap;
            taxToPay += calc(medium.incomeCap - low.incomeCap, medium.taxRate);
        }

        if(income <= 100000) {
            taxToPay += calc(taxationBase, high.taxRate);
            return taxToPay;
        } else {
            taxationBase = income - high.incomeCap;
            taxToPay += calc(high.incomeCap - medium.incomeCap, high.taxRate);
        }

        if(income > 100000) {
            taxToPay += calc(taxationBase, open.taxRate);
            return taxToPay;
        }
    }

    const showCalculatedTax = () => {
        const calculatedTax = calulateProgressiveTax();
        const taxToShow = `${calculatedTax.toFixed(2)} EUR`
        setTax(taxToShow);
    }

    return (
        <section className='formContainer'>
        <div className='formLine'>
            <label htmlFor="income" className='inputLabel'>Annual income:</label>
            <input 
                type="text" 
                id="income" 
                name="income" 
                value={income} 
                onChange={onIncomeValueChange} 
                className='inputField'
            />
        </div>
        <div className='formLine'>
            <label htmlFor="result" className='inputLabel'>Tax to pay:</label>
            <input 
                type="text" 
                id="result" 
                name="result" 
                value={tax} 
                disabled
                className='inputField'
            />
        </div>    

        <div className='formLine'>
            <button 
                className='submitButton' 
                onClick={showCalculatedTax}
            >
               Calculate tax
            </button>
        </div>
        
        </section>
    );
}

export default TaxCalcForm;