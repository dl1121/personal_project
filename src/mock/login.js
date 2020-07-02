let login = {
    status: 200,
    message: 'success',
    data: [{
        username: 'dengli',
        password: '123456'
    },]
};
export default {
    'post|/user/login': login,

}