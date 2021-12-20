<template>
    <div>
        <EditorHeader/>
        <EditorBody :defaultPagesNumber="pagesNumber" :pageFormat="pageFormat" :coverUrl="coverUrl"/>
    </div>
</template>

<script>
export default {
  layout: 'editor',
  created() {
    window.addEventListener('beforeunload', function (e) {
      e.preventDefault();
      e.returnValue = '';
    });
  },
  computed: {
    pagesNumber(){
      return Number(this.$route.params.pagesNumber)
    },
    pageFormat(){
      return Number(this.$route.params.pageFormat)
    },
    coverUrl(){
      return this.$route.params.coverUrl
    }
  }
}
</script>
