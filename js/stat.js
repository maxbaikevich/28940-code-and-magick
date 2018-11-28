'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_SHADOW_SHIFT = 10;
var BAR_WIDTH = 40;
var BAR_MARGIN = 50;
var BAR_HEIGHT = 150;
var PADDING_LEFT_COLUMN = 140;
var CHART_Y = 240;
var LABEL_X = 130;
var LABEL_Y = 25;
var FONT_HEIGHT = 15;
var CALOR_BLACK = '#000';

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i <= arr.length - 1; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};


var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};
window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + CLOUD_SHADOW_SHIFT, CLOUD_Y + CLOUD_SHADOW_SHIFT, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  ctx.fillStyle = CALOR_BLACK;
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', LABEL_X, LABEL_Y);
  ctx.fillText('Список результатов:', LABEL_X, LABEL_Y + FONT_HEIGHT);

  var maxTime = getMaxElement(times);
  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = CALOR_BLACK;
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(255, ' + Math.floor(Math.random() * 100) + '%, 50%, 1)';
    }
    var x = (PADDING_LEFT_COLUMN + (BAR_WIDTH + BAR_MARGIN) * i);
    var y = CHART_Y;
    var height = (BAR_HEIGHT * times[i]) / maxTime;
    var window = BAR_WIDTH;
    var BAR_LABEL_GAP = 5;
    var scoreY = CHART_Y - height - BAR_LABEL_GAP - FONT_HEIGHT;
    var playerY = CHART_Y + BAR_LABEL_GAP;

    ctx.fillRect(x, y, window, Math.floor(-height));
    ctx.fillStyle = CALOR_BLACK;
    ctx.fillText(players[i], x, playerY);
    ctx.fillStyle = CALOR_BLACK;
    ctx.fillText(Math.round(times[i]), x, scoreY);
  }
};
