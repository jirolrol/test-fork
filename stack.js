var Stack = function () {
  var items = [];
  this.isEmpty = function () {
    items = [];
  }
  this.size = function () {
    return items.length;
  }
  this.print = function () {
    return items;
  }
}
var myStack = new Stack();