const apiKey = 'R8QtIYCSORGH_zBRce-rpgXdu_pL9Wb0YyvAi5O031Jx3ylwhw0DpQWXnrk77QlLsL_ZuGmQdJBiBbOA3cU74YWnp0VZkwgVGnP8TJ8xaNfI34N-24mFG9tTh-MrZHYx';

const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      return response.json(); 
    }).then(jsonResponse => {
      if (jsonResponse.businesses){
        return jsonResponse.businesses.map(business => {
          return {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city, 
            state: business.location.state,
            zipCode: business.location.zip_code, 
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count,
          }
        }) 
      } 
    })
  }
};

export default Yelp;
