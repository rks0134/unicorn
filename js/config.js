window._config = {
    cognito: {
        userPoolId:         'us-east-1_htTdiUPF1',         // e.g. us-east-2_uXboG5pAb
        userPoolClientId:   '4n9ddjjopftq45vieb2bjsb6fl',         // e.g. 25ddkmj4v6hfsfvruhpfi7n4hv
        region:             'us-east-1'          // e.g. us-east-2
    },
    api: {
        invokeUrl:          'https://gx9f5lplwe.execute-api.us-east-1.amazonaws.com/prod'          // e.g. https://rc7nyt4tql.execute-api.us-west-2.amazonaws.com/prod',
    }
};
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://distance-calculator.p.rapidapi.com/distance/simple',
  params: {
    lat_1: '47.373535',
    long_1: '8.541109',
    lat_2: '42.335321',
    long_2: '-71.023516',
    unit: 'miles',
    decimal_places: '2'
  },
  headers: {
    'Content-Type': 'application/json',
    'X-RapidAPI-Key': '29f8b12035msh5872cfa40f2b860p194015jsn1793c2231c42',
    'X-RapidAPI-Host': 'distance-calculator.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
