(function (root) {
    var WATER = root.SHRI_ISLANDS.WATER;
    var ISLAND = root.SHRI_ISLANDS.ISLAND;

    /**
     * Бонусное задание.
     * Необходимо взять реализацию функции solution и доработать,
     * добавив функционал, который позволит пошагово визуализировать работу данного алгоритма.
     * Сигнатуру функции можно выбрать наиболее удобную для вашей визуализации
     */
    function visualizeSolution() {
        // todo: визуализировать работу алгоритма
        
        var n = root.SHRI_ISLANDS.MAP.length;
        var m = root.SHRI_ISLANDS.MAP[0].length;
        
        //создаем рабочий массив - копия карты с рамкой-буфером из нулей, чтобы 
        //постоянно не проверять выход за границы при поиске в глубину
        var myMap=[];
        myMap[0] = []; 
        for (var j=0; j<m+2; j++)  {
            myMap[0][j] = 0;
        }
        for (var i=1; i<n+1; i++)  {
            myMap[i] = [];
            myMap[i][0] = 0;
            for (var j=1; j<m+1; j++) {
                myMap[i][j] = root.SHRI_ISLANDS.MAP[i-1][j-1];                
            }
            myMap[i][m+1] = 0;
        }
        myMap[n+1] = [];
        for (var j=0; j<m+2; j++)  {
            myMap[n+1][j] = 0;
        }
    
        var cells = document.getElementsByClassName('map__cell');     
        var history = []; //массив с историей алгоритма
        history[0]=[];
        history[1]=[];
        var historyCounter=0;
            
        //поиск в глубину (ищем все клетки острова)
        function findIsle(x,y) {
            if (myMap[x][y]==1) {
                    history[0][historyCounter]=(x-1)*m+(y-1); 
                    history[1][historyCounter]=true;
                    historyCounter++;
                
                myMap[x][y]=2;
                if (myMap[x-1][y]) 
                    { findIsle(x-1,y); }
                if (myMap[x][y+1]) 
                    { findIsle(x,y+1); }
                if (myMap[x+1][y]) 
                    { findIsle(x+1,y); }
                if (myMap[x][y-1]) 
                    { findIsle(x,y-1); }
                }
            return;
        }
        
        // ищем острова
        for (var i=1; i<n+1; i++)  {
            for (var j=1; j<m+1; j++) {
                if (myMap[i][j]==1) {
                    history[0][historyCounter]=(i-1)*m+(j-1); 
                    history[1][historyCounter]=true;
                    historyCounter++;
                    
                    myMap[i][j]=2;
                    if (myMap[i-1][j]) 
                        { findIsle(i-1,j); }
                    if (myMap[i][j+1]) 
                        { findIsle(i,j+1); }
                    if (myMap[i+1][j]) 
                        { findIsle(i+1,j); }
                    if (myMap[i][j-1]) 
                        { findIsle(i,j-1); }
                    }
                else if (myMap[i][j]==0) {
                    history[0][historyCounter]=(i-1)*m+(j-1); 
                    history[1][historyCounter]=false;
                    historyCounter++;
                    }
            }
        }       
        
        //визуализация истории алгоритма
        var timer=0;
        var timerId = setInterval(function() {
            var number = history[0][timer]; 
            var color;
            if (history[1][timer]) 
                { color = '#c89909'; } 
                else { color = '#203ce7'; }
            cells[number].style.border = '1px solid '+color; 
            timer++;
            if (timer==history[0].length) 
                {clearInterval(timerId);}
            }, 500);
  
        
        return;
    }

    root.SHRI_ISLANDS.visualizeSolution = visualizeSolution;
})(this);
