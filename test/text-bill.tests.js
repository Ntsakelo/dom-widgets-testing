describe("The text-bill factory function", function () {
  it("should be able enter the sms bill type", function () {
    let textBill = billWithText();

    textBill.enterbillType("sms");

    assert.equal("sms", textBill.getBillType());
  });

  it("should be able enter the call bill type", function () {
    let textBill = billWithText();

    textBill.enterbillType("call");
    assert.equal("call", textBill.getBillType());
  });

  it("should not be able enter any other bill type except sms and call", function () {
    let textBill = billWithText();

    textBill.enterbillType("data");

    assert.equal("enter either sms or call", textBill.getBillType());

    let textBill2 = billWithText();

    textBill2.enterbillType(1);

    assert.equal("enter either sms or call", textBill2.getBillType());
  });
  describe("Calculate the total costs", function () {
    it("should be able to send 2 sms's and update the sms total and bill total", function () {
      let textBill = billWithText();

      textBill.enterbillType("sms");

      textBill.sendSms();
      textBill.sendSms();

      assert.equal(1.5, textBill.smsTotalCost());
      assert.equal(0.0, textBill.callTotalCost());
      assert.equal(1.5, textBill.billTotalCost());
    });

    it("should be able to send 3 sms's and update the sms total and bill total", function () {
      let textBill = billWithText();

      textBill.enterbillType("sms");

      textBill.sendSms();
      textBill.sendSms();
      textBill.sendSms();

      assert.equal(2.25, textBill.smsTotalCost());
      assert.equal(0.0, textBill.callTotalCost());
      assert.equal(2.25, textBill.billTotalCost());
    });

    it("should be able to make 2 calls and update the call total and bill total", function () {
      let textBill = billWithText();

      textBill.enterbillType("call");

      textBill.makeCall();
      textBill.makeCall();

      assert.equal(0.0, textBill.smsTotalCost());
      assert.equal(5.5, textBill.callTotalCost());
      assert.equal(5.5, textBill.billTotalCost());
    });

    it("should be able to make 3 calls and update the call total and bill total", function () {
      let textBill = billWithText();

      textBill.enterbillType("call");

      textBill.makeCall();
      textBill.makeCall();
      textBill.makeCall();

      assert.equal(0.0, textBill.smsTotalCost());
      assert.equal(8.25, textBill.callTotalCost());
      assert.equal(8.25, textBill.billTotalCost());
    });

    it("should be able to calculate the totals for both call and sms when the bill type is changed from call to sms", function () {
      let textBill = billWithText();

      textBill.enterbillType("call");

      textBill.makeCall();
      textBill.makeCall();
      textBill.makeCall();

      assert.equal(0.0, textBill.smsTotalCost());
      assert.equal(8.25, textBill.callTotalCost());
      assert.equal(8.25, textBill.billTotalCost());

      textBill.enterbillType("sms");

      textBill.sendSms();
      textBill.sendSms();
      textBill.sendSms();

      assert.equal(2.25, textBill.smsTotalCost());
      assert.equal(8.25, textBill.callTotalCost());
      assert.equal(10.5, textBill.billTotalCost());
    });
  });
  describe("warning & critical level", function () {
    it("should be able to return class name of 'warning' when the warning level is reached", function () {
      let textBill = billWithText();

      textBill.enterbillType("call");

      textBill.makeCall();
      textBill.makeCall();
      textBill.makeCall();
      textBill.makeCall();
      textBill.makeCall();
      textBill.makeCall();
      textBill.makeCall();
      textBill.makeCall();
      textBill.makeCall();
      textBill.makeCall();
      textBill.makeCall();

      assert.equal(30.25, textBill.billTotalCost());
      assert.equal(30.25, textBill.callTotalCost());
      assert.equal("warning", textBill.getClassName());
    });

    it("should be able to return class name of 'critical' when the critical level is reached", function () {
      let textBill = billWithText();

      textBill.enterbillType("call");

      textBill.makeCall();
      textBill.makeCall();
      textBill.makeCall();
      textBill.makeCall();
      textBill.makeCall();
      textBill.makeCall();
      textBill.makeCall();
      textBill.makeCall();
      textBill.makeCall();
      textBill.makeCall();
      textBill.makeCall();
      textBill.makeCall();
      textBill.makeCall();
      textBill.makeCall();
      textBill.makeCall();
      textBill.makeCall();
      textBill.makeCall();
      textBill.makeCall();
      textBill.makeCall();
      textBill.makeCall();
      textBill.makeCall();
      textBill.makeCall();

      assert.equal(60.5, textBill.billTotalCost());
      assert.equal("critical", textBill.getClassName());
    });
  });
});
