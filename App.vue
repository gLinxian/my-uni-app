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

page { font-size: 16px; }

.my-container {
  box-sizing: border-box;
  padding: 15px;
}

.my-intro {
  margin-bottom: 30px;
  padding: 15px;
  background-color: #FFFBE8;
  box-shadow: 0 2px 6px 0 rgba(222, 140, 23, .1);
  color: #DE8C17;
  font-size: 16px;
  line-height: 1.5;
}

.my-row {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
  padding: 15px;
  border-radius: 4px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, .1);
  &:last-child {
    margin-bottom: 0;
  }
}

.my-title {
  width: 100%;
  margin-bottom: 10px;
  color: $primary;
  font-size: 20px;
  line-height: 1;
}

.my-code {
  position: relative;
  box-sizing: border-box;
  min-width: 100%;
  padding: 18px 15px 12px;
  background-color: #F8F8F8;
  color: #333333;
  line-height: 1.5;
  &-type {
    position: absolute;
    top: 7px;
    right: 7px;
    color: $placeholder;
    font-size: 14px;
    line-height: 1;
  }
  &-text {
    white-space: nowrap;
  }
}

/* 背景 */
.bg-theme { background-color: $theme; }
.bg-black { background-color: $black; }
.bg-white { background-color: $white; }
.bg-red { background-color: $red; }
.bg-green { background-color: $green; }
.bg-blue { background-color: $blue; }
.bg-silver { background-color: $silver; }
.bg-gray { background-color: $gray; }
.bg-maroon { background-color: $maroon; }
.bg-purple { background-color: $purple; }
.bg-fuchsia { background-color: $fuchsia; }
.bg-lime { background-color: $lime; }
.bg-olive { background-color: $olive; }
.bg-navy { background-color: $navy; }
.bg-teal { background-color: $teal; }
.bg-aqua { background-color: $aqua; }

.bg-default { background-color: $default; }
.bg-success { background-color: $success; }
.bg-warning { background-color: $warning; }
.bg-danger { background-color: $danger; }
.bg-info { background-color: $info; }
.bg-light-default { background-color: $bgLightDefault; }
.bg-light-success { background-color: $bgLightSuccess; }
.bg-light-warning { background-color: $bgLightWarning; }
.bg-light-danger { background-color: $bgLightDanger; }
.bg-light-info { background-color: $bgLightInfo; }

.bg-primary { background-color: $primary; }
.bg-general { background-color: $general; }
.bg-secondary { background-color: $secondary; }
.bg-placeholder { background-color: $placeholder; }

.bg-border { background-color: $border; }
.bg-bgColor { background-color: $bgColor; }

/* 颜色 */
.theme { color: $theme; }
.black { color: $black; }
.red { color: $red; }
.green { color: $green; }
.white { color: $white; }
.blue { color: $blue; }
.silver { color: $silver; }
.gray { color: $gray; }
.maroon { color: $maroon; }
.purple { color: $purple; }
.fuchsia { color: $fuchsia; }
.lime { color: $lime; }
.olive { color: $olive; }
.navy { color: $navy; }
.teal { color: $teal; }
.aqua { color: $aqua; }

.default { color: $default; }
.success { color: $success; }
.warning { color: $warning; }
.danger { color: $danger; }
.info { color: $info; }

.primary { color: $primary; }
.general { color: $general; }
.secondary { color: $secondary; }
.placeholder { color: $placeholder; }
</style>
