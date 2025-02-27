document.getElementById("cashOut").style.display = "none";

document.getElementById("addMoneyBox").addEventListener("click", function() {
    document.getElementById("addMoney").style.display = "block";
    document.getElementById("cashOut").style.display = "none";
});

document.getElementById("cashOutBox").addEventListener("click", function() {
    document.getElementById("addMoney").style.display = "none";
    document.getElementById("cashOut").style.display = "block";
});
