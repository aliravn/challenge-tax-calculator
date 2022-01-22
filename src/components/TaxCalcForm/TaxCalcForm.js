import React from 'react';
import './TaxCalcForm.css';

const TaxCalcForm = () => {
    return (
        <div className='formContainer'>
            <label htmlFor="income">Annual income:</label>
            <input type="text" id="income" name="income" />
        </div>
    );
}

export default TaxCalcForm;