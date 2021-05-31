//普通的创建方式，就可以创建出单例
//如 let a= new Singleton("猪八戒");
//   let b= new Singleton("孙悟空");
//   console.log(a===b)  //ture


let CreateSingleton = (function (){
    let instance = null;
    let CreateSingle=function(name){
        if(instance){
            return instance
        }
      return instance = this
    }
    return CreateSingle
})()
let a=CreateSingleton("猪八戒")
let b=CreateSingleton("孙悟空")
console.log(a===b)