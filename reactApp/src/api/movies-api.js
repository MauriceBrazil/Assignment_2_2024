export const getMovies = async () => {
    const response = await  fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=ced7427ef1ae9c23a9074629c7f3e274&language=en-US&include_adult=false&page=1`
    )
    return response.json()
  };