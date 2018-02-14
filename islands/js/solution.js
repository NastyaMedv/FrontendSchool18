(function (root) {
    var WATER = root.SHRI_ISLANDS.WATER;
    var ISLAND = root.SHRI_ISLANDS.ISLAND;

    /**
     * Функция находит кол-во островов на карте
     * ВАЖНО! Сигнатуру функции изменять нельзя!
     *
     * @param {number[][]} map карта островов представленная двумерной матрицей чисел
     * @returns {number} кол-во островов
     */
    function solution(map) {
        // todo: подсчитать кол-во островов на карте
        
        var n = root.SHRI_ISLANDS.MAP.length;
        var m = root.SHRI_ISLANDS.MAP[0].length;
        
        //создаем рабочий массив - копия карты с рамкой-буфером из нулей, чтобы 
        //постоянно не проверять выход за границы при поиске в глубину
        var myMap=[];
        myMap[0] = []; 
        for (var j=0; i<m+2; j++)  {
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
        for (var j=0; i<m+2; j++)  {
            myMap[n+1][j] = 0;
        }
        
        
        var isleCounter = 0;
        
        //поиск в глубину (ищем все клетки острова)
        function findIsle(x,y) {
            if (myMap[x][y]==1) {
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
        for (var i=0; i<n+2; i++)  {
            for (var j=0; j<m+2; j++) {
                if (myMap[i][j]==1) {
                    myMap[i][j]=2;
                    if (myMap[i-1][j]) 
                        { findIsle(i-1,j); }
                    if (myMap[i][j+1]) 
                        { findIsle(i,j+1); }
                    if (myMap[i+1][j]) 
                        { findIsle(i+1,j); }
                    if (myMap[i][j-1]) 
                        { findIsle(i,j-1); }
                    isleCounter++;
                    }
                
            }
        }
        
        //alert(isleCounter);
        return isleCounter;
    }

    root.SHRI_ISLANDS.solution = solution;
})(this);
