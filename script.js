const products = [
    { id: 1, name: "Product A" },
    { id: 2, name: "Product B" },
    { id: 3, name: "Product C" }
];

// Populate Product dropdown
window.onload = function() {
    const productSelect = document.getElementById('product');
    products.forEach(product => {
        let option = document.createElement('option');
        option.value = product.name;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
};

// Review Counter
if (localStorage.getItem("reviewCount") === null) {
    localStorage.setItem("reviewCount", 0);
}

// Update counter on submission
document.getElementById('review-form').addEventListener('submit', function() {
    let count = localStorage.getItem("reviewCount");
    count++;
    localStorage.setItem("reviewCount", count);
});
