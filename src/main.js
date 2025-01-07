import { data } from "./data/data.js";
import { initSphere } from "./3d_models/sphere.js";
import { initPyramid } from "./3d_models/pyramid.js";
import { initCube } from "./3d_models/cube.js";

document.getElementById("name").innerText = data.name;
document.getElementById("bio").innerText = data.bio;

const linksDiv = document.getElementById("links");
const links = [
  {
    href: `mailto:${data.contact.email}`,
    text: `Email: ${data.contact.email}`,
  },
  { href: `tel:${data.contact.phone}`, text: `Phone: ${data.contact.phone}` },
  { href: data.contact.linkedin, text: "LinkedIn" },
  { href: data.contact.github, text: "GitHub" },
];

links.forEach((link) => {
  const a = document.createElement("a");
  a.href = link.href;
  a.innerText = link.text;
  a.target = "_blank";
  linksDiv.appendChild(a);
});

function loadModel(type) {
  const container = document.getElementById("model-container");
  container.innerHTML = "";

  if (type === "sphere") {
    initSphere(container);
  } else if (type === "pyramid") {
    initPyramid(container);
  } else if (type === "cube") {
    initCube(container);
  }
}

window.loadModel = loadModel;
