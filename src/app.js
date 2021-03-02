//effettuando controllo con postman abbiamo la certezza di aver creato correttamente un file json. è sytato creato un file server.php dove viene specificatodi codificare il contenuto di db.php in un file json. dunque la chiamata axios deve essere fatta al link del file server.php. stando attentii a come è formato, possiamo stamparne il contenuto in html

let app = new Vue({
  el : '#app',
  data : {
    films : '', //per manipolare l'oggetto ricevuto dalla chiamata
    genere : ['All'], //per creare il filtro per genere
    genreList : '', //per creare la lista dei generi nella select
    genreChoosed : '' //gli viene assegnato il genere selezionato per riuscire a filtrare
  },//fine data

  mounted() {
      //qui effettuiamo la chiamata al NOSTRO SERVER
      axios.get('http://localhost/02_marzo/php-ajax-dischi/server.php')
      .then(result => {
        console.log(result.data);
        //con il console vediamo il percorso all'interno dell'api per arrivare ai dati che ci interessano, nel nostro caso, all'interno della key 'data' abbiamo i nostri oggetti(cd)

        //uguagliamo all'array vuoto per poter manipolare al meglio il nostro array di oggetti
        this.films = result.data;


        //qui filtriamo l'oggetto della chiamata al nostro server per creare un array che contenga tutti i generi musicali presenti nell'oggetto ricevuto, questo array serve per il v-for della select
        for (let i = 0; i < this.films.length; i++) {
          if (!this.genere.includes(this.films[i].genre)) {
            this.genere.push(this.films[i].genre);
          }
        }





      })//fine then axios



  },//fine mounted

  methods : {
    //questa funzione ci permette di filtrare il nostro oggetto e dunque stampare solo i cd del genere musicale selezionato
    chooseGenre(tipo) {
      console.log(tipo);

      //uguagliamo la variabile al genere selezionato dall'utente
      this.genreChoosed = tipo;


      //con il filter creiamo un'array che ha al suo interno contiene SOLO gli elementi che hanno come key-genere lo stesso valore selezionato dall'utente
      const filtro = this.films.filter(element => {
        return element.genre == tipo;
      });
      console.log(filtro);

      // se il filtro ha successo (ci sono elementi nel nostro array che hanno lo stesso genere di quello selezionato dall'utente nella select), uguagliamo questo filtro alla variabile vuota creata nei data. quando questa NON È VUOTA, L'HTML STAMPERÀ QUESTA e non la lista totale (tramite v-if e v-else). quando per esempio si riclicca su all nella select, genre list viene riportata vuota e dunque verrà stampato quello indicato nel mounted
      if (filtro.length > 0) {
        this.genreList = filtro;
      } else {
        this.genreList = '';
      }
      console.log('lista ' + this.genreList);
    }//fine chooseGenre
  }//fine methods
});//fine vue
