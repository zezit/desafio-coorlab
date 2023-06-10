<template>
  <main>
    <app-header :appName="appName" />

    <div class="content">
      <section class="app-body">
        <b-container fluid class="bv-example-row cards-container">
          <b-row>
            <b-col class="search-container container" :sm="12" :md="4" :lg="4" :xl="4">
              <search-section></search-section>
            </b-col>

            <b-col class="options-container container" :sm="12" :md="6" :lg="8" :xl="8">
              <shipment-options></shipment-options>
            </b-col>
          </b-row>
        </b-container>
      </section>

    </div>

  </main>
</template>

<script>
import { mapGetters } from 'vuex';

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

  computed: {
    ...mapGetters({
      showErrorModal: 'showErrorModal'
    }),
  },

  async created() {
    // loads city options from API
    await this.$store.dispatch('fetchData');
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
  min-height: 500px;
  height: 100%;
}

.button-container {
  width: 100%;
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 768px) {
  .bv-example-row .container {
    margin-bottom: 1rem;
  }
}
</style>
