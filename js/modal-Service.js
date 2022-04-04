const gProj = createProjects ()


console.log(gProj);

function createProjects (){
    return [
        createProj('mine-sweeper','MineSweeper','Game','img/portfolio/mine-sweeper.jpg','https://alexyakovlevca.github.io/mineSweeper/'),
        createProj('book-shop','bookShop','Book Shop Project','img/portfolio/book-shop.jpg','https://alexyakovlevca.github.io/TestGit/'),
        createProj('ball-board','BallBoard','Game','img/portfolio/ball-board.jpg','https://alexyakovlevca.github.io/ball-board/'),
        createProj('mine-sweeper','MineSweeper','Game','img/portfolio/mine-sweeper.jpg','https://alexyakovlevca.github.io/mineSweeper/'),
        createProj('book-shop','bookShop','Book Shop Project','img/portfolio/book-shop.jpg','https://alexyakovlevca.github.io/TestGit/'),
        createProj('ball-board','BallBoard','Game','img/portfolio/ball-board.jpg','https://alexyakovlevca.github.io/ball-board/'),
    ]
}


function createProj(id,projName,title,img,url) {
  return {
    id,
    projName: projName,
    title: title,
    desc: 'lorem ipsum lorem ipsum lorem ipsum',
    img,
    publishedAt: convertTime(new Date()),
    url,
  };
}

function sendMsg(){
    var elPersonAdrs = document.querySelector('.mail-person')
    var elPersonMsg = document.querySelector('.mail-text')
    console.log(elPersonMsg.value.length);
    if(elPersonMsg.value.length===0||elPersonAdrs.value.length===0) return
   window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${elPersonAdrs.value}&su=SUBJECT&body=${elPersonMsg.value}`,"_blank")
   elPersonAdrs.value = ''
   elPersonMsg.value = ''
   openCanvas()
}