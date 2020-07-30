const videoElement = document.getElementById('video')
const button = document.getElementById('button')

async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia()
        videoElement.srcObject = mediaStream
        videoElement.onloadeddata = () => {
            videoElement.play()
        }
    } catch (e) {
        console.log(e)
    }
}

button.addEventListener('click', async () => {
    button.disabled = true
    await videoElement.requestPictureInPicture()
    button.disabled = false
})

selectMediaStream()
