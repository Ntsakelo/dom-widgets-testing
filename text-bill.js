function billWithText() {
  //set all the constant variables
  var smsCost = 0.75;
  var totSmsCost = 0;
  var callCost = 2.75;
  var totCallCost = 0;
  var totalCost = 0;
  var billType = "";
  var warningLevel = 30;
  var criticalLevel = 50;

  //Get the bill type
  function enterbillType(bill) {
    billType = bill;
  }

  //check if bill is sms or call and return the bill else return "enter either sms or call"
  function getBillType() {
    if (billType === "sms" || billType === "call") {
      return billType;
    }
    return "enter either sms or call";
  }

  //send sms and update the total sms cost
  function sendSms() {
    if (billType === "sms") {
      totSmsCost += smsCost;
    }
  }

  //return the sms cost
  function smsTotalCost() {
    return totSmsCost;
  }

  //return total cost
  function billTotalCost() {
    totalCost = totSmsCost + totCallCost;
    return totalCost;
  }

  //make a call and update the total call cost
  function makeCall() {
    if (billType === "call") {
      totCallCost += callCost;
    }
  }

  //return the call cost
  function callTotalCost() {
    return totCallCost;
  }
  //warning and critical level

  function getClassName() {
    if (totalCost >= criticalLevel) {
      return "critical";
    }
    if (totalCost >= warningLevel) {
      return "warning";
    }
  }
  //Return the functions in an object
  return {
    enterbillType,
    getBillType,
    sendSms,
    smsTotalCost,
    billTotalCost,
    makeCall,
    callTotalCost,
    getClassName,
  };
}
