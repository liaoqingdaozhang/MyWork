new Vue({
    el:"#app",
    data:{
        search:'',     //默认输入为空
        select2:'',     //下拉框下标
        letter:'',       //默认不排序
        original:false,   //默认从小到大排列
        pageNum:"1",      //当前页码,默认第一页
        pageSize:"1",       //每页数据量,默认每页1条
        prePage:"1",         //上一页的页码,默认为1
        nextPage:"2",       //下一页的页码,默认为2
        pages:"1",          //总页数,默认为0
        userList:[] ,        //表格当前页数据
        totalCount: 1000,   //默认数据总数
        user:{
            id:"",
            name:"",
            username:"",
            password:"",
            phone:"",
            card:"",
            registertime:"",
            age:"",
            sex:""
        }
    },
    methods:{
        myrefresh:function()
        {
            this.$router.go(0);
        },
        findAll:function(page,size){
            //在当前方法中定义一个变量，表明是vue对象
            var _this = this;
            axios.get('/springmvc_war_exploded/user/selectall?page='+page+'&size='+size+'')
                .then(function (response) {
                   // alert("page"+page+"size"+size);
                    /*                   alert("数据总数"+response.data.total+
                                          "    当前页码:"+response.data.pageNum+""+
                                          "    当前页码数据量:"+response.data.pageSize+""+
                                          "    上一页页码:"+response.data.pageSize+""+
                                          "    下一页页码:"+response.data.nextPage+""+
                                          "    总页数:"+response.data.pages+""
                                      );*/
                    var pageInfo=response.data.pages;
                    _this.pages=pageInfo;//总页数
                    console.log(response);
                    _this.userList = response.data.list;//响应数据给userList赋值
                    _this.totalCount=response.data.total;//数据总数
                    _this.pageNum=response.data.pageNum;//当前页码
                    _this.pageSize=response.data.pageSize;//当前页码数据量

                    var parPageInfo=response.date.prePage;//上一页页码
                    _this.prePage=parPageInfo;
                    _this.nextPage=response.date.nextPage;//下一页页码

                })
                .catch(function (error) {
                    console.log(error);
                })
        },
        findById:function (userid) {
            //在当前方法中定义一个变量，表明是vue对象
            var _this = this;
            axios.post('/springmvc_war_exploded/user/byid',{"id":userid})
                .then(function (response) {
                    console.log(response);
                    _this.user = response.data;//响应数据给userList赋值
                    $("#myModal").modal("show");
                })
                .catch(function (error) {
                    alert(response);
                    console.log(error);
                })
        },
        update:function (user) {//post请求
            //在当前方法中定义一个变量，表明是vue对象
            var _this = this;
            axios.post('/springmvc_war_exploded/user/update', _this.user)
                .then(function (response) {
                    _this.findAll(pageNum,pageSize);
                })
                .catch(function (error) {
                    console.log(error);
                });
        },orderFn(letter,original){
            this.letter = letter;       //排序字段 price or sales
            this.original = original;   //排序方式  up or down
        } ,
        deletes:function (userid) {//post请求
            //在当前方法中定义一个变量，表明是vue对象
            var _this = this;
            alert(userid);
            confirm("你确认要删除吗？");
            axios.post('/springmvc_war_exploded/user/delete', userid)
                .then(function (response) {
                    _this.findAll(pageNum,pageSize);
                })
                .catch(function (error) {
                    _this.findAll(pageNum,pageSize);
                    console.log(error);
                });
        },orderFn(letter,original){
            this.letter = letter;       //排序字段 price or sales
            this.original = original;   //排序方式  up or down
        }
    },
    //通过计算属性过滤数据
    computed:{
        list: function(){
            var _this = this;
            //逻辑-->根据input的value值筛选goodsList中的数据
            var arrByZM = [];//声明一个空数组来存放数据
            for (var i=0;i<this.userList.length;i++){
                //for循环数据中的每一项（根据name值）
                if(this.userList[i].name.search(this.search) != -1){
                    //判断输入框中的值是否可以匹配到数据，如果匹配成功
                    arrByZM.push(this.userList[i]);
                    //向空数组中添加数据
                }else if(this.userList[i].id.toString().search(this.search) != -1){
                    //判断输入框中的值是否可以匹配到数据，如果匹配成功
                    arrByZM.push(this.userList[i]);
                    //向空数组中添加数据
                }else if(this.userList[i].username.search(this.search) != -1){
                    //判断输入框中的值是否可以匹配到数据，如果匹配成功
                    arrByZM.push(this.userList[i]);
                    //向空数组中添加数据
                }
            }
            //逻辑-->升序降序排列  false: 默认从小到大  true：默认从大到小
            //判断，如果要letter不为空，说明要进行排序
            if(this.letter != ''){
                arrByZM.sort(function( a , b){
                    if(_this.original){
                        return b[_this.letter] - a[_this.letter];
                    }else{
                        return a[_this.letter] - b[_this.letter];
                    }
                });
            }
            //一定要记得返回筛选后的数据
            return arrByZM;
        }
    },
    created:function() {//当我们页面加载的时候触发请求，查询所有
        this.findAll("1","2");
    }
});