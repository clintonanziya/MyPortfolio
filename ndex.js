<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gallery with Lightbox</title>
    <style>
        /* Your CSS styles for gallery and lightbox */
        .gallery-item {
            cursor: pointer;
        }

        .lightbox {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.8);
            display: none;
            justify-content: center;
            align-items: center;
        }

        .lightbox img {
            max-width: 90%;
            max-height: 90%;
        }

        #openLightboxButton {
            padding: 10px 20px;
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <!-- Your gallery items -->
    <div class="gallery-item">
        <img src="image1.jpg" alt="Image 1">
    </div>
    <div class="gallery-item">
        <img src="image2.jpg" alt="Image 2">
    </div>

    <!-- Button to open lightbox -->
    <button id="toggleLightboxButton">Toggle Lightbox</button>

    <div class="lightbox" id="lightbox">
        <img src="" alt="Zoomed Image" id="lightboxImage">
    </div>

    <script>
        document.addEventListener("DOMContentLoaded", function() {
            const galleryItems = document.querySelectorAll('.gallery-item');
            const lightbox = document.getElementById('lightbox');
            const lightboxImage = document.getElementById('lightboxImage');

            galleryItems.forEach(item => {
                item.addEventListener('click', function() {
                    const imgSrc = item.querySelector('img').src;
                    lightboxImage.src = imgSrc;
                    lightbox.style.display = 'flex';
                });
            });

            document.getElementById('toggleLightboxButton').addEventListener('click', function() {
                lightbox.style.display = (lightbox.style.display === 'none') ? 'flex' : 'none';
            });

            lightbox.addEventListener('click', function() {
                lightbox.style.display = 'none';
            });
        });
    </script>
</body>
</html>
