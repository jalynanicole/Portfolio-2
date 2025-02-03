import { data } from "./data/data.js";
import { createThreeScene } from "./threeScene.js";

document.getElementById("name").textContent = data.name;
document.getElementById("bio").textContent = data.bio;

const linksContainer = document.getElementById("links");
Object.keys(data.contact).forEach((key) => {
  const link = document.createElement("a");
  link.href = data.contact[key];
  link.target = "_blank";
  link.textContent = key.charAt(0).toUpperCase() + key.slice(1);
  linksContainer.appendChild(link);
});

function populateModelButtons() {
  const modelPaths = [
    { path: "3d_models/project1/torus_obj.obj", label: "Torus" },
    { path: "3d_models/project2/pavilion_obj", label: "Pavilion" },
    { path: "3d_models/project3/tiny_baymax.obj", label: "Baymax" },
  ];

  const controls = document.getElementById("controls");

  modelPaths.forEach((model, index) => {
    const button = document.createElement("button");
    button.className = "project-btn";
    button.textContent = model.label;
    button.onclick = () => loadModel(model.path, index);
    controls.appendChild(button);
  });
}

function loadModel(modelPath, index) {
  const containerSelector = "#model-container";

  const container = document.querySelector(containerSelector);
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  createThreeScene(containerSelector, modelPath);
}

populateModelButtons();
