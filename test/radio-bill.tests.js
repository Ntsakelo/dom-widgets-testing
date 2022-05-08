describe("The radio-bill factory function", function () {
  it("should be able to send 2 sms's and update the total sms cost and the bill total", function () {
    let radioBill = billWithRadio();

    radioBill.sendSms();
    radioBill.sendSms();

    assert.equal(1.5, radioBill.smsTotalCost());
    assert.equal(0.0, radioBill.callTotalCost());
    assert.equal(1.5, radioBill.billTotalCost());
  });
  it("should be able to send 3 sms's and update the total sms cost and the bill total", function () {
    let radioBill = billWithRadio();

    radioBill.sendSms();
    radioBill.sendSms();
    radioBill.sendSms();

    assert.equal(2.25, radioBill.smsTotalCost());
    assert.equal(0.0, radioBill.callTotalCost());
    assert.equal(2.25, radioBill.billTotalCost());
  });

  it("should be able to make 2 calls and update the total call cost and the bill total", function () {
    let radioBill = billWithRadio();

    radioBill.makeCall();
    radioBill.makeCall();

    assert.equal(0.0, radioBill.smsTotalCost());
    assert.equal(5.5, radioBill.callTotalCost());
    assert.equal(5.5, radioBill.billTotalCost());
  });

  it("should be able to make 3 calls and update the total call cost and the bill total", function () {
    let radioBill = billWithRadio();

    radioBill.makeCall();
    radioBill.makeCall();
    radioBill.makeCall();

    assert.equal(0.0, radioBill.smsTotalCost());
    assert.equal(8.25, radioBill.callTotalCost());
    assert.equal(8.25, radioBill.billTotalCost());
  });

  it("should be able to make 2 calls, send 2 sms's, update the total call cost, sms cost and the bill total", function () {
    let radioBill = billWithRadio();

    radioBill.makeCall();
    radioBill.makeCall();
    radioBill.sendSms();
    radioBill.sendSms();

    assert.equal(1.5, radioBill.smsTotalCost());
    assert.equal(5.5, radioBill.callTotalCost());
    assert.equal(7.0, radioBill.billTotalCost());
  });
  describe("Warning & Critical levels", function () {
    it("should return a class Name of 'warning' when warning level is reached", function () {
      let radioBill = billWithRadio();

      radioBill.makeCall();
      radioBill.makeCall();
      radioBill.makeCall();
      radioBill.makeCall();
      radioBill.makeCall();
      radioBill.makeCall();
      radioBill.makeCall();
      radioBill.makeCall();
      radioBill.makeCall();
      radioBill.makeCall();
      radioBill.makeCall();
      radioBill.makeCall();

      assert.equal(0.0, radioBill.smsTotalCost());
      assert.equal(33.0, radioBill.callTotalCost());
      assert.equal(33.0, radioBill.billTotalCost());
      assert.equal("warning", radioBill.getClassName());
    });
    it("should return a class Name of 'critical' when critical level is reached", function () {
      let radioBill = billWithRadio();

      radioBill.makeCall();
      radioBill.makeCall();
      radioBill.makeCall();
      radioBill.makeCall();
      radioBill.makeCall();
      radioBill.makeCall();
      radioBill.makeCall();
      radioBill.makeCall();
      radioBill.makeCall();
      radioBill.makeCall();
      radioBill.makeCall();
      radioBill.makeCall();
      radioBill.makeCall();
      radioBill.makeCall();
      radioBill.makeCall();
      radioBill.makeCall();
      radioBill.makeCall();
      radioBill.makeCall();
      radioBill.makeCall();
      radioBill.makeCall();

      assert.equal(0.0, radioBill.smsTotalCost());
      assert.equal(55.0, radioBill.callTotalCost());
      assert.equal(55.0, radioBill.billTotalCost());
      assert.equal("critical", radioBill.getClassName());
    });
  });
});
