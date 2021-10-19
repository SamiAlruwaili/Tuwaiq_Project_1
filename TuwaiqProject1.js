const tourismContainer = $("tourismContainer");
const imgInput = $("#img");
const nameInput = $("#name");
const describeInput = $("#describe");

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
          <img src =${array[i].img}>
          <h3 src =${array[i].name}>
          <h3 src${array[i].Describe}>
      </div>`);
    tourismContainer.append(div);
  }
}

function world() {
  imgArray: imgInput.val();
  nameArray: nameInput.val();
  descriArray: describeInput.val;
}

renderArr(imgArray);

renderArr(imgArray);

renderArr([newImg]);

function hideHandler() {
  tourismContainer.hide();
}

function showHandler() {
  tourismContainer.show();
}
