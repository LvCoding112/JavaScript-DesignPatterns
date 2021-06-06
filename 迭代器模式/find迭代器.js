Array.prototype.find = function(callback) {
    let val=null;
    for (let index = 0; index < this.length; index++) {
       if(callback(this[index],index,this)){
        val=this[index];
       
       }
    }
    return val;
}
let arr=new Array("12","23","34");
let val1=arr.find(function(val,idx,arr){
    return val=="12"
})
console.log("val1",val1)