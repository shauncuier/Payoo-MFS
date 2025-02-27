document
    .getElementById("addMoneyBtn")
    .addEventListener("click", function (event) {
        event.preventDefault();

        const amount = document.getElementById("money").value;

        const money = parseInt(amount);


        const accountNumber = document.getElementById("accountNumber").value;

        const accountPin = document.getElementById("accountPin").value;

        const pin = parseInt(accountPin);

        const mainBalance = document.getElementById("mainBalance").innerText;
                const balance = parseFloat(mainBalance);

        if (accountNumber.length === 11) {
            if (pin === 1234) {
                
                const newBalance = balance + money;

                document.getElementById("mainBalance").innerText= newBalance;

                console.log(newBalance);
            } else {
                alert("Incorrect Pin");
            }
        } else {
            alert("Account Number must be 11 digits");
        }
    });
