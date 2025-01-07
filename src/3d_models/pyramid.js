import * as THREE from "three";

export function initPyramid(container) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    container.clientWidth / container.clientHeight,
    0.1,
    1000
  );
  const renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.shadowMap.enabled = true;
  container.appendChild(renderer.domElement);

  const geometry = new THREE.ConeGeometry(3, 6, 4);
  const material = new THREE.MeshStandardMaterial({
    color: 0xff0000,
    roughness: 0.4,
    metalness: 0.3,
  });
  const pyramid = new THREE.Mesh(geometry, material);
  pyramid.castShadow = true;
  scene.add(pyramid);

  const planeGeometry = new THREE.PlaneGeometry(20, 20);
  const planeMaterial = new THREE.ShadowMaterial({ opacity: 0.5 });
  const plane = new THREE.Mesh(planeGeometry, planeMaterial);
  plane.rotation.x = -Math.PI / 2;
  plane.position.y = -3.5;
  plane.receiveShadow = true;
  scene.add(plane);

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
  directionalLight.position.set(0, 10, 0);
  directionalLight.castShadow = true;
  directionalLight.target = pyramid;
  scene.add(directionalLight);

  camera.position.z = 10;

  function animate() {
    requestAnimationFrame(animate);
    pyramid.rotation.y += 0.02;
    renderer.render(scene, camera);
  }
  animate();
}
