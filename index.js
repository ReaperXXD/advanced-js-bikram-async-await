//DESARROLLA AQUI TUS SOLUCIONES
//Ejercico Pokemon//
//api = https://pokeapi.co/

//Ejercicio 1//

async function getRandomPokemon() {
  let randomPoke = Math.floor(Math.random() * 1281);
  try {
    let response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${randomPoke}`
    );
    let data = await response.json();
    return data;
  } catch (error) {}
}

//Ejercicio 2//

async function getImageAndName() {
  const randomImg = Math.floor(Math.random() * 1281) + 1;
  const url = `https://pokeapi.co/api/v2/pokemon/${randomImg}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    return {
      name: data.name,
      img: data.sprites.front_default,
    };
  } catch (error) {
    console.error(error);
  }
}

//Ejercicio 3//

async function printImageAndName() {
  const pokemon = await getImageAndName();
  if (!pokemon) return "";

  const section = `
    <section>
      <img src="${pokemon.img}" alt="${pokemon.name}">
      <h1>${pokemon.name}</h1>
    </section>
  `;

  return section;
}

//Ejercicio Batalla entre Pokemon y perritos//
//Ejercicio 4//
//api = https://dog.ceo/dog-api/

async function getRandomDogImage() {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();

    return data.message;
  } catch (error) {
    console.error(error);
  }
}

//Ejercico 5//

async function getRandomPokemonImage() {
  try {
    const randomId = Math.floor(Math.random() * 898) + 1;
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${randomId}`;
    const response = await fetch(apiUrl);
    const data = await response.json();

    return data.sprites.front_default;
  } catch (error) {
    console.error(error);
  }
}

//Ejercicio 6//

async function printPugVsPikachu() {
  const pugImageUrl = "https://dog.ceo/api/breed/pug/images/random";
  const pugImageResponse = await fetch(pugImageUrl);
  const pugImageData = await pugImageResponse.json();
  const pugImage = pugImageData.message;

  const pikachuId = Math.floor(Math.random() * 898) + 1;
  const pikachuUrl = `https://pokeapi.co/api/v2/pokemon/${pikachuId}`;
  const pikachuResponse = await fetch(pikachuUrl);
  const pikachuData = await pikachuResponse.json();
  const pikachuName = pikachuData.name;
  const pikachuImage = pikachuData.sprites.front_default;

  const battleSection = document.createElement("section");
  battleSection.classList.add("battle-section");

  const pugImageElement = document.createElement("img");
  pugImageElement.src = pugImage;
  pugImageElement.alt = "Pug";
  battleSection.appendChild(pugImageElement);

  const versusElement = document.createElement("h2");
  versusElement.textContent = "VS";
  battleSection.appendChild(versusElement);

  const pikachuImageElement = document.createElement("img");
  pikachuImageElement.src = pikachuImage;
  pikachuImageElement.alt = pikachuName;
  battleSection.appendChild(pikachuImageElement);

  document.body.appendChild(battleSection);
}

//Rick and Morty//
//Ejercico 7//

//api = https://rickandmortyapi.com/

async function getRandomCharacter() {
  try {
    const url = "https://rickandmortyapi.com/api/character/";
    const response = await fetch(url);
    const data = await response.json();
    const random = Math.floor(Math.random() * data.results.length);
    return data.results[random];
  } catch (error) {
    console.error(error);
  }
}

//Ejercicio 8//

async function getRandomCharacterInfo() {
  const randomId = Math.floor(Math.random() * 671) + 1;
  const characterUrl = `https://rickandmortyapi.com/api/character/${randomId}`;
  try {
    const characterResponse = await fetch(characterUrl);
    const characterData = await characterResponse.json();
    const { name, image, episode } = characterData;

    const firstEpisodeUrl = episode[0];
    const firstEpisodeResponse = await fetch(firstEpisodeUrl);
    const firstEpisodeData = await firstEpisodeResponse.json();
    const { name: firstEpisodeName, air_date: firstEpisodeDate } =
      firstEpisodeData;

    return {
      name,
      img: image,
      episodes: episode.length,
      firstEpisode: {
        name: firstEpisodeName,
        date: firstEpisodeDate,
      },
    };
  } catch (error) {
    console.error(error);
  }
}

//Ejercicio 9//
