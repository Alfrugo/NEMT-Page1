<script type="module">

import * as THREE from 'https://cdn.skypack.dev/three@0.137.5';

const scene = new THREE.Scene();
			const camera = new THREE.PerspectiveCamera( 25, window.innerWidth / window.innerHeight, 0.6, 100 );

			const renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			
			document.getElementById("sphere").appendChild(renderer.domElement);


			const geometry = new THREE.SphereBufferGeometry( .5, 164, 164 );
			const material = new THREE.MeshNormalMaterial( { color: 0xbccf3c } )


			const sphere = new THREE.Mesh( geometry, material );
			scene.add( sphere );

			camera.position.z = 10;

			function animate() {
				requestAnimationFrame( animate );

				sphere.rotation.x += 0.01;
				sphere.rotation.y += 0.01;

				renderer.render( scene, camera );
			};

			animate();

</script>