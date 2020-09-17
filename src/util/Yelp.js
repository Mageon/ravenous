// Client ID
// HxQx2-ZFKvni8_F7JINoZA

// API Key
// ecPJqx8wM_H4WTYRHE3_xxuZ_2SLVWSpZxHYy1dvIwr3Tl0fH8BahF3hpx-Sg3c1763nsyFHG0k5sO_73aoz1QULxcemsFXLh1bClCIV0HBC8CymrolRgYFJkmxjX3Yx

const apiKey = 'ecPJqx8wM_H4WTYRHE3_xxuZ_2SLVWSpZxHYy1dvIwr3Tl0fH8BahF3hpx-Sg3c1763nsyFHG0k5sO_73aoz1QULxcemsFXLh1bClCIV0HBC8CymrolRgYFJkmxjX3Yx';

// https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=sushi&location=monterrey&sort_by=best_match,{headers: {Authorization: Bearer ecPJqx8wM_H4WTYRHE3_xxuZ_2SLVWSpZxHYy1dvIwr3Tl0fH8BahF3hpx-Sg3c1763nsyFHG0k5sO_73aoz1QULxcemsFXLh1bClCIV0HBC8CymrolRgYFJkmxjX3Yx

// const Yelp = {
//     search(term, location, sortBy) {
//         // console.log(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy},{headers: {Authorization: Bearer ${apiKey}`);
//         return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,{headers: {Authorization: `Bearer ${apiKey}`}}).then(
//             response => {
//                 console.log('before first json returned');
//                 return response.json();
//             }
//         ).then(
//             jsonResponse => {
//                 if(jsonResponse.businesses){
//                     return jsonResponse.businesses.map(
//                         business => {
//                             // console.log('business id = ' + business.name);
//                             return {
//                                 id: business.id,
//                                 imageSrc: business.image_url,
//                                 name: business.name,
//                                 address: business.location.address1,
//                                 city: business.location.city,
//                                 state: business.location.state,
//                                 zipCode: business.location.zip_code,
//                                 category: business.categories.title,
//                                 rating: business.rating,
//                                 reviewCount: business.review_count
//                             };
//                         }
//                     );
//                 }
//             }
//         );
//     }
// };

const Yelp = {
    async search(term, location, sortBy) {
        const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, { headers: { Authorization: `Bearer ${apiKey}` } });
        const jsonResponse = await response.json();
        if (jsonResponse.businesses) {
            return jsonResponse.businesses.map(
                business => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories.title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    };
                }
            );
        }
    }
};

export default Yelp;