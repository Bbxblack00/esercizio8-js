
var lis = document.getElementsByTagName('li');
for (var i = 0; i < lis.length; i++) {

  var li = lis[i];

  li.addEventListener('click', function() {
    var clickedLi = this;
    var clickedLichildrens = this.children;
    var clickedCheckbox = clickedLichildrens[1];

    clickedCheckbox.checked = !clickedCheckbox.checked;
  });
}


var priceBtn = document.getElementById('calculate');
priceBtn.addEventListener('click', function() {

  var burgerName = document.getElementById('burger-name').value;

  if (burgerName.length < 1) {
    alert('prego inserire nome panino');
  } else {
    var checkboxs = document.getElementsByClassName('ingred'); //abbiamo preso tutti i valori delle checkbox

    var finalPrice = 10;

    for (var i = 0; i < checkboxs.length; i++) { // apriamo un ciclo for per poter estrarre il valore contenuto all'interno di ogni singola checkbox

      var checkbox = checkboxs[i];
      var isChecked = checkbox.checked;
      var price = parseInt(checkbox.dataset.price);

      if (isChecked) {

        finalPrice +=price;

      }
    }

    var coupons = [
      '123456ABCDEF',
      '59478HUIDDIK',
      '86921UTVDNIO'
    ]

    var burgerCoupon = getElementById('burger-coupon').value;
    if (coupons.inculed(burgerCoupon)) {
      finalPrice -= finalPrice * 0.2;
    }
    // for (var i = 0; i < coupons.length; i++) {
    //   var coupon = coupons[i];
    //   if (coupon == burgerCoupon) {
    //
    //     finded = true;
    //
    //   }
    // }
    // if (finded) {
    //
    //   finalPrice -= finalPrice * 0.2; // finalPrice = finalPrice - ((finalPrice / 100) * 20);
    //
    // }

    var spanPrice = document.getElementById('price');
    spanPrice.innerHTML = finalPrice;

  }
});
