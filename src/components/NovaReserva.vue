<template>

	<section class="section">
		<b-field label="Espaço">
            <b-select placeholder="Selecione um espaço">
                <option
                    v-for="espaco in espacos"
                    :value="espaco.id"
                    :key="espaco.id">
                    {{ espaco.nome }}
                </option>
            </b-select>
        </b-field>
	</section>

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
			espacos: [
				{id: 1, nome: 'Multiuso 1'}, 
				{id: 2, nome: 'Multiuso 2'}, 
				{id: 3, nome: 'Auditório'}
				],
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
