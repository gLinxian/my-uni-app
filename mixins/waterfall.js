/**
 * 瀑布流
 * 
 * 事先写好一块瀑布的样式，然后引用相关 js 代码
 * 每一块瀑布的定位是动态的
 */
export default {
  data() {
    return {
      parentHeight: 'auto'
    }
  },
  async mounted() {
    const parent = await this.getParent()
    const childrens = await this.getChildrens()
    this.init(parent, childrens)
  },
  methods: {
    getParent() {
      return new Promise(resolve => {
        uni.createSelectorQuery()
          .in(this)
          .selectAll('.waterfall')
          .fields({
          size: true
        }, data => {
          resolve(data)
        }).exec()
      })
    },

    getChildrens() {
      return new Promise(resolve => {
        uni.createSelectorQuery()
          .in(this)
          .selectAll('.water-container')
          .fields({
          size: true
        }, data => {
          resolve(data)
        }).exec()
      })
    },

    init(parent, childrens) {
      const colWidth = childrens[0].width                                           // 列宽
      const colCount = Math.ceil(parent[0].width / colWidth)                        // 列数
      const colHeightAry = Array.apply(null, Array(colCount)).map(item => item = 0) // 存储列高的数组

      childrens.forEach((item, index) => {

        // 记录最小高度及下标
        let minHight = colHeightAry[0]
        let minIndex = 0
        for (let i = 0; i < colCount; i++) {
          if (colHeightAry[i] < minHight) {
            minHight = colHeightAry[i]
            minIndex = i
          }
        }

        // 定位每一块瀑布后更新数组
        this.$set(this.list[index], 'top', `${minHight}px`)
        this.$set(this.list[index], 'left', `${minIndex * colWidth}px`)
        colHeightAry[minIndex] += item.height

        // 设置父容器高度
        let maxHight = 0
        for (let i = 0; i < colCount; i++) {
          if (colHeightAry[i] > maxHight) {
            maxHight = colHeightAry[i]
          }
        }
        this.parentHeight = maxHight + 'px'
      })
    }
  }
}
