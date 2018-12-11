// 浅copy
// 简单赋值实现
// Object.assign()实现，当第一个传参是你需要拷贝的对象

// 深copy
// 递归
// Object.assign()实现，当第一个传参是{}
// JSON.stringify()和JSON.parse()实现

function deepCopy (obj) {
    var result;

    //引用类型分数组和对象分别递归
    if (Object.prototype.toString.call(obj) == '[object Array]') {
      result = []
      for (i = 0; i < obj.length; i++) {
        result[i] = deepCopy(obj[i])
      }
    } else if (Object.prototype.toString.call(obj) == '[object Object]') {
      result = {}
      for (var attr in obj) {
        result[attr] = deepCopy(obj[attr])
      }
    }
    //值类型直接返回
    else {
      return obj
    }
    return result
}