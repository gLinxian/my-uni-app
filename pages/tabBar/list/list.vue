<template>
	<view :style="[navigationBar, tabBar]">
		<my-navigationBar title="my-uni-app" />
		
		<view class="container">
			<view 
				v-for="item in 40" 
				:key="item">列表{{ item }}</view>
		</view>
		
		<my-tabBar />
	</view>
</template>

<style lang="scss" scoped>
	.container {
		background-color: $bgColor;
	}
</style>
