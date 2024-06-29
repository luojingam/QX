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
let timestamp = new Date().getTime() + 86400000 * 2;
let date = new Date(timestamp);
let year = date.getFullYear();
let month = date.getMonth() + 1;
month = month < 10 ? "0" + month : month;
let day = date.getDate();
day = day < 10 ? "0" + day : day;
let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();
let formatTime = year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
obj.data.userInfo.appleExpireTime = formatTime;
$done({body: JSON.stringify(obj)});