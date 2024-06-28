/**********************************************

 > 应用名称：儿歌多多
 > 更新时间：2024-06-28
 > 脚本说明：去除开屏广告


 [rewrite_local]
 ^https?:\/\/cms.cekid.com\/publish\/998\/2023applaunchconfig.json url script-response-body https://raw.githubusercontent.com/luojingam/QX/master/Scripts/haiziwang.js
 ^http:\/\/api.ergeduoduo.com\/baby\/v1\/bb.php* url script-response-body https://raw.githubusercontent.com/luojingam/QX/master/Scripts/ergeduoduo.js
 [mitm]
 hostname = cms.cekid.com

 **********************************************/

let obj = JSON.parse($response.body);
obj.ad = {};
$done({body: JSON.stringify(obj)});