<template>
  <main>
    <app-header :appName="appName" />

    <div class="content">
      <section class="app-body">
        <div class="container d-flex justify-content-center align-items-center">
          <b-container fluid class="bv-example-row cards-container">
            <b-row>

              <b-col class="search-container container" :sm="12" :md="12" :lg="4" :xl="4">
                <search-section></search-section>
              </b-col>

              <b-col class="options-container container" :sm="12" :md="12" :lg="8" :xl="8">
                <shipment-options></shipment-options>
              </b-col>

            </b-row>
          </b-container>
        </div>
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
      showErrorModal: 'showErrorModal',
      loadingData: 'loadingData'
    }),
  },

  async created() {
    // loads city options from API
    await this.$store.dispatch('fetchData');
  },
}
</script>

<style scoped>
.app-body,
.cards-container,
.content,
main {
  height: 100%;
}

.container {
  min-height: 500px;
  height: 100%;
  padding: 20px 10px;
}

.button-container {
  width: 100%;
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  position: relative;
}

@media (max-width: 768px) {
  .bv-example-row .container {
    margin-bottom: 1rem;
  }
}
</style>
