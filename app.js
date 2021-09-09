
console.log('Hello World');

const addTowNumbers = () => {
    const sum = 12 + 12;
    console.log(sum);
    console.log('click');
}

const checkEmail = () => {
    const inputField = document.getElementById('input');
    const inputValue = inputField.value;
    if (inputValue === '@gmail.com' || inputValue === '@email.com') {
        console.log('valid email.');
    }

}

// document.getElementById('addTowNumber').addEventListener('click', function () {
//     console.log('click');
// })

