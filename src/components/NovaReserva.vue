<template>
	<section class="section">
		<div class="form-section">
			<b-field label="Espaço"
					:type="evento.id_espaco === 1 ? 'is-danger' : null"
					:message="evento.id_espaco === 1 ? 'Este espaço está ocupado no horário selecionado' : null">
				<b-select
					placeholder="Selecione um espaço"
					v-model="evento.id_espaco">

					<option
						v-for="espaco in espacos"
						:value="espaco.id"
						:key="espaco.id">
						{{ espaco.nome }}
					</option>
				</b-select>
			</b-field>
		</div>

		<div class="columns is-multiline">
			<div :class="{
				'column': true,
				'is-12': modoModal,
				'is-12-tablet': !modoModal,
				'is-half-desktop': !modoModal}">
				<div class="form-section">
					<div class="columns is-marginless">
						<div class="column">
							<b-field label="Data início">
								<b-datepicker
									placeholder="Clique para selecionar"
									v-model="evento.data_inicio"
									icon="calendar">
								</b-datepicker>
							</b-field>
						</div>
						<div class="column">
							<b-field label="Horário início">
								<b-timepicker
									placeholder="Digite ou selecione um horário"
									v-model="evento.data_inicio"
									icon="clock"
									:increment-minutes="15"
									:readonly="false"
									:disabled="evento.dia_inteiro">
								</b-timepicker>
							</b-field>
						</div>
					</div>

					<div class="columns is-marginless is-vcentered">
						<div class="column is-narrow">
							<b-field>
								<b-checkbox v-model="evento.dia_inteiro">Dia inteiro</b-checkbox>
							</b-field>
						</div>
						<div class="column">
							<b-field>
								<b-select
									v-model="evento.repeticao"
									placeholder="Não repete"
									size="is-small"
									@input="aoSelecionarRepeticao">
									<option :value="null">Não repete</option>
									<option value="diariamente">Repete diariamente</option>
									<option value="semanalmente">Repete semanalmente</option>
									<option value="customizar">Customizar...</option>
								</b-select>
							</b-field>
						</div>
					</div>
				</div>
			</div>
			<div :class="{
				'column': true,
				'is-12': modoModal,
				'is-12-tablet': !modoModal,
				'is-half-desktop': !modoModal}">
				<div class="form-section">
					<div class="columns is-marginless">
						<div class="column">
							<b-field label="Data fim">
								<b-datepicker
									placeholder="Clique para selecionar"
									v-model="evento.data_fim"
									icon="calendar">
								</b-datepicker>
							</b-field>
						</div>
						<div class="column">
							<b-field label="Horário fim">
								<b-timepicker
									placeholder="Digite ou selecione um horário"
									v-model="evento.data_fim"
									icon="clock"
									:increment-minutes="15"
									:readonly="false"
									:disabled="evento.dia_inteiro">
								</b-timepicker>
							</b-field>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="form-section">
			<b-field label="Tipo de evento">
				<b-select
					placeholder="Selecione um tipo"
					v-model="evento.id_tipo">

					<option
						v-for="tipo in tipos"
						:value="tipo.id"
						:key="tipo.id">
						{{ tipo.nome }}
					</option>
				</b-select>
			</b-field>

			<b-field label="Nome do evento">
				<b-input
					placeholder="Digite o nome"
					v-model="evento.nome">

				</b-input>
			</b-field>

			<b-field label="Organizador do evento">
				<b-autocomplete placeholder="Digite um organizador"
					:data="organizadores"
					field="nome"
					:keep-first="true">

					<!-- <template slot="empty">No results found</template> -->
				</b-autocomplete>
			</b-field>
		</div>

		<b-modal :active.sync="modalRepeticaoAberto" has-modal-card>
			<div class="modal-card">
				<header class="modal-card-head">
					<p class="modal-card-title">Repetição customizada</p>
				</header>
				<section class="modal-card-body">
					<repeticao-customizada />
				</section>
				<footer class="modal-card-foot">
					<button class="button" type="button" @click="modalRepeticaoAberto = false">
						Cancelar
					</button>
					<button class="button is-primary">
						Salvar
					</button>
				</footer>
			</div>
		</b-modal>
	</section>
</template>

<script>
import Datepicker from 'vuejs-datepicker';
import {ptBR} from 'vuejs-datepicker/dist/locale';

import RepeticaoCustomizada from './RepeticaoCustomizada';

export default {
	name: 'SideMenu',
	components: {
		Datepicker,
		RepeticaoCustomizada
	},
	props: ['dataInicio', 'dataFim', 'modoModal', 'idEspaco'],
	data () {
		return {
			evento: {
				data_inicio: null,
				data_fim: null,
				dia_inteiro: false,
				repeticao: null,
				id_espaco: null,
				id_tipo: null,
				id_organizador: null,
				nome: '',
			},
			ptBR: ptBR,

			// Os dados abaixo são de marcação, virão da base de dados
			espacos: [
				{id: 1, nome: 'Multiuso 1'},
				{id: 2, nome: 'Multiuso 2'},
				{id: 3, nome: 'Auditório'}
			],
			modalRepeticaoAberto: false,
			tipos: [
				{id: 1, nome: 'Ensaio'},
				{id: 2, nome: 'Gravação'},
				{id: 3, nome: 'Sarau'},
			],
			organizadores: [
				{id: 1, nome: 'Bicimanas'},
				{id: 2, nome: 'Tarifa Zero'},
			],
		}
	},
	mounted () {
		this.evento.data_inicio = this.dataInicio;
		this.evento.data_fim = this.dataFim;
		this.evento.id_espaco = this.idEspaco;
	},
	methods: {
		aoSelecionarRepeticao(repeticao) {
			if(repeticao === 'customizar') {
				this.modalRepeticaoAberto = true;
			}
		}
	}
}
</script>

<style scoped>
.form-section {
	border: 1px solid rgb(200, 200, 200);
	border-radius: 5px;
	padding: 1em;
	margin: 0 0.5em 2em;
}


</style>
