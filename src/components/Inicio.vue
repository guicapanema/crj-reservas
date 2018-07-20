<template>
	<div>
		<div id="calendar"></div>
		asdasdasd
	</div>
</template>

<script>
export default {
	name: 'Home',
	data () {
		return {
			date: new Date()
		}
	},
	mounted() {
		$('#calendar').fullCalendar({
			defaultView: 'agendaWeek',
		});
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
