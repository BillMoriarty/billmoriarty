let scene, camera, renderer;
let cubes = [];

function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 5;
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
  const material = new THREE.LineBasicMaterial({ color: 0xffffff });
  const cube = new THREE.LineSegments(geometry, material);
  scene.add(cube);
  cubes.push(cube);
}

function animate() {
  requestAnimationFrame(animate);

  for (let i = 0; i < cubes.length; i++) {
    const cube = cubes[i];
    cube.position.x += (Math.random() - 0.5) * 0.1;
    cube.position.y += (Math.random() - 0.5) * 0.1;
    cube.position.z += (Math.random() - 0.5) * 0.1;
    cube.scale.x -= 0.002;
    cube.scale.y -= 0.002;
    cube.scale.z -= 0.002;
    if (cube.scale.x <= 0) {
      scene.remove(cube);
      cubes.splice(i, 1);
      i--;
    }
  }

  if (cubes.length < 200) {
    const geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
    const material = new THREE.LineBasicMaterial({ color: 0xffffff });
    const cube = new THREE.LineSegments(geometry, material);
    cube.position.set(0, 0, 0);
    scene.add(cube);
    cubes.push(cube);
  }

  renderer.render(scene, camera);
}

init();
animate();

document.addEventListener('mousemove', () => {
  const geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
  const material = new THREE.LineBasicMaterial({ color: 0xffffff });
  const cube = new THREE.LineSegments(geometry, material);
  cube.position.set(0, 0, 0);
  scene.add(cube);
  cubes.push(cube);
});