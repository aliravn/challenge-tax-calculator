import React, { useState } from 'react';
import './TaxCalcForm.css';

        // TODO: add taxBracket mock object
        // TODO: add progressive taxa calculation based on taxBracket
        // TODO: show result always with 2 digits after delimiter
        // TODO: add validation for dot / comma / letters / special chars
        // TODO: display result with the same delimiter as the input

const TaxCalcForm = () => {
    const [income, setIncome] = useState('');
    const [tax, setTax] = useState('');

    const onIncomeValueChange = (event) => {
            setIncome(event.target.value);
    };

    const calulateTax = () => {
        const calcTax = income * 0.1;
        const taxToShow = `${calcTax} EUR`
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
                onClick={calulateTax}
            >
               Calculate tax
            </button>
        </div>
        
        </section>
    );
}

export default TaxCalcForm;