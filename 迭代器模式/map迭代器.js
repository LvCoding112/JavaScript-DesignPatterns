Array.prototype.map=function(callback){
    let newArr=[];
    for(let i=0;i<this.length;i++){
        newArr.push(callback(this[i],i,this))
    }
    return newArr
}
let arr=new Array("1",2,"3");
let newA=arr.map(function(v,i){
    if(i>=1){
        return v
    }
   
})
console.log(newA)