<template>
  <b-modal
    v-model="open"
    title="Edytuj tekst"
    size="xl"
    ok-title="Zatwierdź zmiany"
    ok-variant="outline-primary"
    cancel-title="Anuluj"
  >
    <div class="d-flex justify-content-center" style="height: 71vh;">
      <client-only>
        <editor-content :editor="editor" />
        <editor />
      </client-only>
    </div>
  </b-modal>
</template>

<script>
import { Editor, EditorContent } from '@tiptap/vue-2'
import StarterKit from '@tiptap/starter-kit'

export default {
  components: {EditorContent},
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
      editor: null
    }
  },
  mounted() {
    console.log('mounted')
    this.editor = new Editor({
      content: '<p>I’m running Tiptap with Vue.js. 🎉</p>',
      extensions: [
        StarterKit,
      ],
    })
  },
  beforeDestroy() {
    this.editor.destroy()
  },
  computed: {
    open: {
      get() {
        return this.value
      },
      set(newVal) {
        this.$emit('input', newVal)
      }
    }
  }
}
</script>

<style scoped>

</style>
