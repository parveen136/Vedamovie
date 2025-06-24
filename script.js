
const movies = [{'title': 'The Jungle Book (1942)', 'link': 'https://archive.org/details/The_Jungle_Book_1942', 'img': 'https://archive.org/download/The_Jungle_Book_1942/JungleBook_1942.jpg'}, {'title': 'Sherlock Holmes (1944)', 'link': 'https://archive.org/details/SherlockHolmesTheScarletClaw', 'img': 'https://archive.org/download/SherlockHolmesTheScarletClaw/ScarletClaw.jpg'}, {'title': 'Charlie Chaplin - The Kid', 'link': 'https://www.youtube.com/watch?v=DXrnw4t4tWg', 'img': 'https://img.youtube.com/vi/DXrnw4t4tWg/hqdefault.jpg'}, {'title': 'Night of the Living Dead (1968)', 'link': 'https://archive.org/details/night_of_the_living_dead', 'img': 'https://archive.org/download/night_of_the_living_dead/poster.jpg'}, {'title': 'Plan 9 from Outer Space (1959)', 'link': 'https://archive.org/details/Plan_9_from_Outer_Space_1959', 'img': 'https://archive.org/download/Plan_9_from_Outer_Space_1959/poster.jpg'}, {'title': 'His Girl Friday (1940)', 'link': 'https://archive.org/details/his_girl_friday', 'img': 'https://archive.org/download/his_girl_friday/poster.jpg'}, {'title': 'D.O.A. (1949)', 'link': 'https://archive.org/details/DOA1950', 'img': 'https://archive.org/download/DOA1950/poster.jpg'}, {'title': 'A Star Is Born (1937)', 'link': 'https://archive.org/details/AStarIsBorn1937', 'img': 'https://archive.org/download/AStarIsBorn1937/poster.jpg'}, {'title': 'Indestructible Man (1956)', 'link': 'https://archive.org/details/IndestructibleMan', 'img': 'https://archive.org/download/IndestructibleMan/poster.jpg'}, {'title': "Gulliver's Travels (1939)", 'link': 'https://archive.org/details/gullivers_travels1939', 'img': 'https://archive.org/download/gullivers_travels1939/poster.jpg'}];

function displayMovies() {
  const container = document.getElementById('movieContainer');
  container.innerHTML = '';
  movies.forEach(movie => {
    container.innerHTML += `
      <div class="movie-card">
        <img src="${movie.img}" alt="${movie.title}">
        <div class="movie-info">
          <h3>${movie.title}</h3>
          <a href="${movie.link}" target="_blank">▶ Watch / Download</a>
        </div>
      </div>
    `;
  });
}

function searchMovies() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const filtered = movies.filter(movie => movie.title.toLowerCase().includes(input));
  const container = document.getElementById('movieContainer');
  container.innerHTML = '';
  filtered.forEach(movie => {
    container.innerHTML += `
      <div class="movie-card">
        <img src="${movie.img}" alt="${movie.title}">
        <div class="movie-info">
          <h3>${movie.title}</h3>
          <a href="${movie.link}" target="_blank">▶ Watch / Download</a>
        </div>
      </div>
    `;
  });
}

window.onload = displayMovies;
