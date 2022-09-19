const loadcountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displaycountries(data));
}

const displaycountries = countries => {
    console.log(countries[0]);
    const countriesHTML = countries.map(country => getCountryHTML(country))
    //console.log(countriesHTML);
    const container = document.getElementById('countries');
    container.innerHTML = countriesHTML.join(' ');
}

//optional 1 destructure
const getCountryHTML = ({ name, flags, area, region }) => {

    //const { name, flags } = country;

    return `
    <div>
        <h2> ${name.common} </h2>
        <p>Area: ${area}</p>
        <p>Container:${region}</p>
        <img src="${flags.png} "

    </div>

    `
}


//optional 1 destructure
// const getCountryHTML = country => {
//     
//     const { name, flags } = country;

//     return `
//     <div>
//         <h2> ${name.common} </h2>
//         <img src="${flags.png} "

//     </div>

//     `
// }

//optional 1 orginal
// const getCountryHTML = country => {
//     
//     
//     return `
//     <div>
//         <h2> ${country.name.common} </h2>
//         <img src="${country.flags.png} "

//     </div>

//     `
// }



loadcountries();