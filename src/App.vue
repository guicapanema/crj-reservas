<template>
	<div id="app">
		<div class="columns">
			<div class="column is-2">
				<menu-lateral />
			</div>
			<div class="column">
				<router-view />
			</div>
		</div>
	</div>
</template>

<script>
import MenuLateral from './components/MenuLateral'

export default {
	name: 'App',
	components: { MenuLateral },
}
</script>

<style>

@import '../node_modules/buefy/lib/buefy.css';
@import '../node_modules/fullcalendar/dist/fullcalendar.css';


#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
