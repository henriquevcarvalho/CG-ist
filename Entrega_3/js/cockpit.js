'use strict';

class Cockpit extends THREE.Object3D{

	constructor(x, y, z){
                super();		


		this.geometry = new THREE.Geometry(); 
                this.geometry.vertices.push(
                        new THREE.Vector3(-25, -7, -15),
                        new THREE.Vector3(-70, -7, -15),
                        new THREE.Vector3(-25, 27, -15),
                        
                        new THREE.Vector3(-25, -7, 10),
                        new THREE.Vector3(-70, -7, 10),
                        new THREE.Vector3(-25, 27, 10));
                
                //Front Face
                this.geometry.faces.push(new THREE.Face3(0, 1, 2));
                this.geometry.faces.push(new THREE.Face3(3, 4, 5));

                //Back Face
                this.geometry.faces.push(new THREE.Face3(0, 3, 2));
                this.geometry.faces.push(new THREE.Face3(2, 5, 3));

                //Top Face
                this.geometry.faces.push(new THREE.Face3(2, 5, 1));
                this.geometry.faces.push(new THREE.Face3(5, 1, 4));

                //Bottom Face
                this.geometry.faces.push(new THREE.Face3(4, 1, 0));
                this.geometry.faces.push(new THREE.Face3(4, 3, 0));


                this.geometry.computeFaceNormals();

                this.material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });

                this.mesh1 = new THREE.Mesh(this.geometry, this.material);
                this.mesh1.position.set(-50, 27, -3);

                this.mesh1.rotation.y = Math.PI;

                scene.add(this.mesh1);
	}
}