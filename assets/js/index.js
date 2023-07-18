function result () {
    let quantity = Number(document.getElementById("quantity").value)
    let color = document.getElementById("color").value
    let value = Number(document.getElementById("price").innerHTML)

    document.querySelector('#total-value').innerHTML = quantity * value
    document.querySelector('#total-quantity').innerHTML = quantity
    document.querySelector('#final-color').style.backgroundColor = color
}