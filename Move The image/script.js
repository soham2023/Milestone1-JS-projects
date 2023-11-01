const position =document.getElementById("image");
const imageWidth = image.Width;
const imageHeight = image.height;

let positionX = 0;
let positionY = 0;

function updateImagePosition()
{
    position.style.left = `${positionX}px`;
    position.style.top = `${positionY}px`;
}

document.addEventListener('keydown', (event) =>
{
    switch(event.key)
    {
        case 'ArrowUp':
            positionY = positionY-10;
            break;
        case 'ArrowDown':
            positionY = positionY+10;
            break;
        case 'ArrowLeft':
            positionX = positionX-10;
            break;
        case 'ArrowRight':
            positionX = positionX+10;
            break;
    }

    updateImagePosition();
});

updateImagePosition();