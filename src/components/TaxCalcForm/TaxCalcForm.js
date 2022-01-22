import React from 'react';
import './TaxCalcForm.css';

const TaxCalcForm = () => {
    return (
        <section className='formContainer'>
            <label htmlFor="income" className='inputLabel'>Annual income:</label>
            <input type="text" id="income" name="income" className='inputField'/>

            <button className='submitButton'>Calculate tax</button>
        </section>
    );
}

export default TaxCalcForm;