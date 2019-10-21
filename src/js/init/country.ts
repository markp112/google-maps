import axios from 'axios';
import { displayCountrySelected } from '../handlers/countryHandler';
// retrieve a list of the countries
const getCountries = (): Promise<Array<string>> => {
    return new Promise((resolve, reject) => {
        axios.get('http://localhost:8085/getCountryList/')
            .then(resp => {
                let countryArray: Array<string> = [...resp.data];
                resolve(countryArray);
            })
            .catch(err => {
                reject(err);
            });
    })
};

// format the country remove underscores and capitalise first letters
// input a name of a country
// output country name formatted
const formatCountry = (country: string): string => {
    let countryFormatted  = country.replace(/_/g, ' ');
    countryFormatted = countryFormatted.toLowerCase()
                            .split(' ')
                            .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                            .join(' ');
    return countryFormatted;
}
// populate the country Select with a list of the countries
// input string array of country names
const populateSelect = (countries: Array<string>) => {
    countries.forEach(country => {
        let opt = document.createElement("option");
        opt.value = country;
        let formatted:string = formatCountry(country);
        opt.innerHTML = formatted; 
        document.querySelector('.box #country-list').appendChild(opt);
    })
}

const addEventHandlers = ():void => {
    document.querySelector('#country-list').addEventListener('change', (e: Event) => displayCountrySelected(e));
    console.log('document.querySelector(\'#country-list\') :', document.querySelector('#country-list'));
}

// get the list of countries and populate them into the country select
// input:none
// return none
export const populateCountryList = (): void => {
    getCountries()
    .then(countryList => {
        populateSelect(countryList);
        addEventHandlers();
    })
    .catch(err => {
        throw new Error(err);
    })
};
