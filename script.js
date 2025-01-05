document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        alert('Item added to cart!');
    });
});

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Message sent successfully!');
});
