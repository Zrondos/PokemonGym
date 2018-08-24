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
let ZachTrainer = new Trainer("Orlando")
let KevinTrainer = new Trainer("Zak")
//Axios Call for Ninetales
let ninetalesCall = axios.get('https://fizal.me/pokeapi/api/38.json')
let garchompCall = axios.get('https://fizal.me/pokeapi/api/445.json')
let tapuKokoCall = axios.get('https://fizal.me/pokeapi/api/785.json')
let snorlaxCall = axios.get("https://fizal.me/pokeapi/api/143.json")
let umbreonCall = axios.get("https://fizal.me/pokeapi/api/197.json")
let gyaradosCall = axios.get("https://fizal.me/pokeapi/api/130.json")

function delayAxios(object,afterFunction){
axios.all([ninetalesCall, garchompCall, tapuKokoCall,snorlaxCall,umbreonCall,gyaradosCall])
.then(function (responses) {
    let ninetales = new Pokemon(responses[0].data)
    ZachTrainer.myPokemon.push(ninetales)

    let garchomp = new Pokemon(responses[1].data)
    ZachTrainer.myPokemon.push(garchomp)

    let tapuKoko = new Pokemon(responses[2].data)
    ZachTrainer.myPokemon.push(tapuKoko)

    let snorlax=new Pokemon(responses[3].data)
    KevinTrainer.myPokemon.push(snorlax)

    let umbreon=new Pokemon(responses[4].data)
    KevinTrainer.myPokemon.push(umbreon)

    let gyrados=new Pokemon(responses[5].data)
    KevinTrainer.myPokemon.push(gyrados)

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
    afterFunction(object)
});

}
