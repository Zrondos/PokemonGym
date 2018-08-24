class Trainer{
    constructor(name){
    this.name=name;
    this.myPokemon=[];
    }
    all()
    {
        return this.myPokemon;
    }
    get(name)
    {
        for (var i = 0; i < this.myPokemon.length; i++) 
        { 
            if (this.myPokemon[i].name == name)
                {
                    return this.myPokemon[i];
                }
        }
        alert("I don't have that Pokemon...yet!") 
    }
}
class Pokemon{
    constructor(data){
        this.name=data.name
        this.Hp=data.stats[5].base_stat
        this.Attack=data.stats[4].base_stat
        this.Defense=data.stats[3].base_stat
        this.SpecialAttack=data.stats[2].base_stat
        this.SpecialDefense=data.stats[1].base_stat
        this.Speed=data.stats[0].base_stat
        var abilityArray=[]
        var abilitiesLength=data.abilities.length
        for (var i=0; i<abilitiesLength; i++){
        abilityArray.push(data.abilities[i].ability.name)
        }
        this.abilities=abilityArray
    }
}
let pokemonTrainer = new Trainer("Pokemon Master")
//Axios Call for Ninetales
let ninetalesCall = axios.get('https://fizal.me/pokeapi/api/38.json')
let garchompCall = axios.get('https://fizal.me/pokeapi/api/445.json')
let tapuKokoCall = axios.get('https://fizal.me/pokeapi/api/785.json')
function delayAxios(object,afterFunction){
axios.all([ninetalesCall, garchompCall, tapuKokoCall])
.then(function (responses) {
    let ninetales = new Pokemon(responses[0].data)
    pokemonTrainer.myPokemon.push(ninetales)

    let garchomp = new Pokemon(responses[1].data)
    pokemonTrainer.myPokemon.push(garchomp)

    let tapuKoko = new Pokemon(responses[2].data)
    pokemonTrainer.myPokemon.push(tapuKoko)


    function changePhoto(pokemonName,type){
        myObject=pokemonName+"Object";
        photo=myObject.type;
        gallery.innerHTML = " "; 
        gallery.style.backgroundImage=`url(${photo})`;
    }
    function changePhoto(inputPhoto){
        let gallery = document.querySelector('.mainWindow');
        gallery.innerHTML = " "; 
        gallery.style.backgroundImage=`url(${inputPhoto})`
    }
    function displayAbilities(pokemon){
        abilities=pokemon.abilities;
    }
    function displayStats(pokemon){

            let hpElement=document.createElement("li");
            var hp=document.createTextNode("Hp:"+pokemon.Hp)
            hpElement.appendChild(hp);
            stats=document.getElementsByClassName("statsList")
            stats[0].innerHTML = " ";
            stats[0].appendChild(hpElement)
            ////display HP stats
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
        afterFunction(object)
});

}
