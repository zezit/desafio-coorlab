<template>
    <b-card bg-variant="light" class="container">
        <b-form-group label="Insira o destino e o peso" label-size="lg" label-class="font-weight-bold pt-0"
            label-align-sm="center">
            <!-- <p class="h3 mb-2 font-weight-bold pt-0" align-sm="center"><b-icon icon="map"></b-icon>Insira o destino e o peso</p> -->
            <b-form-group label="Destino" label-for="destino" label-cols-sm="3" label-align-sm="right">
                <b-form-select id="destino" v-model="destinoInput" :options="destinoOptions"></b-form-select>
            </b-form-group>

            <b-form-group label="Peso" label-for="peso" label-cols-sm="3" label-align-sm="right">
                <b-form-input id="peso" v-model="pesoInput" type="number" placeholder="Peso da carga em kg"></b-form-input>
            </b-form-group>
        </b-form-group>
    </b-card>
</template>  

<script>
export default ({
    data() {
        return {
            pesoInput: null,
            destinoInput: null,
        }
    },

    computed: {
        destinoOptions() {
            // cidades diferentes em ordem alfabética
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
    }
})
</script>

<style scoped></style>