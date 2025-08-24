
document.getElementById("subscribe-form").addEventListener("submit", function(e) {
    e.preventDefault(); // prevent form reload

    const email = document.getElementById("subscribe-email").value.trim();

    if (email === "") {
        showToast("⚠️ Please enter your email");
        return;
    }

     showToast("✅ Subscribed successfully!");
    
    // clear input
    document.getElementById("subscribe-email").value = "";
});

function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000); // hide after 3 seconds
}
/* ✅ Contact Form */
document.getElementById("submit_cnt").addEventListener("click", function(e) {
    e.preventDefault();

    const name = document.getElementById("name2").value.trim();
    const email = document.getElementById("email2").value.trim();
    const msg = document.getElementById("comments2").value.trim();

    if (!name || !email || !msg) {
        showToast("⚠️ Please fill all required fields");
        return;
    }

    
    showToast("✅ Message sent successfully!");

    // Clear inputs
    document.getElementById("name2").value = "";
    document.getElementById("email2").value = "";
    document.getElementById("comments2").value = "";
});


document.querySelector(".single-open-hours .btn").addEventListener("click", function() {
    // Hide contact form and show reservation form
    document.getElementById("contactform").style.display = "none";
    document.getElementById("reservationform").style.display = "block";

    // Replace heading text
    const heading = document.getElementById("form-heading");
    heading.innerHTML = `
        <h4>Book Your Spot Now</h4>
        <h2>Table Reservation</h2>
    `;

    // Toast feedback
    showToast("📅 Table reservation form opened");
});

// Reservation form submit button
document.getElementById("submit_reserve").addEventListener("click", function(e) {
    e.preventDefault();
    showToast("✅ Table booked successfully");
});

// Get the cart button and the cart container
        const cartButton = document.querySelector('.cart-btn');
        const cartContainer = document.querySelector('.header-cart_wrap');
        const closeButton = document.querySelector('.close-cart');

         cartButton.addEventListener('click', () => {
             cartContainer.classList.toggle('vis-cart');
        });

        // Add a click event listener to the close button
        closeButton.addEventListener('click', () => {
            // This removes the 'vis-cart' class to hide the cart.
            cartContainer.classList.remove('vis-cart');
        });
        
         document.addEventListener('click', (event) => {
            const isClickInside = cartButton.contains(event.target) || cartContainer.contains(event.target);
            if (!isClickInside) {
                cartContainer.classList.remove('vis-cart');
            }
        });
  
document.addEventListener('DOMContentLoaded', () => {
    const tabsMenu = document.querySelector('.tabs-menu');
    const tabs = document.querySelectorAll('.tab-content');

    // Hide all tabs except the first one
    tabs.forEach((tab, index) => {
        if (index !== 0) {
            tab.style.display = 'none';
        }
    });

    tabsMenu.addEventListener('click', (e) => {
        e.preventDefault();
        const target = e.target.closest('li');
        if (!target) return;

        document.querySelectorAll('.tabs-menu li').forEach(li => li.classList.remove('current'));
        target.classList.add('current');

        const tabId = target.querySelector('a').getAttribute('href');

        // Hide all tab content
        tabs.forEach(tab => {
            tab.style.display = 'none';
        });

        // Show the selected tab content
        const activeTab = document.querySelector(tabId);
        if (activeTab) {
            activeTab.style.display = 'grid';
        }
    });
});

// Handle Add to Cart clicks
document.querySelectorAll(".menu-item .menu-overlay").forEach(item => {
  item.addEventListener("click", function() {
    const productName = this.closest(".menu-item").querySelector("h4 a").innerText;
    showToast(`🛒 ${productName} added to cart`);
  });
});
