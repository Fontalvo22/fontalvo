particlesJS(
    'particles-js',

    {
        particles: {
            number: {
                value: 500,
                density: {
                    enable: true,
                    value_area: 1000,
                },
            },
            color: {
                value: ['#ffffff', '#9800ca', '#fff', '#310D52'],
            },
            shape: {
                type: 'circle',
                stroke: {
                    width: 0,
                    color: '#000000',
                },
                polygon: {
                    nb_sides: 12,
                },
                image: {
                    src: '',
                    width: 100,
                    height: 100,
                },
            },
            opacity: {
                value: 1,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0,
                    sync: false,
                },
            },
            size: {
                value: 2.5,
                random: true,
                anim: {
                    enable: true,
                    speed: 3,
                    size_min: 0.3,
                    sync: false,
                },
            },
            line_linked: {
                enable: false,
                distance: 100,
                color: '#fff',
                opacity: 0.023674428,
                width: 1,
            },
            move: {
                enable: true,
                speed: 1.3,
                direction: 'top',
                random: true,
                straight: true,
                out_mode: 'out',
                bounce: false,
                attract: {
                    enable: true,
                    rotateX: 2082.2488,
                    rotateY: 3363.6328,
                },
            },
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'grab',
                },
                onclick: {
                    enable: true,
                    mode: 'repulse',
                },
                resize: true,
            },
            modes: {
                grab: {
                    distance: 70,
                    line_linked: {
                        opacity: 0.25,
                    },
                },
                bubble: {
                    distance: 100,
                    size: 5,
                    duration: 8.598243,
                    opacity: 0,
                    speed: 3,
                },
                repulse: {
                    distance: 150,
                    duration: 0.8,
                },
                push: {
                    particles_nb: 4,
                },
                remove: {
                    particles_nb: 2,
                },
            },
        },
        retina_detect: true,
    }
);

// var count_particles, stats, update;
// stats = new Stats();
// stats.setMode(0);
// stats.domElement.style.position = 'absolute';
// stats.domElement.style.left = '0px';
// stats.domElement.style.top = '0px';
// document.body.appendChild(stats.domElement);
// count_particles = document.querySelector('.js-count-particles');
// update = function () {
//     stats.begin();
//     stats.end();
//     if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
//         count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
//     }
//     requestAnimationFrame(update);
// };
// requestAnimationFrame(update);

// otra propuesta para el fondo

// {
//     particles: {
//         number: {
//             value: 150,
//             density: {
//                 enable: true,
//                 value_area: 786,
//             },
//         },
//         color: {
//             value: ["#ffffff", "#FF6F91", "#F9F871", "#D65DB1"],
//         },
//         shape: {
//             type: "circle",
//             stroke: {
//                 width: 0,
//                 color: "#000000",
//             },
//             polygon: {
//                 nb_sides: 12,
//             },
//             image: {
//                 src: "",
//                 width: 100,
//                 height: 100,
//             },
//         },
//         opacity: {
//             value: 1,
//             random: true,
//             anim: {
//                 enable: true,
//                 speed: 1,
//                 opacity_min: 0,
//                 sync: false,
//             },
//         },
//         size: {
//             value: 2.5,
//             random: true,
//             anim: {
//                 enable: true,
//                 speed: 3,
//                 size_min: 0.3,
//                 sync: false,
//             },
//         },
//         line_linked: {
//             enable: false,
//             distance: 100,
//             color: "#fff",
//             opacity: 0.023674428,
//             width: 1,
//         },
//         move: {
//             enable: true,
//             speed: 1.3,
//             direction: "top",
//             random: true,
//             straight: true,
//             out_mode: "out",
//             bounce: false,
//             attract: {
//                 enable: true,
//                 rotateX: 2082.2488,
//                 rotateY: 3363.6328,
//             },
//         },
//     },
//     interactivity: {
//         detect_on: "canvas",
//         events: {
//             onhover: {
//                 enable: true,
//                 mode: "grab",
//             },
//             onclick: {
//                 enable: true,
//                 mode: "repulse",
//             },
//             resize: true,
//         },
//         modes: {
//             grab: {
//                 distance: 70,
//                 line_linked: {
//                     opacity: 0.25,
//                 },
//             },
//             bubble: {
//                 distance: 100,
//                 size: 5,
//                 duration: 8.598243,
//                 opacity: 0,
//                 speed: 3,
//             },
//             repulse: {
//                 distance: 150,
//                 duration: 0.8,
//             },
//             push: {
//                 particles_nb: 4,
//             },
//             remove: {
//                 particles_nb: 2,
//             },
//         },
//     },
//     retina_detect: true,
// }
