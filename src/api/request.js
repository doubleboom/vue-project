import aoxis from 'axios';
import {baseURL} from '../../config/dev.env'

//设置默认的路径
aoxis.defaults.baseURL=baseURL;
//拦截器，拦截response的返回，将数据抽出
aoxis.interceptors.response.use((res)=>{
    return res.data;
});

let getBanners=()=>{
    return 2;
    return aoxis.get('/banners');
}

export default{
    getBanners
}