<template>
  <b-modal
    v-model="open"
    title="Edytuj tekst"
    size="xl"
    ok-title="Zatwierdź zmiany"
    ok-variant="outline-primary"
    @ok="onOk"
    cancel-title="Anuluj"
  >
    <div class="d-flex justify-content-center" style="height: 71vh; width: 100%">
      <client-only>
        <ckeditor :editor="editor" v-model="editorText" :config="editorConfig" style="width: 100%"></ckeditor>
      </client-only>
    </div>
  </b-modal>
</template>

<script>
import CustomEditor from '~/plugins/ck-editor/ckeditor'

export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
    }
  },
  data() {
    return {
      editor: CustomEditor,
      editorText: '',
      editorConfig: {
        height: '600px'
      }
    }
  },
  methods: {
    onOk() {
      this.$emit('update:text', this.editorText)
    }
  },
  mounted() {
    this.editorText = this.text
  },
  computed: {
    open: {
      get() {
        return this.value
      },
      set(newVal) {
        this.$emit('input', newVal)
      }
    },
  }
}
</script>

<style scoped>

</style>
<style>
.ck-editor {
  width: 100% !important;
}
.ck-editor__main {
  height: 95%;
}
.ck-editor__editable {
  height: 100%;
}
</style>
