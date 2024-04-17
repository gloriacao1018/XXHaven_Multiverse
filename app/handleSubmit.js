const handleSubmit = async () => {
    try {
      // Make POST requests to your backend API endpoints
      await fetch('/api/background', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ image: backgroundImage }),
      });
  
      itemImages.forEach(async (image) => {
        await fetch('/api/item', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ image }),
        });
      });
  
      characterImages.forEach(async (image) => {
        await fetch('/api/character', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ image }),
        });
      });
  
      console.log('Images uploaded successfully');
    } catch (error) {
      console.error('Error uploading images:', error);
    }
  };
  