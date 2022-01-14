//server code

const Datastore= require('nedb');

// const database= new Datastore({filename: 'database.db',autoload: true});

// database.loadDatabase();

// database.insert([{ a: 5 }, { a: 42 }], function (err, newDocs) {
//   // Two documents were inserted in the database
//   // newDocs is an array with these documents, augmented with their _id
// });
// console.log("server is running");







//electron main woindow

const {app, BrowserWindow,Menu,shell} = require('electron')
  const path = require('path')
  const url = require('url')
  
  function createWindow () {
    // Create the browser window.
    win = new BrowserWindow({width: 800, height: 600})

    //menu bar
    const template=[
      {
        label: 'Action',
          submenu:[
            {
              label: 'Enter data',
              click: function(){
                shell.openExternal('https://www.electronjs.org/docs/latest/api/shell')
              }
            },
            {
              label: 'View data'
            },
            {
              label: 'Make Result'
            }
          ]
      },
      {
        label: 'File',
          submenu: [
            {
              label: 'Open File'
            },
            {
              label: 'Edit File'
            },
            {
              label: 'Delete File'
            }
          ]
           
      },
  
      
      

      {
        label: 'Help',
          submenu:[
            {
              label:'Troubleshoot'
            }
          ]
      }
    ]
 app
    const menu= Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);

  
    // and load the index.html of the app.
    win.loadURL(url.format({
      pathname: path.join(__dirname, 'dataenter.html'),
      protocol: 'file:',
      slashes: true
    }))
}


//for server

//let server = require('./server.js')


app.on('ready', function(){
  createWindow();
  win.webContents.openDevTools();
})