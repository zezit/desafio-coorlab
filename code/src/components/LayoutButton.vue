<template>
    <b-button class="text-center analyze-button" :disabled="disabled" @click="click">
        {{ text }}
        <b-spinner v-if="disabled" small class="spinner"></b-spinner>
    </b-button>
</template>

<script>
export default {
    props: {
        disabled: Boolean,
        text: String,
        click: Function,
    },
}
</script>



<style scoped>
.spinner {
    margin-left: 10px;
}

button {
    width: 150px;
    max-width: 50%;
    background-color: var(--main-backgroung-color);
    color: var(--main-text-color);
    font-weight: 500;
    font-size: 16px;
    border-radius: 5px;
    border: none;
}

button:hover {
    background-color: var(--main-backgroung-color-light);
}

button:focus {
    outline: none;
}

@media (max-width: 400px) {
    button {
        max-width: 100%;

    }
}
</style>