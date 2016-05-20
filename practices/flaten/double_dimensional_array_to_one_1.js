function double_to_one(collection) {
  var newArray = [];

  collection.forEach(function (element) {
    if (element.length >= 0) {
      addElem(element, newArray);
    }
    else {
      newArray.push(element);
    }
  });

  return newArray;
}

function addElem(element, array) {
  element.forEach(function (smallElem) {
    array.push(smallElem);
  });
}
module.exports = double_to_one;
