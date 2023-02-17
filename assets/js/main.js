console.log("test");

/* 

API
https://picsum.photos/v2/list

author und bild holen
dann in figure rein

dann ausgeben

css -> img-Tag  width von 50%

einen Loop
appendChild

*/



/* 

<figure>
	<img src="https://picsum.photos/id/0/5616/3744">
	<figcaption>Alejandro Escamilla</figcaption>
</figure>

*/

const download_url_Array = [];

// mit fetch auf API zugreifen
fetch("https://picsum.photos/v2/list")
	.then(response => response.json())
	.then((data) => {

		data.forEach((bild_Object) => {

			console.log(bild_Object);

			/* 
			das kommt von der API an 
			
			Object
			
			author : "Alejandro Escamilla"
			download_url : "https://picsum.photos/id/0/5000/3333"
			height : 3333
			id : "0"
			url : "https://unsplash.com/photos/yC-Yzbqy7PY"
			width : 5000
			[[Prototype]] : Object
			
			*/

			/* 
			so soll es in html aussehen
			
				<figure>
					<img src="https://picsum.photos/id/0/5616/3744">
					<figcaption>Alejandro Escamilla</figcaption>
				</figure>
			
				<a href=""></a>

			*/

			// in Var speichern     id author download_url 
			// author 
			const author = bild_Object.author;
			// id um auf andere bilder zuzugreifen und die url dynamisch zu machen
			const id = bild_Object.id;
			// download_url
			const download_url = bild_Object.download_url;
			console.log(download_url);

			// html contactElemente erzeugen für den input der der Variablen
			// erzeugen
			// figure  erzeugen
			const contactElement_figure = document.createElement('figure');
			// input/innerHTML zuweisen   - hat keinen

			// figcaption erzeugen
			const contactElement_figcaption = document.createElement('figcaption');
			// input/innerHTML zuweisen   -  author
			contactElement_figcaption.innerHTML = author;

			// img erzeugen
			const contactElement_img = document.createElement('img');
			// img  input zuweisen/innerHMTL   bzw.   Attribute hinzufügen
			// img    Attribute    src   hinzufügen
			contactElement_img.src = download_url
			// img    Attribute    alt   hinzufügen
			contactElement_img.atr = `Bild id ${id} vom Author ${author}`;
			contactElement_img.id = `${id}`;


			// !! image in a-Tag rein  und dem a-Tag download_url geben, damit es beim anklicken großes bild gibt
			// cursor: pointer  - es kommt finger, wenn man über Bild geht
			// a-Tag erzeugen
			const contactElement_aTag = document.createElement('a');
			// a-Tag input/innerHTML zuweisen    - hat nix
			// Attribute href
			// ! contactElement_aTag.href = `${download_url}`;
			// Attribute target   _blank,    -> damit neues Fenster aufgeht
			// ! contactElement_aTag.target = '_blank';
			// Attribute   id   mitgeben, damit man click mit eventListener später abfangen kann
			// contactElement_aTag.id = `${id}`;
			download_url_Array.push(download_url);
			console.log(download_url_Array);


			// html bauen    und    atag        sollen rein als kinder   img 
			// !!! deshalb unten img      in //
			contactElement_aTag.appendChild(contactElement_img);

			// html struktur bauen  bzw. verschachtenl    kind 
			// figure      sollen rein  als kinder     img  und figcaption
			// !!! contactElement_figure.appendChild(contactElement_img);
			contactElement_figure.appendChild(contactElement_aTag);           // !!!   hier  aTag   anstatt img rein, da img ja im aTag ist
			contactElement_figure.appendChild(contactElement_figcaption);


			// jetzt ausgabe und sichtbar machen im body     als kind 
			document.body.appendChild(contactElement_figure);



			// !!! Ende forEach 
		})
		console.log(download_url_Array);

		// !!! Ende data fetch
	})

// es kommt nichts an, da die Daten asyncron geladen werden 
// der fetch braucht zu lange, und der restliche code wird weiter ausgeführt, bis dann mal der rest da ist :-(

console.log(download_url_Array);




//   hört auf ganzes document beim clicken
document.addEventListener("click", function (e) {
	console.log("in click");
	// hört auf alle img  clicks
	const fiktiverBtnImg = document.querySelectorAll('img');

	// Timeout wertet 1 Sek und ruft dann erst Array von fetch API ab, somit sind die Array Daten da.
	// obwohl Asyncron geladen wird ;-)
	setTimeout(function () {
		console.log(download_url_Array)
		


		// Anzahl der img die von der API kommen
		console.log(fiktiverBtnImg.length)

		// Schleife für alle img, damit alle ein click bekommen
		for (let i = 0; i < fiktiverBtnImg.length; i++) {
			console.log("in for schleife");
			
			// holt sich button i = 0    dann aus array platz 0  raus holen     
			// id die img hinzugefügt wurde, wird nicht gebraucht, lässt sich aber mit event.target.id    auslesen    aber i == id   in diesem fall
			fiktiverBtnImg[i].addEventListener('click', function (event) {
				console.log("in event listener");
				console.log(event);

				console.log(e.target.id)
				// id die img hinzugefügt wurde, wird nicht gebraucht
				console.log(event.target.id)

				console.log(download_url_Array)
				const download_url_Array2 = download_url_Array
				console.log(download_url_Array2)
				// holt sich url passend zum bild aus dem array
				const urlAusArray = download_url_Array2[i];
			
				// Url von dem Bild das geklickt wurde
				console.log(urlAusArray)

				// dadurch geht ein extra kleines fenster auf, in dem das url bild erscheint ;-) 
				// wollte man nur einen neuen Browser tap mit dem Bild machen,
				// ginge das einfacher, so wie oben in fetch mit dem a-Tag usw.    aber eben nicht als kleines extra Fenster.
				window.open(`${urlAusArray}`,"_blank","width=500,height=500");
				// 

			});

		}

	},1000);


})

