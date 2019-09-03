new Vue({
    el:"#app",
    data:{
        CarMoney: '',
        CarSearch: '',     //默认输入为空
        CarSearch2: '',     //下拉框下标
        CarLetter: '',       //默认不排序
        CarOriginal: false,   //默认从小到大排列
        CarPageNum: "1",      //当前页码,默认第一页
        CarPageSize: "1",       //每页数据量,默认每页1条
        CarPages: "1",          //总页数,默认为0
        carList: [] ,        //表格当前页数据
        CarTotalCount: 1000,   //默认数据总数
        newWindowCarNumber:"",
        newWindowCarCol:"",
        newWindowExamineExamineType:"",
        car:{
            id:"",
            carid:"",
            carnumber:"",
            buytime:"",
            carcol:"",
            balance:"",
            car_id:""
        }
    },
    methods:{
        //刷新
        myrefresh:function() {
            this.$router.go(0);
        },
        //打开新增模态窗口
        carShowWindow:function(){
            $("#myNewCarModal").modal("show");
        },
        //通过userId查询数据
        carFindAll:function(page,size){
            //在当前方法中定义一个变量，表明是vue对象
            var _this = this;
            axios.get('/springmvc_war_exploded/car/byuserid?userid=1&page='+page+'&size='+size+'')
                .then(function (response){
                   // alert("page"+page+"size"+size);
                    /*                   alert("数据总数"+response.data.total+
                                          "    当前页码:"+response.data.CarPageNum+""+
                                          "    当前页码数据量:"+response.data.CarPageSize+""+
                                          "    上一页页码:"+response.data.CarPageSize+""+
                                          "    下一页页码:"+response.data.nextPage+""+
                                          "    总页数:"+response.data.CarPages+""
                                      );*/
                    var pageInfo=response.data.pages;
                    _this.CarPages=pageInfo;//总页数
                    console.log(response);
                    _this.carList = response.data.list;//响应数据给carList赋值
                    _this.CarTotalCount=response.data.total;//数据总数
                    _this.CarPageNum=response.data.pageNum;//当前页码
                    _this.CarPageSize=response.data.pageSize;//当前页码数据量
/*
                    var parPageInfo=response.date.prePage;//上一页页码
                    _this.prePage=parPageInfo;
                    _this.nextPage=response.date.nextPage;//下一页页码*/
                })
                .catch(function (error) {
                    console.log(error);
                })
        },
        //通过carId查询数据,并打开充值模态窗口
        carFindById:function (carid) {
            //在当前方法中定义一个变量，表明是vue对象
            var _this = this;
            axios.post('/springmvc_war_exploded/car/byid',{"id":carid})
                .then(function (response) {
                    console.log(response);
                    _this.car = response.data;//响应数据给carList赋值
                    $("#myCarModal").modal("show");
                })
                .catch(function (error) {
                    console.log(error);
                })
        },
        //通过carId查询数据,并打开充值模态窗口
        carFindById2:function (carid) {
            //在当前方法中定义一个变量，表明是vue对象
            var _this = this;
            axios.post('/springmvc_war_exploded/car/byid',{"id":carid})
                .then(function (response) {
                    console.log(response);
                    _this.car = response.data;//响应数据给carList赋值
                    $("#myExamineModal").modal("show");
                })
                .catch(function (error) {
                    console.log(error);
                })
        },
        //通过新增模态窗口调用,增加小车
        carInsert:function () {
            //在当前方法中定义一个变量，表明是vue对象
            var _this = this;
            var d = new Date();
            var year=d.getFullYear(); //获取年
            var month=d.getMonth()+1;//获取月
            var day=d.getDate(); //获取当日
            axios.post('/springmvc_war_exploded/car/insert',{
                "carnumber": this.newWindowCarNumber,
                "buytime": year+"-"+month+"-"+day,
                "carcol": this.newWindowCarCol,
                "balance":'0',
                "userId":'1'
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
        carUpDate:function () {
            //在当前方法中定义一个变量，表明是vue对象
            var _this = this;

            axios.post('/springmvc_war_exploded/car/update',{
                "id": this.car.id,
                "carid": this.car.carid,
                "carnumber": this.car.carnumber,
                "buytime": this.car.buytime,
                "carcol": this.car.carcol,
                "balance": parseInt(this.car.balance)+parseInt(this.CarMoney),
                "userid": this.car.userid}
                )
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                })
        },
        //删除功能
        carDeletes:function (carid) {
            //在当前方法中定义一个变量，表明是vue对象
            var _this = this;
            confirm("你确认要删除吗？");
            axios.post('/springmvc_war_exploded/car/delete', {"id": carid})
                .then(function (response) {
                    _this.findAll(CarPageNum,CarPageSize);
                })
                .catch(function (error) {
                    _this.findAll(CarPageNum,CarPageSize);
                    console.log(error);
                });
        },
        // 排序功能
        orderFn(CarLetter,CarOriginal){
            this.CarLetter = CarLetter;       //排序字段 price or sales
            this.CarOriginal = CarOriginal;   //排序方式  up or down
        },
        //通过新增模态窗口调用,增加小车相关的车检记录
        ExamineInsert:function () {
            //在当前方法中定义一个变量，表明是vue对象
            var _this = this;
            var d = new Date();
            var year=d.getFullYear(); //获取年
            var month=d.getMonth()+1;//获取月
            var day=d.getDate(); //获取当日
            axios.post('/springmvc_war_exploded/examine/insert',{
                    "examinetime":year+"-"+month+"-"+day,
                    "examinetype":  _this.newWindowExamineExamineType,
                    "year": year,
                    "carId":1,
                }
            )
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                })
        },
    },
    //通过计算属性过滤数据
    computed:{
        //小车计算过滤
        carListQuery: function(){
            var _this = this;
            //逻辑-->根据input的value值筛选goodsList中的数据
            var arrByZM = [];//声明一个空数组来存放数据
            for (var i=0;i<this.carList.length;i++){
                //for循环数据中的每一项（根据name值）
                if(this.carList[i].carnumber.search(this.CarSearch) != -1){
                    //判断输入框中的值是否可以匹配到数据，如果匹配成功
                    arrByZM.push(this.carList[i]);
                    //向空数组中添加数据
                }else if(this.carList[i].id.toString().search(this.CarSearch) != -1){
                    //判断输入框中的值是否可以匹配到数据，如果匹配成功
                    arrByZM.push(this.carList[i]);
                    //向空数组中添加数据
                }else if(this.carList[i].carcol.search(this.CarSearch) != -1){
                    //判断输入框中的值是否可以匹配到数据，如果匹配成功
                    arrByZM.push(this.carList[i]);
                    //向空数组中添加数据
                }
            }
            //逻辑-->升序降序排列  false: 默认从小到大  true：默认从大到小
            //判断，如果要CarLetter不为空，说明要进行排序
            if(this.CarLetter != ''){
                arrByZM.sort(function( a , b){
                    if(_this.CarOriginal){
                        return b[_this.CarLetter] - a[_this.CarLetter];
                    }else{
                        return a[_this.CarLetter] - b[_this.CarLetter];
                    }
                });
            }
            //一定要记得返回筛选后的数据
            return arrByZM;
        }
    },
    created:function() {
        //当我们页面加载的时候触发请求，查询所有
        this.carFindAll("1","2");
    }
});