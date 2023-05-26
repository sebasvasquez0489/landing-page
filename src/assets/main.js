
const API = 'https://youtube-v31.p.rapidapi.com/playlistItems?playlistId=PL3yiAoo3yH1hIZNHNoYptZl5D6oaOiQbG&part=snippet&maxResults=10' ;

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
    
		'X-RapidAPI-Key': '7577087fc3mshc3b77b9ab72277ap189389jsn3f29414643ec',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};



async function fetchdata(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async () => {
    try {
        const videos = await fetchdata(API);
          let view = `
          ${videos.items.map(video => `
            <div class="group relative">
              <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${video.snippet.thumbnails.high?.url}" alt="${video.snippet.description}" class="w-full">
              </div>
              <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                  <span aria-hidden="true" class="absolute inset-0"></span>
                  ${video.snippet.title}
                </h3>
              </div>
            </div>
          `).slice(3,7).join('')}
        `;
        content.innerHTML = view;
    } catch (error) {     
      console.log(error); 
  }
})();