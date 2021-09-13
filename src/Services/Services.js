class ImdbService {
  async getResourse(url) {
    const res = await fetch(url)

    if (!res.ok) {
      throw new Error('error service')
    }

    return await res.json()
  }

  getAllMovies(name) {
    return this.getResourse(`http://www.omdbapi.com/?apikey=1b678195&s=${name}`)
  }
  getMovie(id) {
    return this.getResourse(`http://www.omdbapi.com/?apikey=1b678195&i=${id}`)
  }
}


export default ImdbService;