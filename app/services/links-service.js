
const linksService = {

  async retrieveLinks() {
    let links = [];

    try {
      const response = await fetch('data/links.json');
      links = await response.json();
    } catch (err) {
      console.error('An error occured retrieving links =>', err);
      return Promise.reject(err);
    }

    return links;
  }
};

export default linksService;
