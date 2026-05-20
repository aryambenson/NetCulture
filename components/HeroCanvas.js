"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function HeroCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 0.1, 7);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);
    renderer.domElement.className = "hero-canvas";

    const group = new THREE.Group();
    scene.add(group);

    const coreGeometry = new THREE.IcosahedronGeometry(1.35, 4);
    const coreMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color("#1591DC"),
      emissive: new THREE.Color("#2C5EAD"),
      emissiveIntensity: 0.42,
      roughness: 0.18,
      metalness: 0.54,
      transparent: true,
      opacity: 0.72,
      wireframe: true
    });
    const core = new THREE.Mesh(coreGeometry, coreMaterial);
    group.add(core);

    const ringMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color("#4BB8FA"),
      transparent: true,
      opacity: 0.42,
      side: THREE.DoubleSide
    });

    const rings = [1.92, 2.36, 2.82].map((radius, index) => {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(radius, 0.006, 8, 180), ringMaterial.clone());
      ring.rotation.set(index * 0.74, index * 0.46, index * 0.28);
      group.add(ring);
      return ring;
    });

    const crimson = new THREE.Mesh(
      new THREE.SphereGeometry(0.14, 32, 32),
      new THREE.MeshBasicMaterial({ color: new THREE.Color("#D92243") })
    );
    crimson.position.set(2.2, 0.8, 0.4);
    group.add(crimson);

    const particleCount = 780;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i += 1) {
      const radius = 2.4 + Math.random() * 2.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particles = new THREE.Points(
      particleGeometry,
      new THREE.PointsMaterial({
        color: new THREE.Color("#C4E2F5"),
        size: 0.018,
        transparent: true,
        opacity: 0.74,
        depthWrite: false
      })
    );
    group.add(particles);

    const light = new THREE.PointLight("#4BB8FA", 60, 16);
    light.position.set(3, 3, 4);
    scene.add(light);
    scene.add(new THREE.AmbientLight("#C4E2F5", 1.2));

    const pointer = { x: 0, y: 0 };
    const onPointerMove = (event) => {
      const rect = renderer.domElement.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      pointer.y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    renderer.domElement.addEventListener("pointermove", onPointerMove);

    const resize = () => {
      const width = mount.clientWidth;
      const height = mount.clientHeight;
      renderer.setSize(width, height, false);
      camera.aspect = width / Math.max(height, 1);
      camera.updateProjectionMatrix();
    };
    resize();
    window.addEventListener("resize", resize);

    let frame = 0;
    const clock = new THREE.Clock();
    const animate = () => {
      const elapsed = clock.getElapsedTime();
      group.rotation.y += 0.004 + pointer.x * 0.0008;
      group.rotation.x += (pointer.y * 0.18 - group.rotation.x) * 0.02;
      core.rotation.z = elapsed * 0.16;
      crimson.position.x = Math.cos(elapsed * 0.88) * 2.25;
      crimson.position.y = Math.sin(elapsed * 1.12) * 1.15;
      rings.forEach((ring, index) => {
        ring.rotation.z += 0.0025 + index * 0.001;
        ring.material.opacity = 0.25 + Math.sin(elapsed + index) * 0.08;
      });
      particles.rotation.y -= 0.0018;
      particles.rotation.x += 0.0008;
      renderer.render(scene, camera);
      frame = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      renderer.domElement.removeEventListener("pointermove", onPointerMove);
      mount.removeChild(renderer.domElement);
      particleGeometry.dispose();
      coreGeometry.dispose();
      coreMaterial.dispose();
      ringMaterial.dispose();
      rings.forEach((ring) => {
        ring.geometry.dispose();
        ring.material.dispose();
      });
      crimson.geometry.dispose();
      crimson.material.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="hero-visual" aria-label="Interactive AI network visualization" />;
}
