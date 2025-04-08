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
    x = Math.random() * innerWidth;
    y = Math.random() * innerHeight;
    vx = (Math.random() - 0.5) * 0.3;
    vy = (Math.random() - 0.5) * 0.3;
    radius = Math.random() * 2 + 2;
    glow = glowColors[Math.floor(Math.random() * glowColors.length)];
    pulseOffset = Math.random() * 1000;

    draw(time: number) {
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
      if (this.x < 0 || this.x > innerWidth) this.vx *= -1;
      if (this.y < 0 || this.y > innerHeight) this.vy *= -1;
      this.draw(time);
    }
  }


  function initParticles() {
    particles = [];
    for (let i = 0; i < numParticles; i++) {
      particles.push(new Particle());
    }
  }

  function animate() {
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    particles.forEach((p) => p.update());
    requestAnimationFrame(animate);
  }

  onMount(() => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    ctx = canvas.getContext('2d');
    initParticles();
    animate();

    window.addEventListener('resize', () => {
      canvas.width = innerWidth;
      canvas.height = innerHeight;
      initParticles();
    });
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
