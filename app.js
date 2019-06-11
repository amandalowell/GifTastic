var topics, newButton, newTopic, queryURL, flowerName, results, flowerDiv, rating, gifShow, state;


topics = ["BubbleGum", "Fallout", "Yoga", "Bathtub", "Stephen King" ,"Hiking", "Piano", "Flower", "Strawberry"];

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

