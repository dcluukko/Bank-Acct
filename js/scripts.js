// Business Logic for Account---------
function BankAccount() {
  this.Accountinfo = [];
  this.currentId = 0
}

//Name and Initial Deposit Business Logic 
function Accountinfo(name, initDeposit) {
  this.name = name,
  this.initDeposit = initDeposit,
  this.deposit = deposit,
  this.withdraw = withdraw 
}

//Deposit Business Logic 
BankAccount.prototype.AddAccountInfo = function (AccountInfo)
  

//User Interface Logic

$(document).ready(function () {
  event.preventDefault();
  var name = $("input#name").val();
  var InitDeposit = parseInt($("input#initialDeposit").val());
  var Deposit = parseInt($("input#deposit").val());
  var withdraw = parseInt($("input#withdraw").val());

});