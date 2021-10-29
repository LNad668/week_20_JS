document.addEventListener("DOMContentLoaded",
    function(event){
        getWeater('asteroid')
    })

    function getWeater(asteroid){
fetch('https://api.nasa.gov/planetary/apod?api_key=0W0Ybkyzkgr6oRmWjAGOutce5y5DQR5tA9rHrjrN')
.then(Response => Response.json())
.then(aste => {console.log(aste);
    document.querySelector('.name').innerText= ("Название: ") +aste.title;
    
    document.querySelector('.asteroid').innerText=("Дата обьявления: ") + aste.date;
    
        document.querySelector('.avtor').innerText= ("Автор: ") +aste.copyright;
    
    document.querySelector('.text').innerText= ("Мысль: ") +aste.explanation;

    document.getElementById('photo').src= ("Фото " ) +aste.hdurl;
})

.catch(error => console.log(error));
console.log(asteroid);
    }
