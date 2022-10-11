const imageGenerator = require('./imageGenerator')

const APIURL= "https://dev.goigni.com/ig_feed/";
const Trigger = async (dataFunction)=>{
  await fetch(APIURL, {
  method: 'POST', 
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(dataFunction),
})
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
  
  
}




module.exports = Trigger;



