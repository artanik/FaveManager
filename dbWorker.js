const {app, BrowserWindow, ipcMain} = require('electron');
const fs = require('fs');
const _ = require('lodash');
const low = require('lowdb');
const path = __dirname + '/data/';
const pathPosts = path + 'posts.json';
const pathPhotos = path + 'photos.json';
const pathVideos = path + 'videos.json';

const dbPosts = low(pathPosts);

if (!fs.existsSync(path)){
  fs.mkdirSync(path);
}

ipcMain.on('checkData', (event) => {
  event.returnValue = !_.isEmpty(dbPosts.getState())
});
