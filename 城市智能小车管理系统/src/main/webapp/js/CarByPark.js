new Vue({
    el:"#app",
    data:{
        CarByParkMoney: '',
        CarByParkSearch: '',     //默认输入为空
        CarByParkSearch2: '',     //下拉框下标
        CarByParkLetter: '',       //默认不排序
        CarByParkOriginal: false,   //默认从小到大排列
        CarByParkPageNum: "1",      //当前页码,默认第一页
        CarByParkPageSize: "1",       //每页数据量,默认每页1条
        CarByParkPages: "1",          //总页数,默认为0
        CarByParkList: [] ,        //表格当前页数据
        CarByParkTotalCount: 1000,   //默认数据总数
        newWindowCarByParkType:"",
        CarByPark:{
            id:"",
            carid:"",
            starttime:"",
            endtime:"",
            monery:"",
            parkid:""
        },//实体类
        CarByParkCar: [],//用于储存CaridList
        CarByParkCarNumber:[],
        CarsList: [{
            "id": 1,
            "carid": null,
            "carnumber": "B10005",
            "buytime": "2018-10-01",
            "carcol": "宝马",
            "balance": 1201,
            "userId": 1
        },
            {
                "id": 2,
                "carid": null,
                "carnumber": "B1F41A",
                "buytime": "2018-10-12",
                "carcol": "保时捷",
                "balance": 1000,
                "userId": 2
            },
            {
                "id": 4,
                "carid": null,
                "carnumber": "B10001",
                "buytime": "2018-10-14",
                "carcol": "雪佛莱",
                "balance": 1389,
                "userId": 1
            },
            {
                "id": 7,
                "carid": null,
                "carnumber": "京PH3X00",
                "buytime": "2018-10-01",
                "carcol": "雪铁龙",
                "balance": 0,
                "userId": 1
            },
            {
                "id": 8,
                "carid": null,
                "carnumber": "京PH3X00",
                "buytime": "2019-7-7",
                "carcol": "雪铁龙",
                "balance": 0,
                "userId": 1
            }],
    },
    methods:{
        //刷新
        myrefresh:function() {
            this.$router.go(0);
        },
        //打开新增模态窗口
        CarByParkShowWindow:function(){
            $("#myNewCarByParkModal").modal("show");
        },
        //通过carId查询数据
        CarByParkFindAll:function(page,size){
            //在当前方法中定义一个变量，表明是vue对象
                var _this = this;
                _this.jishu=0;
                let that = this ;//存储this
            var CarByParkList=[]
                for (var i=0;i< _this.CarsList.length;i++){
                    _this.CarByParkCar.push(_this.CarsList[i].id);
                }
                axios.post('/springmvc_war_exploded/carbypark/bylistcarid',{"integers":_this.CarByParkCar,"page":page,"size":size})
                    .then(function (response){
                        var pageInfo=response.data.pages;
                        _this.CarByParkPages=pageInfo;//总页数
                        console.log(response);
                        _this.CarByParkList = response.data.list;//响应数据给CarByParkList赋值
                        _this.CarByParkTotalCount=response.data.total;//数据总数
                        _this.CarByParkPageNum=response.data.pageNum;//当前页码
                        _this.CarByParkPageSize=response.data.pageSize;//当前页码数据量
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
        },
        //通过CarByParkId查询数据,并打开充值模态窗口
        CarByParkFindById:function (CarByParkid) {
            //在当前方法中定义一个变量，表明是vue对象
            var _this = this;
            axios.post('/springmvc_war_exploded/carbypark/byid',{"id":CarByParkid})
                .then(function (response) {
                    console.log(response);
                    _this.CarByPark = response.data;//响应数据给CarByParkList赋值
                    $("#myCarByParkModal").modal("show");
                })
                .catch(function (error) {
                    console.log(error);
                })
        },
        //通过新增模态窗口调用,增加停车场
        CarByParkInsert:function () {
            //在当前方法中定义一个变量，表明是vue对象
            var _this = this;
            var d = new Date();
            var year=d.getFullYear(); //获取年
            var month=d.getMonth()+1;//获取月
            var day=d.getDate(); //获取当日
            axios.post('/springmvc_war_exploded/carbypark/insert',{
                "examinetime":year+"-"+month+"-"+day,
                "examinetype":  _this.newWindowCarByParkCarByParkType,
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
        //通过充值模态窗口调用update来充值
        CarByParkUpDate:function () {
            //在当前方法中定义一个变量，表明是vue对象
            var _this = this;
            axios.post('/springmvc_war_exploded/carbypark/update',{
                "id": _this.CarByPark.id,
                 "examinetime": _this.CarByPark.examinetime,
                 "examinetype": _this.CarByPark.examinetype,
                "year": _this.CarByPark.year,
                "carId": _this.CarByPark.carId
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
        CarByParkDeletes:function (CarByParkid) {
            //在当前方法中定义一个变量，表明是vue对象
            var _this = this;
            confirm("你确认要删除吗？");
            axios.post('/springmvc_war_exploded/carbypark/delete', {"id": CarByParkid})
                .then(function (response) {
                    _this.findAll(CarByParkPageNum,CarByParkPageSize);
                })
                .catch(function (error) {
                    _this.findAll(CarByParkPageNum,CarByParkPageSize);
                    console.log(error);
                });
        },
        // 排序功能
        orderFn(CarByParkLetter,CarByParkOriginal){
            this.CarByParkLetter = CarByParkLetter;       //排序字段 price or sales
            this.CarByParkOriginal = CarByParkOriginal;   //排序方式  up or down
        }
    },
    //通过计算属性过滤数据
    computed:{
        //小车计算过滤
        CarByParkListQuery: function(){
            var _this = this;
            //逻辑-->根据input的value值筛选goodsList中的数据
            var arrByZM = [];//声明一个空数组来存放数据
            for (var y=0;y<_this.CarByParkList.length;y++){
                for (var j = 0; j < _this.CarsList.length; j++) {
                    if (_this.CarByParkList[y].carid==_this.CarsList[j].id){
                        _this.CarByParkCarNumber.push(_this.CarsList[j].carnumber);
                    }
                }
            }
            for (var i=0;i<this.CarByParkList.length;i++){
                //for循环数据中的每一项（根据name值）
                if(_this.CarByParkList[i].starttime.search(this.CarByParkSearch) != -1){
                    //判断输入框中的值是否可以匹配到数据，如果匹配成功
                    arrByZM.push(this.CarByParkList[i]);
                    //向空数组中添加数据
                }else if(_this.CarByParkList[i].endtime.search(this.CarByParkSearch) != -1){
                    //判断输入框中的值是否可以匹配到数据，如果匹配成功
                    arrByZM.push(this.CarByParkList[i]);
                    //向空数组中添加数据
                }
            }
            //逻辑-->升序降序排列  false: 默认从小到大  true：默认从大到小
            //判断，如果要CarByParkLetter不为空，说明要进行排序
            if(this.CarByParkLetter != ''){
                arrByZM.sort(function( a , b){
                    if(_this.CarByParkOriginal){
                        return b[_this.CarByParkLetter] - a[_this.CarByParkLetter];
                    }else{
                        return a[_this.CarByParkLetter] - b[_this.CarByParkLetter];
                    }
                });
            }
            //一定要记得返回筛选后的数据
            return arrByZM;
        }
    },
    created:function() {
        //当我们页面加载的时候触发请求，查询所有
        this.CarByParkFindAll(1,4);
    }
});