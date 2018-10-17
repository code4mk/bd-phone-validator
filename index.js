/**=====================================================================
 https://code4mk.org
 https://github.com/code4mk
==========================================================================*/
let bdPhone = function phone(num) {
  // TODO: status object should have keys as camelCase not as snake_case
  // TODO: If exceed is false, no need to have exceed_digit 0
  // TODO: If operator is false, no need to have operator_status as invalid- this is extra!

  if (num !== undefined && num.trim() !== '') {
    const validPhoneNumberRegex = /(\+){0,1}(88){0,1}01(3|7|8|6|9|5)(\d){8}/;
    let countryCode = '+88';
    let status = {};
    let actualNumber = num.replace(/(\+88)|[\D]/gi,'');
    let numberWithCountryCode = `${countryCode}${actualNumber}`;

    if (validPhoneNumberRegex.exec(numberWithCountryCode) === null) {
      if (numberWithCountryCode.length < 14) {
        status['digit_status'] = 'should have 11 digits';
        status['need'] = 14 - numberWithCountryCode.length;
      } else {
        status['operator_status'] =  'invalid operator';
        status['operator'] = false;
      }
    } else {
      status['operator_status'] =  'valid operator';
      status['operator'] = true;

      if (numberWithCountryCode.length >= 14) {
        status['suggest'] = numberWithCountryCode;
      }

      let extraDigitCount = actualNumber.length - 14;
      status['exceed'] = extraDigitCount > 0;
      status['exceed_digit'] = status['exceed'] ? extraDigitCount : 0;
      if (status['exceed']) {
        status['digit_status'] = `exceeds ${extraDigitCount} digits`;
      }
    }

    return status;
  } else {
    console.log('phone is undefined');
  }

}

module.exports = bdPhone
module.exports.default = bdPhone;
