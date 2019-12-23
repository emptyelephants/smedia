'use strict';

$(document).ready(() => {
  const loadingWords = [
    'Spinning Up',
    'Fetching Data',
    'Cleaning Data',
    'Updating Client',
    'Loaded',
  ];

  // disable the form its just for show
  $('#not-real-form').submit((e) => {
    e.preventDefault();
    alert('Not A Real Form');
  });

  progressBarTick(35 ,'#bar-fill', loadingWords, '#progress-text');
});

const progressBarTick = (speed, barFillID ,wordsArray, barTextId) => {
  let progressCounter = 0, wordsArrayIndex = 0;
  const progressBarInterval = setInterval(() => {
    progressCounter += 1;
    $(`${barFillID} div`).css('width', `${progressCounter}%`);
    $(`${barFillID} span`).text(`${Math.floor(progressCounter)}%`);
    if (progressCounter % 20 == 0) {
      $(`${barTextId} span`).text(wordsArray[wordsArrayIndex++]);
    }
    if (progressCounter >= 100) {
      clearInterval(progressBarInterval);
      $(barFillID).parent().addClass('fadeOut');
      setTimeout(() => {
        $(barFillID).parent().hide();
        $(barFillID).parent().next().show();
        $(barFillID).parent().next().addClass('fadeIn');
      }
      , 1000);
    }
  }, speed);
};

