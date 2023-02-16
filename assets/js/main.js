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

	data.forEach((bild_Object) =>{

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



		// !!! Ende forEach 
	})

	// !!! Ende data fetch
})


