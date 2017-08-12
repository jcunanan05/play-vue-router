<template>
  <a :href="uri" :target="targetBlank(target)">
    <slot></slot>
  </a>
</template>

<script>
export default {
	name: 'app-link',

	props: {
		uri: {
			type: String,
			default: '#'
		},

		target: {
			type: Boolean,
			default: false
		}
	},

	methods: {
		targetBlank(bool) {
			if (bool) {
				return "_blank";
			}

			return false;
		}
	}

}
</script>
