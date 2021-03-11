var priceBtn = document.getElementById('calculate');
priceBtn.addEventListener('click', function() {

  var burgerName = document.getElementById('burger-name').value;

  if (burgerName.length < 1) {
    alert('prego inserire nome panino');
  } else {
    var checkboxs = document.getElementsByClassName('ingred');

    for (var i = 0; i < checkboxs.length; i++) {

      var checkbox = checkboxs[i];
      var isChecked = checkbox.checked;

      console.log(checkbox, isChecked);
    }
  }
});
