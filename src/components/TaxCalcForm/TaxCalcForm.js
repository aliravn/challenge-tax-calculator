import React, { useState } from 'react';
import { taxBracket } from './taxBracket.mock.js';

import './TaxCalcForm.css';


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

    const calulateProgressiveTax = () => {
        let taxToPay = 0;
        let taxBase = income;

        if(income > 100000) {
           taxBase = taxBase - high.incomeCap;
           taxToPay += calc(taxBase, open.taxRate);
           taxBase = high.incomeCap;
        } 

        if(income > 30000){
            taxBase = taxBase - medium.incomeCap;
            taxToPay += calc(taxBase, high.taxRate);
            taxBase = medium.incomeCap;   
        }

        if(income > 10000) {
            taxBase = taxBase - low.incomeCap;
            taxToPay += calc(taxBase, medium.taxRate);
            taxBase = low.incomeCap;   
        } 

        return taxToPay;
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