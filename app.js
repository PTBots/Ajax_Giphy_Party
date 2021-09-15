const $gif = $("#gifs");
const $search = $("#search");

function addGif(result) {
    let numResults = result.data.length;
    if (numResults) {
        let random = Math.floor(Math.random() * numResults);
        let $newCol = $("<div>");
        let $newGif = $("<img>", {
            src: result.data[random].images.original.url, class:"w-100"
        });
        $newCol.append($newGif);
        $gif.append($newCol);
    }
}

$("form").on("submit", async function(e) {
    e.preventDefault();

    let search = $search.val();
    $search.val("");

    const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params: {
            q: search,
            api_key:"MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
        }
    });
    addGif(response.data);
});

$("#remove").on("click", function(){
    $gif.empty()
});