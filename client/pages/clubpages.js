
function displayImage() {
    const imageUrl = './images/blue club jazz.jpg'

    const imageElement = document.createElement('img')
    imageElement.src = imageUrl
    imageElement.alt = 'Blue Club Jazz'
    const imageContainer = document.getElementById('image-container');
    imageContainer.appendChild(imageElement)
}

displayImage();

