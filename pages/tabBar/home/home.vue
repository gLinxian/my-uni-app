<template>
	<view :style="[navigationBar, tabBar]">
		<my-navigationBar title="my-uni-app" />
		
		<view :style="[fullPage]" class="container">
			<text>a</text>
			<my-picker type="region" @change="change" @cancel="cancel">
				<text>{{ region }}</text>
			</my-picker>
		</view>
		
		<my-tabBar :midButton="true" />
		<my-modal />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				region: '请选择省市区'
			}
		},
		methods: {
			change(val) {
				this.region = val
			},
			cancel() {
				this.cancel = '请选择省市区'
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		background-color: $bgColor;
	}
</style>
