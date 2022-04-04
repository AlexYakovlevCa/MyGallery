console.log('Starting up');

$(init);

function init() {
  renderPortfolio();
}

function renderPortfolio() {/////// get modal by id !!!!!!
  const strHTML = gProj.map(
    (proj) => `  
<div class="col-md-3 col-sm-6  portfolio-item">
          <a class="portfolio-link" data-toggle="modal"onclick="renderModal
          ('${proj.publishedAt}','${proj.projName}','${proj.img}','${proj.title}','${proj.url}')" href="#portfolioModal">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" src="${proj.img}" alt="">
          </a>
          <div class="portfolio-caption">
            <h4>${proj.projName}</h4>
            <p class="text-muted">${proj.title}</p>
          </div>
        </div> 
`
  );
  $('.proj-rows').html(strHTML.join());
}
function renderModal(date, name, img, cat, url) {
  console.log(date, name, img);
  document.querySelector('.modal-img').src = img;
  document.querySelector('.proj-date').innerText = `Date: ${date}`;
  document.querySelector('.proj-cat').innerText = `Cattegory: ${cat}`;
  document.querySelector('.proj-name').innerText = `Name: ${name}`;
  document.querySelector('.check-btn').href = url;
}
function onSendMsg(ev) {
  ev.preventDefault();
  sendMsg();
}

// $('.modal-img').src(img)
// $('.proj-date').text(`Date: ${date}`) 
// $('.proj-cat').text( `Cattegory: ${cat}`)
// $('.proj-name').text( `Name: ${name}`)
// $('.check-btn').href = url;