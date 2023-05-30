<script>
      // Get the number of clients rate
      const numOfClients = 96;
      
      // Calculate the average rating
      const rating = 4.5;
      
      // Calculate the number of filled stars
      const filledStars = Math.round(rating);

      // Set the active class to the appropriate stars
      for (let i = 1; i <= filledStars; i++) {
        document.getElementById(`star${i}`).classList.add('active');
      }

      // Set the color of the stars based on the number of clients rate
      const stars = document.querySelectorAll('.star');
      const color = '#54A798';
      const threshold = 50;
      
      if (numOfClients >= threshold) {
        stars.forEach(star => star.style.color = color);
      }

      // Update the number of clients
      const clients = document.querySelector('.clients');
      clients.textContent = `(${numOfClients})`;
    </script>