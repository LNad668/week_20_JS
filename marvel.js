const heros = [
{
    name: 'Супермэн',
    universe: 'DC Comics',
    frend: 'собака Крипто',
    photo: 'https://n1s1.hsmedia.ru/06/d3/73/06d37321618034ec5f2a65b09c8576e3/547x397_0xac120002_45567661540468871.jpg',
    rating : 'dislike',
    rating : 'norm',
    rating : 'like'
},{
    name: 'Дэдпул',
    universe: 'Marvel Comics',
    frend: 'частично Мстители, Человек-паук, Росомаха',
    photo: 'https://n1s1.hsmedia.ru/34/93/39/3493392c94fc2ae0552ef9c7e87f2617/728x382_1_cc2a743fd686b7b2e256c062966bb465@1034x543_0xac120002_2692921231540468872.jpg',
    rating : 'dislike',
    rating : 'norm',
    rating : 'like'
},{
    name: 'Железный человек',
    universe: 'Marvel Comics',
    frend: 'Мстители',
    photo: 'https://n1s1.hsmedia.ru/7b/56/08/7b5608ec3df83d872fa1162fb9e32f28/547x397_0xac120002_1773711401540468871.jpg',
    rating : 'dislike',
    rating : 'norm',
    rating : 'like'
},{
    name: 'Чудо Женщина',
    universe: 'DC Comics',
    frend: 'Лига Справедливости, Бэтмен, Супермен',
    photo: 'https://n1s1.hsmedia.ru/87/ed/c5/87edc525d8813c7b2899e04a4e562fe9/547x397_0xac120002_6444132261540468872.jpg',
    rating : 'dislike',
    rating : 'norm',
    rating : 'like'
}
];

let result = "";



for (hero of heros){
    result += 
    '<div class="hero_name">' + '<h2>' + 'Герой: ' + hero.name + '</h2>' + '</div>' +
    '<div class="hero_universe">' + 'Вселенная: ' + hero.universe + '</div>'+ 
    '<div class="hero_frend">' + 'Друзья: ' + hero.frend + '</div>'+ 
    '<div class="hero_photo">' + '<img src=' + hero.photo + ' >' + ' </div>'+ 
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

    document.querySelectorA('button')