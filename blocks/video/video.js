export default function decorate(block) {
    let video = document.createElement("video");
    video.setAttribute('data-video-id', '6277821019001');
    video.setAttribute('data-account', '1852113022001');
    video.setAttribute('data-player', 'iJst0J4zh');
    video.setAttribute('data-embed', 'default');
    video.setAttribute('data-application-id', '');
    video.setAttribute('controls', '');
    video.classList.add('video-js');
    block.append(video);
}