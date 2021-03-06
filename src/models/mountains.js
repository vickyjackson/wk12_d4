const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request_helper.js');

const Mountains = function(){
  this.mountainsData = [];
};

// Mountains.prototype.bindEvents = function(){
  
// }

Mountains.prototype.getData = function(){
  const request = new Request('https://munroapi.herokuapp.com/api/munros');
  request.get((data) => {
    this.mountainsData = data;
    PubSub.publish('Mountains:mountains-data-ready', this.mountainsData);
  })
};

module.exports = Mountains;