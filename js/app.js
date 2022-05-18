let tl = gsap.timeline()
tl.fromTo('.logo', {
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
            height: 600,
            duration: 1.4,
            ease: 'power2.inOut'

        },
        ">-.5"

    )
    .fromTo('.boy', {
            height: 0,

        }, {
            height: 600,
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
        y: 300,

    }, {
        y: 265,
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
        y: -300,

    }, {
        y: -335,
        repeat: -1,
        duration: 1.5,
        ease: 'sine.inOut',
        yoyo: true,
    });