<template>
  <tui-image-editor :include-ui="useDefaultUI" :options="options" ref="tuiImageEditor"></tui-image-editor>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      require: true
    }
  },
  data() {
    return {
      useDefaultUI: true,
      options: {
        includeUI: {
          menuBarPosition: 'right',
          uiSize: {
            width: '1000px',
            height: '700px'
          },
          loadImage: {
            path: this.image,
            name: 'Blank'
          },
        },
        cssMaxWidth: 550,
        cssMaxHeight: 550,
      },
    }
  }
}
</script>
