class Gym{
    constructor(name){
        this.name=name;
        this.trainers=[];
    }
}

let pokemonGym=new Gym("Elite 2")

let x = document.createElement("div")
x.innerHTML = "hello"
body.appendChild(x)


function renderGym(){
    pokemonGym.trainers.push(ZachTrainer)
    pokemonGym.trainers.push(KevinTrainer)
    // let hpElement=document.createElement("li");
    //         var hp=document.createTextNode("Hp:"+pokemon.Hp)
    //         hpElement.appendChild(hp);
    // console.log(pokemonGym.trainers[0].all()[0])
<<<<<<< HEAD
   
    console.log(pokemonGym.trainers)
}
=======
    // console.log(pokemonGym.trainers)
    function displayStats(pokemon){
        let nameElement=document.createElement("li");
        var name=document.createTextNode("Hp:"+pokemon.name)
        nameElement.appendChild(name);
        stats=document.getElementsByClassName("statsList")
        stats[0].innerHTML = " ";
        stats[0].appendChild(nameElement)
        /////Display HP
        let hpElement=document.createElement("li");
        var hp=document.createTextNode("Hp:"+pokemon.Hp)
        hpElement.appendChild(hp);
        stats=document.getElementsByClassName("statsList")
        
        stats[0].appendChild(hpElement)
        
        ////////display Attack Stats
        let AttackElement=document.createElement("li");
        var Attack=document.createTextNode("Attack:"+pokemon.Attack)
        AttackElement.appendChild(Attack);
        stats=document.getElementsByClassName("statsList");
        stats[0].appendChild(AttackElement)
        ////display Defense stats
        let DefenseElement=document.createElement("li");
        var Defense=document.createTextNode("Defense:"+pokemon.Defense)
        DefenseElement.appendChild(Defense);
        stats=document.getElementsByClassName("statsList")
        stats[0].appendChild(DefenseElement)
        ////display Special Attack stats
        let SpecialAttackElement=document.createElement("li");
        var SpecialAttack=document.createTextNode("SpecialAttack:"+pokemon.SpecialAttack)
        SpecialAttackElement.appendChild(SpecialAttack);
        stats=document.getElementsByClassName("statsList")
        stats[0].appendChild(SpecialAttackElement)
        ////display Special Defense stats
        let SpecialDefenseElement=document.createElement("li");
        var SpecialDefense=document.createTextNode("SpecialDefense:"+pokemon.SpecialDefense)
        SpecialDefenseElement.appendChild(SpecialDefense);
        stats=document.getElementsByClassName("statsList")
        stats[0].appendChild(SpecialDefenseElement)
        ////display Speed stats
        let SpeedElement=document.createElement("li");
        var Speed=document.createTextNode("Speed:"+pokemon.Speed)
        SpeedElement.appendChild(Speed);
        stats=document.getElementsByClassName("statsList")
        stats[0].appendChild(Speed)
    }
    
    displayStats((pokemonGym.trainers[0].myPokemon[0]))
    document.getElementById("button1").addEventListener("click", function(){displayStats((pokemonGym.trainers[0].myPokemon[0]))});
    document.getElementById("button2").addEventListener("click", function(){displayStats((pokemonGym.trainers[0].myPokemon[1]))});
    document.getElementById("button3").addEventListener("click", function(){displayStats((pokemonGym.trainers[0].myPokemon[2]))});
    document.getElementById("button5").addEventListener("click", function(){displayStats((pokemonGym.trainers[1].myPokemon[0]))});
    document.getElementById("button4").addEventListener("click", function(){displayStats((pokemonGym.trainers[1].myPokemon[1]))});
    document.getElementById("button5").addEventListener("click", function(){displayStats((pokemonGym.trainers[1].myPokemon[2]))});
    }

>>>>>>> da0828496e715f46be560f45c974ef159129ac29
delayAxios(pokemonGym,renderGym)




// pokemonGym.trainers.push(newTrainer)

// pokemonGym.trainers.push(trainer1)
// pokemonGym.trainers.push(trainer2)
// console.log(pokemonGym)
// class Trainer{
//     constructor(name){
//     this.name=name;
//     this.myPokemon=[];
//     }
//     all()
//     {
//         return this.myPokemon;
//     }
//     get(name)
//     {
//         for (var i = 0; i < this.myPokemon.length; i++) 
//         { 
//             if (this.myPokemon[i].name == name)
//                 {
//                     return this.myPokemon[i];
//                 }
//         }
//         alert("I don't have that Pokemon...yet!") 
//     }
// }

// class Pokemon{
//     constructor(data){
//         this.name=data.name
//         this.Hp=data.stats[5].base_stat
//         this.Attack=data.stats[4].base_stat
//         this.Defense=data.stats[3].base_stat
//         this.SpecialAttack=data.stats[2].base_stat
//         this.SpecialDefense=data.stats[1].base_stat
//         this.Speed=data.stats[0].base_stat
//         var abilityArray=[]
//         var abilitiesLength=data.abilities.length
//         for (var i=0; i<abilitiesLength; i++){
//         abilityArray.push(data.abilities[i].ability.name)
//         }
//         this.abilities=abilityArray
//     }
// }


// let trainer1=new Trainer("Zach")
// let trainer2=new Trainer("Kevin")

// let pokemon1 = axios.get('https://fizal.me/pokeapi/api/1.json')
// let pokemon2 = axios.get('https://fizal.me/pokeapi/api/2.json')
// let pokemon3 = axios.get('https://fizal.me/pokeapi/api/3.json')

// let pokemon4 = axios.get('https://fizal.me/pokeapi/api/4.json')
// let pokemon5 = axios.get('https://fizal.me/pokeapi/api/5.json')
// let pokemon6 = axios.get('https://fizal.me/pokeapi/api/6.json')

// axios.all([pokemon1,pokemon2,pokemon3,pokemon4,pokemon5,pokemon6])
//     .then(function(responses){
//     let pokemon1 = new Pokemon(responses[0].data)
//     trainer1.myPokemon.push(pokemon1)
//     let pokemon2 = new Pokemon(responses[1].data)
//     trainer1.myPokemon.push(pokemon2)
//     let pokemon3 = new Pokemon(responses[2].data)
//     trainer1.myPokemon.push(pokemon3)

//     let pokemon4 = new Pokemon(responses[3].data)
//     trainer2.myPokemon.push(pokemon4)
//     let pokemon5 = new Pokemon(responses[4].data)
//     trainer2.myPokemon.push(pokemon5)
//     let pokemon6 = new Pokemon(responses[5].data)
//     trainer2.myPokemon.push(pokemon6)
    
//     pokemonGym.trainers.push(trainer1)
//     pokemonGym.trainers.push(trainer2)
// }
//     )




