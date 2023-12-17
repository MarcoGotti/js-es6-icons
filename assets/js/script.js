/* 

BONUS
1 - modificare la struttura dati fornita e valorizzare la proprietà "color" in modo dinamico: generare in modo casuale un codice colore, sapendo che la notazione esadecimale è formata dal simbolo "#" seguito da 6 caratteri alfanumerici compresi tra 0 e 9 e A e F.
2 - popolare le options della select della milestone 3 dinamicamente.

Consigli del giorno
Come sempre, iniziamo prima di tutto dall'analisi e comprensione della consegna. Scomponiamo il problema in micro-passaggi logici che solamente in un secondo momento trasformeremo in codice.

NB: L'esercizio My Team con array di oggetti e questo sulle icone sono due esercizi chiave per poter svolgere la milestone che incombe. Dedicateci del tempo e approfondite gli argometi trattati.
*/



//  <i class="fa-solid fa-carrot"></i>
//  <i class="fa-solid fa-apple-whole"></i>
//  <i class="fa-solid fa-user-secret"></i>
const list = [
	{
		name: 'cat',  
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

/* Milestone 1 Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell'icona e l'icona stessa.

Le icone presenti nella struttura dati fanno riferimento alla nota libreria Font Awesome, perciò come prima cosa assicuriamoci di aver inserito il link alla cdn nell'head della pagina. Dopodiché, basandoci sul codice di riferimento nel sito di Font Awesome, analizziamo come è formato il tag <i> di un'icona qualsiasi, in particolare focalizziamoci sulle classi.

Come possiamo usare i dati presenti nella nostra struttura dati per creare l'elemento html nel modo corretto e visualizzare l'icona in pagina?

Inizialmente può essere sufficiente stampare dei semplici div, senza alcuno stile, con all'interno l'icona e uno span con il nome. Solamente quando la parte logica è completa, ci dedichiamo al css.
*/

const rowEl = document.querySelector('.row');
const iconType = document.getElementById('selectIconType').value

//create list according to selected property .type

const typeSelectList = list.filter((element) =>{

	if (element.type === iconType) {
        return true;        
    } else if (iconType === 'all') {
        return true;
    }   

});


//create random color

const hexUnits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f' ]
let hexUnitsNumb = '';

for (let i = 0; i < 6; i++) {	

	const element = hexUnits[Math.floor(Math.random()*hexUnits.length)];
	hexUnitsNumb += element;	
}

const randomColor = '#' + hexUnitsNumb;


// create Array with randomColor
// After: not necessary with TemplateLiteral. Objects of typeSelectList keep original color value.

/* const randomColorList = typeSelectList.map((icon) => {
	icon.color = randomColor;
	return icon
});
*/


for (let i = 0; i < typeSelectList.length; i++) {
    const iconName = typeSelectList[i].name;
    const iconPrefix = typeSelectList[i].prefix;
    //Milestone 2 colora le icone con valore color:
    //const iconColor = typeSelectList[i].color;
	//console.log(iconColor);
/* ******************************************************* */
    //const iconEl = generateIcolnEl(iconName, iconPrefix)
/* ******************************************************* */
    const iClass = `${iconPrefix}solid ${iconPrefix}${iconName}`;

    const colMarkUp = generateColMarkUp(iClass, iconName, randomColor);
    rowEl.insertAdjacentHTML("beforeend", colMarkUp);
}
/* ******************************************************* 
At first trying to fit a - const iconEl = HTMLElement <i>...</i> - into TemplateLiteral ${iconEl} but not possible.

function generateIcolnEl(name, prefix) {
    const iconEl = document.createElement('i');
    const iClass = `${prefix}solid ${prefix}${name}`;
    iconEl.className = iClass;   
    return iconEl
} 
*********************************************************** */

function generateColMarkUp(fontAwesomeIconClass, fontAwesomeIconName, generatedRandomColor) {        
    const colMarkUp = `
    <div class="col px-4">
        <div class="card text-center shadow py-3">
            <i class="${fontAwesomeIconClass}" style="color: ${generatedRandomColor};"></i> 
            <span class="text-uppercase">${fontAwesomeIconName}</span>
        </div>             
    </div>
    `
    return colMarkUp
}



//Milestone 3 Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.

//manipola direttamente Array removing objects non utili con un array.filter. Sistema ciclo e function in modo da richiamarli con il nuovo Array 

// BONUS 1 - modificare la struttura dati fornita e valorizzare la proprietà "color" in modo dinamico: generare in modo casuale un codice colore, sapendo che la notazione esadecimale è formata dal simbolo "#" seguito da 6 caratteri alfanumerici compresi tra 0 e 9 e A e F. 
//2 - popolare le options della select della milestone 3 dinamicamente.