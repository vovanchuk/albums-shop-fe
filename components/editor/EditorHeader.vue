<template>
    <div class="container editor-header">
      <b-card no-body>
        <b-tabs card fill>
          <b-tab title="Zdjęcia" active>
            <Photos/>
          </b-tab>
          <b-tab title="Układ">
            <b-card-text>Układ</b-card-text>
          </b-tab>
          <b-tab title="Ramki">
            <b-card-text>Ramki</b-card-text>
          </b-tab>
          <b-tab title="Elementy">
            <b-card-text>Elementy</b-card-text>
          </b-tab>
          <b-tab title="Tło">
            <b-card-text>Tło</b-card-text>
          </b-tab>
          <b-tab title="Tekst">
            <b-card-text>Tekst</b-card-text>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
</template>