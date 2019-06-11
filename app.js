var topics,
 newButton, 
 newTopic,  
 state,
 flowerName, 
 results, 
 flowerDiv, 
 queryURL,
 rating,
  gifShow;
  


topics = 
["Love",
"BubbleGum",
 "Fallout", 
 "Yoga",
  "Bathtub", 
  "Stephen King" ,
  "Hiking",
   "Piano", 
   "Flower", 
   "Strawberry"];

//make, clear but.
function makeButtons() {
	$("#buttons").html("");

	//Loop through topics array to make each button
	for (var i=0; i<topics.length; i++) {
		newButton = $("<button>" + topics[i] + "</button>");
		newButton.attr("data-name", topics[i]);
		newButton.addClass("flower");
		$("#buttons").append(newButton);
	};
};

//letting user make but.
$("#add-flower").on("click", function(event){
	event.preventDefault();
	if ($("#user-input").val() !== ""){
		newTopic = $("#user-input").val();
		$("#user-input").val("");
		topics.push(newTopic);
		makeButtons();
	}
});






$("#user-input").keypress(function(e){
	if (e.keyCode === 13 && $("#user-input").val() !== ""){
		//Take in user input and push to topics array
		//Also clear user input after value is stored
		newTopic = $("#user-input").val();
		$("#user-input").val("");
		topics.push(newTopic);
		makeButtons();
	}
})

//diplay, request//
function displayGifs(){
	$("#gifs").html("");

	//limit 10, to add # gif addition
	flowerName = $(this).attr("data-name");
	queryURL = "https://api.giphy.com/v1/gifs/search?q=" + flowerName + "&api_key=GYjGI4TbchgdW8uT9YookvzCt7BdluaX&limit=10";
	
	
	$.ajax({
		url: queryURL,
        method: "GET"
        


	}).done(function(response){
		results = response.data;

		//forloop
		for(var j=0; j<results.length; j++){

			flowerDiv = $("<div class='flower'>");
			$("#gifs").append(flowerDiv);

			
            rating = $("<div>Rating: " + results[j].rating + "</div>");
            





            //give attr to gifs
            

            
            gifShow = $("<img data-state='still' src='" + results[j].images.fixed_height_still.url + "'>");
            gifShow.attr("data-animate", results[j].images.fixed_height.url);
			gifShow.attr("data-still", results[j].images.fixed_height_still.url);
			gifShow.addClass("gif");

			//Append gifs and their ratings to heroDiv
			flowerDiv.append(rating);
			flowerDiv.append(gifShow);
		};
	});
};

//start or stop gif//
function animateGif(){
   
   
    // $(".gif").on("click", function() { ?????? 
    
    
state = $(this).attr("data-state");

	//move between still and animated 
	if (state === "still") {
		$(this).attr("src", $(this).attr("data-animate"));
		$(this).attr("data-state", "animate");
	}
	else {
		$(this).attr("src", $(this).attr("data-still"));
		$(this).attr("data-state", "still");
	}
}

//calling click function
makeButtons();
$(document).on("click", ".flower", displayGifs);
$(document).on("click", ".gif", animateGif);


