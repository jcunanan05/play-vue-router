<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <navbar-item name="Logo" uri="/" />

      <burger-bar />
    </div>

    <div class="navbar-menu">
      <div class="navbar-start">
        
      </div>

      <div class="navbar-end">
        <navbar-item name="Home" uri="home"></navbar-item>
        <navbar-item name="Contact" uri="contact"></navbar-item>
        <navbar-item name="About Us" uri="about-us"></navbar-item>
      </div>
    </div>

  </nav>
</template>
<script>
import BurgerBar from './BurgerBar.vue'
import NavbarItem from './NavbarItem.vue'

export default {
	name: 'app-header',
	components: {
		'burger-bar': BurgerBar,
		'navbar-item': NavbarItem
	}
}
</script>
