<template>
  <main>
    <app-header :appName="appName" />

    <div class="content">
      <section class="app-body">
        <div class="cards-container">
          <b-container fluid class="bv-example-row d-flex justify-content-center align-items-center">
            <b-row class="row">

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
  width: 100%;
  height: 100%;
}

.app-body {
  height: 100%;
  width: 100%;
}

.content {
  height: 100%;
  display: flex;
  align-items: center;
  padding: 50px 20px 0 20px;
  justify-content: center;
  width: 100%;
}

.cards-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  min-height: 500px;
  height: 100%;
  padding: 0 20px;
}

.button-container {
  width: 100%;
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.row {
  width: 100%;
}

@media (max-width: 991px) {
  .bv-example-row .container {
    margin-bottom: 1rem;
  }
}

@media (max-width:445px) {
  .content {
    padding: 20px 0;
  }
}
</style>