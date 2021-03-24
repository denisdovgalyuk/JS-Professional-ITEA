function Controller() {
    this.matrixModel = new MatrixModel();
}

Controller.prototype.onKeyPress = function (event) {
    this.matrixModel.displayActionResults(event.key);
}

Controller.prototype.onClickNewGame = function (e) {
    this.matrixModel.startNewGame();
}
