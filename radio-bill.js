function billWithRadio() {
  var callCost = 2.75;
  var smsCost = 0.75;

  var callTotal = 0;
  var smsTotal = 0;
  var billTotal = 0;

  var warningLevel = 30;
  var criticalLevel = 50;
  //Function to make a call
  function makeCall() {
    callTotal += callCost;
  }
  //Function to return total call cost
  function callTotalCost() {
    return callTotal;
  }
  //Function to send an sms
  function sendSms() {
    smsTotal += smsCost;
  }
  //Function to return total sms cost
  function smsTotalCost() {
    return smsTotal;
  }
  //Function to calculate total bill and return the total
  function billTotalCost() {
    billTotal = smsTotal + callTotal;
    return billTotal;
  }
  //Function to check critical and warning levels
  function getClassName() {
    if (billTotal >= criticalLevel) {
      return "critical";
    }
    if (billTotal >= warningLevel) {
      return "warning";
    }
  }

  return {
    makeCall,
    callTotalCost,
    sendSms,
    smsTotalCost,
    billTotalCost,
    getClassName,
  };
}
