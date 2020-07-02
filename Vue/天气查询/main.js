
// 接口地址
// https://api.vvhan.com/api/weather
// 返回格式
// JSON
// 请求方式：
// GET
// 请求示例(自动识别)：
// https://api.vvhan.com/api/weather
// 请求示例(输出当天)：
// https://api.vvhan.com/api/weather?city=徐州
// 请求示例(输出一周)：
// https://api.vvhan.com/api/weather?city=徐州&type=week
// 参数说明
// 名称	必填	类型	说明
// city	是	string	输入城市或县区

var app = new Vue({
    el: '#app',
    data: {
        city: "",
        weatherList:[]
    },
    methods:{
        searchWeather:function(){
            // console.log("天气查询");
            // console.log(this.city);
            that = this;
            axios.get("https://api.vvhan.com/api/weather?city="+this.city+'&type=week')
            .then(
                function(response){
                    // console.log(response);
                    // console.log(response.data.data.forecast);
                    that.weatherList = response.data.data.forecast;
                },
                function(err)
                {
                    console.log(err);
                }
            );
            
        },

        changeCity:function(city){
            this.city = city;
            this.searchWeather();
        }

    }

});