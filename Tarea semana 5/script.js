const inputUrl = document.getElementById("image-url");
const addBtn = document.getElementById("add-image");
const deleteBtn = document.getElementById("delete-image");
const gallery = document.getElementById("gallery");

let selectedImage = null;

//Agreaga imagen al DOM
addBtn.addEventListener("click", () => {
  const url = inputUrl.value.trim();
  if (!url) { 
    alert;("SIERRA EMPANADA.JPG")
  }
    

  const img = document.createElement("img");
  img.src = url;
  img.alt = "Imagen de la galería";

  img.addEventListener("click", () => {
    if (selectedImage) selectedImage.classList.remove("selected");
    img.classList.add("selected");
    selectedImage = img;
  });

  gallery.appendChild(img);
  inputUrl.value = "";
});

deleteBtn.addEventListener("click", () => {
  if (selectedImage) {
    gallery.removeChild(selectedImage);
    selectedImage = null;
  }
});

// También puedes manejar eventos de teclado (opcional)
document.addEventListener("keydown", (event) => {
  if (event.key === "Delete" && selectedImage) {
    gallery.removeChild(selectedImage);
    selectedImage = null;
  }
});