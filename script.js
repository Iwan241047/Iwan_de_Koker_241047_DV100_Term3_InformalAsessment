console.log("Linked");

const myHeaders = new Headers();
myHeaders.append("x-apihub-key", "EpPTbWDzPzE72EdwvSo57hK-rRrwlTktJX97cTNof4eJnLuRvS");
myHeaders.append("x-apihub-host", "AnimeList-API.allthingsdev.co");
myHeaders.append("x-apihub-endpoint", "10b0d633-40f8-43ee-af7f-812833c933a1");

const requestOptions = {
   method: "GET",
   headers: myHeaders,
   redirect: "follow"
};
   
   !async function () {
   
       let data = await fetch("https://AnimeList-API.proxy-production.allthingsdev.co/v4/anime?q=Naruto", requestOptions)
       .then((response) => response.text())
       .then((result) =>
           {
               return result;
           }
       )
      .catch((error) => console.error(error));
   
      DisplayAnime(data);
   }();
   
   
   function DisplayAnime(dataToDisplay)
   {
       // console.log(dataToDisplay);
       let animeObject = JSON.parse(dataToDisplay);
       console.log(animeObject);
       // console.log();

   if (animeObject.data && animeObject.data.length >= 2) {
    let anime1 = animeObject.data[0];
    let anime2 = animeObject.data[1];

    let outputText = document.getElementById("outputText");
    outputText.innerHTML = `
        <p>${anime1.title}</p>
        <p>${anime2.title}</p>
    `;
} else {
    console.error("Not enough data to display.");
}
   }
   