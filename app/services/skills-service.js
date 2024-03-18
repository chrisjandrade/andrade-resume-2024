
const skillsService = {

  async retrieveSkills() {
    let skills = [];
    
    try {
      const response = await fetch('/data/skills.json');
      skills = await response.json();
    } catch (err) {
      console.error('Failed to retrieve skills =>', err);
      return Promise.reject(err);
    }

    return skills;
  }

};

export default skillsService;
