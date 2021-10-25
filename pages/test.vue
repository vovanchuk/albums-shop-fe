<template>
  <div class="mb-5" style="margin-top: 50px;">
    <client-only>
      <tui-image-editor :include-ui="useDefaultUI" :options="options2"></tui-image-editor>
    </client-only>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      options2: {cssMaxWidth: 400, cssMaxHeight: 1000, minHeight: '700px', uiSize: {height: '700px'}},
      useDefaultUI: true,
      options: false,
      windowSize: {
        x: 0,
        y: 0,
      },
    }
  },
}
</script>

<style>
.tui-image-editor-container {
  min-height: 700px;
}
</style>
