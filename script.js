function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
let videoPlayed = false;


const noButton = document.getElementById("no-button");
    const maxWidth = window.innerWidth - noButton.offsetWidth;
    const maxHeight = window.innerHeight - noButton.offsetHeight;
	noButton.style.position = "absolute";
	const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
    const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));

    // Apply the new coordinates to the button
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";
   noButton.addEventListener("mouseover", () => {
      

      // Generate new random coordinates when the button is hovered
      const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
      const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));

      noButton.style.zIndex = "100";
      // Apply new coordinates to the button, causing it to move
      noButton.style.left = randomX + "px";
      noButton.style.top = randomY + "px";
    });

function showMessage(response) {
   
  
  

  if (response === "Yes") {
    // Remove the name message and the "No" button
    document.getElementById("name").remove();
    document.getElementById("no-button").remove();
    const videoElement = document.querySelector("video");
    if (!videoPlayed) {
        const videoElement = document.createElement("video");
        videoElement.src = "./Marias.mp4#t=0";
        videoElement.autoplay = true;
        videoElement.controls = false;
        document.body.appendChild(videoElement);
        videoElement.style.position = "fixed";
        videoElement.style.top = "40%";
        videoElement.style.left = "50%";
        videoElement.style.transform = "translate(-50%, -50%)";
        videoElement.style.width = "700px"
        document.body.appendChild(videoElement);
        // Set the flag to true after playing the video
        videoPlayed = true;
      }

    // Create an audio element to play the sound



    // Update the text content, display the message, and change the image to "dance.gif"
    const yesMessage = document.getElementById("question2");
	const yesMessage2 = document.getElementById("question");
	yesMessage2.textContent = "-----------------------------------------------------------------------";
    yesMessage.textContent = "YESSS! we'll both spend the 14th together baby! SEE YOU ON THE 14th!";
    yesMessage.style.display = "block";
    yesMessage.style.fontStyle = "normal";

    // Remove the "Yes" button
    document.getElementById("yesButton").remove();
  }

}
