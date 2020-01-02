/**
 * 获取枚举的不重复数组
 */
export function getEnumArray(emun: any): any[] {
  const arr: any[] = []
  for (const key in emun) {
    const haveKey = arr.find(item => {
      return item.key === emun[key] || Number(item.key) === Number(emun[key])
    })
    if (!haveKey) {
      const isNAN = isNaN(Number(key))
      const obj = {
        key: isNAN ? emun[key] : Number(key),
        value: isNAN ? key : emun[key]
      }
      arr.push(obj)
    }
  }
  return arr
}

/**
 * 直接从枚举改造数组中取值
 */
export function getValueByEnum(key: string | number, obj: any[]): string {
  for (const forkey in obj) {
    if (key === obj[forkey].key) {
      return obj[forkey].value
    }
  }
  return ''
}
