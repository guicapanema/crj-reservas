<template>
	<div>
		<div id="calendar"></div>

		<a class="button is-primary" @click="aoMarcarEvento()">Marcar evento</a>

		<b-modal :active.sync="modalEventoAberto" has-modal-card>
			<div class="modal-card">
				<header class="modal-card-head">
					<p class="modal-card-title">Marcar evento</p>
				</header>
				<section class="modal-card-body">
					<nova-reserva 
						:data-inicio="new Date()"
						:data-fim="new Date()"
						:idEspaco="1" 
						:modo-modal="true" />
				</section>
				<footer class="modal-card-foot">
					<button class="button" type="button" @click="modalEventoAberto = false">
						Cancelar
					</button>
					<button class="button is-primary">
						Marcar
					</button>
				</footer>
			</div>
		</b-modal>
	</div>
</template>

<script>
	import NovaReserva from './NovaReserva'

	export default {
		name: 'Inicio',
		components: { NovaReserva },
		data () {
			return {
				date: new Date(),
				modalEventoAberto: false,
			}
		},
		mounted() {
			$('#calendar').fullCalendar({
				defaultView: 'agendaWeek',
			});
		},
		methods: {
			aoMarcarEvento() {
				this.modalEventoAberto = true;
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
