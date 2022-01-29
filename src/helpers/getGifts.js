export const getGifts = async (category) => {
    
  const url = `http://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=gtkER6NuCcdQmLHjijhAp9CaUETUoboP`
  const resp = await fetch( url );
  const { data } = await resp.json();

  const gifts = data.map( img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url
    }
  })

  return gifts;
}