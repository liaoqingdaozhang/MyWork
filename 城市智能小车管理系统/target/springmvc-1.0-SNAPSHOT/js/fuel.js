
var index={
    template:'    <!-- 内容区域 -->\n' +
        '    <div class="content-wrapper">\n' +
        '\n' +
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
        '\n' +
        '        <!-- 正文区域 -->\n' +
        '        <section class="content">\n' +
        '\n' +
        '\n' +
        '            <!-- 统计数值 -->\n' +
        '            <div class="row">\n' +
        '                <div class="col-lg-3 col-xs-6">\n' +
        '                    <!-- small box -->\n' +
        '                    <div class="small-box bg-aqua">\n' +
        '                        <div class="inner">\n' +
        '                            <h3>150</h3>\n' +
        '\n' +
        '                            <p>小车管理</p>\n' +
        '                        </div>\n' +
        '                        <div class="icon">\n' +
        '                            <i class="ion ion-bag"></i>\n' +
        '                        </div>\n' +
        '                        <a href="all-order-manage-list.html" class="small-box-footer">详细 <i class="fa fa-arrow-circle-right"></i></a>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '                <!-- ./col -->\n' +
        '                <div class="col-lg-3 col-xs-6">\n' +
        '                    <!-- small box -->\n' +
        '                    <div class="small-box bg-red">\n' +
        '                        <div class="inner">\n' +
        '                            <h3>65</h3>\n' +
        '\n' +
        '                            <p>燃油图表</p>\n' +
        '                        </div>\n' +
        '                        <div class="icon">\n' +
        '                            <i class="ion ion-pie-graph"></i>\n' +
        '                        </div>\n' +
        '                        <a href="fuel.html" class="small-box-footer">详细 <i class="fa fa-arrow-circle-right"></i></a>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '                <!-- ./col -->\n' +
        '                <div class="col-lg-3 col-xs-6">\n' +
        '                    <!-- small box -->\n' +
        '                    <div class="small-box bg-green">\n' +
        '                        <div class="inner">\n' +
        '                            <h3>53<sup style="font-size: 20px">%</sup></h3>\n' +
        '\n' +
        '                            <p>停车记录</p>\n' +
        '                        </div>\n' +
        '                        <div class="icon">\n' +
        '                            <i class="ion ion-stats-bars"></i>\n' +
        '                        </div>\n' +
        '                        <a href="all-ad-statistics-list.html" class="small-box-footer">详细 <i class="fa fa-arrow-circle-right"></i></a>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '                <!-- ./col -->\n' +
        '                <div class="col-lg-3 col-xs-6">\n' +
        '                    <!-- small box -->\n' +
        '                    <div class="small-box bg-yellow">\n' +
        '                        <div class="inner">\n' +
        '                            <h3>44</h3>\n' +
        '\n' +
        '                            <p>账单</p>\n' +
        '                        </div>\n' +
        '                        <div class="icon">\n' +
        '                            <i class="ion ion-person-add"></i>\n' +
        '                        </div>\n' +
        '                        <a href="all-member-manage-list.html" class="small-box-footer">详细 <i class="fa fa-arrow-circle-right"></i></a>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '                <!-- ./col -->\n' +
        '            </div>\n' +
        '            <!-- /.row -->\n' +
        '\n' +
        '\n' +
        '            <!-- 待处理订单 -->\n' +
        '            <div class="box box-primary">\n' +
        '                <div class="box-header with-border">\n' +
        '                    <i class="fa fa-cube"></i>\n' +
        '                    <h3 class="box-title">待处理订单</h3>\n' +
        '                </div>\n' +
        '\n' +
        '                <div class="box-body">\n' +
        '\n' +
        '                    <!-- 数据表格 -->\n' +
        '                    <div class="table-box">\n' +
        '\n' +
        '                        <!--数据列表-->\n' +
        '                        <table id="dataList" class="table table-bordered table-striped table-hover dataTable">\n' +
        '                            <thead>\n' +
        '                            <tr>\n' +
        '                                <th class="">订单号</th>\n' +
        '                                <th class="">产品名称</th>\n' +
        '                                <th class="">会员</th>\n' +
        '                                <th class="">价格</th>\n' +
        '                                <th class="">状态</th>\n' +
        '                                <th class="text-center">操作</th>\n' +
        '                            </tr>\n' +
        '                            </thead>\n' +
        '                            <tbody>\n' +
        '\n' +
        '                            <tr>\n' +
        '                                <td>2017020200001</td>\n' +
        '                                <td>西安3日自由行·超级自由行</td>\n' +
        '                                <td>bi\'peng0405</td>\n' +
        '                                <td>￥500</td>\n' +
        '                                <td>已取消</td>\n' +
        '                                <td class="text-center">\n' +
        '                                    <button type="button" class="btn bg-olive btn-xs" onclick=\'location.href="all-product-line-edit.html"\'>编辑</button>\n' +
        '                                </td>\n' +
        '                            </tr>\n' +
        '\n' +
        '                            <tr>\n' +
        '                                <td>2017020200001</td>\n' +
        '                                <td>西安3日自由行·超级自由行</td>\n' +
        '                                <td>bi\'peng0405</td>\n' +
        '                                <td>￥500</td>\n' +
        '                                <td>已出团(待点评)</td>\n' +
        '                                <td class="text-center">\n' +
        '                                    <button type="button" class="btn bg-olive btn-xs" onclick=\'location.href="all-product-line-edit.html"\'>编辑</button>\n' +
        '                                </td>\n' +
        '                            </tr>\n' +
        '\n' +
        '                            <tr>\n' +
        '                                <td>2017020200001</td>\n' +
        '                                <td>西安3日自由行·超级自由行</td>\n' +
        '                                <td>bi\'peng0405</td>\n' +
        '                                <td>￥500</td>\n' +
        '                                <td>已处理(待付款)</td>\n' +
        '                                <td class="text-center">\n' +
        '                                    <button type="button" class="btn bg-olive btn-xs" onclick=\'location.href="all-product-line-edit.html"\'>编辑</button>\n' +
        '                                </td>\n' +
        '                            </tr>\n' +
        '\n' +
        '                            <tr>\n' +
        '                                <td>2017020200001</td>\n' +
        '                                <td>西安3日自由行·超级自由行</td>\n' +
        '                                <td>bi\'peng0405</td>\n' +
        '                                <td>￥500</td>\n' +
        '                                <td>已处理(待出团)</td>\n' +
        '                                <td class="text-center">\n' +
        '                                    <button type="button" class="btn bg-olive btn-xs" onclick=\'location.href="all-product-line-edit.html"\'>编辑</button>\n' +
        '                                </td>\n' +
        '                            </tr>\n' +
        '\n' +
        '                            <tr>\n' +
        '                                <td>2017020200001</td>\n' +
        '                                <td>西安3日自由行·超级自由行</td>\n' +
        '                                <td>bi\'peng0405</td>\n' +
        '                                <td>￥500</td>\n' +
        '                                <td>已取消</td>\n' +
        '                                <td class="text-center">\n' +
        '                                    <button type="button" class="btn bg-olive btn-xs" onclick=\'location.href="all-product-line-edit.html"\'>编辑</button>\n' +
        '                                </td>\n' +
        '                            </tr>\n' +
        '\n' +
        '                            <tr>\n' +
        '                                <td>2017020200001</td>\n' +
        '                                <td>西安3日自由行·超级自由行</td>\n' +
        '                                <td>bi\'peng0405</td>\n' +
        '                                <td>￥500</td>\n' +
        '                                <td>已取消</td>\n' +
        '                                <td class="text-center">\n' +
        '                                    <button type="button" class="btn bg-olive btn-xs" onclick=\'location.href="all-product-line-edit.html"\'>编辑</button>\n' +
        '                                </td>\n' +
        '                            </tr>\n' +
        '\n' +
        '                            </tbody>\n' +
        '                        </table>\n' +
        '                        <!--数据列表/-->\n' +
        '\n' +
        '                    </div>\n' +
        '                    <!-- 数据表格 /-->\n' +
        '\n' +
        '                </div>\n' +
        '                <!-- /.box-body -->\n' +
        '\n' +
        '            </div>\n' +
        '            <!-- 待处理订单 /-->\n' +
        '\n' +
        '        </section>\n' +
        '        <!-- 正文区域 /-->\n' +
        '\n' +
        '    </div>\n' +
        '    <!-- 内容区域 /-->'
}
var fuel={
    template: '\n' +
        '    <!-- 内容区域 -->\n' +
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
        '    </div>\n' +
        '    <!-- 内容区域 /-->'
}

var router=new VueRouter({
    routes:[
        {path:'/',component:index},
        {path:'/index',component:index},
        {path:'/fuel',component:fuel}
    ]
})
new Vue({
        el: "#app",
        data: {
        },
        methods: {
            fuel:function () {
                //在当前方法中定义一个变量，表明是vue对象
                var _this = this;
                alert("username"+this.username1+"password"+this.password);
                axios.post('/springmvc_war_exploded/user/byusername',{'username':this.username1})
                    .then(function (response) {
                        alert("response"+response.data);
                        this.user = response.data;//响应数据给userList赋值
                        if (this.user.password == this.password){
                            // this.$router.replace('index.html');
                        }else {
                            alert("用户名或密码错误");
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                        alert(error);
                    })
                // this.$router.push("index.html");
                window.location.href='index.html';
                // router.push({path: "index.html"})

            }
        },
        created:function() {//当我们页面加载的时候触发请求，查询所有
            this.test();
        },
        router:router
    }
)