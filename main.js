let $buttons = $('.buttonWrapper > button')
let $slides = $('.slides')
let $images = $slides.children('img')
let current = 0

makeFakeSlides()

$slides.css({ transform: 'translateX(-900px)' })
bindEvents()


function bindEvents() {
    $buttons.eq(0).on('click', function (e) {
        if (current == 3) {
            $slides.css({ transform: 'translateX(-4500px)' })
                .one('transitionend', function () {
                    $slides.hide()
                        .offset()
                    $slides.css({ transform: 'translateX(-900px)' })
                        .show()
                })
        } else {
            $slides.css({ transform: 'translateX(-900px)' })
        }
        current = 0
    })
    $buttons.eq(1).on('click', function (e) {
        $slides.css({ transform: 'translateX(-1800px)' })
        current = 1
    })
    $buttons.eq(2).on('click', function () {
        $slides.css({ transform: 'translateX(-2700px)' })
        current = 2
    })
    $buttons.eq(3).on('click', function () {
        if (current == 0) {
            $slides.css({ transform: 'translateX(0px)' })
                .one('transitionend', function () {
                    $slides.hide()
                        .offset()
                    $slides.css({ transform: 'translateX(-3600px)' })
                        .show()
                })
        } else {
            $slides.css({ transform: 'translateX(-3600px)' })
        }
        current = 3
    })
}

function makeFakeSlides() {
    let $firstCopy = $images.eq(0).clone(true)
    let $lastCopy = $images.eq($images.length - 1).clone(true)

    $slides.append($firstCopy)
    $slides.prepend($lastCopy)
}

$buttons.on('click', function () {
    $(this).addClass('active').siblings().removeClass('active')
})