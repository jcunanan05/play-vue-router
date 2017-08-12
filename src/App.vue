<template>
  <master-layout>
  	<router-view></router-view>
  </master-layout>
</template>

<script>
import Master from './components/layouts/Master.vue';

export default {
  name: 'app',
  components: {
    'master-layout': Master
  }
}
</script>