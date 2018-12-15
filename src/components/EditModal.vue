<template>
  <v-app id="editmodal">
    <v-layout row justify-center>
      <v-dialog v-model="dialogStatus" max-width="290">
        <v-card>
          <v-card-title class="headline">Edit description</v-card-title>
          <v-card-text>
            <v-text-field label="Description" v-model="newDescription" solo></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="error" flat @click="closeModal">Cancel</v-btn>
            <v-btn color="primary" flat @click="passNewDesc">Agree</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
  </v-app>
</template>
<script>
  export default {
    props: {
      showDialog: {
        type: Boolean,
        required: true, 
        default: false
      },
      id: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        newDescription: null
      }
    },
    computed: {
      dialogStatus() {
        return this.showDialog
      }
    },
    methods: {
      /**
       * Send emit close modal event 
       * @return {[type]} [description]
       */
      closeModal() {
        this.$emit('close')
        this.newDescription = null
      },
      /**
       * Send emit new description event with the new description
       */
      passNewDesc() {
        // this.$emit('saveNewDesc', this.newDescription)
        // this.newDescription = null
        const newDesc = this.newDescription
        const id = this.id
        this.$store.commit('updateDescription', { id, newDesc })

        this.$toasted.success('Successfully updated description')
        this.$emit('close')
        this.newDescription = null
      }
    }
  }
</script>