/**
 *   @author Fordyce, William (wfordyce28@gmail.com)
 *   @version 0.0.1
 *   @summary Code demonstration:  :: created:
 */

let policyNumber, lastName, firstName, birthDate, accidentNumber;
let ageAddOn, accidentAddOn,  dueDate, customerAge, finalPrice, finalData;
const CURRENT_YEAR = 2019, BASE_PRICE = 100, LOW_AGE_PRICE = 20;
const MIDDLE_AGE_PRICE = 10, OLD_AGE_PRICE = 30, ACCIDENT_PRICE = 50;
const AGE_1 = 15, AGE_2 = 30, AGE_3 = 45, AGE_4 = 60;

"use strict";
const PROMPT = require('readline-sync');

/**
 * @method
 * @desc The dispatch method for the program
 * @returns {null}
 */
function main(){
    setPolicyNumber();
    setFirstName();
    setLastName();
    setBirthDate();
    setDueDate();
    setAccidentNumber();
    setAccidentAddOn();
    setCustomerAge();
    setAgeAddOn();
    setFinalPrice();
    printFinalData();
}

main();

/**
 * @method
 * @desc Inputting the policy number of the customer
 * @returns {null}
 */
function setPolicyNumber() {
    policyNumber = Number(PROMPT.question(`\nPlease enter policy number: `));
}

/**
 * @method
 * @desc Inputting the first name of the customer
 * @returns {null}
 */
function setFirstName() {
    firstName = (PROMPT.question(`\nPlease enter your first name: `));
}

/**
 * @method
 * @desc Inputting the last name of the customer
 * @returns {null}
 */
function setLastName() {
    lastName = (PROMPT.question(`\nPlease enter your last name: `));
}

/**
 * @method
 * @desc Inputting the birth year of the customer
 * @returns {null}
 */
function setBirthDate() {
    birthDate = Number(PROMPT.question(`\nPlease enter your birth year: `));
}

/**
 * @method
 * @desc Inputting the due date of the customer
 * @returns {null}
 */
function setDueDate() {
    dueDate = (PROMPT.question(`\nPlease enter your premium due date (mm/dd/yy): `));
}

/**
 * @method
 * @desc Inputting the number of at fault accidents the customer has had
 * @returns {null}
 */
function setAccidentNumber() {
    accidentNumber = Number(PROMPT.question(`\nPlease enter the number of at fault accidents you have had: `));
}

/**
 * @method
 * @desc Calculating how much extra the customer will pay as a result of the at fault accidents
 * @returns {null}
 */
function setAccidentAddOn(){
    accidentAddOn = ACCIDENT_PRICE * accidentNumber;
}

/**
 * @method
 * @desc Calculating the age of the customer
 * @returns {null}
 */
function setCustomerAge(){
    customerAge = CURRENT_YEAR - birthDate;
}

/**
 * @method
 * @desc Calculating how much extra the customer will pay as a result of their age
 * @returns {null}
 */
function setAgeAddOn(){
    ageAddOn = 0;
    if(customerAge > 0){
        if(customerAge > 0 && customerAge < AGE_1){
            console.log(`I'm sorry, that is an invalid age. Please try again.`)
        }
        else if(customerAge >= AGE_1 && customerAge < AGE_2){
            ageAddOn = LOW_AGE_PRICE;
        }
        else if(customerAge >= AGE_2 && customerAge < AGE_3){
            ageAddOn = MIDDLE_AGE_PRICE;
        }
        else if(customerAge >= AGE_3 && customerAge < AGE_4){
            ageAddOn = 0;
        }
        else if(customerAge >= AGE_4){
            ageAddOn = OLD_AGE_PRICE;
        }
    }
}

/**
 * @method
 * @desc Calculating the final price of the monthly insurance rate
 * @returns {null}
 */
function setFinalPrice(){
    finalPrice = BASE_PRICE + ageAddOn + accidentAddOn;
}

/**
 * @method
 * @desc Displaying the rate to the customer
 * @returns {null}
 */
function printFinalData(){
    console.log(`\n The monthly rate for ${firstName} ${lastName}, with due date on ${dueDate}, is: \$${finalPrice} `);
}


