<template>
    <div>
        <div v-if="selectedDestineOptions" class="cards">
            <b-card bg-variant="light" class="container">
            </b-card>
        </div>

        <div v-else>
            <div class="container">
                <div>
                    <h4>Nenhum dado selecionado</h4>
                </div>
            </div>
        </div>
    </div>
</template>
  

<script>
export default ({
    computed: {
        selectedDestineOptions() {
            return this.$store.state.selectedDestineOptions;
        }
    },
})
</script>

<style scoped>
.container {
    padding: 20px 10px;
    min-height: 450px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>