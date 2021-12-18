<template>
    <div>
        <EditorHeader/>
        <EditorBody/>
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
}
</script>
