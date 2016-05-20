function double_to_one(collection) {
  var newArray = [];

  collection.forEach(function (element) {
    if (element.length >= 0) {
      addElems(newArray, element);
    }
    else {
      newArray.push(element);
    }
  });

  return newArray;
}

function addElems(array, elem) {
  elem.forEach(function (smallElem) {
    if (isNotDuplication(smallElem, array)) {
      array.push(smallElem);
    }
  });
}

function isNotDuplication(element, array) {
  for (var i = 0; i < array.length; i++) {
    if (element === array[i]) {
      return false;
    }
  }

  return true;
}

module.exports = double_to_one;
