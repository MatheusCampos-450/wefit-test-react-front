function adjustMenu() {
  const menu = document.getElementsByClassName("btn-group-vertical")[0];

  menu.className = "";
  menu.role = "";
  menu["aria-label"] = "";
}

adjustMenu();

function adjustHeader() {
  const headerColumn = document.getElementsByClassName("jumbotron")[0];
  headerColumn.className = `jumbotron text-right text-white bg-secondary`;

  const button = headerColumn.getElementsByClassName(
    "btn btn-primary btn-lg"
  )[0];
  button.className = "btn btn-success btn-lg";
}

adjustHeader();

function adjustCards() {
  const cardsContainer = document.getElementsByClassName("row")[2];

  const title = cardsContainer.children[0];

  const animais = cardsContainer.children[1];
  const tecnologia = cardsContainer.children[2];
  const pessoas = cardsContainer.children[3];
  const natureza = cardsContainer.children[4];

  while (cardsContainer.firstChild) {
    cardsContainer.removeChild(cardsContainer.firstChild);
  }

  const animaisButton = animais.getElementsByClassName("btn btn-primary")[0];
  animaisButton.className = "btn btn-success";

  const childs = [title, natureza, animais, pessoas, tecnologia];

  childs.forEach((item) => cardsContainer.appendChild(item));
}

adjustCards();

function createItemList(text) {
  const element = document.createElement("li");

  element.className = "list-group-item";
  element.innerText = text;

  return element;
}

function adjustList() {
  const listGroup = document.getElementsByClassName("list-group")[0];

  const firstItem = listGroup.children[0];
  firstItem.className = firstItem.className.replace("active");

  const fourthItem = createItemList("Quarto item");
  fourthItem.className = `${fourthItem.className} active`;

  const fifthItem = createItemList("Quinto item");

  listGroup.appendChild(fourthItem);
  listGroup.appendChild(fifthItem);
}

adjustList();
