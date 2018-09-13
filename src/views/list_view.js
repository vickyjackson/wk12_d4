const PubSub = require('../helpers/pub_sub.js');
const MountainView = require('./mountain_view.js');

const ListView = function(container){
  this.container = container;
};

ListView.prototype.bindEvents = function(){
  PubSub.subscribe('Mountains:mountains-data-ready', (event) => {
    this.mountainsData = event.detail;
    this.render();
  });
};

ListView.prototype.render = function() {
  this.mountainsData.forEach((mountain) => {
    const mountainView = new MountainView(this.container, mountain);
    mountainView.render();
  });
};

module.exports = ListView;