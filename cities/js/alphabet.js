// вспомогательные функции для работы со списком городов


// myAlphabet оперделяет только допустимые буквы и присваиват им номер,
// которым потом можно воспользоваться для быстрого поиска

function myAlphabet(letter) {
    switch(letter) {
        case 'А': return 1; break;
        case 'а': return 1; break;
        case 'Б': return 2; break;
        case 'б': return 2; break;
        case 'В': return 3; break;
        case 'в': return 3; break;
        case 'Г': return 4; break;
        case 'г': return 4; break;
        case 'Д': return 5; break;
        case 'д': return 5; break;
        case 'Е': return 6; break;
        case 'е': return 6; break;
        case 'Ж': return 7; break;
        case 'ж': return 7; break;
        case 'З': return 8; break;
        case 'з': return 8; break;
        case 'И': return 9; break;
        case 'и': return 9; break;
        case 'Й': return 10; break;
        case 'й': return 10; break;
        case 'К': return 11; break;
        case 'к': return 11; break;
        case 'Л': return 12; break;
        case 'л': return 12; break;
        case 'М': return 13; break;
        case 'м': return 13; break;
        case 'Н': return 14; break;
        case 'н': return 14; break;
        case 'О': return 15; break;
        case 'о': return 15; break;
        case 'П': return 16; break;
        case 'п': return 16; break;
        case 'Р': return 17; break;
        case 'р': return 17; break;
        case 'С': return 18; break;
        case 'с': return 18; break;
        case 'Т': return 19; break;
        case 'т': return 19; break;
        case 'У': return 20; break;
        case 'у': return 20; break;
        case 'Ф': return 21; break;
        case 'ф': return 21; break;
        case 'Х': return 22; break;
        case 'х': return 22; break;
        case 'Ц': return 23; break;
        case 'ц': return 23; break;
        case 'Ч': return 24; break;
        case 'ч': return 24; break;
        case 'Ш': return 25; break;
        case 'ш': return 25; break;
        case 'Щ': return 26; break;
        case 'щ': return 26; break;
        case 'Э': return 27; break;
        case 'э': return 27; break;
        case 'Ю': return 28; break;
        case 'ю': return 28; break;
        case 'Я': return 29; break;
        case 'я': return 29; break;
        default: return 0; break;
    }
}


// ускоряем поиск города по первой букве
// массив quickSearch хранит номер первого города в cityList с нужной буквы

var quickSearch = [     
0,
1,
557,
1433,
2111,
2542,
2926,
3021,
3083,
3250,
3514,
3542,
4720,
5161,
5782,
6239,
6510,
7055,
7388,
8224,
8673,
8841,
9067,
9402,
9434,
9645,
9819,
9831,
9966,
10003,
10071
]