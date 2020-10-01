
function renderRectangle(rectangle) {
    return `
        <div style= "Width: ${rectangle.width}px; height: ${rectangle.height}px; background-color: ${rectangle.color}" class="text-center mt-5">
        </div>
        <code>${JSON.stringify(rectangle)}</code>
    `
}

function rectangle() {
    var content = document.getElementById('content');

    var rectangleAbstraction = {
        width: 100,
        height: 200,
        color: "#FF00FF"
    }

    content.innerHTML = renderRectangle(rectangleAbstraction);

}