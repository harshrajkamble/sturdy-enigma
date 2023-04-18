export default function decorate(block) {

    let poster = document.createElement("div");
    poster.classList.add("poster");

    let video = document.createElement("video");
    let videoCaption = document.createElement("h4");
    let img = '';
    
    let link = document.createElement("a");
    link.href = "javascript:;";
    link.addEventListener('click', linkClick)

    link.classList.add('trigger-subvideo');

    let linkImg = document.createElement("img");
    linkImg.src = "../assets/images/video-play-btn.png";
    link.append(linkImg);


    [...block.children].forEach((div) => {
        const elements = div.getElementsByTagName('div');

        if(elements[0].innerText == 'Id'){
            video.setAttribute('data-video-id', elements[1].innerText)
        } else if (elements[0].innerText == 'Poster') {
            img = elements[1].innerHTML;
        } else if (elements[0].innerText == 'Text') {
            videoCaption.innerHTML = elements[1].innerHTML;
            if(elements[1].innerHTML) poster.classList.add('has-caption');
        }
    });

    video.setAttribute('data-account', '1852113022001');
    video.setAttribute('data-player', 'iJst0J4zh');
    video.setAttribute('data-embed', 'default');
    video.setAttribute('data-application-id', '');
    video.setAttribute('controls', '');
    video.classList.add('video-js');
    video.style.display = 'none';
    video.style.height = '100%';
    video.style.width = '100%';
    video.style.position = 'relative';

    block.textContent = '';

    poster.innerHTML = img;
    poster.append(videoCaption);
    poster.append(link);
    const mainImage = poster.querySelector('img');
    if(mainImage){
        mainImage.style.height = '100%'
        mainImage.style.width = '100%'
    }
    block.append(poster);

    block.append(video);
}

function linkClick(el) {
    el.currentTarget.parentElement.style.display = "none";
    el.currentTarget.parentElement.nextSibling.style.display = "block";
    const video = el.currentTarget.parentElement.nextSibling.querySelector('video');
    if(video) {
        video.style.display = 'block';
    }
}
  