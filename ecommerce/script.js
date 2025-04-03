let cart = [];
function toggleMenu() {
    let menu = document.getElementById("menu-bar");
    if (!menu) {
        console.error("Menu bar not found!");
        return;
    }
    menu.style.left = (menu.style.left === "0px") ? "-20%" : "0px";
}
document.addEventListener("click", function(event) {
    let menu = document.getElementById("menu-bar");
    let menuIcon = document.querySelector(".menu-icon");
    if (menu && menu.style.left === "0px" && !menu.contains(event.target) && !menuIcon.contains(event.target)) {
        menu.style.left = "-20%";
    }
});
function goToDetails(productId) {
    window.location.href = "detail.html?id=" + productId;
}
function update(){
    var inputt=document.getElementById("boxx")
    var res=document.getElementById("result")
    res.textContent=Number(inputt.value)*9999
}
function update1(){
    var inputt=document.getElementById("boxx1")
    var res=document.getElementById("result1")
    res.textContent=Number(inputt.value)*14999
}
function update2(){
    var inputt=document.getElementById("boxx2")
    var res=document.getElementById("result2")
    res.textContent=Number(inputt.value)*9999
}
function update3(){
    var inputt=document.getElementById("boxx3")
    var res=document.getElementById("result3")
    res.textContent=Number(inputt.value)*11999
}
function update4(){
    var inputt=document.getElementById("boxx4")
    var res=document.getElementById("result4")
    res.textContent=Number(inputt.value)*21999
}
function update5(){
    var inputt=document.getElementById("boxx5")
    var res=document.getElementById("result5")
    res.textContent=Number(inputt.value)*23999
}
function update6(){
    var inputt=document.getElementById("boxx6")
    var res=document.getElementById("result6")
    res.textContent=Number(inputt.value)*27999
}
function update7(){
    var inputt=document.getElementById("boxx7")
    var res=document.getElementById("result7")
    res.textContent=Number(inputt.value)*46999
}
function update8(){
    var inputt=document.getElementById("boxx8")
    var res=document.getElementById("result8")
    res.textContent=Number(inputt.value)*59999
}
function update9(){
    var inputt=document.getElementById("boxx9")
    var res=document.getElementById("result9")
    res.textContent=Number(inputt.value)*25999
}
function update10(){
    var inputt=document.getElementById("boxx10")
    var res=document.getElementById("result10")
    res.textContent=Number(inputt.value)*9999
}
function update11(){
    var inputt=document.getElementById("boxx11")
    var res=document.getElementById("result11")
    res.textContent=Number(inputt.value)*11999
}
function update12(){
    var inputt=document.getElementById("boxx12")
    var res=document.getElementById("result12")
    res.textContent=Number(inputt.value)*46999
}
function update13(){
    var inputt=document.getElementById("boxx13")
    var res=document.getElementById("result13")
    res.textContent=Number(inputt.value)*35999
}
function update14(){
    var inputt=document.getElementById("boxx14")
    var res=document.getElementById("result14")
    res.textContent=Number(inputt.value)*37999
}
function update15(){
    var inputt=document.getElementById("boxx15")
    var res=document.getElementById("result15")
    res.textContent=Number(inputt.value)*35999
}
function update16(){
    var inputt=document.getElementById("boxx16")
    var res=document.getElementById("result16")
    res.textContent=Number(inputt.value)*44999
}
function update17(){
    var inputt=document.getElementById("boxx17")
    var res=document.getElementById("result17")
    res.textContent=Number(inputt.value)*41999
}
function update18(){
    var inputt=document.getElementById("boxx18")
    var res=document.getElementById("result18")
    res.textContent=Number(inputt.value)*37999
}
function update19(){
    var inputt=document.getElementById("boxx19")
    var res=document.getElementById("result19")
    res.textContent=Number(inputt.value)*40999
}
function update20(){
    var inputt=document.getElementById("boxx20")
    var res=document.getElementById("result20")
    res.textContent=Number(inputt.value)*39999
}
function news() {
    var res = document.getElementById("result").innerText || 0;
    var res1 = document.getElementById("result1").innerText || 0;
    var res2 = document.getElementById("result2").innerText || 0;
    var res3 = document.getElementById("result3").innerText || 0;
    var res4 = document.getElementById("result4").innerText || 0;
    var res5 = document.getElementById("result5").innerText || 0;
    var res6 = document.getElementById("result6").innerText || 0;
    var res7 = document.getElementById("result7").innerText || 0;
    var res8 = document.getElementById("result8").innerText || 0;
    var res9 = document.getElementById("result9").innerText || 0;
    var res10 = document.getElementById("result10").innerText || 0;
    var res11 = document.getElementById("result11").innerText || 0;
    var res12 = document.getElementById("result12").innerText || 0;
    var res13 = document.getElementById("result13").innerText || 0;
    var res14 = document.getElementById("result14").innerText || 0;
    var res15 = document.getElementById("result15").innerText || 0;
    var res16 = document.getElementById("result16").innerText || 0;
    var res17 = document.getElementById("result17").innerText || 0;
    var res18 = document.getElementById("result18").innerText || 0;
    var total = Number(res) + Number(res1) + Number(res2) + Number(res3) + Number(res4) + Number(res5) + Number(res6) + Number(res7) + Number(res8) + Number(res9) + Number(res10)+ Number(res11)+ Number(res12)+ Number(res13)+ Number(res14)+ Number(res15)+ Number(res16)+ Number(res17)+ Number(res18);
    document.getElementById("good").textContent = total;
    document.getElementById("total-good").textContent = total;
}
function sendToCart(event, id) {
    event.stopPropagation();
    let selectedItems = JSON.parse(localStorage.getItem("showElements")) || [];
    if (!selectedItems.includes(id)) {
        selectedItems.push(id);
    }
    localStorage.setItem("showElements", JSON.stringify(selectedItems));
    window.location.href = "cart.html"; 
}
function deleteRow(button) {
    let row = button.closest("tr"); 
    let id = row.id; 
    let selectedItems = JSON.parse(localStorage.getItem("showElements")) || [];
    selectedItems = selectedItems.filter(item => item !== id); 
    localStorage.setItem("showElements", JSON.stringify(selectedItems));
    row.remove();
}
document.addEventListener("DOMContentLoaded", function() {
    let selectedItems = JSON.parse(localStorage.getItem("showElements")) || [];

    selectedItems.forEach(id => {
        let element = document.getElementById(id);
        if (element) {
            element.style.display = "table-row"; 
        }
    });
});
function showAlert() {
    alert("This is an Invalid Coupon");
}


