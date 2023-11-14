const redis = require('redis');
const client = redis.createClient();

client.on('error', (err) => {
  console.log(`Redis error: ${err}`);
});

const REDIS_KEY = 'dataKey';

exports.storeData = (data) => {
  // Store data in Redis
  client.set(REDIS_KEY, JSON.stringify(data));
};

exports.getData = (callback) => {
  // Retrieve data from Redis
  client.get(REDIS_KEY, (err, data) => {
    if (err) {
      console.log(`Redis error: ${err}`);
      callback(null);
    } else {
      callback(JSON.parse(data));
    }
  });
};
