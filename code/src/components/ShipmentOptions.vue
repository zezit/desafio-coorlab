<template>
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
            // go to the top of the page
            if (window.innerWidth <= 991) {
                const section = document.getElementsByClassName('title')[0];
                section.scrollIntoView({ behavior: 'smooth' });
            }
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

.container,
.cards {
    transition: appear 0.5s ease-in-out;
}

@keyframes appear {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
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

@media (max-width: 540px) {
    h5 {
        text-align: center;
    }
}
</style>