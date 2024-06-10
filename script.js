document.addEventListener('DOMContentLoaded', () => {
    const startAnimation = () => {
        const pedroAudio = document.getElementById('pedroAudio')
        const pedroImage = document.getElementById('pedroImage')
        const imgOverlay = document.getElementById('imgOverlay')

        if (pedroAudio.paused) {
            pedroAudio.play()
            imgOverlay.setAttribute('title', 'Give the Raccoon a break!')
            pedroImage.classList.add('animate')
        } else {
            pedroAudio.pause()
            imgOverlay.setAttribute('title', 'Let the Raccoon dance!')
            pedroImage.classList.remove('animate')
        }
    }

    const imgOverlay = document.getElementById('imgOverlay')
    imgOverlay.addEventListener('click', startAnimation)
})
