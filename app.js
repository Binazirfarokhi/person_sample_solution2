

//sample solution

class Person { // definition of Person class

	#age = 0;
	#height = 0;

	constructor(name, age, height) { 
		this.name = name;
		this.age = age;
		this.height = height;
	};

	get age() {
		return this.#age;
	}
	set age( _age ) {
		if (_age >=0) this.#age = _age;
		else console.log(_age +"is not valid")
	}

	get height() {
		return this.#height;
	}
	set height( _height ) {
		if (_height >=0) this.#height = _height;
		else console.log(_height +"is not valid");
	}

	convert2Text() { //represent Person object as a text line (used for <li>)
		// private properties & getter/setter will not show up in a "for in" loop, hence:
		return `name = ${this.name} ; age = ${this.age} ; height = ${this.height}`;
	}

	// given two persons, compare the height property of the two object to be used for sorting
	static compareHeight(a, b) {
		return (a.height - b.height); // 0 means equal , negative means a is lower, otherwise a is higher
	}
	
	// given two persons, compare the name property of the two object to be used for sorting
	static compareName(a, b) {
		return (a.name.localeCompare(b.name)); // 0 means equal , negative means a is lower, otherwise a is higher
	}

}
////////////////////////////////////////////////////////////////////////////
const personListArray = []; //an array to hold created Person object
////////////////////////////////////////////////////////////////////////////
let sortedBy="";  

function doSave(event) {  //create Person object and save into array
	
	const NAME = document.getElementById("name"); // it is required in the form

	//read all <input>s value and store into variables
	let name = NAME.value;
	let age = document.getElementById("age").value;
	let height = document.getElementById("height").value;
	// create a Person Object and store into array
	let personItem = new Person(name, age, height); 
	//store newly created object into array
	personListArray.push(personItem); 
	sortedBy= ""; //reset sortOrder since new data added to array
	updateUI(); // call updateUI to render the list using array
}

////////////////////////////////////////////////////////////////////////////
function updateUI() { //pupulate UI based on array contents
	// get a handle to the element that we want to use as base (i.e. the <ul>)
	const PERSONLIST = document.getElementById("personList"); 
	PERSONLIST.innerHTML = "";
	const TOOLBAR = document.getElementById("toolbar");
	if (personListArray.length === 0) {  //if empty, hide the toolbar & return
		TOOLBAR.style.display = "none";
		return;
	}
	TOOLBAR.style.display = "block";	//make sure toolbar is back if we are here

	//iterate over the array and add each person object as a <li> to <ul>
	for (let i=0; i<personListArray.length; i++) {
		const LINE = document.createElement("li");
		LINE.textContent = personListArray[i].convert2Text();
		PERSONLIST.append(LINE);
	}
}


///// SORT BY HEIGHT
function sortByHeight() {
	if (sortedBy == "Height") { //already sorted by height, just reverse it
		personListArray.reverse();
	} else {
		//array sort() callback is passed two elements of array each time 
		personListArray.sort(Person.compareHeight);
		sortedBy= "Height"; //set sortOrder to Height
	}
	// call updateUI to reflect now sorted array
	updateUI();	
}

///// SORT BY NAME
function sortByName() {
	if (sortedBy == "Name") { //already sorted by height, just reverse it
		personListArray.reverse();
	} else {
		//array sort() callback is passed two elements of array each time  
		personListArray.sort(Person.compareName);
		sortedBy= "Name"; //set sortOrder to Name
	}
	// call updateUI to reflect now sorted array
	updateUI(); 
}


///// CLEAR person LIST
function doClear() {
	personListArray.length = 0;
	sortedBy="";
	updateUI();
}

/////////////////////////////////////////////////////////////////////////// 
window.addEventListener('DOMContentLoaded', (event) => { // to be safe attach once DOMContentLoaded
	console.log('DOM fully loaded and parsed');
	// attach event handlers
	document.getElementById("personForm").addEventListener('submit', doSave);
	document.getElementById("sortByHeightBtn").addEventListener('click', sortByHeight);
	document.getElementById("sortByNameBtn").addEventListener('click', sortByName);
	document.getElementById("clearBtn").addEventListener('click', doClear);
});   
