<template>
    <div class="cards-container">
        <b-card :class="`card-item bigger ${rowClass}`">
            <div class="left-color">
                <div class="icon">
                    <img :src="iconPath" alt="icon-money">
                </div>
            </div>

            <div class="text">
                <h6>{{ getMainTitle() }}</h6>
                <div><span>Transportadora: </span> <span>{{ getTranspotadora() }}</span> </div>
                <div><span>Tempo estimado: </span> <span>{{ getTempoEstimado() }}</span> </div>
            </div>

        </b-card>
        <b-card :class="`card-item ${rowClass}`">
            <div class="text">
                <h6>Preço</h6>
                <div><span>{{ getPreco() }}</span> </div>
            </div>
        </b-card>
    </div>
</template>

<script>
import handIcon from '../assets/hand.png'
import onTimeIcon from '../assets/on-time.png'

export default {

    data() {
        return {
            handIcon,
            onTimeIcon,
        }
    },

    computed: {
        iconPath() {
            return this.cardType === 'second-row' ? this.onTimeIcon : this.handIcon
        },

        rowClass() {
            return this.cardType
        },
    },

    props: {
        cardType: String,
        mainTitle: String,
        optionDetail: Object
    },

    methods: {
        getIconCard() {
            return this.cardType === false ? '../assets/on-time.png' : '../assets/hand.png'
        },

        getMainTitle() {
            return this.cardType === 'first-row' ? 'Frete com menor valor' : 'Frete mais rápido'
        },

        getPreco() {
            return this.optionDetail.preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
        },

        getTranspotadora() {
            return this.optionDetail.name
        },

        getTempoEstimado() {
            return this.optionDetail.lead_time
        },
    },
}

</script>

<style scoped>
.cards-container {
    margin: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
}

.card-item {
    position: relative;
    width: 100%;
    flex: 1;
    border-radius: 5px;
}

.bigger {
    flex-grow: 2;
    margin-right: 20px;
}

.first-row {
    background-color: var(--dark-grey-background-card);
}

.second-row {
    background-color: var(--light-grey-background-card);
}

.left-color {
    position: absolute;
    left: 0;
    top: 0;
    width: 100px;
    height: 100%;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
}

.first-row .left-color {
    background-color: var(--light-blue-card);
}

.second-row .left-color {
    background-color: var(--dark-blue-card);
}

.icon {
    position: absolute;
    left: 0;
    top: 0;
    width: 100px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.icon img {
    width: 50px;
    height: 50px;
}

.text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}

.bigger .text {
    margin-left: 100px;
}

.text h6 {
    font-size: 16px;
    font-weight: 700;
}

@media (max-width: 1000px) {
    .cards-container {
        flex-direction: column;
    }

    .first-row {
        margin-bottom: 20px;
    }

    .bigger {
        width: 100%;
        margin-right: 0px;
        margin-bottom: 5px;
    }

    .bigger .text {
        margin-left: 100px;
    }
}
</style>