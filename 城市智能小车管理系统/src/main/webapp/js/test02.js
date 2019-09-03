
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
};
var test={
    template:'<h1>测试</h1>'
}
var test02={
    data: function(){
        return{
            IndexMoney: '',
            IndexSearch: '',     //默认输入为空
            IndexSearch2: '',     //下拉框下标
            newWindowIndexName:"",
            newWindowIndexSum:"",
            newWindowIndexSite:"",
            Index:{
                id:"",
                name:"",
                username:"",
                password:"",
                phone:"",
                card:"",
                registertime:"",
                age:"",
                sex:""
            },
            Index2:{
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
        }
    },
    methods: {
        //刷新
        myrefresh:function() {
            this.$router.go(0);
        },
        //打开新增模态窗口
        IndexShowWindow:function(){
            $("#myIndexModal").modal("show");
        },
        //通过IndexId查询数据,并打开充值模态窗口
        IndexFindById:function (Indexid) {
            //在当前方法中定义一个变量，表明是vue对象
            var _this = this;
            _this.Index = _this.Index2;//响应数据给IndexList赋值
            $("#myIndexModal").modal("show");
        },
        IndexFindById2:function (Indexid) {
            //在当前方法中定义一个变量，表明是vue对象
            var _this = this;
            axios.post('/springmvc_war_exploded/user/byid',{"id":Indexid})
                .then(function (response) {
                        _this.Index2 = response.data;//响应数据给IndexList赋值
                    }
                )
                .catch(function (error) {
                        console.log(error);
                    }
                )
        },
        //通过修改模态窗口调用update来充值
        IndexUpDate:function () {
            //在当前方法中定义一个变量，表明是vue对象
            var _this = this;
            axios.post('/springmvc_war_exploded/user/update',{
                    "id": _this.Index2.id,
                    "name": _this.Index2.name,
                    "username": _this.Index2.username,
                    "password": _this.Index2.password,
                    "phone": _this.Index2.phone,
                    "card": _this.Index2.card,
                    "registertime": _this.Index2.registertime,
                    "age": _this.Index2.age,
                    "sex": _this.Index2.sex
                }
            )
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
    },
    created:function() {
        this.userId=GetQueryString("userId");
        this.IndexFindById2(this.userId);

    },
    template:'\n' +
        '    <div class="content-wrapper">\n' +
        '        <!-- 内容头部 -->\n' +
        '        <section class="content-header">\n' +
        '            <h1>\n' +
        '                控制面板\n' +
        '                <small>首页</small>\n' +
        '            </h1>\n' +
        '            <ol class="breadcrumb">\n' +
        '                <li><a href="index.html"><i class="fa fa-dashboard"></i> 首页</a></li>\n' +
        '            </ol>\n' +
        '        </section>\n' +
        '        <!-- 内容头部 /-->\n' +
        '        <!-- 正文区域 -->\n' +
        '        <section class="content">\n' +
        '            <!-- 统计数值 -->\n' +
        '            <div class="row">\n' +
        '                <div class="col-lg-3 col-xs-6">\n' +
        '                    <!-- small box -->\n' +
        '                    <div class="small-box bg-aqua">\n' +
        '                        <div class="inner">\n' +
        '                            <h3></h3>\n' +
        '                            <p>小车管理</p>\n' +
        '                        </div>\n' +
        '                        <div class="icon">\n' +
        '                            <i class="ion ion-bag"></i>\n' +
        '                        </div>\n' +
        '                        <router-link to="/car" class="small-box-footer">详细 <i class="fa fa-arrow-circle-right"></i> </router-link>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '                <!-- ./col -->\n' +
        '                <div class="col-lg-3 col-xs-6">\n' +
        '                    <!-- small box -->\n' +
        '                    <div class="small-box bg-red">\n' +
        '                        <div class="inner">\n' +
        '                            <h3></h3>\n' +
        '\n' +
        '                            <p>燃油图表</p>\n' +
        '                        </div>\n' +
        '                        <div class="icon">\n' +
        '                            <i class="ion ion-pie-graph"></i>\n' +
        '                        </div>\n' +
        '                        <router-link to="/fuel" class="small-box-footer">详细 <i class="fa fa-arrow-circle-right"></i></router-link>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '                <!-- ./col -->\n' +
        '                <div class="col-lg-3 col-xs-6">\n' +
        '                    <!-- small box -->\n' +
        '                    <div class="small-box bg-green">\n' +
        '                        <div class="inner">\n' +
        '                            <h3><sup style="font-size: 20px"></sup></h3>\n' +
        '\n' +
        '                            <p>停车记录</p>\n' +
        '                        </div>\n' +
        '                        <div class="icon">\n' +
        '                            <i class="ion ion-stats-bars"></i>\n' +
        '                        </div>\n' +
        '                        <router-link to="/carbypark" class="small-box-footer">详细 <i class="fa fa-arrow-circle-right"></i></router-link>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '                <!-- ./col -->\n' +
        '\n' +
        '\n' +
        '                <div class="col-lg-3 col-xs-6">\n' +
        '                    <!-- small box -->\n' +
        '                    <div class="small-box bg-yellow">\n' +
        '                        <div class="inner">\n' +
        '                            <h3></h3>\n' +
        '\n' +
        '                            <p>账单</p>\n' +
        '                        </div>\n' +
        '                        <div class="icon">\n' +
        '                            <i class="ion ion-person-add"></i>\n' +
        '                        </div>\n' +
        '                         <router-link to="/moneyrecord" class="small-box-footer">详细 <i class="fa fa-arrow-circle-right"></i></router-link>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '\n' +
        '                <!-- ./col -->\n' +
        '            </div>\n' +
        '            <!-- /.row -->\n' +
        '            <!-- 待处理订单 -->\n' +
        '\n' +
        '            <div class="box box-primary" >\n' +
        '                <div class="box-header with-border">\n' +
        '                    <i class="fa fa-cube"></i>\n' +
        '                    <h3 class="box-title">个人信息</h3>\n' +
        '                </div>\n' +
        '                <div class="box-body">\n' +
        '                    <!-- 数据表格 -->\n' +
        '                    <div class="table-box">\n' +
        '                        <!--数据列表-->\n' +
        '                        <table id="dataList" class="table table-bordered table-striped table-hover dataTable">\n' +
        '                            <thead>\n' +
        '                            <tr>\n' +
        '                                <th class="">编号</th>\n' +
        '                                <th class="">姓名</th>\n' +
        '                                <th class="">用户名</th>\n' +
        '                                <th class="">手机号</th>\n' +
        '                                <th class="">身份证</th>\n' +
        '                                <th class="">注册时间</th>\n' +
        '                                <th class="">年龄</th>\n' +
        '                                <th class="">性别</th>\n' +
        '                                <th class="text-center">操作</th>\n' +
        '                            </tr>\n' +
        '                            </thead>\n' +
        '                            <tbody>\n' +
        '                            <tr>\n' +
        '                                <th class="">{{Index2.id}}</th>\n' +
        '                                <th class="">{{Index2.name}}</th>\n' +
        '                                <th class="">{{Index2.username}}</th>\n' +
        '                                <th class="">{{Index2.password}}</th>\n' +
        '                                <th class="">{{Index2.phone}}</th>\n' +
        '                                <th class="">{{Index2.card}}</th>\n' +
        '                                <th class="">{{Index2.registertime}}</th>\n' +
        '                                <th class="">{{Index2.age}}</th>\n' +
        '                                <th class="">{{Index2.sex}}</th>\n' +
        '                                <td class="text-center">\n' +
        '                                    <button type="button" class="btn bg-olive btn-xs" @click=\'IndexFindById()\'>修改</button>\n' +
        '                                </td>\n' +
        '                            </tr>\n' +
        '                            </tbody>\n' +
        '\n' +
        '                            <div class="tab-pane">\n' +
        '                                <div id="myIndexModal" class="modal modal-primary" role="dialog">\n' +
        '                                    <div class="modal-dialog modal-lg">\n' +
        '                                        <div class="modal-content">\n' +
        '                                            <div class="modal-header">\n' +
        '                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n' +
        '                                                    <span aria-hidden="true">&times;</span></button>\n' +
        '                                                <h4 class="modal-title">用户信息</h4>\n' +
        '                                            </div>\n' +
        '                                            <div class="modal-body">\n' +
        '                                                <div class="box-body">\n' +
        '                                                    <div class="form-horizontal">\n' +
        '                                                        <div class="form-group">\n' +
        '                                                            <label class="col-sm-2 control-label">ID:</label>\n' +
        '                                                            <div class="col-sm-5">\n' +
        '                                                                <input type="text" class="form-control"  v-model="Index.id" ></input>\n' +
        '                                                            </div>\n' +
        '                                                        </div>\n' +
        '                                                        <div class="form-group">\n' +
        '                                                            <label class="col-sm-2 control-label">姓名:</label>\n' +
        '                                                            <div class="col-sm-5">\n' +
        '                                                                <input type="text" class="form-control" v-model="Index.name"></input>\n' +
        '                                                            </div>\n' +
        '                                                        </div>\n' +
        '                                                        <div class="form-group">\n' +
        '                                                            <label class="col-sm-2 control-label">用户名:</label>\n' +
        '                                                            <div class="col-sm-5">\n' +
        '                                                                <input type="text" class="form-control" v-model="Index.username"></input>\n' +
        '                                                            </div>\n' +
        '                                                        </div>\n' +
        '                                                        <div class="form-group">\n' +
        '                                                            <label class="col-sm-2 control-label">密码:</label>\n' +
        '                                                            <div class="col-sm-5">\n' +
        '                                                                <input type="text" class="form-control" v-model="Index.password"></input>\n' +
        '                                                            </div>\n' +
        '                                                        </div>\n' +
        '                                                        <div class="form-group">\n' +
        '                                                            <label class="col-sm-2 control-label">手机号:</label>\n' +
        '                                                            <div class="col-sm-5">\n' +
        '                                                                <input type="text" class="form-control" v-model="Index.phone"></input>\n' +
        '                                                            </div>\n' +
        '                                                        </div>\n' +
        '                                                        <div class="form-group">\n' +
        '                                                            <label class="col-sm-2 control-label">身份证:</label>\n' +
        '                                                            <div class="col-sm-5">\n' +
        '                                                                <input type="text" class="form-control" v-model="Index.card"></input>\n' +
        '                                                            </div>\n' +
        '                                                        </div>\n' +
        '                                                        <div class="form-group">\n' +
        '                                                            <label class="col-sm-2 control-label">年龄:</label>\n' +
        '                                                            <div class="col-sm-5">\n' +
        '                                                                <input type="text" class="form-control" v-model="Index.age"></input>\n' +
        '                                                            </div>\n' +
        '                                                        </div>\n' +
        '                                                        <div class="form-group">\n' +
        '                                                            <label class="col-sm-2 control-label">性别:</label>\n' +
        '                                                            <div class="col-sm-5">\n' +
        '                                                                <input type="text" class="form-control" v-model="Index.sex"></input>\n' +
        '                                                            </div>\n' +
        '                                                        </div>\n' +
        '                                                    </div>\n' +
        '                                                </div>\n' +
        '                                            </div>\n' +
        '                                            <div class="modal-footer">\n' +
        '                                                <button type="button" class="btn btn-outline" data-dismiss="modal">关闭</button>\n' +
        '                                                <button type="button" class="btn btn-outline" data-dismiss="modal" @click="IndexUpDate">修改</button>\n' +
        '                                            </div>\n' +
        '                                        </div>\n' +
        '                                        <!-- /.modal-content -->\n' +
        '                                    </div>\n' +
        '                                    <!-- /.modal-dialog -->\n' +
        '                                </div>\n' +
        '                                <!-- /.modal -->\n' +
        '                            </div>\n' +
        '                        </table>\n' +
        '                        <!--数据列表/-->\n' +
        '                    </div>\n' +
        '                    <!-- 数据表格 /-->\n' +
        '                </div>\n' +
        '                <!-- /.box-body -->\n' +
        '            </div>'+
        '            <!-- 待处理订单 /-->\n' +
        '        </section>\n' +
        '\n' +
        '        <!-- 正文区域 /-->\n' +
        '    </div>'
}
var fuel={
    template:'\n' +
        '    <div class="content-wrapper">\n' +
        '        <!-- Content Header (Page header) -->\n' +
        '        <section class="content-header">\n' +
        '            <h1>\n' +
        '                Morris Charts\n' +
        '                <small>Preview sample</small>\n' +
        '            </h1>\n' +
        '            <ol class="breadcrumb">\n' +
        '                <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>\n' +
        '                <li><a href="#">Charts</a></li>\n' +
        '                <li class="active">Morris</li>\n' +
        '            </ol>\n' +
        '        </section>\n' +
        '\n' +
        '        <!-- Main content -->\n' +
        '        <section class="content">\n' +
        '            <div class="callout callout-warning">\n' +
        '                <h4>Warning!</h4>\n' +
        '\n' +
        '                <p><b>Morris.js</b> charts are no longer maintained by its author. We would recommend using any of the other charts that come with the template.</p>\n' +
        '            </div>\n' +
        '                <!-- /.col (LEFT) -->\n' +
        '                <div class="col-md-6">\n' +
        '                    <!-- LINE CHART -->\n' +
        '                    <div class="box box-info">\n' +
        '                        <div class="box-header with-border">\n' +
        '                            <h3 class="box-title">Line Chart</h3>\n' +
        '\n' +
        '                            <div class="box-tools pull-right">\n' +
        '                                <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>\n' +
        '                                </button>\n' +
        '                                <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>\n' +
        '                            </div>\n' +
        '                        </div>\n' +
        '                        <div class="box-body chart-responsive">\n' +
        '                            <div class="chart" id="line-chart" style="height: 300px;"></div>\n' +
        '                        </div>\n' +
        '                        <!-- /.box-body -->\n' +
        '                    </div>\n' +
        '                    <!-- /.box -->\n' +
        '\n' +
        '\n' +
        '                </div>\n' +
        '                <!-- /.col (RIGHT) -->\n' +
        '            <!-- /.row -->\n' +
        '\n' +
        '        </section>\n' +
        '        <!-- /.content -->\n' +
        '    </div>'
}
var car={
    data:function() {
        return{
            CarMoney: '',
            CarSearch: '',     //默认输入为空
            CarSearch2: '',     //下拉框下标
            CarLetter: '',       //默认不排序
            CarOriginal: false,   //默认从小到大排列
            CarPageNum: "1",      //当前页码,默认第一页
            CarPageSize: "1",       //每页数据量,默认每页1条
            CarPages: "1",          //总页数,默认为0
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
                }],        //表格当前页数据
            CarTotalCount: 1000,   //默认数据总数
            newWindowCarNumber: "",
            newWindowCarCol: "",
            newWindowExamineExamineType:"",
            car: {
                id: "",
                carid: "",
                carnumber: "",
                buytime: "",
                carcol: "",
                balance: "",
                car_id: ""
            }
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
        //通过carId查询数据,并打开新增小车车检记录模态窗口
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
                    alert("yes");
                })
                .catch(function (error) {
                    console.log(error);
                    alert("no");
                })
        },
    },
    created:function() {
        //当我们页面加载的时候触发请求，查询与用户名相关的小车
        this.carFindAll("1","2");
    },
    template:'\n' +
        '    <div class="content-wrapper">\n' +
        '        <!-- 内容头部 -->\n' +
        '        <section class="content-header">\n' +
        '            <h1>\n' +
        '                数据管理\n' +
        '                <small>数据列表</small>\n' +
        '            </h1>\n' +
        '            <ol class="breadcrumb">\n' +
        '                <li><a href="#"><i class="fa fa-dashboard"></i> 首页</a></li>\n' +
        '                <li><a href="#">用户管理</a></li>\n' +
        '                <!--<li class="active">数据列表</li>-->\n' +
        '            </ol>\n' +
        '        </section>\n' +
        '        <!-- 内容头部 /-->\n' +
        '        <!-- 正文区域 -->\n' +
        '        <section class="content">\n' +
        '            <!-- .box-body -->\n' +
        '            <div class="box box-primary">\n' +
        '                <div class="box-header with-border">\n' +
        '                    <h3 class="box-title">列表</h3>\n' +
        '                    当前页数:{{}}\n' +
        '                </div>\n' +
        '                <div class="box-body">\n' +
        '                    <!-- 数据表格 -->\n' +
        '                    <div class="table-box">\n' +
        '                        <!--工具栏/-->\n' +
        '                        <!--数据列表-->\n' +
        '                        <table id="dataList" class="table table-bordered table-striped table-hover dataTable">\n' +
        '                            <tr>\n' +
        '                                <th class="sorting_asc">ID\n' +
        '                                <th class="text-center">车牌号</th>\n' +
        '                                <th class="text-center sorting">注册时间\n' +
        '                                <th class="sorting_asc sorting_asc_disabled">品牌</th>\n' +
        '                                <th class="text-center">余额</th>\n' +
        '                                <th class="text-center">操作</th>\n' +
        '                            </tr>\n' +
        '                            <tbody>\n' +
        '                            <tr v-for="c in carList">\n' +
        '                                <td>{{c.id}}</td>\n' +
        '                                <td>{{c.carnumber}}</td>\n' +
        '                                <td>{{c.buytime}}</td>\n' +
        '                                <td>{{c.carcol}}</td>\n' +
        '                                <td>{{c.balance}}</td>\n' +
        '                                <td class="text-center">\n' +
        '                                    <button type="button" class="btn bg-olive btn-xs" @click=\'carFindById(c.id)\'>充值</button>\n' +
        '                                    <button type="button" class="btn bg-olive btn-xs" @click=\'carFindById2(c.id)\'>新增小车车检记录</button>\n' +
        '                                    <button type="button" class="btn bg-olive btn-xs" @click=\'carDeletes(c.id)\'>删除</button>\n' +
        '                                </td>\n' +
        '                            </tr>\n' +
        '                            </tbody>\n' +
        '                            <!--模态窗口-->\n' +
        '                            <!--充值的模态窗口-->\n' +
        '                            <div class="tab-pane">\n' +
        '                                <div id="myCarModal" class="modal modal-primary" role="dialog">\n' +
        '                                    <div class="modal-dialog modal-lg">\n' +
        '                                        <div class="modal-content">\n' +
        '                                            <div class="modal-header">\n' +
        '                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n' +
        '                                                    <span aria-hidden="true">&times;</span></button>\n' +
        '                                                <h4 class="modal-title">用户信息</h4>\n' +
        '                                            </div>\n' +
        '                                            <div class="modal-body">\n' +
        '                                                <div class="box-body">\n' +
        '                                                    <div class="form-horizontal">\n' +
        '                                                        <div class="form-group">\n' +
        '                                                            <label class="col-sm-2 control-label">车牌:</label>\n' +
        '                                                            <div class="col-sm-5">\n' +
        '                                                                {{car.carnumber}}\n' +
        '                                                            </div>\n' +
        '                                                        </div>\n' +
        '                                                        <div class="form-group">\n' +
        '                                                            <label class="col-sm-2 control-label">充值金额:</label>\n' +
        '                                                            <div class="col-sm-5">\n' +
        '                                                                <input type="text" class="form-control" v-model="CarMoney">\n' +
        '                                                            </div>\n' +
        '                                                        </div>\n' +
        '                                                    </div>\n' +
        '                                                </div>\n' +
        '                                            </div>\n' +
        '                                            <div class="modal-footer">\n' +
        '                                                <button type="button" class="btn btn-outline" data-dismiss="modal">关闭</button>\n' +
        '                                                <button type="button" class="btn btn-outline" data-dismiss="modal" @click="carUpDate">充值</button>\n' +
        '                                            </div>\n' +
        '                                        </div>\n' +
        '                                        <!-- /.modal-content -->\n' +
        '                                    </div>\n' +
        '                                    <!-- /.modal-dialog -->\n' +
        '                                </div>\n' +
        '                                <!-- /.modal -->\n' +
        '                            </div>\n' +
        '                            <!--新建记录的模态窗口-->\n' +
        '                            <div class="tab-pane" >\n' +
        '                                <div id="myNewCarModal" class="modal modal-primary" role="dialog">\n' +
        '                                    <div class="modal-dialog modal-lg">\n' +
        '                                        <div class="modal-content">\n' +
        '                                            <div class="modal-header">\n' +
        '                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n' +
        '                                                    <span aria-hidden="true">&times;</span></button>\n' +
        '                                                <h4 class="modal-title">用户信息</h4>\n' +
        '                                            </div>\n' +
        '                                            <div class="modal-body">\n' +
        '                                                <div class="box-body">\n' +
        '                                                    <div class="form-horizontal">\n' +
        '                                                        <div class="form-group">\n' +
        '                                                            <label class="col-sm-2 control-label">车牌号:</label>\n' +
        '                                                            <div class="col-sm-5">\n' +
        '                                                                <input type="text" class="form-control" v-model="newWindowCarNumber">\n' +
        '                                                            </div>\n' +
        '                                                        </div>\n' +
        '                                                        <div class="form-group">\n' +
        '                                                            <label class="col-sm-2 control-label">品牌:</label>\n' +
        '                                                            <div class="col-sm-5">\n' +
        '                                                                <input type="text" class="form-control" v-model="newWindowCarCol">\n' +
        '                                                            </div>\n' +
        '                                                        </div>\n' +
        '                                                    </div>\n' +
        '                                                </div>\n' +
        '                                            </div>\n' +
        '                                            <div class="modal-footer">\n' +
        '                                                <button type="button" class="btn btn-outline" data-dismiss="modal">关闭</button>\n' +
        '                                                <button type="button" class="btn btn-outline" data-dismiss="modal" @click="carInsert">新建</button>\n' +
        '                                            </div>\n' +
        '                                        </div>\n' +
        '                                        <!-- /.modal-content -->\n' +
        '                                    </div>\n' +
        '                                    <!-- /.modal-dialog -->\n' +
        '                                </div>\n' +
        '                                <!-- /.modal -->\n' +
        '                            </div>\n' +
        '\n' +
        '                            <!--新建小车车检记录的模态窗口-->\n' +
        '                            <div class="tab-pane" >\n' +
        '                                <div id="myExamineModal" class="modal modal-primary" role="dialog">\n' +
        '                                    <div class="modal-dialog modal-lg">\n' +
        '                                        <div class="modal-content">\n' +
        '                                            <div class="modal-header">\n' +
        '                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n' +
        '                                                    <span aria-hidden="true">&times;</span></button>\n' +
        '                                                <h4 class="modal-title">用户信息</h4>\n' +
        '                                            </div>\n' +
        '                                            <div class="modal-body">\n' +
        '                                                <div class="box-body">\n' +
        '                                                    <div class="form-horizontal">\n' +
        '                                                        <div class="form-group">\n' +
        '                                                            <label class="col-sm-2 control-label">车牌号:</label>\n' +
        '                                                            <div class="col-sm-5">\n' +
        '                                                                {{car.carnumber}}\n' +
        '                                                            </div>\n' +
        '                                                        </div>\n' +
        '                                                        <div class="form-group">\n' +
        '                                                            <label class="col-sm-2 control-label">车检类型:</label>\n' +
        '                                                            <div class="col-sm-5">\n' +
        '                                                                <input type="text" class="form-control" v-model="newWindowExamineExamineType">\n' +
        '                                                            </div>\n' +
        '                                                        </div>\n' +
        '                                                    </div>\n' +
        '                                                </div>\n' +
        '                                            </div>\n' +
        '                                            <div class="modal-footer">\n' +
        '                                                <button type="button" class="btn btn-outline" data-dismiss="modal">关闭</button>\n' +
        '                                                <button type="button" class="btn btn-outline" data-dismiss="modal" @click="ExamineInsert">通过审批</button>\n' +
        '                                            </div>\n' +
        '                                        </div>\n' +
        '                                        <!-- /.modal-content -->\n' +
        '                                    </div>\n' +
        '                                    <!-- /.modal-dialog -->\n' +
        '                                </div>\n' +
        '                                <!-- /.modal -->\n' +
        '                            </div>\n' +
        '\n' +
        '                            <!--模态窗口/-->\n' +
        '                        </table>\n' +
        '                        <!--数据列表/-->\n' +
        '\n' +
        '                        <!--工具栏-->\n' +
        '                        <div class="pull-left">\n' +
        '                            <div class="form-group form-inline">\n' +
        '                                <div class="btn-group">\n' +
        '                                    <button type="button" class="btn btn-default" title="新建" @click=\'carShowWindow\'><i\n' +
        '                                            class="fa fa-file-o"></i> 新建\n' +
        '                                    </button>\n' +
        '                                    <button type="button" class="btn btn-default" title="刷新"  onclick="window.location.reload();"><i\n' +
        '                                            class="fa fa-refresh" ></i> 刷新\n' +
        '                                    </button>\n' +
        '                                </div>\n' +
        '                            </div>\n' +
        '                        </div>\n' +
        '                        <div class="box-tools pull-right">\n' +
        '                            <div class="has-feedback" style="text-align: center;margin: 0px auto">\n' +
        '                                <input type="text" class="searchBox" v-model="CarSearch">\n' +
        '                                <span class="glyphicon glyphicon-search form-control-feedback"></span>\n' +
        '                            </div>\n' +
        '                        </div>\n' +
        '                        <!--工具栏/-->\n' +
        '                    </div>\n' +
        '                    <!-- 数据表格 /-->\n' +
        '                </div>\n' +
        '                <!-- /.box-body -->\n' +
        '                <!-- .box-footer-->\n' +
        '                <div class="box-footer">\n' +
        '                    <div class="pull-left">\n' +
        '                        <div class="form-group form-inline">\n' +
        '                            总共{{CarPages}} 页，共{{CarTotalCount}} 条数据.\n' +
        '                            <select  class="form-control"  v-model="CarSearch2" @change=\'carFindAll(CarSearch2,CarPageSize)\'>\n' +
        '                                <option v-for="n in CarPages">\n' +
        '                                    {{n}}\n' +
        '                                </option>\n' +
        '                            </select>\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                    <div class="box-tools pull-right">\n' +
        '                        <ul class="pagination">\n' +
        '                            <li>\n' +
        '                                <a @click=\'carFindAll(1,CarPageSize)\' aria-label="Previous">首页</a>\n' +
        '                            </li>\n' +
        '                            <li><a @click=\'carFindAll(CarPageNum-1,CarPageSize)\'>上一页</a></li>\n' +
        '                            <li v-for="item in CarPages ">\n' +
        '                                <a @click=\'carFindAll(item,CarPageSize)\'>{{item}}</a>\n' +
        '                            </li>\n' +
        '                            <li><a @click=\'carFindAll(CarPageNum+1,CarPageSize)\'>下一页</a></li>\n' +
        '                            <li>\n' +
        '                                <a  @click=\'carFindAll(CarPages,CarPageSize)\' aria-label="Next">尾页</a>\n' +
        '                            </li>\n' +
        '                        </ul>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '                <!-- /.box-footer-->\n' +
        '            </div>\n' +
        '        </section>\n' +
        '        <!-- 正文区域 /-->\n' +
        '    </div>'

};
var stop={
    data:function () {
        return {
            StopMoney: '',
            StopSearch: '',     //默认输入为空
            StopSearch2: '',     //下拉框下标
            StopLetter: '',       //默认不排序
            StopOriginal: false,   //默认从小到大排列
            StopPageNum: "1",      //当前页码,默认第一页
            StopPageSize: "1",       //每页数据量,默认每页1条
            StopPages: "1",          //总页数,默认为0
            StopList: [],        //表格当前页数据
            StopTotalCount: 1000,   //默认数据总数
            newWindowStopName: "",
            newWindowStopSum: "",
            newWindowStopSite: "",
            Stop: {
                id: "",
                name: "",
                surplus: "",
                sum: "",
                site: ""
            }
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
        },
        template:'\n' +
            '    <div class="content-wrapper">\n' +
            '        <!-- 内容头部 -->\n' +
            '        <section class="content-header">\n' +
            '            <h1>\n' +
            '                数据管理\n' +
            '                <small>数据列表</small>\n' +
            '            </h1>\n' +
            '            <ol class="breadcrumb">\n' +
            '                <li><a href="#"><i class="fa fa-dashboard"></i> 首页</a></li>\n' +
            '                <li><a href="#">用户管理</a></li>\n' +
            '                <!--<li class="active">数据列表</li>-->\n' +
            '            </ol>\n' +
            '        </section>\n' +
            '        <!-- 内容头部 /-->\n' +
            '        <!-- 正文区域 -->\n' +
            '        <section class="content">\n' +
            '            <!-- .box-body -->\n' +
            '            <div class="box box-primary">\n' +
            '                <div class="box-header with-border">\n' +
            '                    <h3 class="box-title">列表</h3>\n' +
            '                    当前页数:{{}}\n' +
            '                </div>\n' +
            '                <div class="box-body">\n' +
            '                    <!-- 数据表格 -->\n' +
            '                    <div class="table-box">\n' +
            '                        <!--工具栏/-->\n' +
            '                        <!--数据列表-->\n' +
            '                        <table id="dataList" class="table table-bordered table-striped table-hover dataTable">\n' +
            '                            <tr>\n' +
            '                                <th class="sorting_asc">ID</th>\n' +
            '                                <th class="text-center">名称</th>\n' +
            '                                <th class="text-center sorting">剩余车位</th>\n' +
            '                                <th class="sorting_asc sorting_asc_disabled">总车位</th>\n' +
            '                                <th class="text-center">地点</th>\n' +
            '                            </tr>\n' +
            '                            <tbody>\n' +
            '                            <tr v-for="c in StopListQuery">\n' +
            '                                <td>{{c.id}}</td>\n' +
            '                                <td>{{c.name}}</td>\n' +
            '                                <td>{{c.surplus}}</td>\n' +
            '                                <td>{{c.sum}}</td>\n' +
            '                                <td>{{c.site}}</td>\n' +
            '                            </tr>\n' +
            '                            </tbody>\n' +
            '                            <!--模态窗口-->\n' +
            '                            <!--充值的模态窗口-->\n' +
            '                            <div class="tab-pane">\n' +
            '                                <div id="myStopModal" class="modal modal-primary" role="dialog">\n' +
            '                                    <div class="modal-dialog modal-lg">\n' +
            '                                        <div class="modal-content">\n' +
            '                                            <div class="modal-header">\n' +
            '                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n' +
            '                                                    <span aria-hidden="true">&times;</span></button>\n' +
            '                                                <h4 class="modal-title">用户信息</h4>\n' +
            '                                            </div>\n' +
            '                                            <div class="modal-body">\n' +
            '                                                <div class="box-body">\n' +
            '                                                    <div class="form-horizontal">\n' +
            '                                                        <div class="form-group">\n' +
            '                                                            <label class="col-sm-2 control-label">ID:</label>\n' +
            '                                                            <div class="col-sm-5">\n' +
            '                                                                <input type="text" class="form-control"  v-model="Stop.id" ></input>\n' +
            '                                                            </div>\n' +
            '                                                        </div>\n' +
            '                                                        <div class="form-group">\n' +
            '                                                            <label class="col-sm-2 control-label">名称:</label>\n' +
            '                                                            <div class="col-sm-5">\n' +
            '                                                                <input type="text" class="form-control" v-model="Stop.name"></input>\n' +
            '                                                            </div>\n' +
            '                                                        </div>\n' +
            '                                                        <div class="form-group">\n' +
            '                                                            <label class="col-sm-2 control-label">剩余车位:</label>\n' +
            '                                                            <div class="col-sm-5">\n' +
            '                                                                <input type="text" class="form-control" v-model="Stop.surplus"></input>\n' +
            '                                                            </div>\n' +
            '                                                        </div>\n' +
            '                                                        <div class="form-group">\n' +
            '                                                            <label class="col-sm-2 control-label">总车位:</label>\n' +
            '                                                            <div class="col-sm-5">\n' +
            '                                                                <input type="text" class="form-control" v-model="Stop.sum"></input>\n' +
            '                                                            </div>\n' +
            '                                                        </div>\n' +
            '                                                        <div class="form-group">\n' +
            '                                                            <label class="col-sm-2 control-label">地址:</label>\n' +
            '                                                            <div class="col-sm-5">\n' +
            '                                                                <input type="text" class="form-control" v-model="Stop.site"></input>\n' +
            '                                                            </div>\n' +
            '                                                        </div>\n' +
            '                                                    </div>\n' +
            '\n' +
            '                                                </div>\n' +
            '                                            </div>\n' +
            '                                            <div class="modal-footer">\n' +
            '                                                <button type="button" class="btn btn-outline" data-dismiss="modal">关闭</button>\n' +
            '                                                <button type="button" class="btn btn-outline" data-dismiss="modal" @click="StopUpDate">修改</button>\n' +
            '                                            </div>\n' +
            '                                        </div>\n' +
            '                                        <!-- /.modal-content -->\n' +
            '                                    </div>\n' +
            '                                    <!-- /.modal-dialog -->\n' +
            '                                </div>\n' +
            '                                <!-- /.modal -->\n' +
            '                            </div>\n' +
            '                            <!--新建记录的模态窗口-->\n' +
            '                            <div class="tab-pane" >\n' +
            '                                <div id="myNewStopModal" class="modal modal-primary" role="dialog">\n' +
            '                                    <div class="modal-dialog modal-lg">\n' +
            '                                        <div class="modal-content">\n' +
            '                                            <div class="modal-header">\n' +
            '                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n' +
            '                                                    <span aria-hidden="true">&times;</span></button>\n' +
            '                                                <h4 class="modal-title">用户信息</h4>\n' +
            '                                            </div>\n' +
            '                                            <div class="modal-body">\n' +
            '                                                <div class="box-body">\n' +
            '                                                    <div class="form-horizontal">\n' +
            '                                                        <div class="form-group">\n' +
            '                                                            <label class="col-sm-2 control-label">名称:</label>\n' +
            '                                                            <div class="col-sm-5">\n' +
            '                                                                <input type="text" class="form-control" v-model="newWindowStopName">\n' +
            '                                                            </div>\n' +
            '                                                        </div>\n' +
            '                                                        <div class="form-group">\n' +
            '                                                            <label class="col-sm-2 control-label">总车位:</label>\n' +
            '                                                            <div class="col-sm-5">\n' +
            '                                                                <input type="text" class="form-control" v-model="newWindowStopSum">\n' +
            '                                                            </div>\n' +
            '                                                        </div>\n' +
            '                                                        <div class="form-group">\n' +
            '                                                            <label class="col-sm-2 control-label">地址:</label>\n' +
            '                                                            <div class="col-sm-5">\n' +
            '                                                                <input type="text" class="form-control" v-model="newWindowStopSite">\n' +
            '                                                            </div>\n' +
            '                                                        </div>\n' +
            '                                                    </div>\n' +
            '                                                </div>\n' +
            '                                            </div>\n' +
            '                                            <div class="modal-footer">\n' +
            '                                                <button type="button" class="btn btn-outline" data-dismiss="modal">关闭</button>\n' +
            '                                                <button type="button" class="btn btn-outline" data-dismiss="modal" @click="StopInsert">新建</button>\n' +
            '                                            </div>\n' +
            '                                        </div>\n' +
            '                                        <!-- /.modal-content -->\n' +
            '                                    </div>\n' +
            '                                    <!-- /.modal-dialog -->\n' +
            '                                </div>\n' +
            '                                <!-- /.modal -->\n' +
            '                            </div>\n' +
            '\n' +
            '                            <!--模态窗口/-->\n' +
            '                        </table>\n' +
            '                        <!--数据列表/-->\n' +
            '\n' +
            '                        <!--工具栏-->\n' +
            '                        <div class="pull-left">\n' +
            '                            <div class="form-group form-inline">\n' +
            '                                <div class="btn-group">\n' +
            '                                    <button type="button" class="btn btn-default" title="刷新"  onclick="window.location.reload();"><i\n' +
            '                                            class="fa fa-refresh" ></i> 刷新\n' +
            '                                    </button>\n' +
            '                                </div>\n' +
            '                            </div>\n' +
            '                        </div>\n' +
            '                        <div class="box-tools pull-right">\n' +
            '                            <div class="has-feedback" style="text-align: center;margin: 0px auto">\n' +
            '                                <input type="text" class="searchBox" v-model="StopSearch">\n' +
            '                                <span class="glyphicon glyphicon-search form-control-feedback"></span>\n' +
            '                            </div>\n' +
            '                        </div>\n' +
            '                        <!--工具栏/-->\n' +
            '                    </div>\n' +
            '                    <!-- 数据表格 /-->\n' +
            '                </div>\n' +
            '                <!-- /.box-body -->\n' +
            '                <!-- .box-footer-->\n' +
            '                <div class="box-footer">\n' +
            '                    <div class="pull-left">\n' +
            '                        <div class="form-group form-inline">\n' +
            '                            总共{{StopPages}} 页，共{{StopTotalCount}} 条数据.\n' +
            '                            <select  class="form-control"  v-model="StopSearch2" @change=\'StopFindAll(StopSearch2,StopPageSize)\'>\n' +
            '                                <option v-for="n in StopPages">\n' +
            '                                    {{n}}\n' +
            '                                </option>\n' +
            '                            </select>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                    <div class="box-tools pull-right">\n' +
            '                        <ul class="pagination">\n' +
            '                            <li>\n' +
            '                                <a @click=\'StopFindAll(1,StopPageSize)\' aria-label="Previous">首页</a>\n' +
            '                            </li>\n' +
            '                            <li><a @click=\'StopFindAll(StopPageNum-1,StopPageSize)\'>上一页</a></li>\n' +
            '                            <li v-for="item in StopPages ">\n' +
            '                                <a @click=\'StopFindAll(item,StopPageSize)\'>{{item}}</a>\n' +
            '                            </li>\n' +
            '                            <li><a @click=\'StopFindAll(StopPageNum+1,StopPageSize)\'>下一页</a></li>\n' +
            '                            <li>\n' +
            '                                <a  @click=\'StopFindAll(StopPages,StopPageSize)\' aria-label="Next">尾页</a>\n' +
            '                            </li>\n' +
            '                        </ul>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '                <!-- /.box-footer-->\n' +
            '            </div>\n' +
            '        </section>\n' +
            '        <!-- 正文区域 /-->\n' +
            '    </div>'
}
var weather={
    template:'\n' +
        '<div  class="content-wrapper" style="padding-left: 100px">\n' +
        '    <iframe name="weather_inc" \n' +
        '            src="http://i.tianqi.com/index.php?c=code&id=55" \n' +
        '            style="border:solid 1px #7ec8ea ;margin-bottom: 120px" \n' +
        '            width="255" height="294" frameborder="0" \n' +
        '            marginwidth="0" marginheight="0" scrolling="no"></iframe>\n' +
        '    <iframe name="weather_inc" \n' +
        '            src="http://i.tianqi.com/index.php?c=code&id=57" \n' +
        '            width="650" height="427" \n' +
        '            frameborder="0" marginwidth="0" \n' +
        '            marginheight="0" scrolling="no"></iframe>\n' +
        '</div>'
};
var examine={
    data:function (){
        return {
            ExamineMoney: '',
            ExamineSearch: '',     //默认输入为空
            ExamineSearch2: '',     //下拉框下标
            ExamineLetter: '',       //默认不排序
            ExamineOriginal: false,   //默认从小到大排列
            ExaminePageNum: "1",      //当前页码,默认第一页
            ExaminePageSize: "1",       //每页数据量,默认每页1条
            ExaminePages: "1",          //总页数,默认为0
            ExamineList: [],        //表格当前页数据
            ExamineTotalCount: 1000,   //默认数据总数
            newWindowExamineExamineType: "",
            Examine: {
                id: "",
                examinetime: "",
                examinetype: "",
                year: "",
                carId: ""
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
        }
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
        ExamineFindAll:function(page,size){
            //在当前方法中定义一个变量，表明是vue对象
            var _this = this;
            _this.jishu=0;
            let that = this ;//存储this
            for (var i=0;i< _this.carList.length;i++){
                _this.ExamineCar.push(_this.carList[i].id);
            }
            axios.post('/springmvc_war_exploded/examine/bylistcarid',{"integers":_this.ExamineCar,"page":page,"size":size})
                .then(function (response){
                    var pageInfo=response.data.pages;
                    _this.ExaminePages=pageInfo;//总页数
                    console.log(response);
                    _this.ExamineList = response.data.list;//响应数据给MoneyRecordList赋值
                    _this.ExamineTotalCount=response.data.total;//数据总数
                    _this.ExaminePageNum=response.data.pageNum;//当前页码
                    _this.ExaminePageSize=response.data.pageSize;//当前页码数据量
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
        this.ExamineFindAll(1,4);
    },
    template:'\n' +
        '    <div class="content-wrapper">\n' +
        '        <!-- 内容头部 -->\n' +
        '        <section class="content-header">\n' +
        '            <h1>\n' +
        '                数据管理\n' +
        '                <small>数据列表</small>\n' +
        '            </h1>\n' +
        '            <ol class="breadcrumb">\n' +
        '                <li><a href="#"><i class="fa fa-dashboard"></i> 首页</a></li>\n' +
        '                <li><a href="#">用户管理</a></li>\n' +
        '                <!--<li class="active">数据列表</li>-->\n' +
        '            </ol>\n' +
        '        </section>\n' +
        '        <!-- 内容头部 /-->\n' +
        '        <!-- 正文区域 -->\n' +
        '        <section class="content">\n' +
        '            <!-- .box-body -->\n' +
        '            <div class="box box-primary">\n' +
        '                <div class="box-header with-border">\n' +
        '                    <h3 class="box-title">列表</h3>\n' +
        '                    当前页数:{{}}\n' +
        '                </div>\n' +
        '                <div class="box-body">\n' +
        '                    <!-- 数据表格 -->\n' +
        '                    <div class="table-box">\n' +
        '                        <!--工具栏/-->\n' +
        '                        <!--数据列表-->\n' +
        '                        <table id="dataList" class="table table-bordered table-striped table-hover dataTable">\n' +
        '                            <tr>\n' +
        '                                <th class="sorting_asc">ID</th>\n' +
        '                                <th class="text-center">检测时间</th>\n' +
        '                                <th class="text-center sorting">检测类型</th>\n' +
        '                                <th class="sorting_asc sorting_asc_disabled">年份</th>\n' +
        '                                <th class="text-center">小车车牌</th>\n' +
        '                                <th class="text-center">操作</th>\n' +
        '                            </tr>\n' +
        '                            <tbody>\n' +
        '                                <tr v-for="c,index in ExamineListQuery">\n' +
        '                                    <td>{{c.id}}</td>\n' +
        '                                    <td>{{c.examinetime}}</td>\n' +
        '                                    <td>{{c.examinetype}}</td>\n' +
        '                                    <td>{{c.year}}</td>\n' +
        '                                    <td>{{carList[index].carnumber}}</td>\n' +
        '                                    <td class="text-center">\n' +
        '                                        <button type="button" class="btn bg-olive btn-xs" @click=\'ExamineDeletes(c.id)\'>删除</button>\n' +
        '                                    </td>\n' +
        '                                </tr>\n' +
        '                            </tbody>\n' +
        '                            <!--模态窗口-->\n' +
        '\n' +
        '                            <!--模态窗口/-->\n' +
        '                        </table>\n' +
        '                        <!--数据列表/-->\n' +
        '\n' +
        '                        <!--工具栏-->\n' +
        '                        <div class="pull-left">\n' +
        '                            <div class="form-group form-inline">\n' +
        '                                <div class="btn-group">\n' +
        '                                    <button type="button" class="btn btn-default" title="刷新"  onclick="window.location.reload();"><i\n' +
        '                                            class="fa fa-refresh" ></i> 刷新\n' +
        '                                    </button>\n' +
        '                                </div>\n' +
        '                            </div>\n' +
        '                        </div>\n' +
        '                        <div class="box-tools pull-right">\n' +
        '                            <div class="has-feedback" style="text-align: center;margin: 0px auto">\n' +
        '                                <input type="text" class="searchBox" v-model="ExamineSearch">\n' +
        '                                <span class="glyphicon glyphicon-search form-control-feedback"></span>\n' +
        '                            </div>\n' +
        '                        </div>\n' +
        '                        <!--工具栏/-->\n' +
        '                    </div>\n' +
        '                    <!-- 数据表格 /-->\n' +
        '                </div>\n' +
        '                <!-- /.box-body -->\n' +
        '                <!-- .box-footer-->\n' +
        '                <div class="box-footer">\n' +
        '                    <div class="pull-left">\n' +
        '                        <div class="form-group form-inline">\n' +
        '                            总共{{ExaminePages}} 页，共{{ExamineTotalCount}} 条数据.\n' +
        '                            <select  class="form-control"  v-model="ExamineSearch2" @change=\'ExamineFindAll(ExamineSearch2,ExaminePageSize)\'>\n' +
        '                                <option v-for="n in ExaminePages">\n' +
        '                                    {{n}}\n' +
        '                                </option>\n' +
        '                            </select>\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                    <div class="box-tools pull-right">\n' +
        '                        <ul class="pagination">\n' +
        '                            <li>\n' +
        '                                <a @click=\'ExamineFindAll(1,ExaminePageSize)\' aria-label="Previous">首页</a>\n' +
        '                            </li>\n' +
        '                            <li><a @click=\'ExamineFindAll(ExaminePageNum-1,ExaminePageSize)\'>上一页</a></li>\n' +
        '                            <li v-for="item in ExaminePages ">\n' +
        '                                <a @click=\'ExamineFindAll(item,ExaminePageSize)\'>{{item}}</a>\n' +
        '                            </li>\n' +
        '                            <li><a @click=\'ExamineFindAll(ExaminePageNum+1,ExaminePageSize)\'>下一页</a></li>\n' +
        '                            <li>\n' +
        '                                <a  @click=\'ExamineFindAll(ExaminePages,ExaminePageSize)\' aria-label="Next">尾页</a>\n' +
        '                            </li>\n' +
        '                        </ul>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '                <!-- /.box-footer-->\n' +
        '            </div>\n' +
        '        </section>\n' +
        '        <!-- 正文区域 /-->\n' +
        '    </div>'
}
var moneyrecord={
    data: function ( ){
        return{
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
        }
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
        MoneyRecordFindAll:function(page,size){
            //在当前方法中定义一个变量，表明是vue对象
            var _this = this;
            _this.jishu=0;
            let that = this ;//存储this
            var MoneyRecordList=[]
            for (var i=0;i< _this.CarsList.length;i++){
                _this.MoneyRecordCar.push(_this.CarsList[i].id);
            }
            axios.post('/springmvc_war_exploded/moneyrecord/bylistcarid',{"integers":_this.MoneyRecordCar,"page":page,"size":size})
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
        this.MoneyRecordFindAll(1,4);
    },
    template:'\n' +
        '    <div class="content-wrapper">\n' +
        '        <!-- 内容头部 -->\n' +
        '        <section class="content-header">\n' +
        '            <h1>\n' +
        '                数据管理\n' +
        '                <small>数据列表</small>\n' +
        '            </h1>\n' +
        '            <ol class="breadcrumb">\n' +
        '                <li><a href="#"><i class="fa fa-dashboard"></i> 首页</a></li>\n' +
        '                <li><a href="#">用户管理</a></li>\n' +
        '                <!--<li class="active">数据列表</li>-->\n' +
        '            </ol>\n' +
        '        </section>\n' +
        '        <!-- 内容头部 /-->\n' +
        '        <!-- 正文区域 -->\n' +
        '        <section class="content">\n' +
        '            <!-- .box-body -->\n' +
        '            <div class="box box-primary">\n' +
        '                <div class="box-header with-border">\n' +
        '                    <h3 class="box-title">列表</h3>\n' +
        '                    当前页数:{{}}\n' +
        '                </div>\n' +
        '                <div class="box-body">\n' +
        '                    <!-- 数据表格 -->\n' +
        '                    <div class="table-box">\n' +
        '                        <!--工具栏/-->\n' +
        '                        <!--数据列表-->\n' +
        '                        <table id="dataList" class="table table-bordered table-striped table-hover dataTable">\n' +
        '                            <tr>\n' +
        '                                <th class="sorting_asc">ID</th>\n' +
        '                                <th class="text-center">金额</th>\n' +
        '                                <th class="text-center sorting">类型</th>\n' +
        '                                <th class="sorting_asc sorting_asc_disabled">时间</th>\n' +
        '                                <th class="text-center">小车车牌</th>\n' +
        '                                <th class="text-center">操作</th>\n' +
        '                            </tr>\n' +
        '                            <tbody>\n' +
        '                                <tr v-for="c,index in MoneyRecordListQuery">\n' +
        '                                    <td>{{c.id}}</td>\n' +
        '                                    <td>{{c.money}}</td>\n' +
        '                                    <td>{{c.type}}</td>\n' +
        '                                    <td>{{c.time}}</td>\n' +
        '                                    <td>{{MoneyRecordCarNumber[index]}}</td>\n' +
        '                                    <td class="text-center">\n' +
        '                                        <button type="button" class="btn bg-olive btn-xs" @click=\'MoneyRecordDeletes(c.id)\'>删除</button>\n' +
        '                                    </td>\n' +
        '                                </tr>\n' +
        '                            </tbody>\n' +
        '                            <!--模态窗口-->\n' +
        '\n' +
        '                            <!--模态窗口/-->\n' +
        '                        </table>\n' +
        '                        <!--数据列表/-->\n' +
        '\n' +
        '                        <!--工具栏-->\n' +
        '                        <div class="pull-left">\n' +
        '                            <div class="form-group form-inline">\n' +
        '                                <div class="btn-group">\n' +
        '                                    <button type="button" class="btn btn-default" title="刷新"  onclick="window.location.reload();"><i\n' +
        '                                            class="fa fa-refresh" ></i> 刷新\n' +
        '                                    </button>\n' +
        '                                </div>\n' +
        '                            </div>\n' +
        '                        </div>\n' +
        '                        <div class="box-tools pull-right">\n' +
        '                            <div class="has-feedback" style="text-align: center;margin: 0px auto">\n' +
        '                                <input type="text" class="searchBox" v-model="MoneyRecordSearch">\n' +
        '                                <span class="glyphicon glyphicon-search form-control-feedback"></span>\n' +
        '                            </div>\n' +
        '                        </div>\n' +
        '                        <!--工具栏/-->\n' +
        '                    </div>\n' +
        '                    <!-- 数据表格 /-->\n' +
        '                </div>\n' +
        '                <!-- /.box-body -->\n' +
        '                <!-- .box-footer-->\n' +
        '                <div class="box-footer">\n' +
        '                    <div class="pull-left">\n' +
        '                        <div class="form-group form-inline">\n' +
        '                            总共{{MoneyRecordPages}} 页，共{{MoneyRecordTotalCount}} 条数据.\n' +
        '                            <select  class="form-control"  v-model="MoneyRecordSearch2" @change=\'MoneyRecordFindAll(MoneyRecordSearch2,MoneyRecordPageSize)\'>\n' +
        '                                <option v-for="n in MoneyRecordPages">\n' +
        '                                    {{n}}\n' +
        '                                </option>\n' +
        '                            </select>\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                    <div class="box-tools pull-right">\n' +
        '                        <ul class="pagination">\n' +
        '                            <li>\n' +
        '                                <a @click=\'MoneyRecordFindAll(1,MoneyRecordPageSize)\' aria-label="Previous">首页</a>\n' +
        '                            </li>\n' +
        '                            <li><a @click=\'MoneyRecordFindAll(MoneyRecordPageNum-1,MoneyRecordPageSize)\'>上一页</a></li>\n' +
        '                            <li v-for="item in MoneyRecordPages ">\n' +
        '                                <a @click=\'MoneyRecordFindAll(item,MoneyRecordPageSize)\'>{{item}}</a>\n' +
        '                            </li>\n' +
        '                            <li><a @click=\'MoneyRecordFindAll(MoneyRecordPageNum+1,MoneyRecordPageSize)\'>下一页</a></li>\n' +
        '                            <li>\n' +
        '                                <a  @click=\'MoneyRecordFindAll(MoneyRecordPages,MoneyRecordPageSize)\' aria-label="Next">尾页</a>\n' +
        '                            </li>\n' +
        '                        </ul>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '                <!-- /.box-footer-->\n' +
        '            </div>\n' +
        '        </section>\n' +
        '        <!-- 正文区域 /-->\n' +
        '    </div>'
}
var carbypark={
    data: function(){
        return{
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
        }
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
    },
    template:'\n' +
        '    <div class="content-wrapper">\n' +
        '        <!-- 内容头部 -->\n' +
        '        <section class="content-header">\n' +
        '            <h1>\n' +
        '                数据管理\n' +
        '                <small>数据列表</small>\n' +
        '            </h1>\n' +
        '            <ol class="breadcrumb">\n' +
        '                <li><a href="#"><i class="fa fa-dashboard"></i> 首页</a></li>\n' +
        '                <li><a href="#">用户管理</a></li>\n' +
        '                <!--<li class="active">数据列表</li>-->\n' +
        '            </ol>\n' +
        '        </section>\n' +
        '        <!-- 内容头部 /-->\n' +
        '        <!-- 正文区域 -->\n' +
        '        <section class="content">\n' +
        '            <!-- .box-body -->\n' +
        '            <div class="box box-primary">\n' +
        '                <div class="box-header with-border">\n' +
        '                    <h3 class="box-title">列表</h3>\n' +
        '                    当前页数:{{}}\n' +
        '                </div>\n' +
        '                <div class="box-body">\n' +
        '                    <!-- 数据表格 -->\n' +
        '                    <div class="table-box">\n' +
        '                        <!--工具栏/-->\n' +
        '                        <!--数据列表-->\n' +
        '                        <table id="dataList" class="table table-bordered table-striped table-hover dataTable">\n' +
        '                            <tr>\n' +
        '                                <th class="sorting_asc">ID</th>\n' +
        '                                <th class="text-center">金额</th>\n' +
        '                                <th class="text-center sorting">类型</th>\n' +
        '                                <th class="sorting_asc sorting_asc_disabled">时间</th>\n' +
        '                                <th class="text-center">小车车牌</th>\n' +
        '                                <th class="text-center">操作</th>\n' +
        '                            </tr>\n' +
        '                            <tbody>\n' +
        '                                <tr v-for="c,index in CarByParkListQuery">\n' +
        '                                    <td>{{c.id}}</td>\n' +
        '                                    <td>{{c.starttime}}</td>\n' +
        '                                    <td>{{c.endtime}}</td>\n' +
        '                                    <td>{{c.monery}}</td>\n' +
        '                                    <td>{{CarByParkCarNumber[index]}}</td>\n' +
        '                                    <td class="text-center">\n' +
        '                                        <button type="button" class="btn bg-olive btn-xs" @click=\'CarByParkDeletes(c.id)\'>删除</button>\n' +
        '                                    </td>\n' +
        '                                </tr>\n' +
        '                            </tbody>\n' +
        '                            <!--模态窗口-->\n' +
        '\n' +
        '                            <!--模态窗口/-->\n' +
        '                        </table>\n' +
        '                        <!--数据列表/-->\n' +
        '\n' +
        '                        <!--工具栏-->\n' +
        '                        <div class="pull-left">\n' +
        '                            <div class="form-group form-inline">\n' +
        '                                <div class="btn-group">\n' +
        '                                    <button type="button" class="btn btn-default" title="刷新"  onclick="window.location.reload();"><i\n' +
        '                                            class="fa fa-refresh" ></i> 刷新\n' +
        '                                    </button>\n' +
        '                                </div>\n' +
        '                            </div>\n' +
        '                        </div>\n' +
        '                        <div class="box-tools pull-right">\n' +
        '                            <div class="has-feedback" style="text-align: center;margin: 0px auto">\n' +
        '                                <input type="text" class="searchBox" v-model="CarByParkSearch">\n' +
        '                                <span class="glyphicon glyphicon-search form-control-feedback"></span>\n' +
        '                            </div>\n' +
        '                        </div>\n' +
        '                        <!--工具栏/-->\n' +
        '                    </div>\n' +
        '                    <!-- 数据表格 /-->\n' +
        '                </div>\n' +
        '                <!-- /.box-body -->\n' +
        '                <!-- .box-footer-->\n' +
        '                <div class="box-footer">\n' +
        '                    <div class="pull-left">\n' +
        '                        <div class="form-group form-inline">\n' +
        '                            总共{{CarByParkPages}} 页，共{{CarByParkTotalCount}} 条数据.\n' +
        '                            <select  class="form-control"  v-model="CarByParkSearch2" @change=\'CarByParkFindAll(CarByParkSearch2,CarByParkPageSize)\'>\n' +
        '                                <option v-for="n in CarByParkPages">\n' +
        '                                    {{n}}\n' +
        '                                </option>\n' +
        '                            </select>\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                    <div class="box-tools pull-right">\n' +
        '                        <ul class="pagination">\n' +
        '                            <li>\n' +
        '                                <a @click=\'CarByParkFindAll(1,CarByParkPageSize)\' aria-label="Previous">首页</a>\n' +
        '                            </li>\n' +
        '                            <li><a @click=\'CarByParkFindAll(CarByParkPageNum-1,CarByParkPageSize)\'>上一页</a></li>\n' +
        '                            <li v-for="item in CarByParkPages ">\n' +
        '                                <a @click=\'CarByParkFindAll(item,CarByParkPageSize)\'>{{item}}</a>\n' +
        '                            </li>\n' +
        '                            <li><a @click=\'CarByParkFindAll(CarByParkPageNum+1,CarByParkPageSize)\'>下一页</a></li>\n' +
        '                            <li>\n' +
        '                                <a  @click=\'CarByParkFindAll(CarByParkPages,CarByParkPageSize)\' aria-label="Next">尾页</a>\n' +
        '                            </li>\n' +
        '                        </ul>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '                <!-- /.box-footer-->\n' +
        '            </div>\n' +
        '        </section>\n' +
        '        <!-- 正文区域 /-->\n' +
        '    </div>'
}
var router=new VueRouter({
    routes:[
        {path:'/',redirect:'/index'},
        {path:'/index',component:test02},
        {path:'/fuel',component:fuel},
        {path:'/car',component:car},
        {path:'/stop',component:stop},
        {path:'/weather',component:weather},
        {path:'/examine',component:examine},
        {path:'/moneyrecord',component:moneyrecord},
        {path:'/carbypark',component:carbypark}
    ]
});
new Vue({
        el: "#app",
        data: {
        },
        methods: {
        },
        //通过计算属性过滤数据
        computed:{
        },
        created:function() {
        },
        router:router
    }
)