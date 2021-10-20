const mainContainer = $("#mainContainer");
const imgInput = $("#img");
const nameInput = $("#name");
const describeInput = $("#describe");

const imgArray = [
  {
    imgArray:
      "https://www.wmadaat.com/upload/09-2020/article/5f57b610354de.jpg",
    name: "(برج ايفل)",
    Describe: "باريس_فرنسا",
  },
  {
    imgArray:
      "https://www.wmadaat.com/upload/09-2020/article/las-vegas-strip-wmadaat.jpg",
    name: "(ذا ستريب)",
    Describe: "لاس فيغاس_أمريكا",
  },
  {
    imgArray:
      "https://www.wmadaat.com/upload/09-2020/article/5f57baf39ffa5.jpg",
    name: "(لؤلؤة الشرق)",
    Describe: "شانغهاي_الصين",
  },
  {
    imgArray:
      "https://www.wmadaat.com/upload/09-2020/article/5f57bc61abf0e.jpg",
    name: "(تايمز سكوير)",
    Describe: "نيويورك_أمريكا",
  },
  {
    imgArray: "https://www.wmadaat.com/upload/09-2020/article/Burj-Khalifa.jpg",
    name: "(برج خليفة)",
    Describe: "دبي_الامارات",
  },
  {
    imgArray:
      "https://www.wmadaat.com/upload/09-2020/article/5f57bbcf4d336.jpg",
    name: "(ميناء كاليفورنيا)",
    Describe: "هونغ كونغ_الصين",
  },
  {
    imgArray:
      "https://www.wmadaat.com/upload/09-2020/article/5f592f664d13d.jpg",
    name: "(ديزني لاند)",
    Describe: "كاليفورنيا_أمريكا",
  },
  {
    imgArray:
      "https://www.wmadaat.com/upload/09-2020/article/5f5936d4bc423.jpg",
    name: "(دار الاوبرا)",
    Describe: "سيدني_أستراليا",
  },
  {
    imgArray:
      "https://www.wmadaat.com/upload/09-2020/article/Niagara_Falls_Ontario_Canada_09.jpg",
    name: "(شلالات نياجرا)",
    Describe: "نيويورك_أمريكا,اونتاريو_كندا",
  },
];

function renderArr(array) {
  for (let i = 0; i < array.length; i++) {
    const div = $(`<div class="secondryContainer">
          <img src =${array[i].imgArray}>
          <h3> ${array[i].name}</h3>
          <h3>${array[i].Describe}</h3>
          <button onclick="remove(${i})">remove</button>
      </div>`);
    mainContainer.append(div);
  }
}
renderArr(imgArray);
function world() {
  const newWord = {
    imgArray: imgInput.val(),
    name: nameInput.val(),
    Describe: describeInput.val(),
  };
  imgArray.push(newWord);
  renderArr([newWord]);
}

let hideShow = $("hideShow");
let hideBtn = $("hideBtn");
let showBtn = $("showBtn");
function hideHandler() {
  mainContainer.hide();
}

function showHandler() {
  mainContainer.show();
}
function remove(i) {
  imgArray.splice(i, 1);
  mainContainer.html("");
  renderArr(imgArray);
}
