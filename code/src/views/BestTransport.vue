<template>
  <main>
    <app-header :appName="appName" />

    <section class="app-body">
      <b-container fluid class="bv-example-row cards-container">
        <b-row>
          <b-col class="search-container container" :sm="12" :md="6" :lg="6" :xl="6">
            <search-section></search-section>
          </b-col>

          <b-col class="options-container container" :sm="12" :md="6" :lg="6" :xl="6">
            <shipment-options></shipment-options>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </main>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import SearchSection from '@/components/SearchSection.vue'
import ShipmentOptions from '@/components/ShipmentOptions.vue'

export default {
  components: {
    AppHeader,
    SearchSection,
    ShipmentOptions,
  },

  data() {
    return {
      appName: 'Melhor Frete',
      apiBaseUrl: process.env.VUE_APP_ROOT_API,
    }
  },

  created() {
    // loads city options from API
    this.$store.dispatch('fetchData');
  },
}
</script>

<style scoped>
.container {
  padding: 20px 10px;
}

.app-body,
.cards-container {
  height: 100%;
}

.container {
  min-height: 450px;
  height: 100%;
}

@media (max-width: 768px) {
  .bv-example-row .container {
    margin-bottom: 1rem;
  }
}
</style>
