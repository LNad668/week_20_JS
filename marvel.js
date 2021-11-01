const heros = [
{
    name: 'Супермэн',
    universe: 'DC Comics',
    frend: 'собака Крипто',
    photo: '',
    rating: true
},{
    name: 'Дэдпул',
    universe: 'Marvel Comics',
    frend: 'частично Мстители, Человек-паук, Росомаха',
    photo: '',
    rating: false
},{
    name: 'Железный человек',
    universe: 'Marvel Comics',
    frend: 'Мстители',
    photo: '',
    rating: false
}
];

let result = "";

for (hero of heros){
    result += 
    
    '<div class="hero_name">'+ 'Герой: ' + hero.name + '</div>' +
    '<div class="hero_universe">' + 'Вселенная: ' + hero.universe + '</div>'+ 
    '<div class="hero_frend">' + 'Друзья: ' + hero.frend + '</div>'+ 
    '<div class="hero_photo">' + '' + hero.photo + '</div>'+ 
        '<p>Поставти пожалуйста рейтинг</p>'+
        '<div>'+
            '<input type="radio" name="rating" value="'+ 
            hero.rating + '">'+ 
            '<label>Не нравиться герой</label>'+

            '<input type="radio" name="rating" value="">'+
            '<label>Нормальный</label>'+

            '<input type="radio" name="rating" value="" >'+
            '<label">Любимый герой</label>'+
            '<br>'+        
            '<button type="submit">Проголосовать</button>'+
        '</div>'+
    

    '<br>'
    
}

document.getElementById('marvel').innerHTML = result;
