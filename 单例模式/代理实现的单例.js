let ProxyCreate= (function(){
    let instance=null;
    let Create = function(Singleton,...args){
        console.log("instance",instance)
        if(!instance){
            instance = new Singleton(...args)
        }
        return instance
    }
    return Create
})()
let Singleton=function(name){
    this.name=name
}
Singleton.prototype.getName=function(){
    console.log("name",this.name)
}
let a=new ProxyCreate(Singleton,"猪八戒")
let b=new ProxyCreate(Singleton,"孙悟空")
console.log('isEqual', a===b)
console.log('a.name', a.name)