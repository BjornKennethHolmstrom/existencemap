<script>
  import { onMount } from 'svelte';

  let isDark = false;

  onMount(() => {
    isDark = localStorage.theme === 'dark';
  });
</script>

<svg
  viewBox="0 0 400 400"
  class="h-28 w-28 transition-all duration-300 text-slate-900 dark:text-slate-50"
  xmlns="http://www.w3.org/2000/svg"
>
   viewBox="0 0 400 400"
   version="1.1"
   id="svg43"
   sodipodi:docname="logo.svg"
   inkscape:version="1.4 (e7c3feb100, 2024-10-09)"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <defs
     id="defs43" />
  <sodipodi:namedview
     id="namedview43"
     pagecolor="#ffffff"
     bordercolor="#000000"
     borderopacity="0.25"
     inkscape:showpageshadow="2"
     inkscape:pageopacity="0.0"
     inkscape:pagecheckerboard="0"
     inkscape:deskcolor="#d1d1d1"
     inkscape:zoom="2.115"
     inkscape:cx="199.76359"
     inkscape:cy="200"
     inkscape:window-width="2520"
     inkscape:window-height="1048"
     inkscape:window-x="0"
     inkscape:window-y="0"
     inkscape:window-maximized="1"
     inkscape:current-layer="svg43" />
  <!-- Background circle -->
  <circle
     cx="200"
     cy="200"
     r="190"
     fill="none"
     stroke="currentColor"
     stroke-width="1"
     opacity="0.2"
     id="circle1" />
  <!-- Outer mandala ring -->
  <g
     stroke="currentColor"
     fill="none"
     stroke-width="1.5"
     id="g4">
    <circle
       cx="200"
       cy="200"
       r="170"
       opacity="0.6"
       id="circle2" />
    <circle
       cx="200"
       cy="200"
       r="140"
       opacity="0.7"
       id="circle3" />
    <!-- Sacred geometry pattern -->
    <path
       d="M200,30 A170,170 0 0,1 370,200 A170,170 0 0,1 200,370 A170,170 0 0,1 30,200 A170,170 0 0,1 200,30 Z"
       opacity="0.3"
       id="path3" />
    <path
       d="M200,60 A140,140 0 0,1 340,200 A140,140 0 0,1 200,340 A140,140 0 0,1 60,200 A140,140 0 0,1 200,60 Z"
       opacity="0.4"
       id="path4" />
  </g>
  <!-- Spiral forms - Golden spiral approximation -->
  <path
     d="m 201.1494,199.19512 q 37.70964,-37.70964 50.27952,0 12.56988,37.70965 -25.13976,62.84941 -37.70964,25.13976 -62.8494,0 -25.13976,-25.13976 -12.56988,-62.84941 12.56988,-37.70964 50.27952,-37.70964 37.70964,0 62.8494,25.13976 25.13976,25.13976 25.13976,62.84941 0,37.70964 -37.70964,62.8494 -37.70964,25.13975 -75.41928,12.56987 Q 138.3,312.32405 113.16023,274.61441 88.020473,236.90477 100.59035,199.19512 q 12.56988,-37.70964 50.27953,-62.8494 37.70964,-25.13976 75.41928,-12.56988 37.70964,12.56988 62.8494,50.27952 25.13977,37.70964 25.13977,75.41929"
     fill="none"
     stroke="currentColor"
     stroke-width="2.51398"
     opacity="0.8"
     id="path5" />
  <!-- Central void/eye -->
  <circle
     cx="201.1494"
     cy="199.19513"
     r="62.849403"
     fill="none"
     stroke="currentColor"
     stroke-width="1.88549"
     opacity="0.9"
     id="circle5" />
  <circle
     cx="201.1494"
     cy="199.19513"
     r="25.139761"
     fill="currentColor"
     opacity="0.7"
     id="circle6"
     style="stroke-width:1.25698" />
  <!-- Constellation-like points representing the 8 domains -->
  <g
     fill="currentColor"
     id="g14"
     transform="matrix(1.2569881,0,0,1.2569881,-50.24821,-52.202494)">
    <circle
       cx="200"
       cy="130"
       r="3"
       opacity="0.9"
       id="circle7" />
    <circle
       cx="270"
       cy="170"
       r="3"
       opacity="0.9"
       id="circle8" />
    <circle
       cx="270"
       cy="230"
       r="3"
       opacity="0.9"
       id="circle9" />
    <circle
       cx="200"
       cy="270"
       r="3"
       opacity="0.9"
       id="circle10" />
    <circle
       cx="130"
       cy="230"
       r="3"
       opacity="0.9"
       id="circle11" />
    <circle
       cx="130"
       cy="170"
       r="3"
       opacity="0.9"
       id="circle12" />
    <circle
       cx="235"
       cy="165"
       r="3"
       opacity="0.9"
       id="circle13" />
    <circle
       cx="165"
       cy="235"
       r="3"
       opacity="0.9"
       id="circle14" />
  </g>
  <!-- Connecting lines for constellation/web of being -->
  <g
     stroke="currentColor"
     stroke-width="0.75"
     opacity="0.5"
     id="g23"
     transform="matrix(1.2569881,0,0,1.2569881,-50.24821,-52.202494)">
    <line
       x1="200"
       y1="130"
       x2="270"
       y2="170"
       id="line14" />
    <line
       x1="270"
       y1="170"
       x2="270"
       y2="230"
       id="line15" />
    <line
       x1="270"
       y1="230"
       x2="200"
       y2="270"
       id="line16" />
    <line
       x1="200"
       y1="270"
       x2="130"
       y2="230"
       id="line17" />
    <line
       x1="130"
       y1="230"
       x2="130"
       y2="170"
       id="line18" />
    <line
       x1="130"
       y1="170"
       x2="200"
       y2="130"
       id="line19" />
    <line
       x1="200"
       y1="130"
       x2="200"
       y2="270"
       id="line20" />
    <line
       x1="130"
       y1="170"
       x2="270"
       y2="230"
       id="line21" />
    <line
       x1="130"
       y1="230"
       x2="270"
       y2="170"
       id="line22" />
    <line
       x1="235"
       y1="165"
       x2="165"
       y2="235"
       id="line23" />
  </g>
  <!-- Subtle radial lines suggesting transcendence -->
  <g
     stroke="currentColor"
     stroke-width="0.5"
     opacity="0.3"
     id="g31">
    <line
       x1="200"
       y1="200"
       x2="200"
       y2="30"
       id="line24" />
    <line
       x1="200"
       y1="200"
       x2="200"
       y2="370"
       id="line25" />
    <line
       x1="200"
       y1="200"
       x2="30"
       y2="200"
       id="line26" />
    <line
       x1="200"
       y1="200"
       x2="370"
       y2="200"
       id="line27" />
    <line
       x1="200"
       y1="200"
       x2="285"
       y2="115"
       id="line28" />
    <line
       x1="200"
       y1="200"
       x2="115"
       y2="115"
       id="line29" />
    <line
       x1="200"
       y1="200"
       x2="115"
       y2="285"
       id="line30" />
    <line
       x1="200"
       y1="200"
       x2="285"
       y2="285"
       id="line31" />
  </g>
  <!-- Flowing curved lines representing interconnectedness -->
  <path
     d="m 125.73012,123.77584 q 75.41928,50.27952 150.83856,0"
     fill="none"
     stroke="currentColor"
     stroke-width="1.25698"
     opacity="0.6"
     id="path31" />
  <path
     d="m 125.73012,274.61441 q 75.41928,-50.27953 150.83856,0"
     fill="none"
     stroke="currentColor"
     stroke-width="1.25698"
     opacity="0.6"
     id="path32" />
  <!-- Layer of small dots for cosmic field -->
  <g
     fill="currentColor"
     opacity="0.4"
     id="g43"
     transform="matrix(1.2569881,0,0,1.2569881,-50.24821,-52.202494)">
    <circle
       cx="150"
       cy="150"
       r="1.5"
       id="circle32" />
    <circle
       cx="250"
       cy="150"
       r="1.5"
       id="circle33" />
    <circle
       cx="150"
       cy="250"
       r="1.5"
       id="circle34" />
    <circle
       cx="250"
       cy="250"
       r="1.5"
       id="circle35" />
    <circle
       cx="180"
       cy="120"
       r="1.5"
       id="circle36" />
    <circle
       cx="220"
       cy="120"
       r="1.5"
       id="circle37" />
    <circle
       cx="120"
       cy="180"
       r="1.5"
       id="circle38" />
    <circle
       cx="120"
       cy="220"
       r="1.5"
       id="circle39" />
    <circle
       cx="280"
       cy="180"
       r="1.5"
       id="circle40" />
    <circle
       cx="280"
       cy="220"
       r="1.5"
       id="circle41" />
    <circle
       cx="180"
       cy="280"
       r="1.5"
       id="circle42" />
    <circle
       cx="220"
       cy="280"
       r="1.5"
       id="circle43" />
  </g>
</svg>

