import axios from 'axios';
import router from '@/router';
import { ElMessage } from 'element-plus'
/**
 * 请求类型为post时请求头的请求类型默认为{headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
 * 可按实际修改为{headers: {'Content-Type': 'application/json; charset=UTF-8'}}或者{headers: {'Content-Type': 'multipart/form-data; charset=UTF-8'}}  跟在传参后
 * 列如:
 *  export function postHome(data){
        return server.post('Home/BlocManage/auth',data,{headers: {'Content-Type': 'multipart/form-data; charset=UTF-8'}})
    }
 */
const server = axios.create({     //创建axios实例
    timeout: 1000 * 30,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json; charset=utf-8',
        // "A_B_TESTING":"zhangxudong"
    }
})
// console.log('server====',server.defaults.baseURL);

// 请求拦截器
server.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    // let userinfo = JSON.parse(window.localStorage.getItem('userinfo'));

    // if (userinfo) {
    //     config.headers.Authorization = userinfo.token
    // }
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 响应拦截
server.interceptors.response.use(function (response) {
    // console.log(2,response);
    // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
    // 否则的话抛出错误
    console.log('response', response)
    if (response.status === 200) {
        // 未登录或者token过期
        if (response.data.err === 1) {
            // ElMessage.error(response.data.msg);
            localStorage.removeItem('userinfo');
            setTimeout(() => {
                router.push('/login')
            }, 1000);
        } else if (response.data.err === 10) {
            // ElMessage.error(response.data.msg);
            // localStorage.removeItem('userinfo');
            setTimeout(() => {
                router.push('/nopower')
            }, 1000);
        }
        return Promise.resolve(response);
    } else {

        return Promise.reject(response);
    }
}, function (error) {
    console.log('error.response', error.response)
    // 对响应错误做点什么
    // 服务器状态码不是2开头的的情况
    // 这里跟后台开发人员协商好统一的错误状态码
    // 然后根据返回的状态码进行一些操作，例如登录过期提示，错误提示等等
    if (error.response.status) {
        switch (error.response.status) {
            case 401:
                break;
            case 404:
                ElMessage.error('网络请求不存在');
                break;
            // 其他错误，直接抛出错误提示
            case 500:
                if (error.response.data.err === 1) {
                    localStorage.removeItem('userinfo');
                    setTimeout(() => {
                        router.push('/login')
                    }, 1000);
                }
                break;
            default:
                ElMessage.error(error.response.data.msg);
        }
        return Promise.reject(error.response.data.msg);
    }
});

/**
 * 请求地址处理
 * @param {*} actionName action方法名称
 */
// server.adornUrl = (actionName) => {
//     // 非生产环境 && 开启代理, 接口前缀统一使用[/proxyApi/]前缀做代理拦截!
//     return '/api' + actionName;
// };
export default server
