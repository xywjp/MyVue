new Vue({
    el:"#vue-app",
    data:{
        name:"",
        age:""
    },
    methods:{
        inputname:function(){
            this.name=this.$refs.name.value;
        },
        inputage:function(){
            this.age=this.$refs.age.value;
        }
    }
});

/*
 * el: element 需要获取的元素，一定是HTML中根容器元素
 * data: 用于数据的存储
 * methds: 用于存储各种方法
 * data-binding: 给属性绑定对应的值
 */