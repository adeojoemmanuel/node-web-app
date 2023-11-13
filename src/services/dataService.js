const redis = require('redis');
const client = redis.createClient();

client.on('error', (err) => {
  console.log(`Redis error: ${err}`);
});

exports.storeData = (data) => {
  // Implement logic to store data in Redis
  // For simplicity, we'll just set a key-value pair
  client.set('dataKey', JSON.stringify(data));
};
