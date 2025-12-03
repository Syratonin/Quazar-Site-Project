function priceEstimate() {

    let distance = document.getElementById("distance").value;

    let price = distance * 0.20;

    document.getElementById("priceDisplay").innerText = "Price estimate: $" + price;
}