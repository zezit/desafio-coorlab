<template>
    <b-card bg-variant="light" class="container">
        <b-form-group>
            <b-form-group class="form-label">
                <p class="h4 mb-2 font-weight-bold pt-0" name="label" align-sm="center">
                    <b-icon icon="map" class="map-icon"></b-icon>Insira o destino e o peso
                </p>
            </b-form-group>

            <b-form-group label="Destino" label-for="destino" label-cols-sm="3" label-align-sm="right">
                <b-form-select id="destino" v-model="destinoInput" :options="destinoOptions"
                    class="mb-2 mr-sm-2 mb-sm-0 form-control select-options" size="lg">
                    <template #first>
                        <b-form-select-option :value="null" disabled>Selecione o Destino</b-form-select-option>
                    </template>
                </b-form-select>
            </b-form-group>

            <b-form-group label="Peso" label-for="peso" label-cols-sm="3" label-align-sm="right">
                <b-form-input id="peso" v-model.number="pesoInput" type="number"
                    placeholder="Peso da carga em kg"></b-form-input>
            </b-form-group>

            <b-col lg="4" class="pb-2 analyze-button-container">
                <b-button @click="findOptions" class="text-center analyze-button" :disabled="loadingState">
                    Analisar
                    <b-spinner v-if="loadingState" small class="spinner"></b-spinner>
                </b-button>
            </b-col>
        </b-form-group>
    </b-card>
</template>

<script>
export default ({
    data() {
        return {
            pesoInput: null,
            destinoInput: null,
            loadingState: false,
            showFieldsErrorMessage: false
        }
    },

    computed: {
        // returns the city options from the store data in alhabetic order
        destinoOptions() {
            return this.$store.state.data.map((item) => {
                return {
                    value: item.id,
                    text: item.city,
                };
            }).sort((a, b) => {
                return a.text.localeCompare(b.text);
            }).filter((item, index, self) => {
                return index === self.findIndex((t) => {
                    return t.text === item.text;
                });
            });
        },
    },

    methods: {
        findOptions() {
            this.loadingState = true;

            if (this.destinoInput && this.pesoInput) {
                this.$store.dispatch('findOptions', {
                    destino: this.destinoInput,
                    peso: this.pesoInput,
                });
                return
            }

            this.loadingState = false;
        },
        
        hideModal() {
            this.$refs['my-modal'].hide()
        },
    },
})
</script>

<style scoped>
.map-icon {
    margin-right: 6px;
}

.analyze-button-container {
    width: 100%;
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.analyze-button-container .spinner {
    margin-left: 10px;
}

.analyze-button-container button {
    width: 150px;
    max-width: 50%;
    background-color: var(--main-backgroung-color);
    color: var(--main-text-color);
    font-weight: 500;
    font-size: 16px;
    border-radius: 5px;
    border: none;
}

.placeholder-option {
    color: #999999;
}

.form-label {
    margin-bottom: 40px;
}
</style>