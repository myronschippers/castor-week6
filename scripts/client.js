console.log('Hello Castor');

const fruitBasketList = [];

$(document).ready(pageReady);

function pageReady() {
  console.log('READY');

  // access to DOM
  // EVENT LISTENER
  $('#jsAddFruit').on('click', clickAddFruitHandler)
}

// EVENT HANDLER
function clickAddFruitHandler() {
  // capture the entered form field value
  const fruitName = $('#jsFruit').val();

  addFruitToBasket(fruitName);
  render();
}

function addFruitToBasket(nameOfFruit) {
  const fruitInfo = {
    name: nameOfFruit,
  };
  // push fruit in bascket
  fruitBasketList.push(fruitInfo);
}

function render() {
  const $basket = $('#jsBasket');

  $basket.empty();
  for (let i = 0; i < fruitBasketList.length; i++) {
    const fruit = fruitBasketList[i];
    // update DOM with fruit
    $basket.append(`<li>${fruit.name}</li>`);
  }
}
