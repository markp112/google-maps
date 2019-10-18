import axios from 'axios';

const getCountries = ():Promise<Array<string>> => {   
    return new Promise((resolve, reject) => {
        axios.get('http://localhost:8085/getCountryList/')
            .then(resp => {
                console.log("TCL: resp.data", resp.data)
                let countryArray:Array<string> = [...resp.data];
                console.log("TCL: countryArray", countryArray)
                resolve(countryArray);
            })
            .catch(err => {
                reject(err);
            });
    }) 
};


const populateSelect = (countries:Array<string>) => {
console.log("TCL: populateSelect -> countries", countries)

    countries.forEach(country =>{
        let opt = document.createElement("option");
        opt.value = country;
        opt.innerHTML = country; // whatever property it has

        // then append it to the select element
        document.querySelector('country-list').appendChild(opt);

    })
}


export const populateCountryList = ():void => {
    getCountries()
        .then(countryList => {
        console.log("TCL: countryList", countryList)
            
        populateSelect(countryList);
    }); 
};