function initializeGooglePay() {
    if (typeof google === 'undefined' || !google.payments?.api) {
        console.error("Google Pay API not loaded! Retrying in 500ms...");
        setTimeout(initializeGooglePay, 500); 
        return;
    }
    console.log("Google Pay API loaded successfully!");
    const googlePayClient = new google.payments.api.PaymentsClient({
        environment: 'TEST' 
    });
    const paymentRequest = {
      apiVersion: 2,
      apiVersionMinor: 0,
      allowedPaymentMethods: [
          {
              type: 'CARD',
              parameters: {
                  allowedCardNetworks: ['VISA', 'MASTERCARD', 'AMEX'],
                  allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
              },
              tokenizationSpecification: {
                  type: 'PAYMENT_GATEWAY',
                  parameters: {
                      gateway: 'razorpay', 
                      gatewayMerchantId: 'your_real_gateway_id'
                  }
              }
          }
      ],
      merchantInfo: {
          merchantId: 'your_merchant_id',
          merchantName: 'Your Business Name'
      },
      transactionInfo: {
          totalPriceStatus: 'FINAL',
          totalPrice: '10.00',
          currencyCode: 'USD'
      }
  };
    googlePayClient.isReadyToPay(paymentRequest)
        .then(response => {
            if (response.result) {
                const button = googlePayClient.createButton({
                    onClick: () => {
                        googlePayClient.loadPaymentData(paymentRequest)
                            .then(paymentData => console.log('Payment successful', paymentData))
                            .catch(error => {
                                if (error.statusCode === 'CANCELED') {
                                    console.log('User canceled the payment');
                                } else {
                                    console.error('Payment failed', error);
                                }
                            });
                    }
                });
                document.getElementById('gpay-button').appendChild(button);
            } else {
                console.log('⚠ Google Pay is not available');
            }
        })
        .catch(error => console.error('Error checking Google Pay availability', error));
  }
  setTimeout(() => {
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initializeGooglePay);
    } else {
        initializeGooglePay();
    }
  }, 1000);