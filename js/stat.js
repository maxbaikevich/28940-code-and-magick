//Отрисовать белое облоко;
//Под облаком отрисовать тень;
//На облаке отрисовать текст сообщения ’Ура вы победили!\nСписок результатов:’;
//отрисовать гистограмма времён участников;
/*Высота гистограммы 150px.
  Ширина колонки 40px.
  Расстояние между колонками 50px.
  Цвет колонки игрока Выrgba(255, 0, 0, 1).
  Цвет колонок других игроков — синий, а насыщенность задаётся случайным образом.
*/
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};
window.renderStatistics = function(ctx) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, '#fff');

  
};