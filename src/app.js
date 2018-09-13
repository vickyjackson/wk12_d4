const Mountains = require('./models/mountains.js');
const MountainListView = require('./views/list_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');
  const mountainListContainer = document.querySelector('#mountains');
  const mountainListView = new MountainListView(mountainListContainer);
  mountainListView.bindEvents();

  const mountains = new Mountains();
  mountains.getData();

})
