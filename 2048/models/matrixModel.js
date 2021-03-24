function MatrixModel() {
  BaseModel.call(this);
  this.attributes = {
    size: {
      width: 4,
      height: 4
    },
    grid: [
      ['', '', '', ''],
      ['', '', '', ''],
      ['', '', '', ''],
      ['', '', '', '']
    ]
  }

  var instance = this;
  MatrixModel = function () {
    return instance;
  }

}

MatrixModel.prototype = Object.create(BaseModel.prototype);
MatrixModel.prototype.constructor = MatrixModel;

MatrixModel.prototype.displayActionResults = function (key) {
  switch (key) {
    case 'ArrowLeft':
      this.arrowLeft();
      break;
    case 'ArrowUp':
      this.arrowUp();
      break;
    case 'ArrowRight':
      this.arrowRight();
      break;
    case 'ArrowDown':
      this.arrowDown();
      break;
    default:
      return;
  }


  this.publish('changeData');
}


MatrixModel.prototype.startNewGame = function () {
  this.clearDate();
  this.changeData(this.generateRandomNumbers(2));

  this.publish('changeData');
}

MatrixModel.prototype.arrowLeft = function () {
  console.log('arrowLeft');
  console.log(this.attributes.grid)
}

MatrixModel.prototype.arrowUp = function () {
  console.log('arrowUp');
  console.log(this.attributes.grid)
}

MatrixModel.prototype.arrowRight = function () {
  console.log('arrowRight');
  console.log(this.attributes.grid)
}

MatrixModel.prototype.arrowDown = function () {
  console.log('arrowDown');
  console.log(this.attributes.grid)
}

MatrixModel.prototype.generateRandomNumbers = function (quantityRandomNumbers = 1) {
  var i = 0, random = 0, randomNumbers = [];

  do {
    random = Math.round(Math.random() * Math.floor(100));

    if (random <= 90 || randomNumbers[0] === '4') {
      randomNumbers.push('2');
    } else {
      randomNumbers.push('4');
    }

    i++;

  } while (i < quantityRandomNumbers);

  return randomNumbers;
}

MatrixModel.prototype.changeData = function (randomNumbers) {
  var i = 0,
    randomIndexCell = 0,
    randomIndexRow = 0;

  do {

    do {
      randomIndexCell = this.getRandomIndex().indexCell;
      randomIndexRow = this.getRandomIndex().indexRow;
    } while (this.attributes.grid[randomIndexCell][randomIndexRow] !== '')

    this.attributes.grid[randomIndexCell][randomIndexRow] = randomNumbers[i];

    i++;
  } while (i < randomNumbers.length);


}

MatrixModel.prototype.getRandomIndex = function () {
  var indexCell = 0,
    indexRow = 0,
    maxGridIndex = this.attributes.size.width - 1;

  indexCell = Math.round(Math.random() * Math.floor(maxGridIndex));
  indexRow = Math.round(Math.random() * Math.floor(maxGridIndex));

  return {indexCell, indexRow}
}

MatrixModel.prototype.clearDate = function () {
  this.attributes.grid.forEach(item => item.fill(''));
}


