'use strict';

$(document).ready(() => {
  const facesUrls = [
    './assets/face1.jpg',
    './assets/face2.jpg',
    './assets/face3.jpg',
    './assets/face4.jpg',
    './assets/face5.jpg',
    './assets/face6.jpg',
    './assets/face7.jpg',
  ];
  
  cycleFaces(facesUrls, '#faces-target');

});

const cycleFaces = (faces, imageContainerId) => {
  let imageIndex = 0;
  setInterval(() => {
    $(imageContainerId).css('background-image',() => {
      return `url(${faces[imageIndex++ % faces.length]})`;
    });
  },500);

}