<template>
	<div>
		<b-field label="Repetir a cada" expanded>
            <b-field>
				<b-input type="number"></b-input>
                <b-select>
					<option value="dia">
						Dia
					</option>
					<option value="semana">
						Semana
					</option>
					<option value="mes">
						Mês
					</option>
					<option value="ano">
						Ano
					</option>
                </b-select>
            </b-field>
        </b-field>

		<b-field label="Nos dias">
		</b-field>
		<b-field>
			<b-checkbox>segunda</b-checkbox>
			<b-checkbox>terça</b-checkbox>
			<b-checkbox>quarta</b-checkbox>
			<b-checkbox>quinta</b-checkbox>
			<b-checkbox>sexta</b-checkbox>
			<b-checkbox>sábado</b-checkbox>
            <b-checkbox>domingo</b-checkbox>
		</b-field>

		<b-field label="Terminar">
			<b-radio v-model="radio"
                native-value="Nunca">
                Nunca
            </b-radio>
		</b-field>
		<b-field grouped>
			<p class="control">
				<b-radio v-model="radio"
	                native-value="Na data">
	                Na data
	            </b-radio>
			</p>
			<p class="control">
				<b-datepicker icon="calendar">
				</b-datepicker>
			</p>
		</b-field>
		<b-field grouped>
			<p class="control">
				<b-radio v-model="radio"
	                native-value="Após">
	                Após
	            </b-radio>
			</p>
			<p class="control">
				<b-field>
		            <b-input type="number"></b-input>
		            <p class="control">
		                <span class="button is-static">ocorrências</span>
		            </p>
		        </b-field>
			</p>
        </b-field>
	</div>
</template>

<script>
	export default {
		name: 'RepeticaoCustomizada',
		data () {
			return {
			}
		},
		mounted() {
		},
		methods: {
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
