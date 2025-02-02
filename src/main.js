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
    { path: "3d_models/project1/model.obj", label: "Baymax" },
    { path: "3d_models/project2/model.obj", label: "Project 2" },
    { path: "public/3d_models/project3/website_baymax.obj", label: "Project 3" },
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

import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import * as THREE from 'three';

// Function to create the scene and load the model
function createThreeScene('#model-container', 'public/3d_models/project1/OBJ_Baymax_OG.obj')
{
  
  // Set up the scene
  const scene = new THREE.Scene();
  
  // Set up the camera
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  
  // Set up the renderer
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.querySelector(containerSelector).appendChild(renderer.domElement);

  // Set up lighting
  const light = new THREE.AmbientLight(0x404040); // Ambient light
  scene.add(light);

  // Load the OBJ model
  const loader = new OBJLoader();
  loader.load(
    modelPath,
    function (object) {
      // After loading, position the model
      object.position.set(10, 0, -10); // Adjust position (X, Y, Z coordinates)
      
      // Optionally scale the model if needed
      object.scale.set(0.5, 0.5, 0.5); // Scale the model (optional)
      
      // Add the model to the scene
      scene.add(object);
      
      // Render the scene
      animate();
    },
    function (xhr) {
      // Optional: Track progress
      console.log(`Model loaded: ${Math.round((xhr.loaded / xhr.total) * 100)}%`);
    },
    function (error) {
      console.error("Error loading model:", error);
    }
  );

  // Animation loop to render the scene
  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }

  // Set the camera position and orientation
  camera.position.z = 50;
}

export { createThreeScene };
