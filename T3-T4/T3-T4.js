/*
// Ejercicios de Repaso / Exercicis de Repàs
// TEMA_3 & TEMA_4

  -- CASTELLANO
  -- EJERCICIO DE REPASO TEMA 3 Y TEMA 4 ENUNCIADO:

  En este ejercicio vamos a trabajar todo lo estudiado en los temas 3 y 4.

  Para ello, vamos a realizar varios ejercicios a partir de la obtención de
  datos públicos sobre personajes de Star Wars a través de una llamada fetch a
  la siguiente URL: https://swapi.dev/api/people/.

  Este endpoint devuelve un objeto JSON que contiene información sobre
  diferentes personajes de Star Wars, con propiedades como nombre, género,
  altura, peso, color de cabello, color de ojos, planeta natal, año de
  nacimiento y más.

  Se nos pide trabajar sobre este fichero T3-T4.js (que se carga mediante un
  script en el html del fichero T3-T4.html, en este mismo directorio) para:

* 1- Crear una función (a la que denominaremos "modifyPageNumberInput") que
     añada eventos al INPUT del formulario cuya id es "pageNumber" de modo que,
     al cambiar, lance la función "fetchSWAPIPepople" (que se describe más
     adelante) pasando como parámetro el valor de este INPUT. 

* 2- Crear una función (a la que denominaremos "fetchSWAPIPepople") que realice
     una llamada fetch a a la API SWAPI (The Star Wars Api) para obtener un
     listado de todos los personajes recibidos por parámetro mediante el método
     GET y el uso de bloques then() en JavaScript:

  2.1- Antes de realizar la llamada: Esta función recibirá un número de página
       por parámetro y realizará una llamada fetch a la API de SWAPI para
       obtener un listado de los personajes de StarWars que aparecen en esa
       pagina.  Aún así, antes de esta llamada, la función debe realizar las
       siguientes acciones:

  2.1.1- Ocultar el formulario (un form cuya id es "myContent"), esto lo haremos
         añadiendo la clase "hidden" que ya nos viene definida en el css. De
         manera que este elemento no se mostrará mientras ejecutamos la función
         y no hayamos obtenido resultados aún.

  2.1.2- Mostrar el cargador (un div cuya id es "loader") esto lo haremos
          eliminando la clase "hidden", de manera que el cargador se muestre
          mientras ejecutamos la función y no hayamos obtenido resultados aún.
          Así el usuario podrá apreciar por pantalla que se está llamando a la
          API.

  2.1.3- Modificar el textContent del div que está contenido dentro del div
         "loader" y cuya clase es "loading-text" para que ponga estrictamente
         "loading..."
  
  2.2- A continuación, realizaremos una llamada fetch a la siguiente URL:
       https://swapi.dev/api/people/?page=[page_number] donde [page_number] es
       el parámetro que indica el número de página que queremos consultar.
       Luego, recogeremos la respuesta de la llamada fetch utilizando un bloque
       then(), en donde, una vez obtenida la respuesta haremos esta serie de
       acciones:

  2.2.1- Almacenaremos la respuesta en una posición del localhost denominada
         "swapi_[page_number]" donde [page_number] es el parámetro que indica el
         número de página que queremos consultar ("swapi_1", "swapi_2", ...)

  2.2.2- Convertiremos la respuesta a formato JSON (utilizando el método
         response.json()) en una constante definida dentro de la función cuyo
         nombre podéis elegir libremente.

  2.2.3- Recorreremos el Array de resultados que se encuentra en la propiedad
         "results" del objeto obtenido tras la llamada (y que habéis almacenado
         anteriormente en una constante) y crearemos un nuevo objeto del DOM, en
         este caso un SELECT, cuyas OPTIONS estarán conformadas por el valor de
         la propiedad "name" de cada personaje en el TEXT y en el VALUE del
         OPTION le asignaremos la propiedad "url" de cada personaje.

  2.2.4- Ocultar el cargador (el div cuya id es "loader") esto lo haremos
         añadiendo la clase "hidden".

  2.2.5- Mostrar el formulario (el form cuya id es "myContent"), esto lo haremos
         eliminándole la clase "hidden".

  2.2.6- Añadir eventos al SELECT del formulario creado de modo que, al cambiar,
         modifique el ACTION del formulario con el VALUE que tiene almacendo el
         OPTION seleccionado (usar dispatchEvent). 

* 3- Crear una función (a la que denominaremos modifySendFormButton) que emplee
     addEventListener para que, cuando se clique en el botón cuya id es
     "sendForm" (y que es el que en principio envíaría el formulario), no se
     realice la acción de enviar el formulario y en su lugar, se abra una
     ventana nueva con la URL definida en el ACTION del formulario, recordad que
     el SELECT que hemos creado contralará este ACTION al cambiar.

  -- CATALÀ
  -- EXERCICI DE REPÀS TEMA 3 I TEMA 4 ENUNCIAT:
  
  En aquest exercici treballarem tot allò estudiat en els temes 3 i 4.

  Per fer-ho, treballarem amb diversos exercicis a partir de l'obtenció de dades
  públiques sobre personatges de Star Wars a través d'una cridada fetch a la URL
  següent: https://swapi.dev/api/people/.

  Aquest endpoint retorna un objecte JSON que conté informació sobre diferents
  personatges de Star Wars, amb propietats com a nom, gènere, altura, pes, color
  de cabell, color d'ulls, planeta natal, any de naixement i més.

  Se'ns demana treballar sobre aquest fitxer T3-T4.js (que es carrega emprant un
  script al fitxer T3-T4.html, en aquest mateix directori) per a:

* 1- Crear una funció (a la que anomenarem "modifyPageNumberInput") que
     afegeixi esdeveniments a l'INPUT del formulari l'id del qual és
     "pageNumber" de manera que, en canviar, llanci la funció
     "fetchSWAPIPepople" (que es descriu més endavant) passant com a paràmetre
     el valor d'aquest INPUT.

* 2- Crear una funció (a la que anomenarem "fetchSWAPIPepople") que realitzi
     una cridada fetch a l'API SWAPI (The Star Wars Api) per obtenir un llistat
     de tots els personatges rebuts per paràmetre mitjançant el mètode GET i
     l'ús de blocs then() a JavaScript:
  
  2.1- Abans de fer la cridada: Aquesta funció rebrà un número de pàgina per
       paràmetre i realitzarà una cridada fetch a l'API de SWAPI per obtenir un
       llistat dels personatges de StarWars que apareixen en aquesta pàgina.
       Així i tot, abans d'aquesta cridada, la funció ha de realitzar les accions
       següents:

  2.1.1- Ocultar el formulari (un form la id del qual és "myContent"), això ho
         farem afegint la classe "hidden" que ja ens ve definida al css. De
         manera que aquest element no es mostrarà mentre executem la funció i no
         haguem obtingut resultats encara.

  2.1.2- Mostrar el carregador (un div la id del qual és "loader") això ho farem
         eliminant la classe "hidden", de manera que el carregador es mostri
         mentre executem la funció i no haguem obtingut resultats encara. Així,
         l'usuari podrà apreciar per pantalla que s'està trucant a l'API.

  2.1.3- Modificar el textContent del div que està contingut dins del div
         "loader" i la classe del qual és "loading-text" perquè posi
         estrictament "loading..."    

  2.2- A continuació, farem una cridada fetch a la següent URL:
       https://swapi.dev/api/people/?page=[page_number] on [page_number] és el
       paràmetre que indica el número de pàgina que volem consultar. Després,
       recollirem la resposta de l'anomenada fetch utilitzant un bloc then(),
       on, una vegada obtinguda la resposta, farem aquesta sèrie d'accions:

  2.2.1- Emmagatzemarem la resposta en una posició del localhost anomenada
         "swapi_[page_number]" on [page_number] és el paràmetre que indica el
         número de pàgina que volem consultar ("swapi_1", "swapi_2", ...)

  2.2.2- Convertirem la resposta a format JSON (utilitzant el mètode
         response.json()) en una constant definida dins de la funció el nom de
         la qual podeu triar lliurement.

  2.2.3- Recorrerem l'Array de resultats que es troba a la propietat "results"
         de l'objecte obtingut després de la cridada (i que heu emmagatzemat
         anteriorment en una constant) i crearem un nou objecte del DOM, en
         aquest cas un SELECT, les OPTIONS del qual estaran conformades pel
         valor de la propietat "name" de cada personatge al TEXT i al VALUE de
         l'OPTION li assignarem la propietat "url" de cada personatge.

  2.2.4- Ocultar el carregador (el div l'id del qual és "loader") això ho farem
         afegint la classe "hidden".

  2.2.5- Mostrar el formulari (el form la id del qual és "myContent"), això ho
         farem eliminant-li la classe "hidden".

  2.2.6- Afegir esdeveniments al SELECT del formulari creat de manera que, en
         canviar, modifiqueu l'ACTION del formulari amb el VALUE que teniu
         emmagatzemant l'OPTION seleccionat (usar dispatchEvent).

* 3- Crear una funció (a la que anomenarem modifySendFormButton) que empri
     addEventListener perquè, quan es cliqui al botó l'id del qual és "sendForm"
     (i que és el que en principi enviaria el formulari), no es realitzi l'acció
     d'enviar el formulari i al seu lloc, s'obri una finestra nova amb l'URL
     definida a l'ACTION del formulari, recordeu que el SELECT que hem creat
     contralarà aquest ACTION en canviar.
*/

