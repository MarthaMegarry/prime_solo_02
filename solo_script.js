// ! ! !
// Three Bugs Redux

var Employee = function (empName, empNum, baseSalary, reviewScore) {
  this.empName = empName;
  this.empNum = empNum;
  this.baseSalary = baseSalary;
  this.reviewScore = reviewScore;
}

var atticus = new Employee("Atticus", "2405", "47000", 3);
var jem = new Employee("Jem", "62347", "63500", 4);
var boo = new Employee("Boo", "11435", "54000", 3);
var scout = new Employee("Scout", "6243", "74750", 5);


var array = [atticus, jem, boo, scout];

var makeNewObject = function(empName, empNum, baseSalary, reviewScore) {
  this.empName = empName;
  this.sti = calcSTI(reviewScore, empNum, baseSalary);
  this.newSal = calcNewSal(baseSalary, this.sti);
  this.bonus = calcBonus(baseSalary, this.sti);
};


//Create variables used to write to the DOM
var newEl, newText, position;
//Capture the position of insertion into the DOM
position = document.getElementById('content');

//Loop the array, extracting each array and writing information to the DOM
//Note that the information is not 'clean'
for(var i = 0; i < array.length; i++){
  array[i] = new makeNewObject(array[i].empName, array[i].empNum, array[i].baseSalary, array[i].reviewScore);
 	newEl = document.createElement('li');
	newText = document.createTextNode("Name: " + array[i].empName + " | STI: " + (array[i].sti * 100) + "% | New Salary: $" + array[i].newSal + " | Bonus: $" + array[i].bonus);
	newEl.appendChild(newText);
	position.appendChild(newEl);
}

function calcSTI (reviewScore, empNum, baseSalary) {
  var bonus = getBaseSTI(reviewScore) + getYearAdjustment(empNum) - getIncomeAdjustment(baseSalary);
  if(bonus > 0.13){
    bonus = 0.13;
  }

  var sti = bonus;
  return sti;
}

function calcNewSal(baseSalary, bonus2) {
  parseInt(bonus2);
  parseInt(baseSalary);
  var newSal = (Math.round(baseSalary * (1.0 + bonus2)));
  return newSal;
}

function calcBonus(baseSalary, bonus2) {
  parseInt(baseSalary);
  parseInt(bonus2);
  bonus = (Math.round(baseSalary * bonus2));
  console.log(bonus2);
  return bonus;
}

function getBaseSTI(reviewScore){
  var basePercent;
  switch(reviewScore){
    case 1:
      basePercent = 0;
      break;
    case 2:
      basePercent = 0;
      break;
    case 3:
      basePercent = 0.04;
      break;
    case 4:
      basePercent = 0.06;
      break;
    case 5:
      basePercent = 0.10;
      break;
  }
  return basePercent;
}

function getYearAdjustment(employeeNumber){
  var yearAdjustment = 0;
  if(employeeNumber.length == 4){
    yearAdjustment = 0.05;
  }
  return yearAdjustment;
}

function getIncomeAdjustment(salary){
  var incomeAdjustment = 0;
  salary = parseInt(salary);
  if(salary > 65000){
    incomeAdjustment = 0.01;
  }
  return incomeAdjustment;
}