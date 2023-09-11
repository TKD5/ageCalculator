// Select the results elements
const yearResult = document.querySelector('.year-result');
const monthResult = document.querySelector('.month-result');
const dayResult = document.querySelector('.day-result');
const submitBtn = document.querySelector('.submit-btn');

//Select the input elements 
let isValid = false
const inputDay = document.querySelector('#day');
const inputMonth = document.querySelector('#month');
const inputYear = document.querySelector('#year');

//Select the error elements
const errorDay = document.querySelector('.error-day');
const errorMonth = document.querySelector('.error-month');
const errorYear = document.querySelector('.error-year');

submitBtn.addEventListener('click', calculateDate)


inputDay.addEventListener('input', function() {
    if(+inputDay.value > 31) {
        errorDay.textContent = 'Must be a valid date';
        isValid = false;
        return;
    }
    else {
        //resets the error message if input is correct
        isValid = true;
        errorDay.textContent = '';
    }
    if (+inputDay.value === 0) {
        isValid = false;
        errorDay.textContent = 'This field is reqiured'
        isValid = false;
        return;
    }
});

inputMonth.addEventListener('input', function() {
    if(+inputMonth.value > 12) {
        errorMonth.textContent = 'Must be a valid date';
        isValid = false;
        return;
    }
    else {
        //resets the error message if input is correct
        isValid = true;
        errorMonth.textContent = '';
    }
    if (+inputMonth.value === 0) {
        isValid = false;
        errorMonth.textContent = 'This field is reqiured'
        isValid = false;
        return;
    }
});

inputYear.addEventListener('input', function() {
    if(+inputYear.value > 2023) {
        errorYear.textContent = 'Must be a valid date';
        isValid = false;
        return;
    }
    else {
        //resets the error message if input is correct
        isValid = true;
        errorYear.textContent = '';
    }
    if (+inputYear.value === 0) {
        isValid = false;
        errorYear.textContent = 'This field is reqiured'
        isValid = false;
        return;
    }
});

function calculateDate() {
    if(isValid) {
        let birthday = `${inputMonth.value}/${inputDay.value}/${inputYear.value}`;
        console.log(birthday);
        let birthdayObj = new Date(birthday);
        let ageDifference = Date.now() - birthdayObj;
        let ageDate = new Date(ageDifference);
        let ageYears = ageDate.getUTCFullYear() - 1970;
        let ageMonth = ageDate.getUTCMonth();
        let ageDay = ageDate.getUTCDay() - 1;
        //Displays results 
        dayResult.textContent = ageDay;
        monthResult.textContent = ageMonth;
        yearResult.textContent = ageYears;
    }else {
        alert('Please enter correct information');
    }
};