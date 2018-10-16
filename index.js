
let bdPhone = function phone(num) {

  if (num !== undefined && num !== ' ' && num !== '') {
    const regex = /(\+){0,1}(88){0,1}01(3|7|8|6|9|5)(\d){8}/;
    var num = num
    var country_code = '+88'
    var valid_status = {}

    var remove_nonDigit = num.replace(/[\D]/gi,'')

    var eight_status = country_code.concat(remove_nonDigit.replace(/^\+*8+/gi,''))
    var phn_length = eight_status.slice(0,14)

    if (phn_length.length >= 14) {
      valid_status['suggest'] = phn_length
    }

    if (regex.exec(phn_length) === null ) {

      if (phn_length.length < 14) {
        valid_status['digit_status'] = 'need 11 digits'
        valid_status['need'] = 14 - phn_length.length
      } else {
        valid_status['operator_status'] =  'invalid operator'
        valid_status['operator'] = false
      }
    } else {
      valid_status['operator_status'] =  'valid operator'
      valid_status['operator'] = true
    }
    if (eight_status.length > 14){
      exceed_digit = eight_status.length - 14
      valid_status['exceed'] = exceed_digit
      valid_status['digit_status'] = `exceed ${exceed_digit} digit`
    } else {
      valid_status['exceed'] = false
      valid_status['exceed_digit'] = 0
    }
    // console.log(valid_status)
    return valid_status
  } else {
    console.log('phone is undefined')
  }

}
module.exports = bdPhone
module.exports.default = bdPhone;
