<body>
    <div class="container">
        <h1>Register</h1>
        <form id="registrationForm">
            <input type="text" id="name" placeholder="Full Name" required>
            <input type="email" id="email" placeholder="Email" required>
            <input type="tel" id="phone" placeholder="Phone" required>
            <select id="event" required>
                <option value="">Select Event</option>
                <option value="workshop">Workshop</option>
                <option value="seminar">Seminar</option>
            </select>
            <button type="submit">Register</button>
        </form>
        <p id="successMessage" style="display:none;">Registration successful!</p>
    </div>
    <script src="script.js"></script>
</body>
</html>