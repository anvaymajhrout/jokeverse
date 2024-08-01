function toggleDropdown() {
    const dropdown = document.getElementById('dropdownMenu');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  }
  
  async function getJoke(category) {
    toggleDropdown(); 
    const response = await fetch(`https://v2.jokeapi.dev/joke/${category}`);
    const data = await response.json();
    const jokeText = document.getElementById('jokeText');
    const categoryLabel = document.getElementById('categoryLabel');
  
    categoryLabel.innerText = category; 
  
    if (data.type === 'single') {
      jokeText.innerText = data.joke;
    } else {
      jokeText.innerText = `${data.setup} - ${data.delivery}`;
    }
  
    jokeText.style.display = 'block';
  }
  
  function copyJoke() {
    const jokeText = document.getElementById('jokeText').innerText;
    navigator.clipboard.writeText(jokeText).then(() => {
      alert('Joke copied to clipboard!');
    });
  }
  