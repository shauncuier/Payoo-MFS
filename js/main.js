document.getElementById('login-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const accountNumber = document.getElementById('accountNumber').value;

    const accountPin = document.getElementById('accountPin').value;

    const pin = parseInt(accountPin);

    if (accountNumber.length === 11) {
        if (pin === 1234) {
            // redirect to dashboard
            window.location.href = 'main.html';
            
        }
        else {
            alert('Incorrect Pin');
        }
    } else {
        alert('Account Number must be 11 digits');
    }
    
})



document.getElementById('logout-btn').addEventListener('click', function () {
    window.location.href = 'index.html';
    console.log('Logged Out');
});







// LogOut

