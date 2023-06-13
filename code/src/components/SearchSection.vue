<template>
    <b-card bg-variant="light" class="container">
        <b-modal v-model="showModalFlag" centered hide-footer hide-header backdrop content-class="shadow"
            class="custom-modal">
            <div class="warning-container">
                <img src="../assets/icons8-warning-100.png" alt="warning" />
            </div>
            <div class="d-block text-center error-message">
                <p>{{ errorModal }}</p>
            </div>
            <div class="button-container">
                <layout-button :click="hideModal" text="Fechar" :disabled="false"></layout-button>
            </div>
        </b-modal>

        <b-form-group>
            <!-- title -->
            <b-form-group class="form-label">
                <p class="h5 mb-2 font-weight-bold pt-0" name="label" align-sm="center">
                    <b-icon icon="map" class="map-icon"></b-icon>Insira o destino e o peso
                </p>
            </b-form-group>

            <!-- select -->
            <b-form-group label="Destino" label-for="destino" label-cols-sm="5" label-align-sm="right">
                <b-form-select ref="destinoInputRef" id="destino" v-model="destinoInput" :options="destinoOptions"
                    class="form-control select-options" size="lg" :disabled="loadingData">
                    <template #first>
                        <b-form-select-option :value="null" disabled>Selecione o Destino</b-form-select-option>
                    </template>
                </b-form-select>
            </b-form-group>

            <!-- text input -->
            <b-form-group label="Peso" label-for="peso" label-cols-sm="5" label-align-sm="right">
                <b-form-input ref="pesoInputRef" id="peso" v-model.number="pesoInput" type="number"
                    placeholder="Peso da carga em kg" :disabled="loadingData"></b-form-input>
            </b-form-group>

            <!-- analize button -->
            <b-col lg="4" sm="6" class="pb-2 analyze-button-container">
                <layout-button v-b-modal.error-modal :click="findOptions" :disabled="loadingState || loadingData"
                    text="Analisar"></layout-button>
            </b-col>
        </b-form-group>
    </b-card>
</template>

<script>
import { mapGetters } from 'vuex';

import LayoutButton from '@/components/LayoutButton.vue';

export default ({
    components: {
        LayoutButton,
    },

    data() {
        return {
            pesoInput: null,
            destinoInput: null,
            showModalFlag: false,
            errorModal: "",
        }
    },

    computed: {
        ...mapGetters({
            loadingState: 'loadingState',
            loadingData: 'loadingData',
            getClear: 'getClear'
        }),

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
        }
    },

    watch: {
        getClear() {
            this.pesoInput = null;
            this.destinoInput = null;
        }
    },

    methods: {
        findOptions() {
            this.$store.dispatch('showLoading');

            if (this.destinoInput && this.pesoInput) {
                this.$store.dispatch('findOptions', {
                    destino: this.destinoInput,
                    peso: this.pesoInput,
                })
                return
            }

            this.showModal();
            this.$store.dispatch('hideLoading');
        },

        showModal() {
            this.showModalFlag = true;
            this.errorModal = `Insira os valores para realizar\na análise.`;
        },

        hideModal() {
            this.showModalFlag = false;
            this.errorModal = "";
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

.placeholder-option {
    color: #999999;
}

.form-label {
    margin: 50px 0;
}

.button-container {
    width: 100%;
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.warning-container {
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.warning-container img {
    width: 60px;
}

.error-message {
    font-weight: 600;
    font-size: larger;
}

.error-message p {
    padding: 0 18%;
}

.select-options {
    margin-bottom: 20px;
}
</style>