// // Map và Set trong ES6
// // Khởi tạo map
// console.log('---------------MAP-----------------');
// let map = new Map([
//    ['name', 'Nguyen Van Thang'],
//    ['email', 'jetamin94@gmail.com']
// ]);

// // Lặp qua các phần tử trong map
// console.log('Show the keys and values of map');
// for (let [keys, values] of map) {
//    console.log(`${keys} - ${values}`);
// }

// console.log('--------------------------------');
// // Thêm phần tử vào map
// console.log('Add the item to map');
// map.set('school', 'noname');
// console.log(map);

// console.log('--------------------------------');
// console.log('Get an item on the map');
// console.log(map.get('name'));

// console.log('--------------------------------');
// // Kiểm tra phần tử tồn tại
// console.log('Check item on the map');
// console.log(map.has('name')); // true
// console.log(map.has('age')); // false

// console.log('--------------------------------');
// // Xóa phần tử trong map
// console.log('Delete an item on the map');
// map.delete('name');
// console.log(map);

// console.log('--------------------------------');
// // Xóa toàn bộ phần tử trong map
// console.log('Clear items on the map');
// map.clear();
// console.log(map);


// console.log('----------------SET----------------');
// // Khởi tạo set
// let set = new Set([1, 2, 3, 4]);
// console.log(set);

// console.log('--------------------------------');
// // Thêm phần tử vào set
// console.log('Add an item to the Set');
// set.add(6);
// console.log(set);

// console.log('--------------------------------');
// // Kiểm tra phần tử có trong set
// console.log('Check item from the Set');
// console.log(set.has(3)); // true
// console.log(set.has(9)); // false

// console.log('--------------------------------');
// // Xóa phần tử trong set
// console.log('Delete item from the Set');
// set.delete(2);
// console.log(set);

// console.log('--------------------------------');
// // Chuyển đổi set sang mảng
// console.log('Convert set to the array');
// var arr = [...set];
// console.log(arr);

// console.log('--------------------------------');
// // Chuyển đổi mảng sang set
// console.log('Convert array to the map');
// var newSet = new Set(arr);
// console.log(newSet);

// console.log('--------------------------------');
// // Xóa toàn bộ các phần tử trong set
// console.log('Delete all items on the Set');
// set.clear();
// console.log(set);

// console.log('-------------WEAKMAP-------------');


// // Weakmap giống như map nhưng không giống như key trong map có thể
// // là rất nhiều loại, key trong weakmap phải là một object 
// // (class, function, object)
// // Weakmap cũng có những phương thức tương tự như map (thêm, xóa, 
// // kiểm tra, lấy giá trị)

// // Khởi tạo
// var weak = new WeakMap();

// // Danh sách keys
// var key1 = {};
// var key2 = {};

// // Thêm giá trị cho weakmap
// console.log('Set value for weakmap');
// weak.set(key1, 'Value 1');
// weak.set(key2, 'Value 2');
// console.log(weak);

// console.log('--------------------------------');
// // Lấy giá trị trong weakmap
// console.log('Get items from weakmap');
// console.log(weak.get(key1));
// console.log(weak.get(key2));

// console.log('--------------------------------');
// // Kiểm tra giá trị tồn tại trong map
// console.log('Check item on weakmap');
// var otherKey = {};
// console.log(weak.has(key1)); // true
// console.log(weak.has(otherKey)); // false

// console.log('--------------------------------');
// // Xóa phần tử trong weakmap
// console.log('Delete an item on weakmap');
// weak.delete(key1);
// console.log(weak.get(key1));

// console.log('-------------WEAKSET-------------');

// // Weakset cũng tương tự như set nhưng thay vì bạn có
// // thể tạo key rỗng để khởi tạo set thì bạn phải đặt 
// // giá trị cho key khi khởi tạo weakset

// // Weakset sẽ có một số thao tác chính như sau:
// // + Khởi tạo
// // + Thêm phần tử
// // + Kiểm tra phần tử tồn tại
// // + Xóa phần tử

// // Khởi tạo
// var weak = new WeakSet();

// // Keys
// var keySet1 = {
//    name: 'Nguyen Van Thang'
// };

// var keySet2 = {
//    website: 'jetamin94.com'
// };

// // Thêm phần tử
// weak.add(keySet1);
// weak.add(keySet2);

// // Kiểm tra tồn tại
// var otherKey = {};
// console.log(weak.has(keySet1)); // true
// console.log(weak.has(otherKey)); // false

// // Xóa phần tử
// weak.delete(keySet2);

// 4.1
const removeInvalid = (arr) => {
    res = []

    return res
}

// 4.2
const removeSpecific = (arr, num) => {

}

// 4.3
const getRandom = (arr) => {

}

// 4.4
const sumScores = (arr) => {

}

// 4.5
const inscrease10 = (arr) => {

}

module.export = {
    removeInvalid,
    removeSpecific,
    getRandom,
    sumScores,
    inscrease10
}