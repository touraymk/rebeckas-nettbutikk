updateView();

function updateView() {
  const page = model.app.page;

  if (page === "main") updateViewMain();
  else if (page === "logIn") updateViewLogIn();
  else if (page === "overview") updateViewOverview();
  else if (page === "productSite") updateViewProduct();
  else if (page === "addProducts") updateViewAdd();
}
