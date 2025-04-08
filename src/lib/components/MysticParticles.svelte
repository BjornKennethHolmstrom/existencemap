<!-- src/lib/components/MysticParticles.svelte -->
<script lang="ts">
  import { onMount } from 'svelte';

  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D;
  let particles: any[] = [];
  const numParticles = 100;

  const glowColors = [
    '#c084fc', // violet
    '#f472b6', // pink
    '#7dd3fc', // cyan
    '#facc15', // gold
    '#a78bfa', // indigo
  ];

  class Particle {
    x = Math.random() * window.innerWidth;
    y = Math.random() * window.innerHeight;
    vx = (Math.random() - 0.5) * 0.3;
    vy = (Math.random() - 0.5) * 0.3;
    radius = Math.random() * 2 + 2;
    glow = glowColors[Math.floor(Math.random() * glowColors.length)];
    pulseOffset = Math.random() * 1000;

    draw(time: number) {
      if (!ctx) return; // Added safety check

      const pulse = Math.sin((time + this.pulseOffset) / 500) * 0.4 + 0.6;

      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.glow;
      ctx.globalAlpha = pulse; // ✨ vibrancy through global alpha

      ctx.shadowColor = this.glow;
      ctx.shadowBlur = 18;
      ctx.fill();

      ctx.globalAlpha = 1; // reset alpha for next draw
    }

    update(time: number) {
      this.x += this.vx;
      this.y += this.vy;
      
      // Use window.innerWidth/Height instead of getting from parameters
      if (this.x < 0 || this.x > window.innerWidth) this.vx *= -1;
      if (this.y < 0 || this.y > window.innerHeight) this.vy *= -1;
      
      this.draw(time);
    }
  }


  function initParticles() {
    particles = [];
    for (let i = 0; i < numParticles; i++) {
      particles.push(new Particle());
    }
  }

  function animate(time = 0) {
    if (!ctx) return; // Safety check

    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    particles.forEach((p) => p.update(time));
    requestAnimationFrame(animate);
  }

  onMount(() => {
    if (typeof window === 'undefined') return; // SSR check
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx = canvas.getContext('2d');
    
    if (!ctx) return; // Safety check
    
    initParticles();
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
</script>

<style>
  canvas, .particle-layer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    z-index: 0;
  }
</style>

<div class="particle-layer">
  <canvas bind:this={canvas} class="fixed inset-0 -z-50 pointer-events-none opacity-40 dark:opacity-25 transition-all" />
</div>
