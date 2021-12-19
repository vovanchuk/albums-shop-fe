<template>
  <div class="container mt-5">
    <h4>Zapisane albumy:</h4>
    <div>
      <b-table-simple hover small caption-top responsive>
        <colgroup>
          <col>
          <col>
        </colgroup>
        <colgroup>
          <col>
          <col>
          <col>
        </colgroup>
        <colgroup>
          <col>
          <col>
        </colgroup>
        <b-thead>
          <b-tr>
            <b-th>Data</b-th>
            <b-th>&nbsp;</b-th>
          </b-tr>
        </b-thead>
        <b-tbody>
          <b-tr v-for="album in albums">
            <b-th>{{ parseDate(album.created_at) }}</b-th>
            <b-th>
              <b-btn @click="download(album.path)">Pobierz</b-btn>
            </b-th>
          </b-tr>
        </b-tbody>
      </b-table-simple>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({$axios}) {
    const {data} = await $axios.get('/api/album')
    return {albums: data}
  },
  methods: {
    download(url) {
      console.log(process.env.BACKEND_URL)
      return window.open(process.env.BACKEND_URL + url)
    },
    parseDate(str) {
      return (new Date(str)).toLocaleString()
    }
  }
}
</script>

<style scoped>

</style>
