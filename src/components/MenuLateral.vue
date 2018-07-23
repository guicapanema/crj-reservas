<template>

	<aside class="menu">

		<datepicker
			:inline="true"
			:language="ptBR"
			:openDate="new Date()"
			maximum-view="day"
			calendar-class="my-datepicker">
		</datepicker>

		<p class="menu-label">
			Geral
		</p>

		<ul class="menu-list">
			<li>
				<router-link to="/" :class="{'is-active': $route.path === '/'}">
					Início
				</router-link>
			</li>
			<li>
				<router-link to="/nova-reserva" :class="{'is-active': $route.path === '/nova-reserva'}">
					Nova reserva
				</router-link>
			</li>
		</ul>

		<p class="menu-label">
			Relatórios
		</p>

		<ul class="menu-list">
			<li><a>Utilização</a></li>
		</ul>

	</aside>

</template>

<script>
import Datepicker from 'vuejs-datepicker';
import {ptBR} from 'vuejs-datepicker/dist/locale';

export default {
	name: 'MenuLateral',
	components: {
		Datepicker
	},
	data () {
		return {
			ptBR: ptBR,
		}
	}
}
</script>

<style>
.menu {
	padding: 0.5em;
}

.my-datepicker {
	border: none !important;
	max-width: 200px;
	font-size: 0.8rem;
	padding-top: 0.8rem;
}

.my-datepicker header {
	line-height: 20px !important;
}

.my-datepicker .cell {
	color: $grey-light;
	font-weight: lighter;
	height: 20px !important;
	line-height: 20px !important;

}

.my-datepicker .cell:not(.blank):not(.disabled).day:hover {
	border: none !important;
}

.my-datepicker .cell.selected {
	background: transparent !important;
	// color: #E28931;
}

.my-datepicker .highlighted {
	color: $black;
	background-color: transparent !important
}
</style>
