new Vue({
    el:"#app",
    data:{
        MoneyRecordMoney: '',
        MoneyRecordSearch: '',     //默认输入为空
        MoneyRecordSearch2: '',     //下拉框下标
        MoneyRecordLetter: '',       //默认不排序
        MoneyRecordOriginal: false,   //默认从小到大排列
        MoneyRecordPageNum: "1",      //当前页码,默认第一页
        MoneyRecordPageSize: "1",       //每页数据量,默认每页1条
        MoneyRecordPages: "1",          //总页数,默认为0
        MoneyRecordList: [] ,        //表格当前页数据
        MoneyRecordTotalCount: 1000,   //默认数据总数
        newWindowMoneyRecordType:"",
        MoneyRecord:{
            id:"",
            money:"",
            type:"",
            time:"",
            carId:""
        },//实体类
        MoneyRecordCar: [],//用于储存CaridList
        MoneyRecordCarNumber:[],
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
        MoneyRecordShowWindow:function(){
            $("#myNewMoneyRecordModal").modal("show");
        },
        //通过carId查询数据
        MoneyRecordFindAll:function(){
            //在当前方法中定义一个变量，表明是vue对象
                var _this = this;
                _this.jishu=0;
                let that = this ;//存储this
            var MoneyRecordList=[]
                for (var i=0;i< _this.CarsList.length;i++){
                    _this.MoneyRecordCar.push(_this.CarsList[i].id);
                }
                axios.post('/springmvc_war_exploded/moneyrecord/bylistcarid',{"integers":_this.MoneyRecordCar})
                    .then(function (response){
                        var pageInfo=response.data.pages;
                        _this.MoneyRecordPages=pageInfo;//总页数
                        console.log(response);
                        _this.MoneyRecordList = response.data.list;//响应数据给MoneyRecordList赋值
                        _this.MoneyRecordTotalCount=response.data.total;//数据总数
                        _this.MoneyRecordPageNum=response.data.pageNum;//当前页码
                        _this.MoneyRecordPageSize=response.data.pageSize;//当前页码数据量
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
        },
        //通过MoneyRecordId查询数据,并打开充值模态窗口
        MoneyRecordFindById:function (MoneyRecordid) {
            //在当前方法中定义一个变量，表明是vue对象
            var _this = this;
            axios.post('/springmvc_war_exploded/moneyrecord/byid',{"id":MoneyRecordid})
                .then(function (response) {
                    console.log(response);
                    _this.MoneyRecord = response.data;//响应数据给MoneyRecordList赋值
                    $("#myMoneyRecordModal").modal("show");
                })
                .catch(function (error) {
                    console.log(error);
                })
        },
        //通过新增模态窗口调用,增加停车场
        MoneyRecordInsert:function () {
            //在当前方法中定义一个变量，表明是vue对象
            var _this = this;
            var d = new Date();
            var year=d.getFullYear(); //获取年
            var month=d.getMonth()+1;//获取月
            var day=d.getDate(); //获取当日
            axios.post('/springmvc_war_exploded/moneyrecord/insert',{
                "examinetime":year+"-"+month+"-"+day,
                "examinetype":  _this.newWindowMoneyRecordMoneyRecordType,
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
        MoneyRecordUpDate:function () {
            //在当前方法中定义一个变量，表明是vue对象
            var _this = this;
            axios.post('/springmvc_war_exploded/moneyrecord/update',{
                "id": _this.MoneyRecord.id,
                 "examinetime": _this.MoneyRecord.examinetime,
                 "examinetype": _this.MoneyRecord.examinetype,
                "year": _this.MoneyRecord.year,
                "carId": _this.MoneyRecord.carId
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
        MoneyRecordDeletes:function (MoneyRecordid) {
            //在当前方法中定义一个变量，表明是vue对象
            var _this = this;
            confirm("你确认要删除吗？");
            axios.post('/springmvc_war_exploded/moneyrecord/delete', {"id": MoneyRecordid})
                .then(function (response) {
                    _this.findAll(MoneyRecordPageNum,MoneyRecordPageSize);
                })
                .catch(function (error) {
                    _this.findAll(MoneyRecordPageNum,MoneyRecordPageSize);
                    console.log(error);
                });
        },
        // 排序功能
        orderFn(MoneyRecordLetter,MoneyRecordOriginal){
            this.MoneyRecordLetter = MoneyRecordLetter;       //排序字段 price or sales
            this.MoneyRecordOriginal = MoneyRecordOriginal;   //排序方式  up or down
        }
    },
    //通过计算属性过滤数据
    computed:{
        //小车计算过滤
        MoneyRecordListQuery: function(){
            var _this = this;
            //逻辑-->根据input的value值筛选goodsList中的数据
            var arrByZM = [];//声明一个空数组来存放数据
            for (var y=0;y<_this.MoneyRecordList.length;y++){
                for (var j = 0; j < _this.CarsList.length; j++) {
                    if (_this.MoneyRecordList[y].carId==_this.CarsList[j].id){
                        _this.MoneyRecordCarNumber.push(_this.CarsList[j].carnumber);
                    }
                }
            }
            for (var i=0;i<this.MoneyRecordList.length;i++){
                //for循环数据中的每一项（根据name值）
                if(_this.MoneyRecordList[i].time.search(this.MoneyRecordSearch) != -1){
                    //判断输入框中的值是否可以匹配到数据，如果匹配成功
                    arrByZM.push(this.MoneyRecordList[i]);
                    //向空数组中添加数据
                }else if(_this.MoneyRecordList[i].type.search(this.MoneyRecordSearch) != -1){
                    //判断输入框中的值是否可以匹配到数据，如果匹配成功
                    arrByZM.push(this.MoneyRecordList[i]);
                    //向空数组中添加数据
                }
            }
            //逻辑-->升序降序排列  false: 默认从小到大  true：默认从大到小
            //判断，如果要MoneyRecordLetter不为空，说明要进行排序
            if(this.MoneyRecordLetter != ''){
                arrByZM.sort(function( a , b){
                    if(_this.MoneyRecordOriginal){
                        return b[_this.MoneyRecordLetter] - a[_this.MoneyRecordLetter];
                    }else{
                        return a[_this.MoneyRecordLetter] - b[_this.MoneyRecordLetter];
                    }
                });
            }
            //一定要记得返回筛选后的数据
            return arrByZM;
        }
    },
    created:function() {
        //当我们页面加载的时候触发请求，查询所有
        this.MoneyRecordFindAll();
    }
});