// 1 modifyPageNumberInput
function modifyPageNumberInput() {
  const pageNumber = document.getElementById('pageNumber');
  pageNumber.addEventListener('change', (ev) =>
    fetchSWAPIPeople(ev.target.value)
  );
}

// 2 fetchSWAPIPeople
function fetchSWAPIPeople(pageNumber) {
  const loader = document.getElementById('loader');
  const content = document.getElementById('myContent');
  const loadingText = document.getElementById('loading-text');

  content.classList.add('hidden');
  loader.classList.remove('hidden');
  loadingText.textContent = 'loading...';
  fetch(`https://swapi.dev/api/people/?page=${pageNumber}`)
    .then((response) => {
      response
        .clone()
        .text()
        .then((text) => localStorage.setItem(`swapi_${pageNumber}`, text));
      return response.json();
    })
    .then((data) => {
      const selectContainer = document.getElementById('selectContainer');
      const select = document.createElement('select');
      data.results.forEach((character) => {
        const option = document.createElement('option');
        option.textContent = character.name;
        option.value = character.url;
        select.appendChild(option);
      });
      select.addEventListener('change', (ev) => {
        content.action = ev.target.value;
        content.dispatchEvent(new Event('change'));
      });
      selectContainer.innerHTML = '';
      selectContainer.appendChild(select);
      loader.classList.add('hidden');
      content.classList.remove('hidden');
    });
}

// 3 modifySendFormButton
function modifySendFormButton() {
  const sendFormButton = document.getElementById('sendForm');
  sendFormButton.addEventListener('click', (ev) => {
    ev.preventDefault();
    const formAction = document.getElementById('myContent').action;
    if (formAction) {
      window.open(formAction, '_blank');
    }
  });
}

/**
 * Do not modify this DOMContentLoaded script
 */
document.addEventListener('DOMContentLoaded', function () {
  modifyPageNumberInput();
  modifySendFormButton();
});

/**
 * TEST
 * The purpose of this code is purely for TESTING PURPOSES, do not modify this
 * script
 */
export { modifyPageNumberInput };
export { fetchSWAPIPeople };
export { modifySendFormButton };
