'use strict';

var html = require('raw!./view.embed-videos.html');

module.exports = {
  template: html,
  ready: function() {
    quasar.current.layout.vm.$data.title = 'Videos Embedding';
  }
};
