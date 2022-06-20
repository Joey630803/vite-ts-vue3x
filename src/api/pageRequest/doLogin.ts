
// 用户管理接口

import server from '../request';

// 登录

export const doLogin = async (data:Object):Promise<any> => await server.post('/farm/Login/doLogin', data);

// 导出

export const exportUser = async (data:Object):Promise<any> => await server.post('/customer/sys/user/export', data,{responseType:'blob'});
