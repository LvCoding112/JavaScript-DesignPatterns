Array.prototype.forEach=function(callback){
    for(let i=0;i<this.length;i++){
        callback(this[i],i,this)
    }
}
let a=new Array(1,2,3)
a.forEach(function(x){
  console.log(x)
})