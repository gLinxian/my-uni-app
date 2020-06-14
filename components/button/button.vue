<template>
	<button 
		:size="size" 
		:type="type" 
		:plain="plain"
		:disabled="disabled"
		:loading="loading"
		:hover-class="hoverClass"
		:style="[roundStyle, circleStyle]">
		<text v-if="icon" :class="[iconClass]"></text>
		<slot></slot>
	</button>
</template>

<script>
	export default {
		name: 'MyButton',
		props: {
			size: {
				type: String,
				default: 'default'
			},
			type: {
				type: String,
				default: 'default'
			},
			plain: {
				type: Boolean,
				default: false
			},
			disabled: {
				type: Boolean,
				default: false
			},
			loading: {
				type: Boolean,
				default: false
			},
			hoverClass: {
				type: String,
				default: 'button-hover'
			},
			round: {
				type: Boolean,
				default: false
			},
			circle: {
				type: Boolean,
				default: false
			},
			icon: {
				type: String,
				default: ''
			}
		},
		computed: {
			roundStyle() {
				if (this.round) {
					return { 'border-radius': '20px' }
				}
			},
			circleStyle() {
				if (this.circle) {
					return {
						'padding': '12px',
						'border-radius': '50%',
						'line-height': '1'
					}
				}
			},
			iconClass() {
				if (this.icon) {
					const iconClass = !this.circle
						? `icon-${this.icon} mr-5`
						: `icon-${this.icon}`
					return iconClass
				}
			}
		}
	}
</script>
