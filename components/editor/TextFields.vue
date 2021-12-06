<template>
    <div class="horizontal-scrollable mb-3">
      <b-row class="justify-content-center">
        <div class="preview-div add">
            <b-icon icon="plus-square" @click="addElement"></b-icon>
            Dodaj pole <br/> tekstowe
            </div>
      </b-row>
    </div>
</template>

<script>
export default {
  methods: {
    addElement(){
      this.$store.commit('ADD_ELEMENT','text')
    }
  }
}
</script>

<style lang="scss">
  .add{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    svg{
      width: 150px;
      height: 30px;
    }
  }

</style>