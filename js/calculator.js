var displayScreenNumber = document.getElementById('displayScreenNumbers');

// display values
function displayValue(value) {
    console.log('displayScreenNumbers:', value);
    return displayScreenNumber.value += value;
}

// calculations
function calculate() {
    console.log('Calculating:', displayScreenNumber.value);

    try {
        return displayScreenNumber.value = eval(displayScreenNumber.value)
    } catch (e) {
        return displayValue('Error');
    }
}

// clear
function clearValues() {
    console.log();
    return displayScreenNumber.value = '';
}

// delete just a single value
function deleteOnValue() {
    return displayScreenNumber.value = displayScreenNumber.value.slice(0, displayScreenNumber.value.length - 1);
}