const pageLoad = () => {
    let tl = gsap.timeline()
    tl.fromTo('.info-section h1', {
            x: 0,
            y: 100,
            opacity: 0,
        }, {
            x: 0,
            y: 0,
            opacity: 1,
            duration: 1.3
        })
        .addLabel('h1Show')
        .fromTo('.logo', {
            x: -200,
            opacity: 0,
        }, {
            x: 0,
            opacity: 1,
            delay: .5,
            duration: 1.3
        })
        .fromTo('.menu', {
                x: 200,
                opacity: 0,
            }, {
                x: 0,
                opacity: 1,
                delay: .5,
                duration: 1.3
            },
            ">-1.8"
        )
        .fromTo('.girl', {
                height: 0,

            }, {
                height: 400,
                duration: 1.4,
                ease: 'power2.inOut'

            },
            ">-.5"

        )
        .fromTo('.boy', {
                height: 0,

            }, {
                height: 400,
                duration: 1.4,
                ease: 'power2.inOut'

            },
            ">-1"

        )
        .fromTo('.shape1', {
                scale: 0,
                opacity: 0

            }, {
                scale: 1,
                opacity: 1,
                ease: 'power2.inOut'

            },
            ">-1"

        )
        .fromTo('.shape3', {

                opacity: 0

            }, {

                opacity: 0.6,
                ease: 'power2.inOut',
                duration: 0.5,

            },
            ">-.2"

        )
        .fromTo('.shape3', {
            x: 50,
            y: 350,

        }, {
            y: 385,
            repeat: -1,
            duration: 1.5,
            ease: 'sine.inOut',
            yoyo: true,
        })
        .fromTo('.shape2', {

                opacity: 0

            }, {

                opacity: 0.5,
                ease: 'power2.inOut',
                duration: 0.5,

            },
            ">-2"

        )
        .fromTo('.shape2', {
            x: 550,
            y: -100,

        }, {
            y: -135,
            repeat: -1,
            duration: 1.5,
            ease: 'sine.inOut',
            yoyo: true,
        })
        .fromTo('.shape2', {
            x: 550,
            y: -100,

        }, {
            y: -135,
            repeat: -1,
            duration: 1.5,
            ease: 'sine.inOut',
            yoyo: true,
        })
        .fromTo('.info-section h4', {
                x: 50,
                opacity: 0

            }, {
                opacity: 1,
                x: 0,
                duration: 1.3
            },
            'h1Show'
        )
        .fromTo('.call-actions', {
                x: 50,
                opacity: 0

            }, {
                opacity: 1,
                x: 0,
                duration: 1.3
            },
            'h1Show+=1'
        );
}



const delay = (n) => {
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n)
    })
}
const loadingLeave = () => {
    let timeline = gsap.timeline();
    timeline.fromTo('.loading-bg', {
        y: "100%"
    }, {
        y: 0,

    })
}
const loadingEnter = () => {
    let timeline = gsap.timeline();
    timeline.fromTo('.loading-bg', {
        y: 0
    }, {
        y: "100%",
        duration: 2
    })
}

barba.init({

    sync: true,
    transitions: [{
        name: 'page-wipe',
        async leave(data) {
            const done = this.async();
            console.log('leaving page animation');
            loadingLeave();
            await delay(2000);
            done();
        },
        async enter(data) {

            loadingEnter();
            pageLoad();
            console.log('entering page animation');


        },
        async once(data) {

            pageLoad();
        }
    }]

})

// .fromTo('html', {
//     scale: 0.9,
//     background: "linear-gradient(to right top, #ffffff, #7b21fa, #ffffff, #ffffff, #ffffff)",
//     opacity: 0
// }, {
//     scale: 1,
//     background: "linear-gradient(to right top, #8e27ff, #7b21fa, #651bf5, #4b16f0, #2512eb)",
//     opacity: 1,
//     duration: 3,
//     ease: "sine.out"
// });