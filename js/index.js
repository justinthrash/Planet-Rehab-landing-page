$(document).ready(function() {;
  var moneyRaised = 250; //Call amount raised and store in this variable, needs to be a number
  var moneyRaisedRounded = Math.round(moneyRaised);
  var percentRaised = (moneyRaised/250);
  var moneyRaisedText = '$' + moneyRaisedRounded;
  if (moneyRaisedText.length > 4 ) {
    var moneyRaisedArr = moneyRaisedText.split('');
    moneyRaisedArr.splice(moneyRaisedArr.length - 3, 0, ',');
    moneyRaisedText = moneyRaisedArr.join('');
  } 
  
  $('.progress-bar').css('width', percentRaised + '%');
  $('.goal-text').html('<b>' + moneyRaisedText + '</b> raised of $25,000 goal');
  changeImages();
});

function changeImages() {
  var rainforestSrc = 'http://res.cloudinary.com/dvcprb2ej2/image/upload/v1479929276/burnt_forest_q8ilel.jpg';
  var rainforestAlt = 'Burning rainforest';
  var monkeysSrc = 'http://res.cloudinary.com/dvcprb2ej2/image/upload/v1479929544/Costa_Rica_monkeys_ry5ad0.jpg';
  var monkeysAlt = 'Costa Rica monkeys';
  var jaguarSrc = 'http://res.cloudinary.com/dvcprb2ej2/image/upload/v1479929544/costa-rica-sloth.jpg.653x0_q80_crop-smart_zcaw5m.jpg';
  var jaguarAlt = 'Jaguar drinking water';
  var slothSrc = 'http://res.cloudinary.com/dvcprb2ej2/image/upload/v1479929544/costa-rica-sloth.jpg.653x0_q80_crop-smart_zcaw5m.jpg';
  var slothAlt = 'Costa Rica sloth';  
  
  var interval = window.setInterval(function() {
      if ($('#riskImage').attr('alt') === rainforestAlt) {
        $('#riskImage').attr('src', monkeysSrc);
        $('#riskImage').attr('alt', monkeysAlt);
      } else if ($('#riskImage').attr('alt') === monkeysAlt) {
        $('#riskImage').attr('src', jaguarSrc);
        $('#riskImage').attr('alt', jaguarAlt);
      } else if ($('#riskImage').attr('alt') === jaguarAlt) {
        $('#riskImage').attr('src', slothSrc);
        $('#riskImage').attr('alt', slothAlt);
      } else {
        $('#riskImage').attr('src', rainforestSrc);
        $('#riskImage').attr('alt', rainforestAlt);
      }
  }, 5000);
}