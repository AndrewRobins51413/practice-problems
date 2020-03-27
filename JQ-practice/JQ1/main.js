$(document).ready(initializeApp);

var firstSquare = null;
var secondSquare = null;


function initializeApp() {
  makeSquare()
  cardClickHandler()
}

function makeSquare(){
  $('.bigDiv').addClass('divClass').removeClass('starter')
  $('.topDiv').addClass('starter')
  $('#a2').removeClass('starter').addClass('divLoud')
  $('.bigDiv:nth-child(5)')
      .removeClass('starter')
      .addClass('divLoud')

  $('.bigDiv:nth-child(6)')
    .toggleClass('divLoud')

}
