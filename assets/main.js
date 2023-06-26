const url = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCodgpTSCZEZO0mmvah7E3oQ&part=snippet%2Cid&order=date&maxResults=9';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7ac81b7933msh9fe19c58263a6e9p1f8414jsncbfd7241a4a3',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

const content = null || document.querySelector('#content');

(async () => {
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        let view = `
        ${result.items.map(video => `
        <div class="group relative">
          <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${video.snippet.thumbnails.high.url}" alt="" class="w-full">
          </div>
          <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
              <span aria-hidden="true" class="absolute inset-0"></span>
              ${video.snippet.title}
            </h3>
          </div>
        </div>
        `).slice(0,4).join('')}
        
        `;
        content.innerHTML= view;
    } catch (error) {
        console.error(error);
    }
})();



