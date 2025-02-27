document
    .getElementById("cashOutBtn")
    .addEventListener("click", function (event) {
        event.preventDefault();

        const amount = document.getElementById("cashOutmoney").value;

        const money = parseInt(amount);

        const accountNumber = document.getElementById("accountNumber").value;

        const accountPin = document.getElementById("accountPin").value;

        const pin = parseInt(accountPin);

        const mainBalance = document.getElementById("mainBalance").innerText;
        const balance = parseFloat(mainBalance);

        if (money && pin) {
            if (pin === 1234) {
                if (accountNumber.length === 11) {
                    const newBalance = balance - money;
                    document.getElementById("mainBalance").innerText = newBalance;
                } else {
                    alert("Account Number must be 11 digits");
                }

            } else {
                alert("Incorrect Pin");
            }
        } else {
            alert("Please Add Amount");

        }

    });
