export const projectService = {
   getProjects,
   downloadCv
}

async function downloadCv() {}

async function getProjects() {
   return await [
      {
         _id: _makeId(),
         name: 'Trackero',
         imgUrl: 'trackero1.png',
         links: [
            { name: 'github', link: 'https://github.com/noanissim/trackero-frontend' },
            { name: 'live', link: 'https://trackero.herokuapp.com/#/' }
         ],
         desc: [
            {
               id: 0,
               desc: 'Trackero is an end-to-end fully functioning task managment web app based on trello. '
            },
            {
               id: 1,
               desc: 'The app supports personal task boards, allowing simple and organized task tracking.'
            }
         ],
         tools: ['vue.js', 'Vuex', 'Node.js', 'Express.js', 'MongoDB', 'SCSS', 'Socket.io', 'Rest-api']
      },
      {
         _id: _makeId(),
         name: 'Appsus',
         imgUrl: 'appsus1.png',
         links: [
            { name: 'github', link: 'https://github.com/noanissim/Appsus' },
            { name: 'live', link: 'https://noanissim.github.io/Appsus/#/' }
         ],
         desc: [
            {
               id: 0,
               desc: 'Appsus is a dual frontend email and note keeping application. '
            },
            {
               id: 1,
               desc: 'The app includes integration between the emails and notes: Note can be sent as an email, and email can be saved as a note'
            },
            {
               id: 2,
               desc: 'Inspired by Gmail and Google-Keep.'
            }
         ],
         tools: ['vue.js', 'Javascript', 'CSS3']
      },
      {
         _id: _makeId(),
         name: 'Mister-Bitcoin',
         imgUrl: 'bitcoinAngular1.png',
         links: [
            { name: 'github', link: 'https://github.com/noanissim/mister-bitcoin-angular' },
            { name: 'live', link: 'https://noanissim.github.io/mister-bitcoin-angular/#/' }
         ],
         desc: [
            {
               id: 0,
               desc: 'CRUD app for hold and transfer digital bitcoin coins to contacts. '
            },
            {
               id: 1,
               desc: 'Includes working with blockchain API and presenting data in charts.'
            }
         ],
         tools: ['Angular', 'RXJS', 'SCSS', 'Rest-api', 'ngx-chart', 'Angular Material UI']
      },
      {
         _id: _makeId(),
         name: 'SpaceX',
         imgUrl: 'spacex1.png',
         links: [
            { name: 'github', link: 'https://github.com/noanissim/mister-bitcoin-angular' },
            { name: 'live', link: 'https://noanissim.github.io/mister-bitcoin-angular/#/' }
         ],
         desc: [
            {
               id: 0,
               desc: 'CRUD app for displaying space landings using external asynchronous API. '
            },
            {
               id: 1,
               desc: 'This app was part of a test and lasted only 5 hours.'
            }
         ],
         tools: ['React', 'Redux-Thunk', 'Redux', 'SCSS', 'Rest-api', 'Material-UI', 'MUI']
      },
      {
         _id: _makeId(),
         name: 'Meme Generator',
         imgUrl: 'meme1.png',
         links: [
            { name: 'github', link: 'https://github.com/noanissim/Meme-Generator' },
            { name: 'live', link: 'https://noanissim.github.io/Meme-Generator/' }
         ],
         desc: [
            {
               id: 0,
               desc: 'This application is an online image maker that lets you add custom resizable text, stickers, and much more to templates, and share/download the final result to your device'
            },
            {
               id: 1,
               desc: "People often use the generator to customize established memes, such as those found in Imgflip's collection of Meme Templates."
            }
         ],
         tools: ['Vanilla javascript', 'HTML5', 'CSS3']
      },
      {
         _id: _makeId(),
         name: 'Minesweeper',
         imgUrl: 'minesweeper1.png',
         links: [
            { name: 'github', link: 'https://github.com/noanissim/Minesweeper' },
            { name: 'live', link: 'https://noanissim.github.io/Minesweeper/' }
         ],
         desc: [
            {
               id: 0,
               desc: 'This application is a clone for the famous "Minesweeper" game, that was developed during the first sprint in Coding Academy bootcamp'
            },
            {
               id: 1,
               desc: 'Including all different levels, lives, hints and other features.'
            },
            {
               id: 2,
               desc: 'The tiles exposing is carried out using recursion'
            }
         ],
         tools: ['Vanilla javascript', 'HTML5', 'CSS3']
      }
   ]
}

function _makeId(length = 10) {
   var txt = ''
   var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
   for (var i = 0; i < length; i++) {
      txt += possible.charAt(Math.floor(Math.random() * possible.length))
   }
   return txt
}
