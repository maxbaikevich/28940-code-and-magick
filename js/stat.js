//Отрисовать белое облоко;
//Под облаком отрисовать тень;
//На облаке отрисовать текст сообщения ’Ура вы победили!\nСписок результатов:’;
//отрисовать гистограмма времён участников;
/*Высота гистограммы 150px.
  Ширина колонки 40px.
  Расстояние между колонками 50px.
  Цвет колонки игрока Вы rgba(255, 0, 0, 1).
  Цвет колонок других игроков — синий, а насыщенность задаётся случайным образом.
*/
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_PADDING_LEFT= 170;
var FONT_PADDING_TOP = 250;
var WIDTH_COLUMN = 40;
var HEIGT_COLUMN = -150;
var PADDING_LEFT_COLUMN = 170;
var PADDING_TOP_COLUMN = 240;



var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};
window.renderStatistics = function(ctx, players,times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP , 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  var getMaxElement = function(arr) {
    var maxElement = arr[0];

    

    for (var i = 1; i <= arr.length - 1; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
  }
  return maxElement;
};

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', 130, 25);
  ctx.fillText('Список результатов:',130, 45);
 
  ctx.fillStyle = '#000';
  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
  
  ctx.fillText(players[i], (PADDING_LEFT_COLUMN + (WIDTH_COLUMN * (i + i))) , FONT_PADDING_TOP);
  ctx.fillRect((PADDING_LEFT_COLUMN +(WIDTH_COLUMN * (i + i))), PADDING_TOP_COLUMN, WIDTH_COLUMN,(HEIGT_COLUMN * times[i]) / maxTime);

  }

};
