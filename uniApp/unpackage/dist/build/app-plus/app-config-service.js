
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/login/login","pages/regist/regist","pages/mine/mine","pages/function/function","pages/uploadPic/uploadPic","pages/viewPic/viewPic","pages/setting/setting","pages/setting_updatePwd/setting_updatePwd","pages/viewCourts/viewCourts","pages/deviceStatistics/deviceStatistics","pages/checkList/checkList","pages/checkAdd/checkAdd","pages/dateDemo/dateDemo","components/lanxiujuan-dyDate/lanxiujuan-dyDate","pages/checkDetail/checkDetail","pages/userManagement/userManagement","pages/deviceMan/deviceMan","pages/noticeList/noticeList","pages/noticeAdd/noticeAdd","pages/noticeDetail/noticeDetail","pages/BaseInfo/index","pages/BaseInfo/XianSun","pages/BaseInfo/addBaseInfo","pages/BaseInfo/updateBaseInfo"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#00aaff","backgroundColor":"#F8F8F8"},"tabBar":{"selectedColor":"#1296db","list":[{"pagePath":"pages/index/index","text":"首页","iconPath":"static/tabs/tab_home_1.png","selectedIconPath":"static/tabs/tab_home_2.png"},{"pagePath":"pages/function/function","text":"功能","iconPath":"static/tabs/tab_fun_1.png","selectedIconPath":"static/tabs/tab_fun_2.png"},{"pagePath":"pages/mine/mine","text":"我的","iconPath":"static/tabs/tab_mine_1.png","selectedIconPath":"static/tabs/tab_mine_2.png"}]},"nvueCompiler":"uni-app","nvueStyleCompiler":"weex","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"配电台区智能管理终端","compilerVersion":"3.2.9","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"titleNView":{"buttons":[{"text":"搜索","height":"100%","fontSize":"16","float":"right","color":"#fff"}],"searchInput":{"align":"left","placeholder":"   请输入查找的信息","borderRadius":"50upx","backgroundColor":"#fff"}}}},{"path":"/pages/login/login","meta":{},"window":{"navigationBarTitleText":"用户登录","enablePullDownRefresh":false}},{"path":"/pages/regist/regist","meta":{},"window":{"navigationBarTitleText":"用户注册","enablePullDownRefresh":false}},{"path":"/pages/mine/mine","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的","enablePullDownRefresh":false}},{"path":"/pages/function/function","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"功能管理","enablePullDownRefresh":false}},{"path":"/pages/uploadPic/uploadPic","meta":{},"window":{"navigationBarTitleText":"台区上传","enablePullDownRefresh":false,"titleNView":{"buttons":[{"text":"上传","fontSize":"16","float":"right","color":"#fff","colorPressed":"yellow"}]}}},{"path":"/pages/viewPic/viewPic","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/setting/setting","meta":{},"window":{"navigationBarTitleText":"设置","enablePullDownRefresh":false}},{"path":"/pages/setting_updatePwd/setting_updatePwd","meta":{},"window":{"navigationBarTitleText":"密码修改","enablePullDownRefresh":false}},{"path":"/pages/viewCourts/viewCourts","meta":{},"window":{"navigationBarTitleText":"台区查看","enablePullDownRefresh":false}},{"path":"/pages/deviceStatistics/deviceStatistics","meta":{},"window":{"navigationBarTitleText":"设备统计","enablePullDownRefresh":false}},{"path":"/pages/checkList/checkList","meta":{},"window":{"navigationBarTitleText":"设备巡检","enablePullDownRefresh":false,"titleNView":{"buttons":[{"text":"添加","fontSize":"16","float":"right","color":"#fff","colorPressed":"yellow"}]}}},{"path":"/pages/checkAdd/checkAdd","meta":{},"window":{"navigationBarTitleText":"巡检表单填写","enablePullDownRefresh":false}},{"path":"/pages/dateDemo/dateDemo","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/components/lanxiujuan-dyDate/lanxiujuan-dyDate","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/checkDetail/checkDetail","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/userManagement/userManagement","meta":{},"window":{"navigationBarTitleText":"用户管理","enablePullDownRefresh":false}},{"path":"/pages/deviceMan/deviceMan","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/noticeList/noticeList","meta":{},"window":{"navigationBarTitleText":"通知公告","enablePullDownRefresh":false}},{"path":"/pages/noticeAdd/noticeAdd","meta":{},"window":{"navigationBarTitleText":"通知发布","enablePullDownRefresh":false}},{"path":"/pages/noticeDetail/noticeDetail","meta":{},"window":{"navigationBarTitleText":"通知","enablePullDownRefresh":false}},{"path":"/pages/BaseInfo/index","meta":{},"window":{"navigationBarTitleText":"台区基本信息","enablePullDownRefresh":false}},{"path":"/pages/BaseInfo/XianSun","meta":{},"window":{"navigationBarTitleText":"台区线损分析","enablePullDownRefresh":false}},{"path":"/pages/BaseInfo/addBaseInfo","meta":{},"window":{"navigationBarTitleText":"添加台区基本信息","enablePullDownRefresh":false}},{"path":"/pages/BaseInfo/updateBaseInfo","meta":{},"window":{"navigationBarTitleText":"修改基本信息","enablePullDownRefresh":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
