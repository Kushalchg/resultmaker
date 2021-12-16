
//database code
const Datastore= require('nedb');
const database= new Datastore('database.db');
database.loadDatabase();




var doc = { hello: 'world'
               , n: 5
               , today: new Date()
               , nedbIsAwesome: true
               , notthere: null
               , notToBeSaved: undefined  // Will not be saved
               , fruits: [ 'apple', 'orange', 'pear' ]
               , infos: { name: 'nedb' }
               };

database.insert(doc, function (err, newDoc) {   // Callback is optional
  // newDoc is the newly inserted document, including its _id
  // newDoc has no key called notToBeSaved since its value was undefined
});






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

    const menu= Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);

  
    // and load the index.html of the app.
    win.loadURL(url.format({
      pathname: path.join(__dirname, 'dataenter.html'),
      protocol: 'file:',
      slashes: true
    }))
}
app.on('ready', createWindow)
