class Pokemon {
    constructor (data) {
        let data = response.data
        this.name = data.name
        this.hp = data.stats[5].base_stat
        this.attack = data.stats[4].base_stat
        this.defense = data.stats[3].base_stat
        this.specialattack = data.stats[2].base_stat
        this.specialdefense = data.stats[1].base_stat
        this.speed = data.stats[0].base_stat
        var abilityarray = [] 
        for (let i = 0; i<data.abilities.length; i++) {
            abilityarray[i] = data.abilities[i]
            this .abilities = abilityarray
        }
     }
}
class Trainer {
    constructor (name) {
        this.name =name
        this.myPokemon = []
    }
    all () {
        return myPokemon;
    }
    get (name){
        for (let i=0; i<this.myPokemon.length; i++){
            if (this.myPokemon['name'] == name){
                return this.myPokemon[i];
            }
        }

    }       
}
let newtrainer = new Trainer("kevin")
  
let snorlaxpromise = axios.get("https://fizal.me/pokeapi/api/143.json")
let umbreonpromise = axios.get("https://fizal.me/pokeapi/api/197.json")
let gyaradospromise = axios.get("https://fizal.me/pokeapi/api/130.json")

snorlaxpromise.then(response => {
    let data = response.data
    snorlax = new Pokemon(data)
    newtrainer.mypokemon.push(snorlax)
});

umbreonpromise.then(response => {
    let data = response.data
    umbreon = new Pokemon(data)
    newtrainer.mypokemon.push(umbreon)
});

gyaradospromise.then(response => {
    let data = response.data
    gyarados = new Pokemon(data)
    newtrainer.mypokemon.push(gyarados)
});

  
