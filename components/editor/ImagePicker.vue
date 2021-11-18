<template>
  <b-modal size="xl" v-model="showModal">
    <div class="d-flex wrapper">
      <div class="preview-div" v-for="(item, index) in images" :key="index" @click="$emit('choose', item)">
        <b-img v-if="item.base64" :src="item.base64"/>
      </div>
    </div>
  </b-modal>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean
    }
  },
  computed: {
    showModal: {
      get() {
        return this.value
      },
      set(newVal) {
        this.$emit('input', newVal)
      }
    },
    images() {
      return this.$store.getters['getPhotos']
    }
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  flex-wrap: wrap;

  .preview-div {
    width: 200px;
    height: 200px;
    padding: 10px;

    margin: 15px 30px;

    cursor: pointer;

    img {
      width: 200px;
      height: 200px;
      margin-bottom: 5px;
      object-fit: cover;
    }
  }
}

</style>
