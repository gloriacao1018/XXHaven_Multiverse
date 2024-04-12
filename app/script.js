import { useState } from 'react';

export const handleImageUpload = (event) => {
  const [selectedImages, setSelectedImages] = useState({});
  const [submissionMessage, setSubmissionMessage] = useState(""); 


  const file = event.target.files[0];
  const reader = new FileReader();
  const id = event.target.id;

  reader.onloadend = () => {
    setSelectedImages((prevState) => ({ ...prevState, [id]: reader.result }));
  };

  reader.readAsDataURL(file);
};

export const handleSubmit = async (event) => {
  event.preventDefault(); 

  const formData = new FormData(event.target); 

  try {
      const response = await fetch('http://localhost:5001/submit-game', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {

      const gameData = await response.json(); 
      console.log(gameData);
      setSubmissionMessage(`Data saved successfully! Game ID: ${gameData._id}`);
    } else {
      throw new Error('Network response was not ok.');
    }
  } catch (error) {
    console.error('Submission error:', error);
  }
};


(function() {
  const dropdowns = document.querySelectorAll('#character1Items, #character2Items, #character3Items, #character4Items');

  // Loop over the dropdown menus and bind the change event to each one
  dropdowns.forEach(function(dropdown) {
    dropdown.addEventListener('change', function() {
      /*  Toggle the CSS closed class which reduces the height of the UL thus 
          hiding all LI apart from the first */
      this.parentNode.parentNode.classList.toggle('closed');
    }, false);
  });
})();