const { ipcRenderer } = require('electron');

const dbWorker = {};

// data
dbWorker.checkData = () => ipcRenderer.sendSync('checkData');

export default dbWorker;
