const heightInput = document.getElementById('height');
const weightInput = document.getElementById('weight');
const calculateBtn = document.getElementById('calculate');
const resultDiv = document.getElementById('result');

calculateBtn.addEventListener('click', (e) => {
    e.preventDefault();  

    const height = parseFloat(heightInput.value)/100;   // Convert height from cm to meters
    const weight = parseFloat(weightInput.value);

    const bmi = weight / (height * height);
    if(isNaN(bmi) || !isFinite(bmi)) {
        resultDiv.innerText = "Invalid input";
        return;
    }
    else
    resultDiv.innerText = bmi.toFixed(2);
});