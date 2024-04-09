const qrContainer = document.querySelector('.qr-body');
const generateBtn = document.getElementById('generateBtn');
const sizes = document.getElementById('sizes'); // Obtener el elemento select
const images = ['img1.png', 'img2.png',  'img4.png', 'img5.png', 'img6.png', 'img7.png', 'img8.png',  'img10.png', 'img11.png', 'img12.png', 'img13.png', 'img14.png', 'img15.png', 'img16.png', 'img17.png', 'img18.png', 'img19.png', 'img20.png', 'img21.png', 'img22.php', 'img23.php', 'img24.php', 'img25.php', 'img26.php', 'img27.php','img28.php', 'img29.php', 'img30.php', 'img31.php', 'img32.php', 'img33.php', 'img34.php', 'img35.php', 'img36.php']; // Array de nombres de archivo de imágenes
const folderPath = 'html-interface/imagenes/'; // Ruta de la carpeta que contiene las imágenes
const maxAttempts = 1; // Número máximo de intentos para generar una imagen aleatoria
let attempts = 0; // Contador de intentos

generateBtn.addEventListener('click', () => {
    attempts++;
    if (attempts <= maxAttempts) {
        const selectedSize = sizes.value;
        if (selectedSize !== '') {
            fetchRandomImage(selectedSize);
        } else {
            alert('Please select a size before generating the image.');
        }
    } else {
        alert('Maximum number of attempts reached. Please try again later.');
    }
});

function fetchRandomImage(size) {
    // Seleccionar una imagen aleatoria del array
    const randomImageName = images[Math.floor(Math.random() * images.length)];

    // Construir la URL completa de la imagen con el tamaño seleccionado
    const imageURL = folderPath + randomImageName;

    generateImage(imageURL, size); // Paso del tamaño seleccionado a la función generateImage
}

function generateImage(imageURL, size) {
    qrContainer.innerHTML = ""; // Limpiar el contenedor

    const img = document.createElement('img'); // Crear un elemento de imagen
    img.onload = () => {
        img.style.maxWidth = '100%'; // Asegurarse de que la imagen no exceda el ancho del contenedor
        qrContainer.appendChild(img); // Agregar la imagen al contenedor
    };
    img.onerror = () => {
        alert('Failed to load image. Please try again later.');
    };
    img.src = imageURL; // Establecer la fuente de la imagen
    img.style.width = size + 'px'; // Establecer el tamaño de la imagen según el valor seleccionado
}

// Función para actualizar la imagen a las 23:59
function updateImageAtMidnight() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    if (hours === 23 && minutes === 59) {
        fetchRandomImage(500); // Cambiar el tamaño según sea necesario
    }
}

// Ejecutar la función updateImageAtMidnight cada minuto
setInterval(updateImageAtMidnight, 60000); // 60000 milisegundos = 1 minuto
