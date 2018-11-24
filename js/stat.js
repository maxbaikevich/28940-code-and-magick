'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_PADDING_TOP = 250;
var WIDTH_COLUMN = 40;
var DISTANCE_COLUMN = 50;
var HEIGT_COLUMN = -150;
var PADDING_LEFT_COLUMN = 140;
var PADDING_TOP_COLUMN = 240;


var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};
window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', 130, 25);
  ctx.fillText('Список результатов:', 130, 45);
  var getMaxElement = function (arr) {
    var maxElement = arr[0];

    for (var i = 1; i <= arr.length - 1; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }
    return maxElement;
  };

  var maxTime = getMaxElement(times);
  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      var saturation = Math.random() * 100;
      ctx.fillStyle = 'hsl(255, ' + saturation + '%, 50%, 1)';
    }
    ctx.fillRect((PADDING_LEFT_COLUMN + (DISTANCE_COLUMN * (i + i))), PADDING_TOP_COLUMN, WIDTH_COLUMN, (HEIGT_COLUMN * times[i]) / maxTime);
    ctx.fillStyle = 'black';
    ctx.fillText(players[i], (PADDING_LEFT_COLUMN + (DISTANCE_COLUMN * (i + i))), FONT_PADDING_TOP);
    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), (PADDING_LEFT_COLUMN + (DISTANCE_COLUMN * (i + i))), ((HEIGT_COLUMN) * times[i]) / maxTime + 220);
  }
};
