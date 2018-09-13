const PubSub = require('../helpers/pub_sub.js');

const MountainView = function(container, mountain){
  this.container = container;
  this.mountain = mountain;
}

MountainView.prototype.render = function(){
  const mountainContainer = document.createElement('div');
  mountainContainer.classList.add('mountain');

  const name = this.createMountainName();
  mountainContainer.appendChild(name);

  const mountainDetailsList = document.createElement('ul');
  mountainDetailsList.classList.add('details');

  const details = this.createMountainDetailsList();
  mountainContainer.appendChild(details);

  this.container.appendChild(mountainContainer);
};

MountainView.prototype.createMountainName = function(){
  const name = document.createElement('h1');
  name.classList.add('mountain-name');
  if (!this.mountain.name){
    name.textContent = "Misc";
  } else {
    name.textContent = this.mountain.name;
  }
  return name;
};

MountainView.prototype.createMountainDetailsList = function(){
  const mountainDetailsList = document.createElement('ul');
  mountainDetailsList.classList.add('details');
  this.populateDetailsList(mountainDetailsList);
  console.log(mountainDetailsList);
  return mountainDetailsList;
};

MountainView.prototype.populateDetailsList = function(list){
 const meaning = document.createElement('li');
 meaning.textContent = this.mountain.meaning;
 list.appendChild(meaning);

 const height = document.createElement('li');
 height.textContent = this.mountain.height;
 list.appendChild(height);

 const region = document.createElement('li');
 region.textContent = this.mountain.region;
 list.appendChild(region);
};

module.exports = MountainView;