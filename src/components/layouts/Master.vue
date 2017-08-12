<template>
  <div id="app">
	<app-header /> 


  	<slot></slot>


	<app-footer />
  </div>
</template>
<script>
import Header from './header/Header.vue';
import Footer from './Footer.vue';

export default {
	name: 'master-layout',
	components: {
		'app-header': Header,
		'app-footer': Footer
	}
}
</script>

<style lang="scss">
  @import "../../sass/main";
</style>
