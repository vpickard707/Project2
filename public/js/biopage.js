$(document).ready(() => {
//   // make ajax call
//   const bioForm = $("#bioForm");
//   // Adding an event listener for when the form is submitted
//   $(bioForm).on("submit", handleFormSubmit);

//   function handleFormSubmit(event) {
//     event.preventDefault();
//     // Wont submit the update if we are missing info
//     if (
//       !favoriteInput.val().trim() ||
//       !genreInput.val().trim() ||
//       !concertInput.val().trim() ||
//       !aboutInput.val().trim()
//     ) {
//       return;
//     }
//     // Constructing a newBio object to hand to the database
//     const newBio = {
//       favorite: favoriteInput.val().trim(),
//       genre: genreInput.val().trim(),
//       concet: concetInput.val().trim(),
//       about: aboutInput.val().trim(),
//     };

//     newBio.id = biopageId;
//     updateBio(newBio);
//   }
//   function updateBio(post) {
//     $.ajax({
//       method: "PUT",
//       url: "/api/posts",
//       data: post,
//     }).then(() => {
//       window.location.href = "/biopage";
//     });
//   }
});
