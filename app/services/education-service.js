const educationService =  {
  
  async retrieveEducation() {
    let education = [];

    try {
      const response = await fetch(`data/education.json`);
      education = await response.json();
    } catch (err) {
      console.error('An error occured retrieving education =>', err);
      return Promise.reject(err);
    }

    return education;
  }
}

export default educationService;
