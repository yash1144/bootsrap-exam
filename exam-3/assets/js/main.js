let yourtext = [
    ["Developer", "rgb(248, 249, 250)"],
    ["Freelancer", "rgb(248, 249, 250)"],
];

let x = 0;
let y = 0;
//how fast typing is
let wait = 100;
//how long you want to text stay before overwriting
let additionalwait = 5;
let txt = yourtext[0][0].split("");
let out = "";
let retyping = setInterval(function () {
    document.getElementById("changingText").innerHTML = out;
    if (x > txt.length - 1) {
    } else {
        out += txt[x];
    }
    x++;
    if (x == txt.length + 2 + additionalwait) {
        if (y == yourtext.length - 1) {
            y = 0;
            txt = yourtext[y][0].split("");
            out = "";
            document.getElementById("changingText").innerHTML = out;
            document.getElementById("changingText").style.color = yourtext[y][1];
            x = 0;
        } else {
            y += 1;
            txt = yourtext[y][0].split("");
            out = "";
            document.getElementById("changingText").innerHTML = out;
            document.getElementById("changingText").style.color = yourtext[y][1];
            x = 0;
        }
    }
}, wait);

// Particle JS

particlesJS("particles-js", {
    particles: {
      number: {
        value: 293,
        density: { enable: true, value_area: 787.7116975187079 }
      },
      color: { value: "#fff" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 5 },
        image: { src: "img/github.svg", width: 100, height: 100 }
      },
      opacity: {
        value: 0.7516993202718916,
        random: true,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
      },
      size: {
        value: 3.998400639744104,
        random: true,
        anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
      },
      line_linked: {
        enable: false,
        distance: 783.6865253898444,
        color: "#ffffff",
        opacity: 0.35185925629748116,
        width: 7.197121151539387
      },
      move: {
        enable: true,
        speed: 3.1987205117952833,
        direction: "bottom",
        random: false,
        straight: false,
        out_mode: "bounce",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 639.7441023590567 }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: false, mode: "bubble" },
        onclick: { enable: false, mode: "repulse" },
        resize: true
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 0.5 } },
        bubble: { distance: 400, size: 4, duration: 0.3, opacity: 1, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      }
    },
    retina_detect: true
  });
  var count_particles, stats, update;
  stats = new Stats();
  stats.setMode(0);
  stats.domElement.style.position = "absolute";
  stats.domElement.style.left = "0px";
  stats.domElement.style.top = "0px";
  document.body.appendChild(stats.domElement);
  count_particles = document.querySelector(".js-count-particles");
  update = function () {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
      count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
  