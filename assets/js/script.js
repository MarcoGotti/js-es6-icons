
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
/* ********************************************************************************** */
    //const iconEl = generateIcolnEl(iconName, iconPrefix)
/* ********************************************************************************** */
    const iClass = `${iconPrefix}solid ${iconPrefix}${iconName}`;

    const colMarkUp = generateColMarkUp(iClass, iconName, randomColor);
    rowEl.insertAdjacentHTML("beforeend", colMarkUp);
}
/* ************************************************************************************** 
At first trying to fit a // const iconEl = HTMLElement <i>...</i> // into TemplateLiteral ${iconEl} but not possible.

function generateIcolnEl(name, prefix) {
    const iconEl = document.createElement('i');
    const iClass = `${prefix}solid ${prefix}${name}`;
    iconEl.className = iClass;   
    return iconEl
} 
**************************************************************************************** */

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

