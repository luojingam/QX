/**********************************************

 > 应用名称：文多多
 > 更新时间：2024-06-29
 > 脚本说明：会员


 [rewrite_local]
 ^https:\/\/api\.vasts\.cn\/winlapp\/user\/refreshLogin url script-response-body https://raw.githubusercontent.com/luojingam/QX/master/Scripts/wenduoduo.js

 [mitm]
 hostname = api.vasts.cn

 **********************************************/

let obj = JSON.parse($response.body);
obj.data.userInfo.appleExpireTime = "2099-12-31 00:00:00";
obj.data.userInfo.redeemExpireTime = "2099-12-31 00:00:00";
obj.data.userInfo.expValue = 9999;
obj.data.userInfo.redeemLifeVip = true;
obj.data.userInfo.appleLifeVip = true;
$done({body: JSON.stringify(obj)});