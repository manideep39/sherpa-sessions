"use strict";
window.addEventListener("load", function(params) {
    
    
    var getBtn = document.getElementById("submit")
    getBtn.addEventListener("click", get)

    var makeBillBtn = document.getElementById("makeBill")
    makeBillBtn.addEventListener("click", function(){

        var total_p = document.getElementById("total")
        if ( total_p ) {
            total_p.remove()
        }
        for ( var x in cart ) {
            makeBill.call(cart[x])
        }

        display_total(cart_total)
        

    })
})
var cart_total = 0
var cart = []

function get(params) {

    event.preventDefault()
    var inputs = document.querySelectorAll("input")

    var temp = {}

    temp["name"] = inputs[0].value
    temp["qty"] = inputs[1].value
    temp["value"] = inputs[2].value

    cart.push(temp)

    for ( var i = 0; i < inputs.length - 1; i++ ) {
        inputs[i].value = ""
    }

    var total_p = document.getElementById("total")
    if ( total_p ) {
        total_p.remove()
    }

    var cart_cont = document.getElementById("disp_cont")
    cart_cont.innerHTML = ""

    for ( var x in cart ) {
        renderDom.call(cart[x])
    }
}

function renderDom(params) {
    
    var cart_cont = document.getElementById("disp_cont")

    var div = document.createElement("div")

    var h3_name = document.createElement("h3")
    var h6_qty = document.createElement("h3")
    var h4_value = document.createElement("h3")

    h3_name.textContent = this.name
    h6_qty.textContent = this.qty
    h4_value.textContent = this.value

    div.append(h3_name, h6_qty, h4_value)

    cart_cont.append(div)
}


function makeBill(params) {

    cart_total += Number(this.value)
}

function display_total(total) {
    
    var p_total = document.createElement("p")
    p_total.setAttribute("id", "total")
    var cart_cont = document.getElementById("cart")
    p_total.textContent = "Total Value: " + total
    cart_cont.append(p_total)
    cart_total = 0
}