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
    data: () => ({
      drawer: null,
      payments: [
        { 
          id: '3471DA17-401F-9633-BF81-4CADA6FD5C79',
          name: 'Kyra Lester',
          description: 'Curabitur dictum. Phasellus in',
          date: '2017-07-23T04:24:49-07:00',
          amount: '345.54'
        },
        {
          id: '9F5C9912-936A-FB85-1EDB-9DA87BE7FF1E',
          name: 'Buckminster Alvarado',
          description: 'dui, in sodales elit erat vitae risus. Duis a mi',
          date: '2018-11-08T05:44:15-08:00',
          amount: '677.08' 
        },
        {
          id: 'B743AC82-3613-13A2-2E42-E0C1F5CBF8A6',
          name: 'Athena Smith',
          description: 'massa lobortis ultrices. Vivamus rhoncus.',
          date: '2018-11-11T06:19:57-08:00',
          amount: '73.67'
        },
        {
          id: '74749D4F-A43F-34E8-A687-D54924B17251',
          name: 'Cameron Thompson',
          description: 'dolor. Fusce mi lorem, vehicula et, rutrum eu,',
          date: '2019-09-30T06:56:15-07:00',
          amount: '807.60'
        },
        {
          id: 'DB983FEF-AF70-7D2E-86BA-0C2AE749E729',
          name: 'Dawn Alford',
          description: 'Pellentesque ut ipsum',
          date: '2019-03-06T13:24:31-08:00',
          amount: '820.96'
        },
        {
          id: '8E6F38E1-5DC7-5030-4513-8FBB237EF5DB',
          name: 'Barclay Sears',
          description: 'sit amet ultricies sem magna',
          date: '2019-10-28T04:57:29-07:00',
          amount: '116.36'
        },
        {
          id: '4891AA6C-02DF-A955-951C-9CEEC6D69387',
          name: 'James Melton',
          description: 'non leo. Vivamus nibh dolor, nonummy ac, feugiat non, lobortis',
          date: '2019-03-13T09:43:05-07:00',
          amount: '956.72'
        },
        {
          id: '7BF06B3D-5DF2-9EEA-9E32-1BB284D0ABB9',
          name: 'Medge Powell',
          description: 'elit sed',
          date: '2018-01-19T20:33:11-08:00',
          amount: '726.37'
        },
        {
          id: '5DEB3210-1591-B14D-1D51-389F84099E84',
          name: 'Lucas Ray',
          description: 'morbi tristique senectus',
          date: '2017-06-19T14:05:17-07:00',
          amount: '-439.33'
        },
        {
          id: '96C6E014-B8DE-7ED0-B0D2-2D1577D2427C',
          name: 'Wang Stevens',
          description: 'ipsum',
          date: '2018-02-12T09:36:23-08:00',
          amount: '638.14'
        },
        {
          id: 'E267C0EE-D5EA-8F7A-96AB-E78817E6FFFA',
          name: 'Dalton Carey',
          description: 'lectus justo eu arcu. Morbi sit amet massa. Quisque',
          date: '2018-07-31T15:51:48-07:00',
          amount: '602.37'
        },
        {
          id: 'EF0C48A4-06A3-0437-F9A5-426B1BB00A5F',
          name: 'Jackson Noel',
          description: 'dui,',
          date: '2019-03-16T03:52:39-07:00',
          amount: '-319.59'
        },
        {
          id: '412A0487-22C3-4183-3E2F-AF900725DD38',
          name: 'Ariana Kennedy',
          description: 'eleifend nec, malesuada ut, sem. Nulla interdum. Curabitur dictum.',
          date: '2018-09-07T09:06:19-07:00',
          amount: '618.05'
        },
        {
          id: 'BF6A5A4C-4281-84EF-CAAA-FECA9BFD1F9F',
          name: 'Bevis Mcfadden',
          description: 'sagittis',
          date: '2019-01-22T10:28:19-08:00',
          amount: '400.65'
        },
        {
          id: '398D3DD0-647D-168A-756D-2B48FEC07D7F',
          name: 'Kasimir Byrd',
          description: 'ridiculus mus. Donec dignissim',
          date: '2017-09-30T17:57:57-07:00',
          amount: '159.61'
        },
        {
          id: '1BDF7A90-717E-56EE-355B-14D344F86878',
          name: 'Ava Sargent',
          description: 'Cum sociis natoque',
          date: '2017-08-20T20:20:34-07:00',
          amount: '462.91'
        },
        {
          id: 'F0E82B90-EE28-1D9E-7722-EF276A54C415',
          name: 'Gray Keith',
          description: 'interdum. Curabitur dictum. Phasellus in felis. Nulla tempor',
          date: '2018-12-26T09:43:45-08:00',
          amount: '-792.30'
        },
        {
          id: '2EFFF684-5F6D-F707-25DC-E2222B2151C3',
          name: 'Neil Clemons',
          description: 'molestie. Sed id',
          date: '2019-06-14T02:43:16-07:00',
          amount: '337.64'
        },
        {
          id: '18C7AEC2-054E-3746-1E9D-B81DC3B270F2',
          name: 'Tad Knapp',
          description: 'Donec egestas. Duis ac arcu. Nunc mauris. Morbi',
          date: '2018-02-23T23:41:07-08:00',
          amount: '932.52'
        },
        {
          id: '02EE993A-5D8E-7448-0217-6874B4CAEE80',
          name: 'April Fields',
          description: 'urna convallis erat, eget tincidunt dui augue',
          date: '2019-03-04T20:58:53-08:00',
          amount: '865.94'
        },
        {
          id: '894CC0E6-8439-B85B-DC23-6D29E7900A93',
          name: 'Lester Mayer',
          description: 'erat. Sed nunc est, mollis non,',
          date: '2019-05-20T11:56:46-07:00',
          amount: '335.28'
        },
        {
          id: 'B213B4AF-0082-7B59-029A-5557AF11E770',
          name: 'Harriet Castillo',
          description: 'orci. Ut semper pretium neque.',
          date: '2019-10-25T12:19:40-07:00',
          amount: '283.23'
        },
        {
          id: '34FC88F1-BA66-9429-A35C-942CB4E5EB47',
          name: 'Aubrey Sheppard',
          description: 'tellus sem mollis dui, in sodales elit erat vitae risus.',
          date: '2018-07-14T05:07:40-07:00',
          amount: '689.31'
        },
        {
          id: '0E527195-AAED-B7FC-7E4F-D2DFE24C3103',
          name: 'Sebastian Baldwin',
          description: 'rhoncus. Donec est. Nunc',
          date: '2018-06-12T00:32:55-07:00',
          amount: '172.09'
        },
        {
          id: '25E590E4-6879-D85F-0364-CF00F15A344F',
          name: 'Emerald Rice',
          description: 'lobortis risus. In mi pede,',
          date: '2017-12-19T11:59:39-08:00',
          amount: '564.16'
        },
        {
          id: '7BD4F1C3-6377-0FF3-F337-7A227A8896DA',
          name: 'Britanni Beck',
          description: 'ac',
          date: '2018-04-04T18:42:22-07:00',
          amount: '722.49'
        },
        {
          id: 'A7AAEA8B-94C2-8E31-70B0-49E97E32C950',
          name: 'Quon Herring',
          description: 'lobortis augue scelerisque mollis. Phasellus libero mauris,',
          date: '2018-06-21T17:18:42-07:00',
          amount: '847.41'
        },
        {
          id: '6BB82E69-B2AF-22A3-FE97-FD4E3C69FEE1',
          name: 'Hedley Parks',
          description: 'adipiscing non,',
          date: '2019-03-07T23:56:56-08:00',
          amount: '-128.23'
        },
        {
          id: '7F91FA55-C2DB-8706-F9BD-E6F280D58FB6',
          name: 'Randall Walters',
          description: 'mattis velit justo nec',
          date: '2018-06-13T20:07:59-07:00',
          amount: '216.91'
        },
        {
          id: 'C56F9D71-865C-326B-9687-1E79A67B0492',
          name: 'Trevor Reilly',
          description: 'placerat eget, venenatis a, magna. Lorem ipsum dolor',
          date: '2019-08-16T08:24:47-07:00',
          amount: '165.99'
        },
        {
          id: '5A52721F-8F20-DAE1-3FB5-ACA3DA97F9C4',
          name: 'Steel Delgado',
          description: 'ligula tortor, dictum eu, placerat eget, venenatis a, magna. Lorem',
          date: '2019-01-21T05:04:05-08:00',
          amount: '214.03'
        },
        {
          id: 'D24EC25D-5A33-B02E-626F-D2D51D5BA170',
          name: 'Knox Mendoza',
          description: 'diam vel arcu. Curabitur ut',
          date: '2019-09-01T22:29:06-07:00',
          amount: '287.03'
        },
        {
          id: '12FDCA70-FB3E-8179-C467-4A99D80B01DD',
          name: 'Mark Benjamin',
          description: 'nulla ante, iaculis nec, eleifend non, dapibus rutrum, justo.',
          date: '2017-08-02T07:48:03-07:00',
          amount: '521.11'
        },
        {
          id: 'D0191AF1-FE1F-BD92-6538-9163057EB98E',
          name: 'Louis Clemons',
          description: 'est,',
          date: '2019-06-14T16:53:44-07:00',
          amount: '-423.98'
        },
        {
          id: '65876E9B-C0E6-874B-6E81-A23E68F66764',
          name: 'Virginia Aguilar',
          description: 'ante lectus convallis est,',
          date: '2017-08-29T12:49:59-07:00',
          amount: '869.45'
        },
        {
          id: '04077D79-8715-AF29-B092-F6B269EEEFF3',
          name: 'Axel Fuller',
          description: 'dapibus ligula. Aliquam erat',
          date: '2019-01-31T15:26:13-08:00',
          amount: '294.95'
        },
        {
          id: 'A9D9903A-B44B-59D5-EA86-922324EC4803',
          name: 'Palmer Medina',
          description: 'leo, in lobortis tellus justo',
          date: '2019-04-15T20:56:08-07:00',
          amount: '530.27'
        },
        {
          id: '2739A76C-C48D-FC4D-A1AA-4957599ECD3F',
          name: 'Isabelle Fitzgerald',
          description: 'egestas',
          date: '2019-02-18T05:45:45-08:00',
          amount: '377.87'
        },
        {
          id: '53E78273-A342-3708-7FEF-41F3B5921DAD',
          name: 'Dante Morris',
          description: 'in, tempus eu, ligula. Aenean euismod mauris eu',
          date: '2017-06-16T07:47:35-07:00',
          amount: '11.47'
        },
        {
          id: '5BA3EA0F-78DF-5D46-9185-27B2ADE7B56A',
          name: 'Rajah Blake',
          description: 'feugiat. Lorem',
          date: '2018-11-15T18:13:06-08:00',
          amount: '186.33'
        },
        {
          id: '53337A98-709D-2BF9-4BA7-761C531E7CA6',
          name: 'Tatyana Hester',
          description: 'nec mauris blandit',
          date: '2018-05-07T23:18:26-07:00',
          amount: '33.90'
        },
        {
          id: 'A09A9C02-F51C-9CC6-4E06-EB06C47C8EE0',
          name: 'Yael Horn',
          description: 'metus. Aliquam erat volutpat. Nulla facilisis. Suspendisse',
          date: '2018-04-05T03:39:20-07:00',
          amount: '251.97'
        },
        {
          id: '1936BE52-F6BC-A6BE-3C6E-500AF64C1B2D',
          name: 'Christopher May',
          description: 'Cum sociis natoque penatibus et magnis dis parturient',
          date: '2017-07-12T19:50:08-07:00',
          amount: '-747.92'
        }
      ]
    }),
    components: {
      DataTable
    }
  }
</script>