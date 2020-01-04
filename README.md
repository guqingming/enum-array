# enum-array

## typescript枚举数组化

- **[作者邮箱：15524261@qq.com](mailto:15524261@qq.com)**
- **[github项目地址：https://github.com/guqingming/enum-array](https://github.com/guqingming/enum-array)**
- **[码云项目地址：https://gitee.com/mycssweb/enum-array](https://gitee.com/mycssweb/enum-array)**

## 截图

![1](https://gitee.com/mycssweb/enum-array/raw/master/docs/1.png)

## 说明

typescript枚举很高级，会自动生成一个key和value可逆的数据对象，但它本身不是一个可遍历的数据，我们在使用时有很多限制，于是我们将枚举重新包装成一个键值对的数组，可循环，数据且不重复。

## 安装

```bash
$ npm install enum-array
```

引入模块

```js
import enumArray from 'enum-array'
```

使用方法

```js
/**
 * 原始枚举
 */
enum Citys {
  北京 = 10,
  上海 = 21,
  广州 = 20
}

/**
 * 枚举数组化
 */
enumArray.getEnumArray(Enum)
// enumArray.getEnumArray(Citys)

/**
 * 从可枚举数组中取值
 */
enumArray.getValueByEnum(key, getEnumArray(Enum))
// EnumArray.getValueByEnum(10, getEnumArray(Citys))
```

方法

| 事件名 | 说明                   | 参数 |
| ------ | ---------------------- | ---- |
| getEnumArray  | 枚举数组化 | 枚举    |
| getValueByEnum  | 从可枚举数组中取值 | 键，枚举数组    |
