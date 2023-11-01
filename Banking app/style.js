const cust = {
    name: "SB",
    balance: 50000,
};
cust.deposit = function(amount)
{
    if(amount>0){
    this.balance += amount;
    return "New balance is: "+this.balance;
    }
    else 
    {
        return "Invalid  amount"
    }
    
}
cust.withdraw = function (amount) 
{
    if (amount > 0) {
      if (amount <= this.balance) {
        this.balance -= amount;
        return "New balance is: " +this.balance;
      } else {
        return "Invalid amount";
      }
    }
  };
  
  console.log(cust.deposit(500));
  console.log(cust.withdraw(500));
  