const { RIOT_API_KEY } = require('../config');
const express = require('express')
const router = express.Router();
const axios = require('axios');


router.get('/api/search', (req, res) => {
  console.log('params object: ', req.query);
  const region = req.query.region.toLowerCase() + '1';
  console.log('THIS IS DA REGION!: ', region);
  let result = {};
  let headers = { 'X-Riot-Token': RIOT_API_KEY };

  const options1 = {
    method: 'get',
    url: 'https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/caps%20dad',
    headers: headers
  };

  const options2 = {
    method: 'get',
    url: 'https://euw1.api.riotgames.com/lol/champion-mastery/v4/scores/by-summoner/',
    headers: headers
  };


  axios(options1)
    .then((rows) => {
      console.log(rows.data);
      // result.summonerInfo = rows.data
      // options2.url = `https://euw1.api.riotgames.com/lol/champion-mastery/v4/scores/by-summoner/${rows.data.id}`;

      // axios(options2)
      //   .then((rows) => {

      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });


      console.log(rows.data.id);
    })
    .catch((err) => {
      console.log(err);
    });

    res.send('it worked, check terminal');
});

module.exports = router;