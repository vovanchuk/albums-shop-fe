<template>
  <div class="mb-5 container d-flex justify-content-center" style="margin-top: 50px;">
    <client-only>
      <tui-image-editor :include-ui="useDefaultUI" :options="options"></tui-image-editor>
    </client-only>
  </div>
</template>

<script>
export default {
  data() {
    return {
      useDefaultUI: true,
      options: {
        includeUI: {    
          loadImage: {
            path: '/wedding-template.jpg',
            name: 'SampleImage',
          },
          menuBarPosition: 'right',
          uiSize: {
            width: '1000px',
            height: '700px'
          },
        },
        cssMaxWidth: 550,
        cssMaxHeight: 550,
      }
    }
  },
}
</script>

<style>

</style>