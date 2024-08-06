const apiKey = 'BJBktdi7wcksI08Co7mUoGvQ5IIsQUxf2klK_j_3QMx-jY9y7czEA8r3viLfebC5Ml0Mu5oeGSw8haPFPs8eF6J8QmvnYaEiGj8Xekvlkha9i5RBlR33HxwZ3J-yZnYx';

const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
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
