<template>
  <div id="app">
    <div class="box">
      <div class="box-item">
        <h4>原始枚举：</h4>
        <ul>
          <li v-for="(city, index) in Citys" :key="index">
            <span>key: {{ index }}</span>
            <span>value: {{ city }}</span>
          </li>
        </ul>
      </div>

      <div class="box-item">
        <h4>对原始枚举数组化：<i>getEnumArray(Citys)</i></h4>
        <ul>
          <li v-for="(city, index) in CitysArray" :key="index">
            <span>key: {{ city.key }}</span>
            <span>value: {{ city.value }}</span>
          </li>
        </ul>
      </div>

      <div class="box-item">
        <h4>从数组枚举中取值<i>getValueByEnum(key, enumArray)</i></h4>
        <ul>
          <li v-for="(city, index) in CitysArray" :key="index">
            <span>传入key: {{ city.key }}</span>
            <span>返回value: {{ getValueByEnum(city.key, CitysArray) }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { getEnumArray, getValueByEnum } from '../src'

// import { getEnumArray, getValueByEnum } from 'enum-array'

/**
 * 原始枚举
 */
enum Citys {
  北京 = 10,
  上海 = 21,
  广州 = 20
}

@Component({
  name: 'Dev'
})

export default class extends Vue {
  /**
   * 计算属性
   */
  get CitysArray() {
    return getEnumArray(Citys)
  }
  /**
   * 初始数据
   */
  /** 原始枚举 */
  private Citys = Citys

  /** 取值 */
  private getValueByEnum(key: string, obj: any) {
    return getValueByEnum(key, obj)
  }
}
</script>

<style lang="scss">
  html,
  body {
    margin: 0;
    height: 100%;
    font-family: -apple-system, sans-serif;
  }

  #app {
    height: 100%;
  }

  .box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .box-item {
    border: #ccc 1px solid;
    margin-bottom: 20px;
    padding: 5px 20px;
  }

  ul {
    list-style: none;
    width: 300px;

    li {
      display: flex;
      flex-direction: row;
      align-items: center;
      
      span {
        flex: 1;
      }
    }
  }
</style>
