exports.generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };
  
  exports.verifyOTP = (inputOTP, storedOTP) => {
    return inputOTP === storedOTP;
  };