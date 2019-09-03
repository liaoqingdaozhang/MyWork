new Vue({
    el:"#app",
    data:{
        ExamineMoney: '',
        ExamineSearch: '',     //默认输入为空
        ExamineSearch2: '',     //下拉框下标
        ExamineLetter: '',       //默认不排序
        ExamineOriginal: false,   //默认从小到大排列
        ExaminePageNum: "1",      //当前页码,默认第一页
        ExaminePageSize: "1",       //每页数据量,默认每页1条
        ExaminePages: "1",          //总页数,默认为0
        ExamineList: [] ,        //表格当前页数据
        ExamineTotalCount: 1000,   //默认数据总数
        newWindowExamineExamineType:"",
        Examine:{
            id:"",
            examinetime:"",
            examinetype:"",
            year:"",
            carId:""
        },//实体类
        ExamineCar: [],//用于储存CaridList
        carList: [{
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
        ExamineShowWindow:function(){
            $("#myNewExamineModal").modal("show");
        },
        //通过carId查询数据
        ExamineFindAll:function(){
            //在当前方法中定义一个变量，表明是vue对象
                var _this = this;
                _this.jishu=0;
                let that = this ;//存储this
                for (var i=0;i< _this.carList.length;i++){
                    _this.ExamineCar.push(_this.carList[i].id);
                }
                axios.post('/springmvc_war_exploded/examine/bylistcarid',{"integers":_this.ExamineCar})
                    .then(function (response){
                        _this.ExamineList =response.data;
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
        },
        //通过ExamineId查询数据,并打开充值模态窗口
        ExamineFindById:function (Examineid) {
            //在当前方法中定义一个变量，表明是vue对象
            var _this = this;
            axios.post('/springmvc_war_exploded/examine/byid',{"id":Examineid})
                .then(function (response) {
                    console.log(response);
                    _this.Examine = response.data;//响应数据给ExamineList赋值
                    $("#myExamineModal").modal("show");
                })
                .catch(function (error) {
                    console.log(error);
                })
        },
        //通过新增模态窗口调用,增加停车场
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
        //通过充值模态窗口调用update来充值
        ExamineUpDate:function () {
            //在当前方法中定义一个变量，表明是vue对象
            var _this = this;
            axios.post('/springmvc_war_exploded/examine/update',{
                "id": _this.Examine.id,
                 "examinetime": _this.Examine.examinetime,
                 "examinetype": _this.Examine.examinetype,
                "year": _this.Examine.year,
                "carId": _this.Examine.carId
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
        ExamineDeletes:function (Examineid) {
            //在当前方法中定义一个变量，表明是vue对象
            var _this = this;
            confirm("你确认要删除吗？");
            axios.post('/springmvc_war_exploded/examine/delete', {"id": Examineid})
                .then(function (response) {
                    _this.findAll(ExaminePageNum,ExaminePageSize);
                })
                .catch(function (error) {
                    _this.findAll(ExaminePageNum,ExaminePageSize);
                    console.log(error);
                });
        },
        // 排序功能
        orderFn(ExamineLetter,ExamineOriginal){
            this.ExamineLetter = ExamineLetter;       //排序字段 price or sales
            this.ExamineOriginal = ExamineOriginal;   //排序方式  up or down
        }
    },
    //通过计算属性过滤数据
    computed:{
        //小车计算过滤
        ExamineListQuery: function(){
            var _this = this;
            //逻辑-->根据input的value值筛选goodsList中的数据
            var arrByZM = [];//声明一个空数组来存放数据
            for (var i=0;i<this.ExamineList.length;i++){
                //for循环数据中的每一项（根据name值）
                if(_this.ExamineList[i].year.toString().search(this.ExamineSearch) != -1){
                    //判断输入框中的值是否可以匹配到数据，如果匹配成功
                    arrByZM.push(this.ExamineList[i]);
                    //向空数组中添加数据
                }else if(_this.ExamineList[i].examinetype.search(this.ExamineSearch) != -1){
                    //判断输入框中的值是否可以匹配到数据，如果匹配成功
                    arrByZM.push(this.ExamineList[i]);
                    //向空数组中添加数据
                }
            }
            //逻辑-->升序降序排列  false: 默认从小到大  true：默认从大到小
            //判断，如果要ExamineLetter不为空，说明要进行排序
            if(this.ExamineLetter != ''){
                arrByZM.sort(function( a , b){
                    if(_this.ExamineOriginal){
                        return b[_this.ExamineLetter] - a[_this.ExamineLetter];
                    }else{
                        return a[_this.ExamineLetter] - b[_this.ExamineLetter];
                    }
                });
            }
            //一定要记得返回筛选后的数据
            return arrByZM;
        }
    },
    created:function() {
        //当我们页面加载的时候触发请求，查询所有
        this.ExamineFindAll();
    }
});