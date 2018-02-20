var cityHistory = [];
var lastTitleLetter = '';

function findAnswer() {
    var playerCity = document.getElementById('in').value;
    var messageArea = document.getElementById('message');
    
    if (playerCity == '') {
        messageArea.innerHTML = 'Вы ничего не ввели! Введите название города.';
        return; 
        }
    
    if (!isCity(playerCity)) {
        messageArea.innerHTML = 'Такого города не существует. Попробуйте еще раз!';
        return; 
        }
    
    if (lastTitleLetter != '') {
        if (playerCity[0] != lastTitleLetter.toUpperCase()) {
            messageArea.innerHTML = 'Неверно! Введите название города на букву ' +  lastTitleLetter.toUpperCase() + '.';
            cityHistory.length = cityHistory.length - 1;
            return;
            }
        }
    
    if (cityHistory.length>2) {
        if (isCityUsed(playerCity)) {
            messageArea.innerHTML = 'Такой город уже был! Введите название города на букву ' +  lastTitleLetter.toUpperCase() + '.';
            cityHistory.length = cityHistory.length - 1;
            return;
            }
        }  
    
    showCity(playerCity); 
        
    var lastLetter = findLastLetter(playerCity); 
    var computerCity = findCity(lastLetter); 
    document.getElementById('out').innerHTML = computerCity;
    showCity(computerCity); 
    
    var lastFirst = computerCity[computerCity.length-1].toUpperCase();
    var newMessage = 'Введите название города на букву ' +  lastTitleLetter.toUpperCase() + '.';
    messageArea.innerHTML = newMessage;
    document.getElementById('in').value = '';
     
}

function isCity(name) {
    var firstLetter = myAlphabet(name[0]);
    var firstCity = quickSearch[firstLetter];
    var lastCity = quickSearch[firstLetter+1];
    var answer = false;
    
    for (var i = firstCity; i < lastCity; i++) {
        if (name == cityList[i]) {
            answer = true;
            var j = cityHistory.length;
            cityHistory[j] = i;     
            break;
            }   
    }
    return answer;
}

function findLastLetter(name) {
    var l = name.length;
    var last = myAlphabet(name[l-1]);
    
    if (last == 0) {
        var newName = name.substring(0,l-1);
        return findLastLetter(newName);
        } else {
            return name[l-1];
            }
}

function findCity(firstNameLetter) {
    var firstLetter = myAlphabet(firstNameLetter);  
    var firstCity = quickSearch[firstLetter]; 
    var lastCity = quickSearch[firstLetter+1];
    var answer = 'none';
    
    for (var i = firstCity; i < lastCity; i++) {
        var isUsed = false;
        for (var j = 0; j < cityHistory.length; j++)  {
            if (i == cityHistory[j]) {
                isUsed = true;              
                break;
                }
            } 
        if (!isUsed) {
            answer = cityList[i];
            cityHistory[cityHistory.length] = i;
            lastTitleLetter = findLastLetter(answer);
            break;
            }
        } 
    
    if (answer == 'none') {
        stopGame('Игрок');
        answer = 'Я не знаю ответ';
    }
    
    return answer;  
}

function isCityUsed(name) {
    var cityUsed = false; 
    for (var i = 0; i < cityHistory.length-1; i++)  {
        if (name == cityList[cityHistory[i]]) {
            cityUsed = true;              
            break;
            }
        }
    return cityUsed;     
}

function stopGame(winner) {
    document.getElementById('end').style.visibility = 'visible';
    document.getElementById('winner').innerHTML = 'Победил <span>' + winner + '</span>';
    
    var parent = document.getElementById('player');
    for (var i=0; i < cityHistory.length; i+=2) {
        var item = document.createElement('li');
        item.innerText = cityList[cityHistory[i]];    
        parent.appendChild(item); 
    }
    
    parent = document.getElementById('computer');
    for (var i=1; i < cityHistory.length; i+=2) {
        var item = document.createElement('li');
        item.innerText = cityList[cityHistory[i]];    
        parent.appendChild(item); 
    }
}