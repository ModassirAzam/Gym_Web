export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};






// export const exerciseOptions = {
//   method: 'GET',
//   url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back',
//   params: {limit: '10'},
//   headers: {
//     'X-RapidAPI-Key': '0849c630bfmshabffd484dd3a61cp19df63jsn031d0ee5dffc',
//     'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
//   }
// }


// export const fetchData = async(url,options) =>{
//     const response = await fetch(url,options);
//     const data = await response.json();

//     return data;
// }