let obj = JSON.parse($response.body);
obj.data.launch_ad = [];
$done({body: JSON.stringify(obj)});