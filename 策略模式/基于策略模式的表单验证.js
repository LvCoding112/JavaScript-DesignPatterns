const phoneNumberRegExp = /^1[1-9][0-9]{8}$/ //电话号码
const pureNumberRegExp=/^[0-9]+$/ //数字
const rules ={
    isNonEmpty(value,message){
        if(value.length<1) return message??"不可以为空！"
        return 
    },
    isPhoneNumber(value,message){
        if(!value.test(phoneNumberRegExp))  return message??"手机号格式不正确"
          return
    }
}
export const stratege=(plan,value,message)=>{
    if(Object.keys(rules).includes(plan)) return rules[plan](value,message)
   return "不存在的验证规则！"
}
const validator=(rule,value,callback) => { //组合增强验证,按错误点提示
    const res1=stratege("isNonEmpty",value)
    const res2=stratege("isPhoneNumber",value)
    if(res1&&res2){  //组合增强验证,按错误点提示
        callback(res1&&res2)
        return
    }
    callback()
}
console.log(null&&null)