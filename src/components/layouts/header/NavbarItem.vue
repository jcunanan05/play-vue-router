<template>
  <router-link :to="uri" class="navbar-item" exact>{{ name }}</router-link>
</template>
<script>
export default {
	name: 'navbar-item',
	props: {
		name: {
			type: String,
			required: true
		},

		uri: {
			type: String,
			required: true
		}
	}
}
</script>