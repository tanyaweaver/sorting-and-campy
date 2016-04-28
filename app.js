function assert(expression, failureMessage) {
  if (!expression) {
    console.log('assertion failure: ', failureMessage);
  }else{
    console.log('ok');
  }
}
//Problem 1: the Blob
function Blob(){
  this.hoursToOoze = function (population, peoplePerHour) {
    var eaten = 0;
    var startingRate = peoplePerHour;
    var hoursElapsed = 0;
    while (eaten < population){
      eaten += peoplePerHour;
      peoplePerHour ++;
      hoursElapsed = (peoplePerHour - startingRate);
    };
    return hoursElapsed;
  };
}
var blob = new Blob;

function eaten (population, peoplePerHour) {
  var eaten = 0;
  var startingRate = peoplePerHour;
  var hoursElapsed = 0;
  while (eaten < population){
    eaten += peoplePerHour;
    peoplePerHour ++;
    hoursElapsed = (peoplePerHour - startingRate);
  };
  return hoursElapsed;
};

var hoursSpentInDowington = eaten(1000, 1);
var hoursSpentInCode201 = eaten(20, 2);
var hoursSpentInGreenwood = eaten(2000, 13);
var hoursSpentInMyNeighborhood = eaten(1500, 25);

assert(blob.hoursToOoze(0, 1) === 0, 'no people means no time needed.');
assert(blob.hoursToOoze(1000, 1) === hoursSpentInDowington,
  'hoursSpentInDowington should match hoursToOoze\'s result for 1000');
assert(blob.hoursToOoze(20, 2) === hoursSpentInCode201, ' hoursSpentInCode201 should match hoursToOoze\'s result for (20, 2)');
assert(blob.hoursToOoze(2000, 13) === hoursSpentInGreenwood, ' hoursSpentInGreenwood should match hoursToOoze\'s result for (2000, 13)');
assert(blob.hoursToOoze(1500, 25) === hoursSpentInMyNeighborhood, 'hoursSpentInMyNeighborhood should match hoursToOoze\'s result for (1500, 25)');

// PROBLEM 2:
var hello = {
  klingon: 'nuqneH',  // home planet is Qo'noS
  romulan: 'Jolan\'tru', // home planet is Romulus
  'federation standard': 'hello' // home planet is Earth
};

function SentinentBeing(planet, language) {
  this.planet = planet;
  this.personLanguage = language;
}
SentinentBeing.prototype.sayHello = function(listener){
  var speakerLanguage = this.personLanguage;
  var listenerLanguage = listener.personLanguage;
  return hello[listenerLanguage];
};

function Klingon(){
  SentinentBeing.call(this, 'Qo\'os', 'klingon');
}
Klingon.prototype = new SentinentBeing();
Klingon.prototype.constructor = Klingon;

function Romulan(){
  SentinentBeing.call(this, 'Romulus', 'romulan');
}
Romulan.prototype = new SentinentBeing();
Romulan.prototype.constructor = Romulan;

function Human(){
  SentinentBeing.call(this, 'Earth', 'federation standard');
}
Human.prototype = new SentinentBeing();
Human.prototype.constructor = Human;

assert((new Human()).sayHello(new Klingon()) === 'nuqneH',
  'the klingon should hear nuqneH');
assert((new Human()).sayHello(new Romulan()) === 'Jolan\'tru',
  'the romulan should hear Jolan\'tru');
assert((new Klingon()).sayHello(new Human()) === 'hello',
  'the human should hear hello');
assert((new Klingon()).sayHello(new Romulan()) === 'Jolan\'tru',
  'the romulan should hear Jolan\'tru');
assert((new Romulan()).sayHello(new Klingon()) === 'nuqneH',
  'the klingon should hear nuqneH');
assert((new Romulan()).sayHello(new Human()) === 'hello',
  'the human should hear hello');

//PROBLEM 3:
function lastLetterSort(stringArray) {
  function byLastLetter(a, b) {
    return a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1);
  };
  return stringArray.sort(byLastLetter);
}

var array1 = ['apple', 'banana', 'cucumber', 'potato'];
var array2 = ['one', 'two', 'six', 'seven'];
assert(lastLetterSort(array1).toString === ['banana', 'apple', 'cucumber', 'potato'].toString, 'you got it wrong');
assert(lastLetterSort(array2).toString === ['one', 'two', 'seven', 'six'].toString, 'you got it wrong');

function sumArray(numberArray) {
  var sum = 0;
  numberArray.forEach(function(element){
    sum += element;
  });
  return sum;
}

var array3 = [1, 2, 3, 4];
var array4 = [5, 4, 6, 10];
assert(sumArray(array3) === 10, 'wrong!');
assert(sumArray(array4) === 25, 'wrong!');

function sumSort(arrayOfArrays) {
  return arrayOfArrays.sort(function(a, b) {
    return sumArray(a) - sumArray(b);
  });
}

var array5 = [[1,7], [1,3], [2,3]];
var array6 = [[5,3], [1,1], [10,10]];
assert(sumSort(array5).toString === [[1,3], [2,3], [1,7]].toString, 'wrong!');
assert(sumSort(array6).toString === [[1,1], [5,3], [10,10]].toString, 'wrong!');
