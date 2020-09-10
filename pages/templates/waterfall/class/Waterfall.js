/**
 * 瀑布流
 * 
 * 首先先在正常情况下设计好你每块“瀑布”的样式，
 * 然后再将包含“瀑布”块的父容器作为 ref 传入
 * 
 * @author linxian
 */

class Waterfall {
  constructor(ref) {
    this.container = ref.$el                                                          // 容器
    this.container.style.position = 'relative'
    this.childrens = this.container.children                                          // 子元素
    this.colWidth = this.childrens[0].offsetWidth                                     // 列宽
    this.colCount = Math.floor(this.container.offsetWidth / this.colWidth)            // 列数
    this.colHeightAry = Array.apply(null, Array(this.colCount)).map(item => item = 0) // 创建存储列高的数组
    this.init()
  }

  init() {
    this.childrens.forEach(div => {

      // 记录最小高度及下标
      let minHight = this.colHeightAry[0]
      let minIndex = 0
      for (let i = 0; i < this.colCount; i++) {
        if (this.colHeightAry[i] < minHight) {
          minHight = this.colHeightAry[i]
          minIndex = i
        }
      }

      // 定位每一块瀑布后更新数组
      div.style.position = 'absolute'
      div.style.top = minHight + 'px'
      div.style.left = minIndex * this.colWidth + 'px'
      this.colHeightAry[minIndex] += div.offsetHeight + 10

      // 设置父容器高度
      let maxHight = 0
      for (let i = 0; i < this.colCount; i++) {
        if (this.colHeightAry[i] > maxHight) {
          maxHight = this.colHeightAry[i]
        }
      }
      this.container.style.height = maxHight + 'px'
    })
  }
}

export default Waterfall
