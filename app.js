new Vue({
    el:"#vue-app",
    data:{
        name:"王景鹏",
        job:"Web开发",
        website:"https://baidu.com",
        websitetag:"<a href='https://baidu.com'>百度page</a>"
    },
    methods:{
        greet: function(time){
            return 'Good '+time +this.name + ' !';
        }
    }
});

/*
 * el: element 需要获取的元素，一定是HTML中根容器元素
 * data: 用于数据的存储
 * methds: 用于存储各种方法
 * data-binding: 给属性绑定对应的值
 */