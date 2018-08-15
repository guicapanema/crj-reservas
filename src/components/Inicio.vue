<template>
	<div>
		<div id="calendar"></div>

		<!-- <a class="button is-primary" @click="aoMarcarEvento()">Marcar evento</a> -->

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
					<button class="button is-primary" @click="modalEventoAberto = false">
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

				select: this.createCompromisso,
				eventClick: this.createCompromisso,
				// events: [
				//         {
				//           title: 'oficina de funk',
				//           start: '2018-07-12-10-00',
				// 					end:  '2018-07-12-11-00'
				//         }
				// ],
				events: [
				    {
				      title  : 'oficina de funk',
							start  : '2018-07-09T19:30:00',
							end    : '2018-07-09T21:30:00',
							backgroundColor: '#000',
							allDay : false // will make the time show
				    },
						{
				      title  : 'oficina de teatro do oprimido',
							start  : '2018-07-11T19:00:00',
							end  : '2018-07-11T22:00:00',
							backgroundColor: '#63372C',
							allDay : false // will make the time show
				    },
						{
				      title  : 'seminário - o jovem e a cidade',
							start  : '2018-07-12',
							end  : '2018-07-14',
							backgroundColor: '#546A76',
							allDay : true // will make the time show
				    },
				    {
				      title  : 'contação de historias',
				      start  : '2018-07-09T12:30:00',
							end    : '2018-07-09T14:30:00',
				      allDay : false // will make the time show
				    }
				  ],
//				selectable: isMobile ? false : true,
				selectable: true,
				editable: true,
				aspectRatio: "auto",
				slotLabelFormat: "HH:mm",
				columnHeaderFormat: "ddd D/M",
        locale: 'pt-br',
//				firstDay: configuracaoAgenda.firstDay,
        minTime: '8:00',
        maxTime: '22:00',
				slotDuration: '01:00:00',
        allDaySlot: true,
				weekends: true,
				header: {
					left: 'prev,next today',
	        center: 'title',
	        right: 'month,agendaWeek,agendaDay'
        },
				navLinks: true, // can click day/week names to navigate views
				selectHelper: true,
				defaultDate:'2018-07-08',
			});
		},
		methods: {
			aoMarcarEvento() {
				this.modalEventoAberto = true;
			},
			getReservas() {
				return [
				        {
				          title: 'oficina de funk',
				          start: '2018-07-12-10-00',
									end:  '2018-07-12-11-00'
				        },
				        // {
				        //   title: 'Long Event',
				        //   start: '2018-07-11',
				        //   // end: '2018-03-10'
				        // }
				]
			},
			createCompromisso(start, end, jsEvent, view) {
//				   alert(start);
					 this.aoMarcarEvento();
					 var eventData;
           eventData = {
             title: 'oficina de teatro do oprimido',
             start: start,
             end: end
           };
           $('#calendar').fullCalendar('renderEvent', eventData, true); // stick? = true
	         $('#calendar').fullCalendar('unselect');
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
