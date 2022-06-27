const url = "https://jsonplaceholder.typicode.com/albums/1/photos";
let pic = document.querySelector(".picDis");
let Input = document.querySelector(".changeInput");
Input.addEventListener("change", showpic);
async function showpic() {
  await fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        let option = document.createElement("option");
        option.innerHTML = data[i].title;
        Input.appendChild(option);
      }
      for (let x = 0; x < data.length; x++) {
        if (Input.value == data[x].title) {
          let picture = data[x].url;
          console.log(picture);
          pic.innerHTML = `<img class= "picStyle" src='${picture}'>`;
        }
      }
    })
    .catch((err) => {
      console.log("err");
    });
}
showpic();
