let pageTitleElement;
let outputGridElement;
let projectDisplayElement;

let knits = [
  {
    "itemTitle" : "toques",
    "category" : "k&#246;tturinn",
    "id" : "toques",
    "description" : "The knitted toque is ",
    "image" : "images/toques/pumkinhat.jpg",
    "image2" : "images/toques/pang.jpeg",
    "image3" : "images/toques/cat.png",
    "image4" : "images/toques/love.png"
  },
  {
    "itemTitle" : "selbuvotter",
    "category" : "k&#246;tturinn",
    "id" : "selbuvotter",
    "description" : "<a href='https://example.com' target='_blank'>@selbu.kotturinn</a>",
    "image" : "images/selbuvotter/catsniff.png",
    "image2" : "images/selbuvotter/front.png",
    "image3" : "images/selbuvotter/palm.png",
    "image4" : "images/selbuvotter/mitten.GIF",
  },
  {
    "itemTitle" : "scarfs",
    "category" : "k&#246;tturinn",
    "id" : "scarfs",
    "description" : "Cosmic fugue concept of the number one Orion's sword at the edge of forever intelligent beings a very small stage in a vast cosmic arena. A very small stage in a vast cosmic arena a very small stage in a vast cosmic arena something incredible is waiting to be known muse about intelligent beings the carbon in our apple pies.",
    "image" : "images/scarfs/logo.png",
    "image2" : "images/scarfs/scarf2.png",
    "image3" : "images/scarfs/scarf.png"
  }
];

document.addEventListener("DOMContentLoaded", function(){

  /* Get page element references */
  pageTitleElement = document.getElementById("pageTitle");
  outputGridElement = document.getElementById("outputGrid");
  projectDisplayElement = document.getElementById("projectDisplay");

  /* Get URL Params */
  let queryString = window.location.search;
  let urlParams = new URLSearchParams(queryString);
  let urlSection = urlParams.get('section');
  let urlID = urlParams.get('id');

  if (urlSection != "item") {
    for (let i = 0; i < knits.length; i++) {
      if (knits[i]["category"] == urlSection || urlSection == "" || urlSection == null){
        createProjectPreview(knits[i]);
      }
    }
  }
    for (let i = 0; i < knits.length; i++) {
      if (knits[i]["id"] == urlID) {
        createProjectPage(knits[i]);
      }
    }
});


function createProjectPreview(incomingJSON){

  let newPreviewLink = document.createElement("A");
  newPreviewLink.href = "index.html?section=item&id=" + incomingJSON["id"] + "#main-container";
  document.documentElement.style.scrollBehavior = "smooth";

  let newPreviewElement = document.createElement("DIV");
  newPreviewLink.appendChild(newPreviewElement);

 

  let newPreviewThumbnail = document.createElement("IMG");
  newPreviewThumbnail.classList.add("thumbnail");
  newPreviewThumbnail.src = incomingJSON["image"];
  newPreviewElement.appendChild(newPreviewThumbnail);

  let newPreviewTitle = document.createElement("P");
  newPreviewTitle.classList.add("previewTitle");
  newPreviewTitle.innerText = incomingJSON["itemTitle"];
  newPreviewElement.appendChild(newPreviewTitle);

  outputGridElement.appendChild(newPreviewLink);

}

function createProjectPage(incomingJSON) {
  
  pageTitleElement.innerText = incomingJSON["itemTitle"];

  let newProjectElement = document.createElement("DIV");

  let newProjectImage = document.createElement("IMG");
  newProjectImage.classList.add("projectHeroImage");
  newProjectImage.src = incomingJSON["image"];
  newProjectElement.appendChild(newProjectImage);

  let newProjectImage2 = document.createElement("IMG");
  newProjectImage2.classList.add("projectHeroImage2");
  newProjectImage2.src = incomingJSON["image2"];
  newProjectElement.appendChild(newProjectImage2);

  let newProjectImage3 = document.createElement("IMG");
  newProjectImage3.classList.add("projectHeroImage3");
  newProjectImage3.src = incomingJSON["image3"];
  newProjectElement.appendChild(newProjectImage3);

  let newProjectImage4 = document.createElement("IMG");
  newProjectImage4.classList.add("projectHeroImage4");
  newProjectImage4.src = incomingJSON["image4"];
  newProjectElement.appendChild(newProjectImage4);

  let newProjectDescription = document.createElement("P");
  newProjectDescription.classList.add("description");
  newProjectDescription.innerText = incomingJSON["description"];
  newProjectElement.appendChild(newProjectDescription);

  projectDisplayElement.appendChild(newProjectElement);

}
