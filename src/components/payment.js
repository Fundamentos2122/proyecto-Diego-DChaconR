function controlShowMessage() {
    var messageContainer = document.getElementsByClassName("message-container")
    if (messageContainer[0].style.display != "none") {
        messageContainer[0].style.display = "none";
    } else {
        messageContainer[0].style.display = "flex";
    }
}

function controlPaymentForm() {
    var paymentContainer = document.getElementById("payment-container");
    if (paymentContainer.style.display != "none") {
        paymentContainer.style.display = "none";
    } else {
        paymentContainer.style.display = "flex";
    }
}

function controlPayment() {
    var Payment = document.getElementById("payment-button");
    var paymentButton = document.getElementsByClassName("payment-button");
    var sendConfirm = document.getElementById("button-confirm");
    var cleanMessage = document.getElementsByClassName("message-container");

    controlPaymentForm();
    controlShowMessage();

    Payment.addEventListener("click", controlPaymentForm);
    paymentButton[0].addEventListener("click", controlPaymentForm); // Mientras no se pueda registrar la tarjeta, solo cierra la ventana.
    paymentButton[1].addEventListener("click", controlPaymentForm);
    sendConfirm.addEventListener("click", controlShowMessage);
    cleanMessage[0].addEventListener("click", controlShowMessage);
}

controlPayment();