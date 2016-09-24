const { ipcRenderer } = require('electron');
const dbWorker = {};

//data
dbWorker.checkData = function() {
  return ipcRenderer.sendSync('checkData');
};

export default dbWorker;
