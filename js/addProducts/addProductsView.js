function updateViewAdd() {
  updateViewAdd();
  function updateViewAdd() {
    document.getElementById("app").innerHTML = /*html*/ ` 
        <div class="create-container">             
          <div>
            <input type="file" onchange="readFile(this)"/>
            <img id="productImage" />
          </div>
          <div class="input-container">
            <div id="label">
              <label for="pName">Produktnavn: </label>
              <input 
              type="text"
              id="pName"
              onchange="model.input.createProducts.productName=this.value"
              />
            </div>
            <div id="label">
              <label for="pColor">Farge: </label>
              <input 
              type="color"
              id="pColor"
              /> 
              
            </div>
            <div id="label">
              <label for="pYarn">Garntype: </label>
              <select id="pYarn"> 
                <option>Alpakka</option>
                <option>Mohair</option>
                <option>Ull</option>
              </select>
            </div>
            <div id="label">
              <label for="pSize">Tilgjengelige størrelser: </label>
              <select id="pSize"> 
                <option>S</option>
                <option>XS</option>
                <option>M</option>
                <option>L</option>
              </select>
            </div>
            <div id="label">
              <label for="pCategory">Kategori: </label>
              <select  id="pCategory"> 
                <option>Sokker</option>
                <option>Genser</option>
                <option>Skjerf</option>
              </select>
            </div>
            <div id="label">
              <label for="pNumber">Antall: </label>
              <input type="range" id="pNumber"/>
            </div>
          </div>
        </div>
`;
  }
}

async function readFile(fileInput) {
  const byteArray = await fileInput.files[0].arrayBuffer();
  showImage("myImage", byteArray);
}

function showImage(productImage, imageBytes) {
  const blob = new Blob([imageBytes], {
    type: "image/jpeg",
  });
  const urlCreator = window.URL || window.webkitURL;
  const imageUrl = urlCreator.createObjectURL(blob);
  document.getElementById("productImage").src = imageUrl;
}
