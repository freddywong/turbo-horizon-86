import * as THREE from 'three';
import { atlasPatch, carAtlas } from '../textures';

/** Materials for the '92 car models, all sampling the car-part texture array. */
export interface HDMats {
  paint: THREE.Material; // glossy bodywork
  lit: THREE.Material; // matte: tyres, rims (cut-out spokes), cabin
  glow: THREE.Material; // lamps
  glass: THREE.Material; // tinted, see-through
}

let cache: HDMats | null = null;

export function carMaterials(): HDMats {
  if (cache) return cache;
  const tex = carAtlas();
  const paint = new THREE.MeshPhongMaterial({ vertexColors: true, side: THREE.DoubleSide, shininess: 60, specular: 0xa8a8a8 });
  const lit = new THREE.MeshLambertMaterial({ vertexColors: true, side: THREE.DoubleSide, alphaTest: 0.5 });
  const glow = new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.DoubleSide });
  for (const m of [paint, lit, glow]) atlasPatch(m, tex);
  const glass = new THREE.MeshPhongMaterial({
    vertexColors: true, side: THREE.DoubleSide, transparent: true, opacity: 0.62, depthWrite: false,
    shininess: 110, specular: 0xffffff,
  });
  cache = { paint, lit, glow, glass };
  return cache;
}
