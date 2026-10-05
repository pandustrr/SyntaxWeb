'use client';

import { useEffect, useRef } from 'react';

export default function HeroOrb() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = canvas.offsetWidth;
    let H = canvas.offsetHeight;
    canvas.width = W;
    canvas.height = H;

    // Icosahedron vertices (normalized to radius 90)
    const PHI = (1 + Math.sqrt(5)) / 2;
    const RAW: [number, number, number][] = [
      [-1, PHI, 0], [1, PHI, 0], [-1, -PHI, 0], [1, -PHI, 0],
      [0, -1, PHI], [0, 1, PHI], [0, -1, -PHI], [0, 1, -PHI],
      [PHI, 0, -1], [PHI, 0, 1], [-PHI, 0, -1], [-PHI, 0, 1],
    ];
    const icoVerts: [number, number, number][] = RAW.map(([x, y, z]) => {
      const len = Math.sqrt(x * x + y * y + z * z);
      return [x / len * 90, y / len * 90, z / len * 90];
    });
    const icoEdges: [number, number][] = [
      [0,1],[0,5],[0,7],[0,10],[0,11],[1,5],[1,7],[1,8],[1,9],
      [2,3],[2,4],[2,6],[2,10],[2,11],[3,4],[3,6],[3,8],[3,9],
      [4,5],[4,9],[4,11],[5,9],[5,11],[6,7],[6,8],[6,10],
      [7,8],[7,10],[8,9],[10,11],
    ];

    // Particles
    type Particle = { x:number; y:number; z:number; alpha:number; size:number; speed:number };
    const particles: Particle[] = Array.from({ length: 55 }, () => {
      const a = Math.random() * Math.PI * 2;
      const p = Math.random() * Math.PI;
      const r = 80 + Math.random() * 60;
      return {
        x: r * Math.sin(p) * Math.cos(a),
        y: r * Math.sin(p) * Math.sin(a),
        z: r * Math.cos(p),
        alpha: 0.3 + Math.random() * 0.6,
        size: 0.8 + Math.random() * 1.4,
        speed: 0.002 + Math.random() * 0.003,
      };
    });

    let rotX = 0, rotY = 0, time = 0;

    const onMouse = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX / window.innerWidth;
      mouseRef.current.y = e.clientY / window.innerHeight;
    };
    const onResize = () => {
      W = canvas.offsetWidth; H = canvas.offsetHeight;
      canvas.width = W; canvas.height = H;
    };
    window.addEventListener('mousemove', onMouse);
    window.addEventListener('resize', onResize);

    function rotX3(v: [number,number,number], a: number): [number,number,number] {
      return [v[0], v[1]*Math.cos(a)-v[2]*Math.sin(a), v[1]*Math.sin(a)+v[2]*Math.cos(a)];
    }
    function rotY3(v: [number,number,number], a: number): [number,number,number] {
      return [v[0]*Math.cos(a)+v[2]*Math.sin(a), v[1], -v[0]*Math.sin(a)+v[2]*Math.cos(a)];
    }
    function proj(v: [number,number,number]): [number,number,number] {
      const fov = 350, z = v[2] + 300;
      return [(v[0]*fov)/z + W/2, (v[1]*fov)/z + H/2, v[2]];
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);
      time += 0.008;

      const tx = (mouseRef.current.y - 0.5) * 0.8;
      const ty = (mouseRef.current.x - 0.5) * 0.8;
      rotX += (tx - rotX) * 0.04;
      rotY += (ty - rotY) * 0.04;

      const cx = W / 2, cy = H / 2;
      const floatY = Math.sin(time * 1.2) * 12;

      // Icosahedron wireframe
      const rotated = icoVerts.map(v => rotX3(rotY3(v, time * 0.4 + rotY), rotX));
      const projected = rotated.map(v => proj([v[0], v[1] + floatY, v[2]]));

      icoEdges
        .map(([a, b]) => ({ a, b, d: (projected[a][2] + projected[b][2]) / 2 }))
        .sort((x, y) => x.d - y.d)
        .forEach(({ a, b, d }) => {
          const nd = (d + 90) / 180;
          ctx.beginPath();
          ctx.moveTo(projected[a][0], projected[a][1]);
          ctx.lineTo(projected[b][0], projected[b][1]);
          ctx.strokeStyle = `rgba(34,211,238,${(0.08 + nd * 0.35).toFixed(2)})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        });

      // Vertices
      projected.forEach(p => {
        const nd = (p[2] + 90) / 180;
        ctx.beginPath();
        ctx.arc(p[0], p[1], 1 + nd * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(34,211,238,${(0.2 + nd * 0.6).toFixed(2)})`;
        ctx.fill();
      });

      // Orbit rings
      const r1 = 130 + Math.sin(time * 0.8) * 5;
      ctx.beginPath();
      ctx.ellipse(cx, cy + floatY, r1, r1 * 0.3, time * 0.15, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(34,211,238,0.15)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      ctx.beginPath();
      ctx.ellipse(cx, cy + floatY, (155 + Math.sin(time*0.6)*4)*0.35, 155 + Math.sin(time*0.6)*4, -time*0.1+0.5, 0, Math.PI*2);
      ctx.strokeStyle = 'rgba(34,211,238,0.06)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Particles
      particles.forEach(p => {
        const c = Math.cos(time * p.speed * 60), s = Math.sin(time * p.speed * 60);
        const rx = p.x * c + p.z * s, rz = -p.x * s + p.z * c;
        const [px, py] = proj([rx, p.y + floatY, rz]);
        const nd = (rz + 140) / 280;
        const a = Math.min(p.alpha * nd * 0.8, 0.8);
        if (a > 0.05) {
          ctx.beginPath();
          ctx.arc(px, py, p.size * (0.5 + nd * 0.8), 0, Math.PI * 2);
          ctx.fillStyle = `rgba(34,211,238,${a.toFixed(2)})`;
          ctx.fill();
        }
      });

      // Center glow
      const glow = ctx.createRadialGradient(cx, cy + floatY, 0, cx, cy + floatY, 70);
      glow.addColorStop(0, 'rgba(34,211,238,0.06)');
      glow.addColorStop(1, 'rgba(34,211,238,0)');
      ctx.beginPath();
      ctx.arc(cx, cy + floatY, 70, 0, Math.PI * 2);
      ctx.fillStyle = glow;
      ctx.fill();

      animRef.current = requestAnimationFrame(draw);
    }

    draw();
    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('mousemove', onMouse);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ display: 'block' }}
    />
  );
}
