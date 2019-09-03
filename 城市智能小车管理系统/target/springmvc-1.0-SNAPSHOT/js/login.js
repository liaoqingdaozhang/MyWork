new Vue({
        el: "#app",
        data: {
            username1:'',
            password:'',
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
        methods: {
            login:function () {
                //在当前方法中定义一个变量，表明是vue对象
                var _this = this;
                alert("username"+_this.username+"password"+_this.password);
                axios.post('/springmvc_war_exploded/user/byusername',{"username":_this.username})
                    .then(function (response) {
                        _this.user = response.data;//响应数据给userList赋值
                        alert(_this.user.password);
                        alert( _this.password);
                        if (_this.user.password == _this.password){
                            // request=ServletActionContext.getRequest();
                            // session= request.getSession();
                            var url = "/springmvc_war_exploded/html/reception/Test02.html?userId="+decodeURI(_this.user.id);
                            location.href = url;
                            // this.$router.replace('index.html');
                        }else {
                            alert("用户名或密码错误");
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                        alert(error);
                    })
            }
        }
    }
)