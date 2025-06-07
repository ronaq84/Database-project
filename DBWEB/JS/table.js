window.addEventListener("DOMContentLoaded", () => {
    const base = "https://obscure-space-winner-x5jgqprxq45fvq7g-6008.app.github.dev"; 

    // Customers
    fetch(`${base}/clients`).then(r => r.json()).then(data => {
        const tbody = document.querySelector("#customerstable tbody");
        data.forEach(item => {
            tbody.innerHTML += `<tr><td>${item.customer_id}</td><td>${item.name}</td><td>${item.phone}</td><td>${item.email}</td></tr>`;
        });
    });

    // Appointments
    fetch(`${base}/appointments`).then(r => r.json()).then(data => {
        const tbody = document.querySelector("#appointmentstable tbody");
        data.forEach(item => {
            tbody.innerHTML += `<tr><td>${item.appointment_id}</td><td>${item.customer_id}</td><td>${item.employee_id}</td><td>${item.service_id}</td><td>${item.date}</td><td>${item.time}</td></tr>`;
        });
    });

    // Services
    fetch(`${base}/services`).then(r => r.json()).then(data => {
        const tbody = document.querySelector("#servicestable tbody");
        data.forEach(item => {
            tbody.innerHTML += `<tr><td>${item.service_id}</td><td>${item.service_name}</td><td>${item.description}</td><td>${item.price}</td></tr>`;
        });
    });

    // Employees
    fetch(`${base}/employees`).then(r => r.json()).then(data => {
        const tbody = document.querySelector("#employeestable tbody");
        data.forEach(item => {
            tbody.innerHTML += `<tr><td>${item.employee_id}</td><td>${item.name}</td><td>${item.role}</td><td>${item.hire_date}</td></tr>`;
        });
    });

    // Payments
    fetch(`${base}/payments`).then(r => r.json()).then(data => {
        const tbody = document.querySelector("#paymentstable tbody");
        data.forEach(item => {
            tbody.innerHTML += `<tr><td>${item.payment_id}</td><td>${item.appointment_id}</td><td>${item.amount}</td><td>${item.payment_date}</td></tr>`;
        });
    });

    // Products
    fetch(`${base}/products`).then(r => r.json()).then(data => {
        const tbody = document.querySelector("#productstable tbody");
        data.forEach(item => {
            tbody.innerHTML += `<tr><td>${item.product_id}</td><td>${item.name}</td><td>${item.brand}</td><td>${item.price}</td></tr>`;
        });
    });

    // Inventory
    fetch(`${base}/inventory`).then(r => r.json()).then(data => {
        const tbody = document.querySelector("#inventorystable tbody");
        data.forEach(item => {
            tbody.innerHTML += `<tr><td>${item.inventory_id}</td><td>${item.product_id}</td><td>${item.stock}</td><td>${item.last_updated}</td></tr>`;
        });
    });

    // Feedback
    fetch(`${base}/feedback`).then(r => r.json()).then(data => {
        const tbody = document.querySelector("#feedbacktable tbody");
        data.forEach(item => {
            tbody.innerHTML += `<tr><td>${item.feedback_id}</td><td>${item.customer_id}</td><td>${item.rating}</td><td>${item.comment}</td><td>${item.date}</td></tr>`;
        });
    });
});
