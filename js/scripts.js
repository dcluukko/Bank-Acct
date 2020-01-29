// Business Logic for Account---------
function BankAccount() {
  this.AccountInfo = [];
  this.currentId = 0
}

//Name and Initial Deposit Business Logic 
function AccountInfo(name, totalBalance, deposit) {
  this.name = name,
    this.totalBalance = totalBalance;
}

AccountInfo.prototype.AddDeposit = function (deposit) {
  this.totalBalance += deposit
}
AccountInfo.prototype.SubWithdraw = function (withdraw) {
  this.totalBalance -= withdraw
}

//Deposit Business Logic 
BankAccount.prototype.AddAccountInfo = function (AccountInfo) {
  this.AccountInfo.push(AccountInfo)
}


//User Interface Logic

$(document).ready(function () {
  var userBankAccount = new BankAccount
  var userAccountInfo;
  $("form#name-initDept").submit(function (event) {
    event.preventDefault();
    var name = $("input#name").val();
    var InitDeposit = parseInt($("input#initialDeposit").val());
    userAccountInfo = new AccountInfo(name, InitDeposit);
    userBankAccount.AddAccountInfo(userAccountInfo);
    console.log(userBankAccount);
  });
  $("form#deposit-withdrawl").submit(function (event) {
    event.preventDefault();
    console.log("hello!")
    var deposit = parseInt($("input#deposit").val());
    var withdraw = parseInt($("input#withdraw").val());
    if (userAccountInfo) {
      if (deposit) {
        userAccountInfo.AddDeposit(deposit);
      }
      if (withdraw) {
        userAccountInfo.SubWithdraw(withdraw);
      }
    }
    console.log(userAccountInfo)
  });
});