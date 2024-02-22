const fetch = require('isomorphic-unfetch');
const { getData, getPreview, getTracks, getDetails } = require('spotify-url-info')(fetch);

const spotifyUrl = '3CA9pLiwRIGtUBiMjbZmR'; // Example Spotify URL

// Usage example for getData
getData(spotifyUrl)
  .then(data => {
    console.log('Data:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

// Usage example for getPreview
getPreview(spotifyUrl)
  .then(previewUrl => {
    console.log('Preview URL:', previewUrl);
  })
  .catch(error => {
    console.error('Error:', error);
  });

// Similarly, you can use getTracks and getDetails in a similar fashion
