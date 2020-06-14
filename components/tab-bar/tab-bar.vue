<template>
	<view class="tabBar">
		<view class="tab" hover-class="animate" v-for="item in list" :key="item.id" @click="itemClick(item.url)">
			<image
				class="tab-img"
				:class="selected === item.url ? 'animate' : ''"
				:src="'/static/tabBar/' + item.url + (selected === item.url ? '-selected' : '') + '.png'"
				mode="aspectFit" />
			<text :class="selected === item.url ? 'selected' : ''">{{ item.name }}</text>
		</view>
		<view v-if="midButton" class="middle">
			<template v-if="$slots.default">
				<slot></slot>
			</template>
			<template v-else>
				<text class="middle-btn icon-scan" @click="scanClick"></text>
				<text class="middle-text">扫码</text>
			</template>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'MyTabBar',
		props: {
			midButton: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				list: [
					{ id: 0, name: '首页', url: 'home' },
					{ id: 1, name: '列表', url: 'list' },
					{ id: 2, name: '地图', url: 'map' },
					{ id: 3, name: '我的', url: 'my' }
				],
				selected: ''
			}
		},
		watch: {
			midButton: {
				handler(val) {
					if (val) {
						this.list.splice(2, 0, {
							id: 4,
							name: '扫码',
							url: 'list'
						})
					}
				},
				immediate: true
			}
		},
		created() {
			const pages = getCurrentPages()
			const route = pages[pages.length - 1].route
			this.selected = route.substr(route.lastIndexOf('/') + 1)
		},
		methods: {
			itemClick(url) {
				if (url !== this.selected) {
					this.$uni.switchTab(`../${url}/${url}`)
				}
			},
			scanClick() {
				uni.scanCode({
					success(res) {
						this.$emit('success', res)
					},
					fail(err) {
						this.$emit('fail', err)
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.tabBar {
		position: fixed;
		bottom: 0;
		left: 0;
		display: flex;
		align-items: center;
		width: 100%;
		height: 50px;
		background-color: $white;
		border-top: .5px solid $border;
	}
	.tab {
		flex: 1;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		align-items: center;
		color: $tabColor;
		font-size: 10px;
		.tab-img {
			width: 24px;
			height: 24px;
		}
		.selected {
			color: $tabSelected;
		}
		&.animate {
			animation: animate .5s 1;
			@keyframes animate {
				0% {
					transform: scale(1);
				}
				50% {
					transform: scale(0.8);
				}
				100% {
					transform: scale(1);
				}
			}
		}
	}
	.middle {
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 75px;
		height: 75px;
		background-color: $white;
		box-shadow: 0 -5px 5px -3px $border;
		border-radius: 50%;
		&-btn {
			box-sizing: border-box;
			margin-bottom: 2px;
			padding: 9px;
			background-image: $blue-linear-gradient;
			border-radius: 50%;
			color: $white;
			font-size: 30px;
			line-height: 1;
		}
		&-text {
			color: $tabColor;
			font-size: 10px;
		}
	}
</style>
