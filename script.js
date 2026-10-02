
function changeImage(imageSrc) {

    const mainImage = document.getElementById("mainImage");

    mainImage.src = imageSrc;

    document.querySelectorAll(".thumbnail").forEach(function(img) {
        img.classList.remove("active");
    });

    event.target.classList.add("active");
}


function addToCart() {

    const quantity =
        document.getElementById("quantity").value;

    alert(
        quantity +
        " product(s) added to your cart!"
    );
}

function buyNow() {

    const quantity =
        document.getElementById("quantity").value;

    alert(
        "Proceeding to checkout with " +
        quantity +
        " product(s)."
    );
}