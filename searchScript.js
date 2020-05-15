const cilynderInfo = [
  {
    series:"CG1",
    address: "cg1.html",
    thread: ["M8X1.25", "M10X1.25", "M14X1.5", "M18X1.5","M22X1.5", "M26X1.5"]
  }
]
let parameter = document.getElementById("searchType");
let searchButton = document.getElementById("searchButton");


const show = (searchBox) => {
  searchBox.classList.remove("hidden");
  searchBox.classList.add("active");
}
const hide = () => {
  let activeBox = document.getElementsByClassName("active")[0];
  activeBox.classList.remove("active");
  activeBox.classList.add("hidden");
}

const searchType = () => {
  switch(parameter.value) {
    case "thread1":
      let searchBox = document.getElementById("threadValue");
      show(searchBox);
      break;
  }
}

const showResults = (result) => {
    let ul = document.getElementById("results");
    if(result.length > 0){
      result.forEach(result => {
        console.log ("forEach", result);
          let li = document.createElement("li");
          let a = document.createElement("a");
          let textNode = document.createTextNode(result.series);
          a.appendChild(textNode);
          a.href = result.address;
          li.appendChild(a);
          li.classList.add("activeResult");
          ul.appendChild(li);
    })}
    else{
      let li = document.createElement("li");
      let textNode = document.createTextNode("La busqueda no produjo resultados, intente con un nuevo parametro");
      li.appendChild(textNode);
      li.classList.add("activeResult");
      ul.appendChild(li);
    }
}

const searchThread = () => {
  let thread = document.getElementById("threadValue");
  const result = cilynderInfo.filter((cylinderInfo) => {
    return (cylinderInfo.thread.indexOf(thread.value.toUpperCase()) >= 0);
  })
  showResults(result);
}

const hideResults = () => {
  let childs = document.getElementsByClassName("activeResult");
  let parent = document.getElementById("results");
  for (i = 0; i < childs.length; i++) {
    console.log("Active function");
    parent.removeChild(childs[i]);
  }
}

parameter.addEventListener("change", hide);
parameter.addEventListener("change", searchType);
parameter.addEventListener("change", hideResults);
searchButton.addEventListener("click", hideResults);
searchButton.addEventListener("click", searchThread);