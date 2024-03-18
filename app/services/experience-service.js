
const experienceService  = {

  async retrieveExperience() {
    let experience = [];

    try {
      const response = await fetch('data/experience.json');
      experience = await response.json();
    } catch (err) {
      console.error('Failed to retrieve experience =>', err);
      return Promise.reject(err);
    }

    return experience;
  }

};

export default experienceService;