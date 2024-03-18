
const infoService = {

  async retrieveInfo() {
    let info;

    try {
      const response = await fetch('/data/info.json');
      info = await response.json();
    } catch (err) {
      console.error('Failed to retrieve info =>', err);
      return Promise.reject(err);
    }

    return info;
  }

};

export default infoService;
