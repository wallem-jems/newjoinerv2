import React, { useState } from "react";
import "../index.css";
import countryList from "../data/countryList.json";
import departmentList from "../data/department.json";
const NewJoinerForm = ({ onGenerate }) => {
  const sortedCountryList = countryList.sort((a, b) => {
    return a.country.localeCompare(b.country);
  });
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  //Field useState
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [adid, setADID] = useState("");
  const [password, setPassword] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [department, setDepartment] = useState("");
  const [manager, setManager] = useState("");
  const [country, setCountry] = useState([""]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [cities, setCities] = useState([""]);
  const [selectedCity, setSelectedCity] = useState("");
  const [address, setAddress] = useState("");
  const [zipCode, setZipcode] = useState("");
  //Function

  const handleCountryChange = (event) => {
    const countryCode = event.target.value;
    const countryData = countryList.find(
      (country) => country.code === countryCode
    );
    setSelectedCountry(countryCode);
    setCountry(countryData.country);
    const sortedCities = countryData
      ? countryData.city.sort((a, b) => a.cityName.localeCompare(b.cityName))
      : [];
    setCities(sortedCities);
    setSelectedCity("");
    setAddress("");
    setZipcode("");
  };
  const handleCityChange = (event) => {
    const cityName = event.target.value;
    const cityData = cities.find((city) => city.cityName === cityName);
    setSelectedCity(cityName);
    setAddress(cityData ? cityData.address : "");
    setZipcode(cityData ? cityData.zipCode : "");
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (
      !firstName ||
      !lastName ||
      !email ||
      !adid ||
      !jobTitle ||
      !department ||
      !manager ||
      !country ||
      !selectedCity
    )
      return;
    const newEmployee = {
      firstName,
      lastName,
      email,
      adid,
      jobTitle,
      department,
      manager,
      country,
      password,
      selectedCountry,
      selectedCity,
      address,
      zipCode,
    };
    onGenerate(newEmployee);
    console.log(newEmployee);
  }

  return (
    <div className="container">
      <h1 className="title">Employee Details Form 📃</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <input
            placeholder="First Name"
            type="text"
            value={firstName}
            onChange={(e) =>
              setFirstName(capitalizeFirstLetter(e.target.value))
            }
          />
          <input
            placeholder="Last Name"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(capitalizeFirstLetter(e.target.value))}
          />
          <input
            placeholder="Email Address"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="ADID / OKTA ID"
            value={adid}
            minLength={4}
            maxLength={10}
            onChange={(e) => setADID(e.target.value)}
          />
          <input
            placeholder="Password"
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            placeholder="Job Title"
            type="text"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />
          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          >
            <option value="" disabled>
              -- SELECT A DEPARTMENT --
            </option>
            {departmentList.map((dept) => (
              <option key={dept.id}>{dept.deptName}</option>
            ))}
          </select>
          <input
            placeholder="Manager"
            type="text"
            value={manager}
            onChange={(e) => setManager(e.target.value)}
          />

          <select
            value={selectedCountry}
            className="countryOpt"
            onChange={handleCountryChange}
          >
            <option value="" disabled>
              -- SELECT A COUNTRY --
            </option>

            {sortedCountryList.map((country) => (
              <option key={country.code} value={country.code}>
                {country.country}
              </option>
            ))}
          </select>
          <select
            value={selectedCity}
            onChange={handleCityChange}
            disabled={!selectedCountry}
          >
            <option value="" disabled>
              -- SELECT A CITY --
            </option>
            {cities.length > 0 &&
              cities.map((city, index) => (
                <option key={index} value={city.cityName}>
                  {city.cityName}
                </option>
              ))}
          </select>
        </div>
        <button className="generate-btn">Generate Task List</button>
      </form>
    </div>
  );
};

export default NewJoinerForm;
