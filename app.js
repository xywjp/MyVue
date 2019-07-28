new Vue({
    el:"#vue-app",
    data:{
        a:0,
        b:0,
        age:20
    },
    methods:{
        /*
        AddToA:function(){
            return this.a+this.age;
        },
        AddToB:function(){
            return this.b+this.age;
        }*/
    },
    computed: {
        AddToA:function(){
            return this.a+this.age;
        },
        AddToB:function(){
            return this.b+this.age;
        }
    },
});

/*
 * el: element 需要获取的元素，一定是HTML中根容器元素
 * data: 用于数据的存储
 * methds: 用于存储各种方法
 * data-binding: 给属性绑定对应的值
 */