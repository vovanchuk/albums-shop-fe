<template>
    <div class="container editor-header">
      <b-card no-body>
        <b-tabs card fill>
          <b-tab title="Zdjęcia" active>
            <Photos/>
          </b-tab>
          <b-tab title="Układ">
            <Layout/>
          </b-tab>
          <b-tab title="Ramki">
            <Frames />
          </b-tab>
          <b-tab title="Elementy">
            <b-card-text>Elementy</b-card-text>
          </b-tab>
          <b-tab title="Tło">
            <Background/>
          </b-tab>
          <b-tab title="Tekst">
            <TextFields/>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
</template>

<script>
import Background from './Background.vue'
import Photos from './Photos.vue'
import Frames from '~/components/editor/Frames'
import TextFields from './TextFields.vue'
import Layout from './Layout.vue'
export default {
  components: {
    Photos,
    Background,
    TextFields,
    Frames,
    Layout
  },
}
</script>

<style>
  .editor-header .tab-pane{
    padding: 5px;
  }
</style>
