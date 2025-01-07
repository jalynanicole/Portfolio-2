import { data } from "./data/data.js";
import { createThreeScene } from "./threeScene.js";

// Populate Header and Links from data.js
document.getElementById("name").textContent = data.name;
document.getElementById("bio").textContent = data.bio;

const linksContainer = document.getElementById("links");
Object.keys(data.contact).forEach((key) => {
  const link = document.createElement("a");
  link.href = data.contact[key];
  link.target = "_blank";
  link.textContent = key.charAt(0).toUpperCase() + key.slice(1); // Capitalize
  linksContainer.appendChild(link);
});

// Dynamically generate buttons and load models
function populateModelButtons() {
  const modelPaths = [
    { path: "src/3d_models/project1/model.obj", label: "Project 1" },
    { path: "src/3d_models/project2/model.obj", label: "Project 2" },
    { path: "src/3d_models/project3/model.obj", label: "Project 3" },
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

// Load the model into the viewer using createThreeScene
function loadModel(modelPath, index) {
  const containerSelector = "#model-container";

  // Clear the container before loading a new model
  const container = document.querySelector(containerSelector);
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  // Use the createThreeScene function to load the model
  createThreeScene(containerSelector, modelPath);
}

// Populate buttons for available models
populateModelButtons();
