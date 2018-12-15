<template>
  <v-app id="dashboard">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm12 md12>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Payments Data Table</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <DataTable :items="payments" />
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import DataTable from '@/components/Datatable.vue'

  export default {
    data() {
      return {
        drawer: null,
        payments: this.$store.getters.getAllPayments
      }
    },
    components: {
      DataTable
    }
  }
</script>