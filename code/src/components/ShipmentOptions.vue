<template>
    <transition name="show">
        <div class="cards" v-if="selectedDestineOptions.length" key="save">
            <div>
                <h5>Estas são as melhores alternativas de frete que encontramos para você.</h5>
            </div>

            <card-layout cardType="first-row" :optionDetail="selectedDestineOptions[0]" />
            <card-layout cardType="second-row" :optionDetail="selectedDestineOptions[1]" />

            <div class="clear-button-container">
                <layout-button v-b-modal.error-modal :click="clearAll" :disabled="false" class="clear-button"
                    text="Limpar"></layout-button>
            </div>
        </div>

        <div v-else class="container">
            <div class="no-data-container">
                <h4>Nenhum dado selecionado</h4>
            </div>
        </div>
    </transition>
</template>
  

<script>
import { mapGetters } from 'vuex';

import CardLayout from './CardLayout.vue';
import LayoutButton from './LayoutButton.vue';

export default ({
    components: {
        CardLayout,
        LayoutButton,
    },

    computed: {
        ...mapGetters({
            selectedDestineOptions: 'selectedDestine'
        })
    },

    methods: {
        clearAll() {
            this.$store.dispatch('clearAll');
        }
    }
})

</script>
<style scoped>
.cards {
    width: 96%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 500px;
    height: 100%;
}

.container {
    width: 96%;
    min-height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
}

h5 {
    width: 70%;
    margin-left: 10px;
    margin-bottom: 20px;
}

.clear-button-container {
    display: flex;
    justify-content: flex-end;
}

.clear-button {
    margin-top: 20px;
}

/* transition */
.show-enter-active,
.show-leave-active {
    animation: enter 0.2s;
}

.show-enter,
.show-leave-to {
    animation: enter 0.2s reverse;
}

@keyframes enter {
    0% {
        opacity: 0;
    }
}

@media (max-width: 768px) {
    .clear-button-container {
        display: flex;
        justify-content: center;
    }

    h5 {
        width: 100%;
    }
}
</style>