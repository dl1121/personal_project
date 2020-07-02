let userlist = {
    status: 200,
    message: 'success',
    data: [{
        guid: "2020",
        name: "张",
        email: "123456",
        status: "1",
        tel: "123",
        address: "321"
    },{
        guid: "2021",
        name: "张",
        email: "123456",
        status: "1",
        tel: "123",
        address: "321"
    }]
};
export default {
    'get|/user/userlist': userlist,
      //记录用于生成响应数据的函数。当拦截到匹配 rurl 和 rtype 的 Ajax 请求时，函数 function(options) 将被执行，并把执行结果作为响应数据返回。

}