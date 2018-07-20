<template>
	<div id="app">
		<div class="columns">
			<div class="column is-2">
				<side-menu />
			</div>
			<div class="column">
				<router-view />
			</div>
		</div>
	</div>
</template>

<script>
import SideMenu from './components/SideMenu'

export default {
	name: 'App',
	components: { SideMenu },
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
