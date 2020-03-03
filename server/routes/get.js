const { RIOT_API_KEY } = require('../config');
const express = require('express')
const router = express.Router();
const axios = require('axios');
let _region = null;

/* *
 * This route formats and returns the following data from the Riot Games API:
 *
 *  {
 *    id: String,
 *    iconId: Number,
 *    name: String,
 *    lvl: Number,
 *    masteryTotal: Number
 *  }
 *
 * */
router.get('/api/search', (req, res) => {
  console.log('params object: ', req.query);

  // Setup
  let refined = {};
  req.query.region === 'KR' ? _region = 'kr' : _region = req.query.region.toLowerCase() + '1';

  // API calls options
  const options1 = {
    method: 'get',
    url: `https://${_region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${req.query.searchQuery}`,
    headers: { 'X-Riot-Token': RIOT_API_KEY }
  };

  const options2 = {
    method: 'get',
    url: null,
    headers: { 'X-Riot-Token': RIOT_API_KEY }
  };

  // Start the API call sequence
  axios(options1)
    .then((rows) => {
      console.log(rows.data);

      // Refine data
      refined.id = rows.data.id;
      refined.iconId = rows.data.profileIconId;
      refined.name = rows.data.name;
      refined.lvl = rows.data.summonerLevel;
      console.log(refined);

      // Fill in the `null` value in `options2`
      options2.url = `https://${_region}.api.riotgames.com/lol/champion-mastery/v4/scores/by-summoner/${rows.data.id}`;

      // Get the total mastery score
      axios(options2)
        .then((rows) => {
          refined.masteryTotal = rows.data;
          // Send refined data back to client
          res.send(refined);
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;