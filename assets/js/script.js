
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
// this is only a copy-paste of cicle+function to generate the initial markup or when refreshing the page
let rowEl = document.querySelector('.row');
document.getElementById('selectIconType').value = 'Go random buddy!';
for (let i = 0; i < list.length; i++) {
	const iconName = list[i].name;
	const iconPrefix = list[i].prefix;
	const iconColor = list[i].color;
	const iClass = `${iconPrefix}solid ${iconPrefix}${iconName}`;
	const initialMarkUp = generateInitialMarkUp(iClass, iconName, iconColor);
	rowEl.insertAdjacentHTML("beforeend", initialMarkUp);
}
function generateInitialMarkUp(fontAwesomeIconClass, fontAwesomeIconName, generatedRandomColor) {        
    const initialMarkUp = `
    	<div class="col px-4">
        	<div class="card text-center shadow py-3">
            	<i class="${fontAwesomeIconClass}" style="color: ${generatedRandomColor};"></i> 
            	<span class="text-uppercase">${fontAwesomeIconName}</span>
        	</div>             
    	</div>
    	`
    return initialMarkUp
}





/* ******************************************************* */
// SELECT EVENT 

function selectFunction() {
	//empty the DOM-element .row	before appending new MarkUp
	document.querySelector('.row').innerHTML = ''; 
	
	let rowEl = document.querySelector('.row');
	const iconType = document.getElementById('selectIconType').value

	//create array of objects according to selected property .type
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
	console.log('The color of these icons is ' + randomColor);

	// generate markUp with selected objects and random color
	for (let i = 0; i < typeSelectList.length; i++) {
    	
		const iconName = typeSelectList[i].name;
    	const iconPrefix = typeSelectList[i].prefix;
    	const iClass = `${iconPrefix}solid ${iconPrefix}${iconName}`;

    	const colMarkUp = generateColMarkUp(iClass, iconName, randomColor);
    	rowEl.insertAdjacentHTML("beforeend", colMarkUp);
	}
	

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
}
