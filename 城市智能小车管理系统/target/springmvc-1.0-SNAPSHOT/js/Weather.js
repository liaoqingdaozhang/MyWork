new Vue({
    el:"#app",
    data:{
        StopMoney: '',
        StopSearch: '',     //默认输入为空
        StopSearch2: '',     //下拉框下标
        StopLetter: '',       //默认不排序
        StopOriginal: false,   //默认从小到大排列
        StopPageNum: "1",      //当前页码,默认第一页
        StopPageSize: "1",       //每页数据量,默认每页1条
        StopPages: "1",          //总页数,默认为0
        StopList: [] ,        //表格当前页数据
        StopTotalCount: 1000,   //默认数据总数
        newWindowStopName:"",
        newWindowStopSum:"",
        newWindowStopSite:"",
        Stop:{
            id:"",
            name:"",
            surplus:"",
            sum:"",
            site:""
        }
    },
    methods:{
        //刷新
        myrefresh:function() {
            this.$router.go(0);
        },
        //打开新增模态窗口
        StopShowWindow:function(){
            $("#myNewStopModal").modal("show");
        },
        //通过userId查询数据
        StopFindAll:function(page,size){
            //在当前方法中定义一个变量，表明是vue对象
            var _this = this;
            axios.get('/springmvc_war_exploded/park/selectall?page='+page+'&size='+size+'')
                .then(function (response){
                   // alert("page"+page+"size"+size);
                    /*                   alert("数据总数"+response.data.total+
                                          "    当前页码:"+response.data.StopPageNum+""+
                                          "    当前页码数据量:"+response.data.StopPageSize+""+
                                          "    上一页页码:"+response.data.StopPageSize+""+
                                          "    下一页页码:"+response.data.nextPage+""+
                                          "    总页数:"+response.data.StopPages+""
                                      );*/
                    var pageInfo=response.data.pages;
                    _this.StopPages=pageInfo;//总页数
                    console.log(response);
                    _this.StopList = response.data.list;//响应数据给StopList赋值
                    _this.StopTotalCount=response.data.total;//数据总数
                    _this.StopPageNum=response.data.pageNum;//当前页码
                    _this.StopPageSize=response.data.pageSize;//当前页码数据量
/*
                    var parPageInfo=response.date.prePage;//上一页页码
                    _this.prePage=parPageInfo;
                    _this.nextPage=response.date.nextPage;//下一页页码*/
                })
                .catch(function (error) {
                    console.log(error);
                })
        },
        //通过StopId查询数据,并打开充值模态窗口
        StopFindById:function (Stopid) {
            //在当前方法中定义一个变量，表明是vue对象
            var _this = this;
            axios.post('/springmvc_war_exploded/park/byid',{"id":Stopid})
                .then(function (response) {
                    console.log(response);
                    _this.Stop = response.data;//响应数据给StopList赋值
                    $("#myStopModal").modal("show");
                })
                .catch(function (error) {
                    console.log(error);
                })
        },
        //通过新增模态窗口调用,增加停车场
        StopInsert:function () {
            //在当前方法中定义一个变量，表明是vue对象
            var _this = this;
            axios.post('/springmvc_war_exploded/park/insert',{
                "name": _this.newWindowStopName,
                "surplus": _this.newWindowStopSum,
                "sum": _this.newWindowStopSum,
                "site": _this.newWindowStopSite
                }
            )
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                })
        },
        //通过充值模态窗口调用update来充值
        StopUpDate:function () {
            //在当前方法中定义一个变量，表明是vue对象
            var _this = this;
            axios.post('/springmvc_war_exploded/park/update',{
                "id": _this.Stop.id,
                 "name": _this.Stop.name,
                 "surplus": _this.Stop.surplus,
                "sum": _this.Stop.sum,
                "site": _this.Stop.site
            }
                )
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                })
        },
        //删除功能
        StopDeletes:function (Stopid) {
            //在当前方法中定义一个变量，表明是vue对象
            var _this = this;
            confirm("你确认要删除吗？");
            axios.post('/springmvc_war_exploded/park/delete', {"id": Stopid})
                .then(function (response) {
                    _this.findAll(StopPageNum,StopPageSize);
                })
                .catch(function (error) {
                    _this.findAll(StopPageNum,StopPageSize);
                    console.log(error);
                });
        },
        // 排序功能
        orderFn(StopLetter,StopOriginal){
            this.StopLetter = StopLetter;       //排序字段 price or sales
            this.StopOriginal = StopOriginal;   //排序方式  up or down
        }
    },
    //通过计算属性过滤数据
    computed:{
        //小车计算过滤
        StopListQuery: function(){
            var _this = this;
            //逻辑-->根据input的value值筛选goodsList中的数据
            var arrByZM = [];//声明一个空数组来存放数据
            for (var i=0;i<this.StopList.length;i++){
                //for循环数据中的每一项（根据name值）
                if(this.StopList[i].name.search(this.StopSearch) != -1){
                    //判断输入框中的值是否可以匹配到数据，如果匹配成功
                    arrByZM.push(this.StopList[i]);
                    //向空数组中添加数据
                }else if(this.StopList[i].site.search(this.StopSearch) != -1){
                    //判断输入框中的值是否可以匹配到数据，如果匹配成功
                    arrByZM.push(this.StopList[i]);
                    //向空数组中添加数据
                }
            }
            //逻辑-->升序降序排列  false: 默认从小到大  true：默认从大到小
            //判断，如果要StopLetter不为空，说明要进行排序
            if(this.StopLetter != ''){
                arrByZM.sort(function( a , b){
                    if(_this.StopOriginal){
                        return b[_this.StopLetter] - a[_this.StopLetter];
                    }else{
                        return a[_this.StopLetter] - b[_this.StopLetter];
                    }
                });
            }
            //一定要记得返回筛选后的数据
            return arrByZM;
        }
    },
    created:function() {
        //当我们页面加载的时候触发请求，查询所有
        this.StopFindAll("1","2");
    }
});