/**=====================================================================
 https://code4mk.org
 https://github.com/code4mk
==========================================================================*/
let bdPhone = function phone(num) {
   // operator number  <num>
  if (num !== undefined && num.trim() !== '') {
    const validatorRegex = /(\+){0,1}(88){0,1}01(3|5|6|7|8|9)(\d){8}/;
    var originalNum = num;
    let countryCode = '+88';
    let status = {};
    let collectDigit = originalNum.replace(/[\D]/gi,'');
    let reduntantCountryCode = countryCode.concat(collectDigit.replace(/^\+*8+/gi,''));
    let bdSuggestPhone = reduntantCountryCode.slice(0,14);

    originalNum.slice(0,3) === '+88'  ? status['input_length'] = 14 : status['input_length'] = 11

    if (validatorRegex.exec(originalNum) !== null && validatorRegex.exec(originalNum)[0] === originalNum ) {
      status['core_valid'] = true
    } else {
      status['core_valid'] = false
    }

    function checkOperatorDigit() {
      let operatorDigit = bdSuggestPhone.slice(5,6)
      if ( operatorDigit === '3'||operatorDigit === '5'||operatorDigit === '6'||operatorDigit === '7'||operatorDigit === '8'||operatorDigit === '9') {
        return true
      }
      return false
    }

    // operator status & need digit
    if (validatorRegex.exec(bdSuggestPhone) === null ) {
      if (checkOperatorDigit() && bdSuggestPhone.length < 14 ) {
        status['digit_status'] = 'Number length must be 11 digits'
        status['need_digit'] = 14 - bdSuggestPhone.length
      } else {
        status['has_operator'] = false
        status['operator_status'] =  `(${bdSuggestPhone.slice(3,6)}) invalid operator`
        status['status'] = `(${bdSuggestPhone.slice(3,6)}) invalid operator`
      }
    } else {
      status['has_operator'] = true
      status['operator_status'] =  `(${bdSuggestPhone.slice(3,6)}) valid operator`
      if (bdSuggestPhone.length >= 14) {
        status['suggest_num'] = bdSuggestPhone
        status['status'] = bdSuggestPhone
      }
      // digit status exceed
      if (reduntantCountryCode.length > 14){
        countExceedDigit = reduntantCountryCode.length - 14
        status['exceed'] = countExceedDigit
        status['has_exceed'] = true
        status['original_number'] = reduntantCountryCode
        status['exceed_digit'] = reduntantCountryCode.slice(14,reduntantCountryCode.length)
        status['digit_status'] = `exceed ${countExceedDigit} digit`
      }
    }
    // console.log(status)
    return status
  } else {
    console.log('phone is undefined')
  }
}
module.exports = bdPhone
module.exports.default = bdPhone;
