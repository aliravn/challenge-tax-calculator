# Coding Challenge - Tax Calculator

## Requirements:
The nation of Examplania has the following income tax brackets:

| income cap 	| tax rate   	|
|:----------:	|------------	|
| 10.000     	| 0.00 (0%)  	|
| 30.000     	| 0.10 (10%) 	|
| 100.000    	| 0.25 (25%) 	|
| ---        	| 0.40 (40%) 	|

If you're not familiar with how tax brackets work, see the section below for an explanation.
Given a whole-number income amount up to 100,000,000, find the amount of tax owed in Examplania. Round result down to 2 decimal point number of.


|    Examples               |
|:--------------------------|
| tax(0) => 0.00            |
| tax(10000) => 0.00        |
| tax(10009) => 0.90        |
| tax(10010) => 1.00        |
| tax(12000) => 200.00      |
| tax(56789) => 8697.25     |
| tax(1234567) => 473326.80 |
