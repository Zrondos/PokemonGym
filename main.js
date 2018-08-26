class Gym{
    constructor(name){
        this.name=name;
        this.trainers=[];
    }
}

let pokemonGym=new Gym("Elite 2")


function renderGym(){
    pokemonGym.trainers.push(ZachTrainer)
    pokemonGym.trainers.push(KevinTrainer)

    function swapImage(id){
        let primary = "https://media.giphy.com/media/qSrK4HvZyLMJi/giphy.gif"
        let secondary = "https://t00.deviantart.net/8dwdVgcfgJiSvbW_2kBDU95whPk=/fit-in/150x150/filters:no_upscale():origin()/pre00/74d6/th/pre/f/2013/104/9/6/untitled_drawing_by_amaneyara-d61qadm.png"
        document.getElementById(id).src;
        if (document.getElementById(id).src == primary) {
          document.getElementById(id).src=secondary;
          document.getElementById(id).style.width = "70px";
        } else {
          document.getElementById(id).src=primary;
          document.getElementById(id).style.width = "50px";
        }
        
      }

   
     
    // let hpElement=document.createElement("li");
    //         var hp=document.createTextNode("Hp:"+pokemon.Hp)
    //         hpElement.appendChild(hp);
    // console.log(pokemonGym.trainers[0].all()[0])
    // console.log(pokemonGym.trainers)
    function displayStats(pokemon, idname, imagesrc){
            var x = document.getElementById(idname);
            if (x.style.display == "block") {
                x.style.display = "none";
            } else {
                x.style.display = "block";
            }
        let ul = document.createElement("ul")
        let nameElement=document.createElement("li");
        var name=document.createTextNode("Name: "+pokemon.name);
        nameElement.appendChild(name);
        ul.appendChild(nameElement);
        stats=document.getElementById(idname);
        stats.innerHTML = " ";
        stats.appendChild(nameElement);
        
        

        let hpElement=document.createElement("li");
        var hp=document.createTextNode("HP: "+pokemon.Hp);
        hpElement.appendChild(hp);
        ul.appendChild(hpElement);
        stats=document.getElementById(idname);
        stats.appendChild(hpElement);

        
        let attackElement=document.createElement("li");
        var attack=document.createTextNode("Attack: "+pokemon.Attack);
        attackElement.appendChild(attack);
        ul.appendChild(attackElement);
        stats=document.getElementById(idname);
        stats.appendChild(attackElement);

        let defenseElement=document.createElement("li");
        var defense=document.createTextNode("Defense: "+pokemon.Defense);
        defenseElement.appendChild(defense);
        ul.appendChild(defenseElement);
        stats=document.getElementById(idname);
        stats.appendChild(defenseElement);

        let specialattackElement=document.createElement("li");
        var specailattack=document.createTextNode("SpecialAttack: "+pokemon.SpecialAttack);
        specialattackElement.appendChild(specailattack);
        ul.appendChild(specialattackElement);
        stats=document.getElementById(idname);
        stats.appendChild(specialattackElement);
        
        let specialdefenseElement=document.createElement("li");
        var specialdefense=document.createTextNode("SpecialDefense: "+pokemon.SpecialDefense);
        specialdefenseElement.appendChild(specialdefense);
        ul.appendChild(specialdefenseElement);
        stats=document.getElementById(idname);
        stats.appendChild(specialdefenseElement);

        let speedElement=document.createElement("li");
        var speed=document.createTextNode("Speed: "+pokemon.Speed);
        speedElement.appendChild(speed);
        ul.appendChild(speedElement);
        stats=document.getElementById(idname);
        stats.appendChild(speedElement);

      
        ul.setAttribute("class", "statsList col s6");
        let img = document.createElement('img');
        img.setAttribute('src',imagesrc);
        img.setAttribute("class", "col s6");
        stats.appendChild(img);

        

        /////Display HP
        // let hpElement=document.createElement("li");
        // var hp=document.createTextNode("Hp: "+pokemon.Hp)
        // hpElement.appendChild(hp);
        // stats=document.getElementsByClassName("statsList")
        
        // stats[0].appendChild(hpElement)
        
        ////////display Attack Stats
        // let AttackElement=document.createElement("li");
        // var Attack=document.createTextNode("Attack: "+pokemon.Attack)
        // AttackElement.appendChild(Attack);
        // stats=document.getElementsByClassName("statsList");
        // stats[0].appendChild(AttackElement)
        ////display Defense stats
        // let DefenseElement=document.createElement("li");
        // var Defense=document.createTextNode("Defense: "+pokemon.Defense)
        // DefenseElement.appendChild(Defense);
        // stats=document.getElementsByClassName("statsList")
        // stats[0].appendChild(DefenseElement)
        ////display Special Attack stats
        // let SpecialAttackElement=document.createElement("li");
        // var SpecialAttack=document.createTextNode("SpecialAttack: "+pokemon.SpecialAttack)
        // SpecialAttackElement.appendChild(SpecialAttack);
        // stats=document.getElementsByClassName("statsList")
        // stats[0].appendChild(SpecialAttackElement)
        ////display Special Defense stats
        // let SpecialDefenseElement=document.createElement("li");
        // var SpecialDefense=document.createTextNode("SpecialDefense: "+pokemon.SpecialDefense)
        // SpecialDefenseElement.appendChild(SpecialDefense);
        // stats=document.getElementsByClassName("statsList")
        // stats[0].appendChild(SpecialDefenseElement)
        ////display Speed stats
        // let SpeedElement=document.createElement("li");
        // var Speed=document.createTextNode("Speed: "+pokemon.Speed)
        // SpeedElement.appendChild(Speed);
        // stats=document.getElementsByClassName("statsList")
        // stats[0].appendChild(Speed)
    }
    // function myFunction(idname) {
        
    // }
    // displayStats((pokemonGym.trainers[0].myPokemon[0]))
    let ninetailsimg = "https://pa1.narvii.com/6267/f29a8614bbe48096572657ccb056f7002666f0d9_128.gif"
    let garchompimg = "https://cdn.bulbagarden.net/upload/8/85/PCP445.png"
    let tapukokoimg = "https://veekun.com/dex/media/pokemon/main-sprites/ultra-sun-ultra-moon/785.png"
    let snorlaximg = "https://pa1.narvii.com/6464/eeb6c7a0189e04d1444e8c40e598f3d56390bb32_128.gif"
    let umbreonimg = "https://veekun.com/dex/media/pokemon/conquest/197.png"
    let gyaradosimg = "https://cdn.bulbagarden.net/upload/9/9d/PCP130.png"
    
    document.getElementById("button1").addEventListener("click", function(){displayStats(pokemonGym.trainers[0].myPokemon[0],"ninetails",ninetailsimg)});
    document.getElementById("button2").addEventListener("click", function(){displayStats(pokemonGym.trainers[0].myPokemon[1],"garchomp",garchompimg)});
    document.getElementById("button3").addEventListener("click", function(){displayStats(pokemonGym.trainers[0].myPokemon[2],"tapu-koko",tapukokoimg)});
    document.getElementById("button4").addEventListener("click", function(){displayStats(pokemonGym.trainers[1].myPokemon[0],"snorlax",snorlaximg)});
    document.getElementById("button5").addEventListener("click", function(){displayStats(pokemonGym.trainers[1].myPokemon[1],"umbreon",umbreonimg)});
    document.getElementById("button6").addEventListener("click", function(){displayStats(pokemonGym.trainers[1].myPokemon[2],"gyarados",gyaradosimg)});
    

    document.getElementById("button1").addEventListener("click", function(){swapImage("pokeball1")});
    document.getElementById("button2").addEventListener("click", function(){swapImage("pokeball2")});
    document.getElementById("button3").addEventListener("click", function(){swapImage("pokeball3")});
    document.getElementById("button4").addEventListener("click", function(){swapImage("pokeball4")});
    document.getElementById("button5").addEventListener("click", function(){swapImage("pokeball5")});
    document.getElementById("button6").addEventListener("click", function(){swapImage("pokeball6")});
}

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



