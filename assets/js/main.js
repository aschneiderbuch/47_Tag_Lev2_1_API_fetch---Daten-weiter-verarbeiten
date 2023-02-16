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
			// figcaption erzeugen
			const contactElement_figcaption = document.createElement('figcaption');
			// img erzeugen
			const contactElement_img = document.createElement('img');
			// img    Attribute hinzufügen
			// img    Attribute    src   hinzufügen
			contactElement_img.src = download_url
			// img    Attribute    alt   hinzufügen
			contactElement_img.atr = `Bild id ${id} vom Author ${author}`;



			// !!! Ende forEach 
		})

		// !!! Ende data fetch
	})


