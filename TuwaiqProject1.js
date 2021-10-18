// we try to keep our global variables at the top of the js file
const tourismContainer = $("tourismContainer");
const imgInput = $("#img");
const nameInput = $("#name");
const describeInput = $("#describe");
// an array of students with some data
const imgArray = [
  { imgArray: "../برج ايفل.jpg", name: "(برج_ايفل)", Describe: "باريس_فرنسا" },
  {
    imgArray: "../ذا ستريب.jpg",
    name: "(ذا_ستريب)",
    Describe: "لاس فيغاس_أمريكا",
  },
  {
    imgArray: "../برج لؤلؤة الشرق.jpg",
    name: "(لؤلؤة_الشرق)",
    Describe: "شانغهاي_الصين",
  },
  {
    imgArray: "../نايمز سكوير.jpg",
    name: "(تايمز_سكوير)",
    Describe: "نيويورك_أمريكا",
  },
];

function renderArr(array) {
  for (let i = 0; i < array.length; i++) {
    const div = $(`<div class="secondryContainer">
          <h1>${array[i].img}</h1>
          <h1>${array[i].name}</h1>
          <h1>${array[i].Describe}</h1>
      </div>`);
    tourismContainer.append(div);
  }
}

renderArr(imgArray);

renderArr(imgArray);

renderArr([newImg]);
