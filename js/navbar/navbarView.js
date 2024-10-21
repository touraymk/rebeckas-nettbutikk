function showNavBar() {
  document.getElementById("app").innerHTML = /*HTML*/ ` 
 ${topNavBar()}
 ${bottomNavBar()}
 `;
}

function topNavBar() {
  let html = /*HTML*/ `
  <div class="topNavBarContainer">
  <img style="width: 100px; height: 100px;" src="source/img/alpakka.jpg">
  <input id="input1" class="input1" type="text">
  <div><p class="hover">Handlekurv</p></div>
  <div><p class="hover">Logg Inn</p></div>
  </div>
  `;

  return html;
}

function bottomNavBar() {
  let html = /*HTML*/ `
  <div class="bottomNavBarContainer">
  <div><p onclick="model.app.page = 'main'; updateView();" class="hover">Forsiden</p></div>
  <div><p onclick="model.app.page = 'overview'; updateView();" class="hover">Produktoversikten</p></div>
  <div><p onclick="model.app.page = 'productSite'; updateView();" class="hover">Produkter</p></div>
  <div><p onclick="model.app.page = 'main'; updateView();" class="hover">Design ditt produkt</p></div>
  <div><p onclick="model.app.page = 'addProducts'; updateView();" class="hover">Om Meg</p></div>
  </div>
    `;
  return html;
}
