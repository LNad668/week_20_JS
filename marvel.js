const heros = [
{
    name: 'Супермэн',
    universe: 'DC Comics',
    frend: 'собака Крипто',
    photo: '',
    rating : 'dislike',
    rating : 'norm',
    rating : 'like'
},{
    name: 'Дэдпул',
    universe: 'Marvel Comics',
    frend: 'частично Мстители, Человек-паук, Росомаха',
    photo: '',
    rating : 'dislike',
    rating : 'norm',
    rating : 'like'
},{
    name: 'Железный человек',
    universe: 'Marvel Comics',
    frend: 'Мстители',
    photo: '',
    rating : 'dislike',
    rating : 'norm',
    rating : 'like'
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
        '<input type="radio" name="rating" value="dislike" ' + (hero.rating === 'dislike' ? 'selected' : '' ) + 
        '><label>Не нравиться герой</label>' + 
        '<input type="radio" name="rating" value="norm" ' + (hero.rating === 'norm' ? 'selected' : '' ) + 
        '><label>Нормально</label>' + 
        '<input type="radio" name="rating" value="like" ' + (hero.rating === 'like' ? 'selected' : '' ) + 
        '><label>Любимый герой</label>'+
            '<br>'+        
            '<button type="submit">Проголосовать</button>'+
        '</div>'+
    

    '<br>'
    
}

document.getElementById('marvel').innerHTML = result;
