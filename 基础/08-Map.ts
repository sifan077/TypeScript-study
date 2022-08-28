// @ts-ignore
let map: Map<string, number> = new Map();


// map的大小
console.log(map.size);
// 设置键值对
map.set("shentu", 1);
map.set("sifan", 2);
map.set("lan", 3);

// 用键获取值
console.log(map.get("shentu"));
console.log(map.get("sifan"));
console.log(map.get("lan"));

// 是否含有某个值
console.log(map.has("xiaoyue"));
console.log(map.has("shentu"));

// 删除某个键值对
map.delete("shentu");
console.log(map.has("shentu"));
// 清空所有键值对
map.clear();
console.log(map)