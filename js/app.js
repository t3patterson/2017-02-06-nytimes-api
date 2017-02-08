console.log("WIRED UP")

console.log($)

$.getJSON('https://api.nytimes.com/svc/topstories/v1/world.json?api-key=12e8922b74134ddabb5c1f2c5e866001').then(function(serverRes){
	console.log(serverRes.results)
	var storiesContainerEl = document.querySelector('.stories-container')
	var articleObjectsList = serverRes.results
	
	var bigHtmlStoryStr = ''
	forEach(articleObjectsList, function(articleObj){
		console.log( articleObj.multimedia[0])
		var imgUrl = ''
		if( typeof articleObj.multimedia[0] !== 'undefined'){ 
			imgUrl = articleObj.multimedia[0].url
		}
		var articleTitle = articleObj.title
		var articleAuthor = articleObj.byline

		var storyDiv =  '<div class="story">'
		storyDiv		 +=	   '<img src="' + imgUrl + '">'
		storyDiv	    +=    	'<h3>' + articleTitle + '</h3>'
		storyDiv     +=  		'<p>' + articleAuthor  + '</p>'
		storyDiv     += '</div>'

		bigHtmlStoryStr += storyDiv
	})

	storiesContainerEl.innerHTML = bigHtmlStoryStr
})