const personForm = document.getElementById('personForm');
const fname = document.getElementById('name');
const age = document.getElementById('age');
const height = document.getElementById('height');
const personList = document.getElementById('personList')
const sortByHeightBtn = document.getElementById('sortByHeightBtn');
const sortByNameBtn = document.getElementById('sortByNameBtn');
const clearBtn = document.getElementById('clearBtn');


// heere is another way to use get and set in the code 
// class PersonOne{
//     constructor(age,name,height){
//         this.name = name;
//         this.age = age;
//         this.height = height;
//     }



//      get age(){
//     return this._age;

//    }
//     set age(newage){
//         if (newage && newage>=0){
//             this._age = newage;
//         }
//         else{
//             this._age = 0;
//         }
//     }




//     get height(){
//         return this._height;

//     }
//     set height(newheight){
//         if(newheight && newheight>= 0){
//             this._height = newheight;
//         }else{
//             this._height= 0;
//         }
//     }



// }
class Person{

    #age=0;
    #height=0;
    #name ='';
    constructor(name,age,height){
        this.name = name,
        this.age = age,
        this.height = height

    }



     get height(){
     return this.#height;

     }
     set height(_height){
        if(_height>= 0){
            this.#height = _height;
        }else{
            console.log('prpoer height')
        }
     }

get age(){
    return this.#age
}


  set age(_age){
    if (_age>=0){
        this.#age = _age;
    }else{
        console.log('prpoer age')
    }
  }
  get name() {
    return this.#name;
  }

  set name(_name) {
    this.#name = _name;
  }
    showList(){
        personList.innerHTML += `<li>name:${this.name};age${this.age};height:${this.height}</li>`

    }

}


const personArray = [];

personForm.addEventListener('submit', function(event){
    event.preventDefault();

    const personObject = new Person(fname.value,age.value,height.value);
    console.log(personArray)
    personArray.push(personObject);
    for (const item of personArray) {
       item.showList()
        
    }


})

sortByHeightBtn.addEventListener('click',function(){

          personArray.sort(function (a,b) {
            return a.height-b.height 
            
          })

})

sortByNameBtn.addEventListener('click',function(){
   personArray.sort(function (a,b){
        a.name.tolocalCompare(b.name);
            
              
        })
        
    
})


clearBtn.addEventListener('click',function(){
    personArray = " ";
    item.showList = " ";
})