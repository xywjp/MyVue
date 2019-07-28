new Vue({
    el:"#vue-app",
    data:{
        age:21,
        x:0,
        y:0
    },
    methods:{
        addage:function(){
            this.age++;
        },
        subtractage:function(){
            this.age--;
        },
        updateXY:function(event){
            //console.log(event);
            this.x=event.offsetX;
            this.y=event.offsetY;
        },
        StopMoving:function(event){
            event.stopPropagation();
        },
        alert:function(){
            alert("Hellow World !");
        }
    }
});

/*
 * el: element 需要获取的元素，一定是HTML中根容器元素
 * data: 用于数据的存储
 * methds: 用于存储各种方法
 * data-binding: 给属性绑定对应的值
 */