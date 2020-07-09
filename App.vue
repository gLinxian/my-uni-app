<script>
	export default {
		onLaunch: function() {
			uni.hideTabBar()
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import url("styles/iconfont.css");
  @import url("styles/util.css");
  
	page {
		min-height: 100vh;
  }
  
	/* 背景 */
  .bg-theme { background-color: $theme; }
  .bg-white { background-color: $white; }
  .bg-black { background-color: $black; }
  .bg-red { background-color: $red; }
  .bg-green { background-color: $green; }
  .bg-blue { background-color: $blue; }

  /* 边框 */
  .border { border: 1px solid $border; }
  .border-top { border-top: 1px solid $border; }
  .border-right { border-right: 1px solid $border; }
  .border-bottom { border-bottom: 1px solid $border; }
  .border-left { border-left: 1px solid $border; }

  /* 颜色 */
  .theme { color: $theme; }
  .white { color: $white; }
  .black { color: $black; }
  .red { color: $red; }
  .green { color: $green; }
  .blue { color: $blue; }

  /* 文字 */
  .primary { color: $primary; }
  .general { color: $general; }
  .secondary { color: $secondary; }
  .placeholder { color: $placeholder; }
</style>
