let userlist = {
    status: 200,
    message: 'success',
    data: [{
        guid: "1001",
        name: "张三",
        email: "123456",
        status: "启用",
        tel: "123",
        address: "3210"
    },
        {
        guid: "1002",
        name: "李四",
        email: "1234567",
        status: "禁用",
        tel: "123",
        address: "32101"
        },
        {
            guid: "1003",
            name: "张",
            email: "123456",
            status: "启用",
            tel: "123",
            address: "3112321"
        },
        {
            guid: "1004",
            name: "王五",
            email: "123456",
            status: "启用",
            tel: "123",
            address: "3231"
        },
        {
            guid: "1005",
            name: "test",
            email: "12341256",
            status: "禁用",
            tel: "1223",
            address: "3211"
            },
    ]
};
export default {
    'get|/user/userlist': userlist,
      //记录用于生成响应数据的函数。当拦截到匹配 rurl 和 rtype 的 Ajax 请求时，函数 function(options) 将被执行，并把执行结果作为响应数据返回。

}