<template>
  <v-app id="datatable">
    <v-container>
      <v-layout wrap>
        <v-flex xs12>
          <h3>Filter Results</h3>
        </v-flex>
        <v-flex xs12 sm4 md4>
          <v-select id="search-field" label="Field to filter" v-model="searchField" :items="fields"></v-select>
        </v-flex>
        <v-flex xs12 sm4 md4 offset-sm4 offset-md4>
          <v-text-field id="search-text" label="Search" @input="searchItem($event)" :disabled="searchField === null"></v-text-field>
        </v-flex>
      </v-layout>
      <!-- I did not use the data table and functions provided by Vuetify and instead created my own -->
      <table class="datatable-class">
        <thead class="datatable-table-head">
          <tr>
            <th class="datatable-header" v-for="(field, key) in fields" :key="key" @click="sortItems(key)">
              {{ field | capitalize }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, key) in paginatedData" :key="key">
            <td v-for="field in fields" :key="item[field]" @click="editItem(item)" :class="{ 'align-right': field === 'amount' }">
              {{ item[field] }}
            </td>
          </tr>
        </tbody>
      </table>
      <v-layout>
        <v-flex xs12 sm12 md4>
          <v-btn id="prev-btn" color="error" @click="prevPage" :disabled="this.start === 0">Prev</v-btn>
          <v-btn id="next-btn" color="info" @click="nextPage" :disabled="Math.ceil(tableItems.length / 10) * 10 === this.end">Next</v-btn>
        </v-flex>
      </v-layout>
      <EditModal :showDialog="dialog" :id="itemId" @close="closeModal" />
    </v-container>
  </v-app>
</template>
<script>
  import EditModal from '@/components/EditModal.vue'

  export default {
    props: {
      items: {
        type: Array,
        required: true
      },
      size: {
        type: Number,
        required: false,
        default: 10
      }
    },
    components: {
      EditModal
    },
    data() {
      return {
        fields: ['id', 'name', 'description', 'date', 'amount'],
        searchField: null,
        tableItems: this.items, // contains the items prop to be used by the table
        pageNumber: 0,
        dialog: false,
        itemId: ''
      }
    },
    filters: {
      /**
       * capitalize first letter of the header
       * @private
       */
      capitalize: (value) => {
        if (!value) {
          return ''
        }

        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1)
      }
    },
    methods: {
      /**
       * clicking each column header will enable it to sort based on the key
       * @params key: integer - key of the fields array being sorted
       * @private
       */
      sortItems(key) {
        const fieldKey = this.fields[key]
        this.tableItems = this.tableItems.sort((a, b) => {
          if (fieldKey === 'amount') {
            if (parseFloat(a[fieldKey]) < parseFloat(b[fieldKey])) {
              return -1
            }
          } else if (fieldKey === 'description' || fieldKey === 'name') {
            if (a[fieldKey].toLowerCase() < b[fieldKey].toLowerCase()) {
              return -1
            } 
          } else {
            if (a[fieldKey] < b[fieldKey]) {
              return -1
            }
          }
        })
      },
      /**
       * searches items from the table based on the given parameters
       * @params value: string - value of the text being typed on the search box
       * @private
       */
      searchItem(value) {
        let newItems = []
        value = value.toLowerCase()

        if (value.length > 0) {
          let indexes = this.tableItems.reduce((a, e, i) => {
            if (e[this.searchField].toLowerCase().includes(value)) {
              a.push(i)
            } 

            return a
          }, [])
          
          if (indexes.length > 0) {
            indexes.forEach((index) => {
              newItems.push(this.tableItems[index])
            })
          }

          this.tableItems = newItems
        } else {
          this.tableItems = this.items
        }
      },
      /**
       * pagination methods
       * @private
       */
      nextPage() {
        this.pageNumber++
      },
      prevPage() {
        this.pageNumber--
      },
      /**
       * Pass the prop to open the edit modal
       * @private
       */
      editItem(item) {
        this.itemId = item.id
        this.dialog = true
      },
      /**
       * Close modal call emit from child component EditModal
       * @private
       */
      closeModal() {
        this.dialog = false
      }
    },
    computed: {
      /**
       * Where the index should be sliced (starting point)
       * @private
       */
      start() {
        return this.pageNumber * this.size
      },
      /**
       * Where the index should be sliced (ending point)
       * @private
       */
      end() {
        return this.start + this.size
      },
      /**
       * Table items sliced with start and end based on the current page number
       * @private
       */
      paginatedData() {
        return this.tableItems.slice(this.start, this.end)
      }
    }
  }
</script>
<style scoped>
  .datatable-class {
    width: 100%;
    border: 1px solid #ddd;
  }

  .datatable-class th {
    background-color: #DAD6D6;
  }

  .datatable-class th,
  .datatable-class td {
    height: 50px;
  }

  .datatable-header,
  .datatable-class td {
    cursor: pointer;
  }

  .datatable-class tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  .align-right {
    text-align: right;
  }

  @media (max-width: 768px) {
    .datatable-class thead {
      display: none;
    }

    .datatable-class tr,
    .datatable-class th,
    .datatable-class td {
      display: block;
      text-align: left;
    }

    .datatable-class td:nth-of-type(1):before {
      font-weight: 600;
      display: block;
      content: "Id";
      background-color: #DAD6D6;
    }

    .datatable-class td:nth-of-type(2):before {
      font-weight: 600;
      display: block;
      content: "Name";
      background-color: #DAD6D6;
    }

    .datatable-class td:nth-of-type(3):before {
      font-weight: 600;
      display: block;
      content: "Description";
      background-color: #DAD6D6;
    }

    .datatable-class td:nth-of-type(4):before {
      font-weight: 600;
      display: block;
      content: "Date";
      background-color: #DAD6D6;
    }

    .datatable-class td:nth-of-type(5):before {
      font-weight: 600;
      display: block;
      content: "Amount";
      background-color: #DAD6D6;
    }
  }
</style>