import React, { useState } from 'react';
import './TaxCalcForm.css';

const TaxCalcForm = () => {
    const [income, setIncome] = useState('');
    const [tax, setTax] = useState('Please type in you annual income');

    const onIncomeValueChange = (event) => {
            setIncome(event.target.value);
    };

    const calulateTax = () => {
        // TODO: add correct calculation based on progressive taxation
        // TODO: limit result to 2 digits after comma
        const calcTax = income * 0.1;
        setTax(calcTax);
    }
    return (
        <section className='formContainer'>
            <label htmlFor="income" className='inputLabel'>Annual income:</label>
            <input 
                type="text" 
                id="income" 
                name="income" 
                value={income} 
                onChange={onIncomeValueChange} 
                className='inputField'
            />

            <button 
                className='submitButton' 
                onClick={calulateTax}
            >
               Calculate tax
            </button>

            <div className='result'>Tax to pay: {tax} EUR</div>
        </section>
    );
}

export default TaxCalcForm;