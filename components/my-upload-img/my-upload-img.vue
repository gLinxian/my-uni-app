<template>
  <view
    class="uploadimg"
    :style="{
      width: `${width}px`,
      height: `${height}px`,
      borderRadius: `${radius}px`,
      boxShadow: shadow && '0 3px 6px rgba(0, 0, 0, .35)'
    }"
    @click="upload">
    <image class="img" :src="imgSrc" mode="aspectFill"></image>
    <view
      v-if="!uploaded"
      class="select"
      :style="{
        backgroundColor: bgImg
          ? 'rgba(0, 0, 0, .5)'
          : bgColor,
        color: color,
        fontSize: fontSize
      }">{{ text }}</view>
    <canvas
      class="canvas"
      canvas-id="canvas"
      :style="{
        width: `${canvasWidth}px`,
        height: `${canvasHeight}px`
      }"></canvas>
  </view>
</template>

<script>
export default {
  name: 'MyUploadImg',
  props: {
    width: {
      type: Number,
      default: 100
    },

    height: {
      type: Number,
      default: 100
    },

    radius: {
      type: Number,
      default: 4
    },

    shadow: {
      type: Boolean,
      default: true
    },

    bgImg: {
      type: String,
      default: ''
    },

    bgColor: {
      type: String,
      default: '#F8F8F8'
    },

    color: {
      type: String,
      default: '#C0C4CC'
    },

    fontSize: {
      type: String,
      default: '#16px'
    },

    text: {
      type: String,
      default: '选择图片'
    }
  },

  data() {
    return {
      imgSrc: '',
      canvasWidth: '',
      canvasHeight: '',
      uploaded: false
    }
  },

  created() {
    this.imgSrc = this.bgImg
  },

  methods: {
    async upload() {
      // 选择图片
      const imageData = await uni.chooseImage({
        count: 1,
        sizeType: 'compressed '
      })

      // 图片信息
      const imageInfo = await uni.getImageInfo({
        src: imageData[1] && imageData[1].tempFilePaths[0]
      })

      // 利用 canvas 压缩图片
      const quality = 0.2
      const imageWidth = imageInfo[1].width
      const imageHeight = imageInfo[1].height
      const screenWidth = uni.getSystemInfoSync().screenWidth
      if (imageWidth > screenWidth * quality) {
        this.canvasWidth = screenWidth * quality
        this.canvasHeight = screenWidth * quality * imageHeight / imageWidth
      } else {
        this.canvasWidth = imageWidth
        this.canvasHeight = imageHeight
      }
      
      // canvas 转路径转 Base64
      const canvasToBase64 = async () => {
        const imagePath = await uni.canvasToTempFilePath({
          canvasId: 'canvas',
          quality: 0.1
        })
        const tempFilePath = imagePath[1].tempFilePath
        this.imgSrc = await this.$util.pathToBase64(tempFilePath)
        this.$emit('change', this.imgSrc)
        this.uploaded = true
      }
      const context = uni.createCanvasContext('canvas', this)
      context.drawImage(imageInfo[1].path, 0, 0, this.canvasWidth, this.canvasHeight)
      context.draw(false, canvasToBase64)
    }
  }
}
</script>

<style lang="scss" scoped>
.uploadimg {
  position: relative;
  overflow: hidden;
}

.img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.select {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.canvas {
  position: absolute;
  left: -9999px;
}
</style>
