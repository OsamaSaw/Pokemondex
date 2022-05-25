const poke_container = document.getElementById('pokemon_container');
GlobalUrl = 'https://pokemon-dex-app-backend.herokuapp.com/api/pokemon/'

const Pokeball = async id =>{

    modal= document.getElementById('modal1_content')
    modal_image = document.getElementById('modal_image')
    let mod_type = ""
    const url = `${GlobalUrl}${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    let flag = false
    const hp = pokemon.status.health
    const att= pokemon.status.attack
    const def= pokemon.status.defense
    const sp_att= pokemon.status.special_attack
    const sp_def= pokemon.status.special_defense
    const speed= pokemon.status.speed
    const name =pokemon.name[0].toUpperCase()+pokemon.name.slice(1);
    const types = pokemon.types.map(types=> types)
    const moves = pokemon.moves.map(moves=> moves)
    const image = pokemon.images.offical;

    const divider_hp = 2.6
    if(types[1] != undefined){
        flag = true
        modal.innerHTML=`

        <img class="image-thumb" src="${image}">
        </br>
        <span class="poke-name">${name}</span>
        <div class="split"></div>
    
        <div class="typs-modal">
        <span class="span">Type(s)</span>
        </br>
        </br>
        <span class="type">${types[0]}</span>
        <span class="type">${types[1]}</span>
        </div>
        </br>
    
        <div class="split"></div>
        <span class="span">status</span>
        </br>
        <div class="dis-flex">
    
        <div class="move">    
        Health:
            <div class="progress blue lighten-4 ">
            <div class="determinate blue" style="width: ${Math.floor(hp/divider_hp)}%; animation: grow 2s;">${hp}</div>
            </div>
            </div>
    
            <div class="move">
            Attack:
            <div class="progress blue lighten-4 ">
            <div class="determinate blue" style="width: ${Math.floor(att/divider_hp)}%; animation: grow 2s;">${att}</div>
            </div>
            </div>
    
            <div class="move">
            Defense:
            <div class="progress blue lighten-4 ">
            <div class="determinate blue" style="width: ${Math.floor(def/divider_hp)}%; animation: grow 2s;">${def}</div>
            </div>
            </div>
    
            <div class="move">
            Special Attack:
            <div class="progress blue lighten-4 ">
            <div class="determinate blue" style="width: ${Math.floor(sp_att/divider_hp)}%; animation: grow 2s;">${sp_att}</div>
            </div>
            </div>
    
            <div class="move">
            Special Defense:
            <div class="progress blue lighten-4 ">
            <div class="determinate blue" style="width: ${Math.floor(sp_def/divider_hp)}%; animation: grow 2s;">${sp_def}</div>
            </div>
            </div>
    
            <div class="move">
            Speed:
            <div class="progress blue lighten-4 ">
            <div class="determinate blue" style="width: ${Math.floor(speed/divider_hp)}%; animation: grow 2s;">${speed}</div>
            </div>
            </div>
            <div class="split"></div>
    
            <span class="span">Moves</span>
            <table class="striped responsive-table">
            <tbody>
              <tr>
                <td>${moves[0]}</td>
                <td>${moves[1]}</td>
                <td>${moves[2]}</td>
                <td>${moves[3]}</td>
                <td>${moves[4]}</td>
              </tr>
              <tr>
                <td>${moves[5]}</td>
                <td>${moves[6]}</td>
                <td>${moves[7]}</td>
                <td>${moves[8]}</td>
                <td>${moves[9]}</td>
              </tr>
              <tr>
                <td>${moves[10]}</td>
                <td>${moves[11]}</td>
                <td>${moves[12]}</td>
                <td>${moves[13]}</td>
                <td>${moves[14]}</td>
              </tr>
                
    
            </tbody>
          </table>
        </div>

    `

    }
    else{
        modal.innerHTML=`

    <img class="image-thumb" src="${image}">
    </br>
    <span class="poke-name">${name}</span>
    <div class="split"></div>

    <div class="typs-modal">
    <span class="span">Type(s)</span>
    </br>
    </br>
    <span class="type">${types[0]}</span>
    </div>
    </br>

    <div class="split"></div>
    <span class="span">status</span>
    </br>
    <div class="dis-flex">

    <div class="move">    
    Health:
        <div class="progress blue lighten-4 ">
        <div class="determinate blue" style="width: ${Math.floor(hp/divider_hp)}%; animation: grow 2s;">${hp}</div>
        </div>
        </div>

        <div class="move">
        Attack:
        <div class="progress blue lighten-4 ">
        <div class="determinate blue" style="width: ${Math.floor(att/divider_hp)}%; animation: grow 2s;">${att}</div>
        </div>
        </div>

        <div class="move">
        Defense:
        <div class="progress blue lighten-4 ">
        <div class="determinate blue" style="width: ${Math.floor(def/divider_hp)}%; animation: grow 2s;">${def}</div>
        </div>
        </div>

        <div class="move">
        Special Attack:
        <div class="progress blue lighten-4 ">
        <div class="determinate blue" style="width: ${Math.floor(sp_att/divider_hp)}%; animation: grow 2s;">${sp_att}</div>
        </div>
        </div>

        <div class="move">
        Special Defense:
        <div class="progress blue lighten-4 ">
        <div class="determinate blue" style="width: ${Math.floor(sp_def/divider_hp)}%; animation: grow 2s;">${sp_def}</div>
        </div>
        </div>

        <div class="move">
        Speed:
        <div class="progress blue lighten-4 ">
        <div class="determinate blue" style="width: ${Math.floor(speed/divider_hp)}%; animation: grow 2s;">${speed}</div>
        </div>
        </div>
        <div class="split"></div>

        <span class="span">Moves</span>
        <table class="striped responsive-table">
        <tbody>
          <tr>
            <td>${moves[0]}</td>
            <td>${moves[1]}</td>
            <td>${moves[2]}</td>
            <td>${moves[3]}</td>
            <td>${moves[4]}</td>
          </tr>
          <tr>
            <td>${moves[5]}</td>
            <td>${moves[6]}</td>
            <td>${moves[7]}</td>
            <td>${moves[8]}</td>
            <td>${moves[9]}</td>
          </tr>
          <tr>
            <td>${moves[10]}</td>
            <td>${moves[11]}</td>
            <td>${moves[12]}</td>
            <td>${moves[13]}</td>
            <td>${moves[14]}</td>
          </tr>
            

        </tbody>
      </table>
    </div>

    `

    }

    

}

const getPokemon = async id =>{
    const testUrl = `${GlobalUrl}${id}`
    const testRes = await fetch(testUrl);
    const testPokemon = await testRes.json();
    //console.log(testPokemon['types'])

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    
   
    creatPokemonCard(testPokemon);
}

function creatPokemonCard(pokemon){
    let poke_test_types1
    let poke_test_types2
    let poke_test_arr=[]
    const pokemonEl = document.createElement("div")
    pokemonEl.classList.add('pokemon')
    try{
        poke_test_types1 = pokemon.types[0]
        poke_test_types2 = pokemon.types[1]
        poke_test_arr= [poke_test_types1,poke_test_types2]
    }
    catch(err){
        try{
        poke_test_types1 = pokemon.types[0]
        poke_test_arr=[poke_test_types1]
        }
        catch(err){
            poke_test_arr=['normal']
        }
    }
    const is_checked = localStorage.getItem(pokemon.id+'x');
    pokemonEl.innerHTML = `
    <div class="pokeNum">
    <span class="pokeNumber">#${pokemon.id.toString().padStart(3,'0')}</span>
    </div>
    <div class="img-container">
    <a class="modal-trigger" href="#modal1">
    <img id="${pokemon.id}" src="${pokemon.images.fanArt}"
    onClick="Pokeball(this.id)" href="#modal1">
    </a>
    </div>
    <div class="pokeInfo">
    <span class="pokeName">
    ${pokemon.name[0].toUpperCase()+pokemon.name.slice(1)} </br>
    </span>
    
    <span class="pokeType">
    ${poke_test_arr}
    </span>
    </div>
    
      <div class="switch">
        <label>
            <input id="${pokemon.id+'x'}" type="checkbox" onClick="pokeCapture(this.id)">
            <span class="lever"></span>
            Captured
        </label>
  </div>
    `
    
    
    poke_container.appendChild(pokemonEl)
    if (is_checked){
    document.getElementById(pokemon.id+'x').checked= is_checked;
    }
      
}


document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {});
  });


function pokeCapture(id){
    checkBox = document.getElementById(id);
    if (checkBox.checked){
        localStorage.setItem(id, true);
    }
    else{
        localStorage.removeItem(id);
    }

}

function getPokes(){
    let randItems=[]
    for(let i =1; i <= 5;i++){
        while(true){
        let rand = Math.floor((Math.random() * 150) + 1);
        if (!randItems.includes(rand)){
        randItems.push(rand);
        getPokemon(rand);
        break;
        }
        }
        
    }
}


function myFunction() {
    var input
    input = document.getElementById("mySearch").value.toLowerCase();

    getPokemon(input)
    
}



getPokes();
Pokeball(1)