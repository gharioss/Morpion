document.addEventListener('DOMContentLoaded', () => {

  let array = [];
  let botArray = [];
  let niquesamere = false;
  let freePlace = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
  let endGame = document.getElementById('endGame');
  endGame.style.display = 'none';
  let result = document.getElementById('result');

  Array.from(document.getElementsByClassName('case')).forEach(i => {
    i.addEventListener('click', () => {
      game(i);
    });
  });

  function game(i) {
    if (niquesamere) return;

    if (!freePlace.includes(i.dataset.place)) {
      return;
    }
    array.push(i.dataset.place);
    i.style.backgroundImage = "url('Images/x.png')";
    freePlace.splice(freePlace.indexOf(i.dataset.place), freePlace.indexOf(i.dataset.place) != -1 ? 1 : 0);
    if (array.includes('0') && array.includes('1') && array.includes('2') || array.includes('3') && array.includes('4') && array.includes('5') || array.includes('6') && array.includes('7') && array.includes('8') || array.includes('0') && array.includes('3') && array.includes('6') || array.includes('1') && array.includes('4') && array.includes('7') || array.includes('2') && array.includes('5') && array.includes('8') || array.includes('0') && array.includes('4') && array.includes('8') || array.includes('2') && array.includes('4') && array.includes('6')) {
      endGame.style.display = 'flex';
      result.textContent = 'You won !!';
      result.style.color = 'green';
      niquesamere = true;
      return;
    };
    bot();
  };

  function bot() {
    let availablePlace = freePlace.length;
    let randomPlace = Math.floor(Math.random() * availablePlace);
    let placeId = freePlace[randomPlace];
    freePlace.splice(randomPlace, 1);
    let botMove = document.getElementById(placeId);
    botMove.style.backgroundImage = "url(Images/o.jpg)";
    botMove.classList.add('case1');
    botArray.push(placeId);

    if (botArray.includes('0') && botArray.includes('1') && botArray.includes('2') || botArray.includes('3') && botArray.includes('4') && botArray.includes('5') || botArray.includes('6') && botArray.includes('7') && botArray.includes('8') || botArray.includes('0') && botArray.includes('3') && botArray.includes('6') || botArray.includes('1') && botArray.includes('4') && botArray.includes('7') || botArray.includes('2') && botArray.includes('5') && botArray.includes('8') || botArray.includes('0') && botArray.includes('4') && botArray.includes('8') || botArray.includes('2') && botArray.includes('4') && botArray.includes('6')) {
      endGame.style.display = 'flex';
      result.textContent = 'You lost ...';
      result.style.color = 'red';
      niquesamere = true;
    };

  };

  endGame.addEventListener('click', () => {
    array = [];
    botArray = [];
    niquesamere = false;
    freePlace = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
    Array.from(document.getElementsByClassName('case')).forEach(y => {
      y.style.backgroundImage = "";
      endGame.style.display = 'none';
    });
  });
});