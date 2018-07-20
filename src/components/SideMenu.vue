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
			General
		</p>
		<ul class="menu-list">
			<li><a>Dashboard</a></li>
			<li><a>Customers</a></li>
		</ul>
		<p class="menu-label">
			Administration
		</p>
		<ul class="menu-list">
			<li><a>Team Settings</a></li>
			<li>
				<a class="is-active">Manage Your Team</a>
				<ul>
					<li><a>Members</a></li>
					<li><a>Plugins</a></li>
					<li><a>Add a member</a></li>
				</ul>
			</li>
			<li><a>Invitations</a></li>
			<li><a>Cloud Storage Environment Settings</a></li>
			<li><a>Authentication</a></li>
		</ul>
		<p class="menu-label">
			Transactions
		</p>
		<ul class="menu-list">
			<li><a>Payments</a></li>
			<li><a>Transfers</a></li>
			<li><a>Balance</a></li>
		</ul>
	</aside>
</template>

<script>
import Datepicker from 'vuejs-datepicker';
import {ptBR} from 'vuejs-datepicker/dist/locale';

export default {
	name: 'SideMenu',
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
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
