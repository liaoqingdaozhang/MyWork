new Vue
(
    {
    el:"#app",
    data:{
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
    },
    methods:{
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
                        alert(response.data.id)
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
            this.IndexFindById2(1);
        }
    }
);