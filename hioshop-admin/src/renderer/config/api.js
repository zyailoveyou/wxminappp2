//const rootUrl = 'https://www.e-vitriol.com/admin/';
// const rootUrl = 'http://127.0.0.1:8360/admin/';
// const rootUrl = 'https://www.e-vitriol.com/admin/';
const rootUrl = 'http://121.37.149.23:8360/admin/';
// const rootUrl = 'http://www.adminwxshop.tk/admin/';
const api = {
    rootUrl : rootUrl,
    // express: {
    //     // ���������Ϣ��ѯʹ�õ��ǿ����ӿڣ������ַ��http://www.kdniao.com/
    //     appid: '123', // ��Ӧ������û���̨ �û�ID
    //     appkey: '123123', // ��Ӧ������û���̨ API key
    //     request_url: 'http://api.kdniao.cc/Ebusiness/EbusinessOrderHandle.aspx'
    // },
	// 4.19���£�������ѯ����Ҫ�������ã�ֻ��Ҫ��server��config���ð����������ӿھͿ���
    qiniu: 'http://up.qiniu.com',
    // ������Լ���������ţ������������ã�
    // https://developer.qiniu.com/kodo/manual/1671/region-endpoint
	// ����	  http(s)://up.qiniup.com
	// ����	  http(s)://up-z1.qiniup.com
	// ����	  http(s)://up-z2.qiniup.com
	// ����	  http(s)://up-na0.qiniup.com
	// ������ http(s)://up-as0.qiniup.com
};


// import api from './config/api'
// Axios.defaults.baseURL = api.rootUrl;

export default api