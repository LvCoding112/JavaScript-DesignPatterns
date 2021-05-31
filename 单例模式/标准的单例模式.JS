class Singleton {
    construct(name){
        this.name=name;
    }
    instance=null //存储唯一对象
    getName(){
       console.log("Name",this.name) 
    }
    static getInstance(name){ //获取对象
        if(!this.instance){
            this.instance=new Singleton(name)
        }
        return this.instance
    }

}
 let a=Singleton.getInstance("猪八戒")
 let b=Singleton.getInstance("孙悟空")
 console.log(a===b)//判断是否指向同一内存区域