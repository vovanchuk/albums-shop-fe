<template>
    <div>
        <div class="header">
            <div class="header-img">
            </div>
            <div class="header-text">
                <h1 class="mb-5"> PERSONALIZOWANE FOTOALBUMY </h1>
                <h4>
                    Zaprojektuj album dostosowany do swoich potrzeb. Bez potrzeby logowania, możesz zacząć pracę już od teraz. Wybierz odpowiedni szablon i puść wodzę fantazji. Możesz dodać ciekawe podpisy,
                    zmieniać układy zdjęć oraz dodać dekoracyjne elementy. Wszystko w łatwy i przystępny sposób. 
                </h4>
            </div>
        </div>
        <b-container class="content-on-index">
            <h1 class="my-5"> YOURBOOK - JAKOŚĆ I STYL </h1>
            <h5 class="my-5">
                Nasz serwis zapewnia szereg różnych opcji umożliwiających Ci w intuicyjny sposób stworzenie własnej, spersonalizowanej wersji produktu. 
                Dodatkowo zawiera edytor tekstu oraz zdjęć wspomagające cały ten proces. Na koniec po zalogowaniu możesz pobrać album lub kolaż w wersji do wydrukowania.
            </h5>
            <b-row class="my-5">
                <b-col lg>
                    <h5>Trzy formaty albumu</h5>
                    <p>
                        Możesz wybrać jeden z trzech formatów: <br> 20x30 (A4 pion), <br> 30x20 (A4 poziom) <br> oraz 30x30.
                    </p>
                </b-col>
                <b-col lg>
                    <h5>Dostosuj dowolnie liczbę stron</h5>
                    <p>
                        Musisz wybrać początkową liczbę stron: 10 lub 20. Jednak po przejściu do edytora możesz dowolnie zwiększać oraz zmiejszać ich ilość.
                    </p>
                </b-col>
                <b-col lg>
                    <h5>Wybieraj spośród wielu elementów</h5>
                    <p>
                        Edytor fotoalbumu posiada wiele narzędzi. Oprócz oczywistych zdjęć możesz dodać ramki, podpisy, dostosować tło, wstawić naklejki a także zastosować gotowe układy do tworzenia kolaży.
                    </p>
                </b-col>
            </b-row>
            <hr>
        </b-container>
        <b-container class="templates my-5">
            <h1 class="my-3">SZABLONY</h1>
            <h5>Wybierz jeden spośród szablonów</h5>
            <Templates :templates="templatesOnIndex" :category="category"/>
        </b-container>
        <div class="contact">
            <div class="contact-img">
            </div>
            <div class="contact-form">
                <h1>Dziękujemy za skorzystanie z naszych usług!</h1>
            </div>
        </div>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        category: 'main',
        templatesOnIndex: [
            { id: 1, url: 'wedding-template.jpg', title: 'Ślubne', category: 'wedding'},
            { id: 2, url: 'ocasion-template.jpg', title: 'Okazjonalne', category: 'occasion'},
            { id: 3, url: 'birthday-template.jpg', title: 'Urodzinowe', category: 'birthday'},
        ]
      }
    }
  }
</script>