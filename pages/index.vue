<template>
    <div>
        <div class="header">
            <div class="header-img">
            </div>
            <div class="header-text">
                <h1 class="mb-5"> PERSONALIZOWANE FOTOALBUMY </h1>
                <h4>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                </h4>
            </div>
        </div>
        <b-container class="content-on-index">
            <h1 class="my-5"> YOURBOOK - JAKOŚĆ I STYL </h1>
            <h5 class="my-5">
                Amet non sed in donec. Leo id vitae id ullamcorper. Mauris sodales ornare ultricies urna, id enim. Volutpat sapien, pretium tellus cursus eget vitae non in. Consectetur dui elementum magna sit ultricies vitae. Morbi augue faucibus sed mauris arcu feugiat fames consequat imperdiet.
            </h5>
            <b-row class="my-5">
                <b-col lg>
                    <h5>Sed ut perspiciatis</h5>
                    <p>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.
                    </p>
                </b-col>
                <b-col lg>
                    <h5>Sed ut perspiciatis</h5>
                    <p>
                        Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.
                    </p>
                </b-col>
                <b-col lg>
                    <h5>Sed ut perspiciatis</h5>
                    <p>
                        Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
                    </p>
                </b-col>
            </b-row>
            <hr>
        </b-container>
        <b-container class="templates my-5">
            <h1 class="my-3">SZABLONY</h1>
            <h5>Wybierz jeden spośród ponad 40 szablonów</h5>
            <Templates :templates="templatesOnIndex" />
        </b-container>
        <div class="contact">
            <div class="contact-img">
            </div>
            <div class="contact-form">
                <b-form>
                    <b-form-group>
                        <b-form-textarea
                          id="textarea"
                          placeholder="Twoja wiadomość..."
                          rows="7"
                        ></b-form-textarea>
                    </b-form-group>
                    <b-form-group>
                        <b-form-input type="email" placeholder="Twój email"></b-form-input>
                    </b-form-group>
                    <b-button block type="submit" variant="outline-primary">Wyślij</b-button>
                </b-form>
            </div>
        </div>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        templatesOnIndex: [
            { id: 1, url: 'wedding-template.jpg', title: 'Ślubne'},
            { id: 2, url: 'ocasion-template.jpg', title: 'Okazjonalne'},
            { id: 3, url: 'trip-template.jpg', title: 'Podróżnicze'},
            { id: 4, url: 'kids-template.jpg', title: 'Dziecięce'},
            { id: 5, url: 'birthday-template.jpg', title: 'Urodzinowe'},
            { id: 6, url: 'person-template.jpg', title: 'Dla specjalnej osoby'},
        ]
      }
    }
  }
</script>