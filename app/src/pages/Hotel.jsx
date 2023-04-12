import React, { useState, useEffect } from "react";
// import { hotelList } from "../constants/hotelList";
import { Navbar, HotelSearch, HotelCard } from "../components/index";
import axios from 'axios';

const Hotel = () => {

  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);

  function getHotels() {
    axios.get('http://localhost:3000/hotels')
      .then((response) => {
        setHotels(response.data.hotels);
        console.log(response.data.hotels);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    getHotels();
  }, []);

  return (
    <>
      <div className="flex justify-center items-center">
        <Navbar />
      </div>
      <div className="container mx-auto flex flex-row justify-center items-center mt-[130px] relative">
        <HotelSearch />
      </div>
      <div className="container mx-auto flex gap-10 mt-40">
        {/* ------------------- filter ------------------- */}
        <form method="POST">
        <div className="flex flex-col w-full max-2xl:w-[15rem]">
          <div className="flex w-full justify-between items-center">
            <h1 className="text-2xl font-medium">Filters</h1>
            <button className="bg-gray-3 text-gray-1 p-2 px-3 rounded-xl">
              Reset filters
            </button>
          </div>

          {/* ---------------- price filter --------------- */}

          <div className="flex w-full justify-between items-center mt-8 gap-3">
            <div>
              <h1 className="text-gray-1 text-xl">Min Price</h1>
              <input
                className="border border-solid border-gray-5 rounded-3xl p-3 px-5 text-gray-1 mt-4 w-full"
                type="number"
                name="minP"
                value="0"
              />
            </div>
            <div>
              <h1 className="text-gray-1 text-xl">Max Price</h1>
              <input
                className="border border-solid border-gray-5 rounded-3xl p-3 px-5 text-gray-1 mt-4 w-full"
                type="number"
                name="maxP"
                value="10000"
              />
            </div>
          </div>
          <div className="flex w-full justify-between items-center mt-5 gap-3">
            <div>
              <h1 className="text-gray-1 text-xl">Bedtype</h1>
              <select
                className="border border-solid border-gray-5 rounded-3xl p-3 px-5 text-gray-1 mt-4 w-full"
                name="bedroom"
              >
                <option>Single/twin</option>
                <option>Double</option>
                <option>King</option>
                <option>Queen</option>
              </select>
            </div>
            {/* <div>
              <h1 className="text-gray-1 text-xl">Bathroom</h1>
              <input className="border border-solid border-gray-5 rounded-3xl p-3 px-5 text-gray-1 mt-4 w-full" type="number" name="maxP" />
            </div> */}
          </div>

          {/* --------------- star rating ---------------- */}

          <div className="mt-5">
            <h1 className="text-gray-1 text-xl">Star Rating</h1>
            <form className="flex flex-col gap-1 mt-2">
              <div>
                <input type="checkbox" name="five" />
                <label className="ml-2" for="five">
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                </label>
              </div>
              <div>
                <input type="checkbox" name="four" />
                <label className="ml-2" for="four">
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                </label>
              </div>
              <div>
                <input type="checkbox" name="three" />
                <label className="ml-2" for="three">
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                </label>
              </div>
              <div>
                <input type="checkbox" name="two" />
                <label className="ml-2" for="two">
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                </label>
              </div>
              <div>
                <input type="checkbox" name="one" />
                <label className="ml-2" for="one">
                  <i className="fa-solid fa-star" />
                </label>
              </div>
              <div>
                <input type="checkbox" name="no" />
                <label className="text-gray-1 ml-2" for="no">
                  No Rating
                </label>
              </div>
            </form>
          </div>

          {/* ------------- Guest Rating -------------- */}

          <div className="mt-5">
            <h1 className="text-gray-1 text-xl">Guest Rating</h1>
            <form className="flex flex-col gap-1 mt-2">
              <div>
                <input type="radio" name="guest" />
                <label className="text-gray-1 ml-2" for="nine">
                  9+ Exceptional
                </label>
              </div>
              <div>
                <input type="radio" name="guest" />
                <label className="text-gray-1 ml-2" for="eight">
                  8+ Excellent
                </label>
              </div>
              <div>
                <input type="radio" name="guest" />
                <label className="text-gray-1 ml-2" for="seven">
                  7+ Very Good
                </label>
              </div>
              <div>
                <input type="radio" name="guest" />
                <label className="text-gray-1 ml-2" for="six">
                  6+ Good
                </label>
              </div>
            </form>
          </div>

          {/* ------------- Location filter ------------- */}

          <div className="mt-5">
            <h1 className="text-gray-1 text-xl">Location</h1>
            <form className="flex flex-col gap-1 mt-2">
              <div>
                <input type="radio" name="guest" />
                <label className="text-gray-1 ml-2" for="CM">
                  Chiang Mai
                </label>
              </div>
              <div>
                <input type="radio" name="guest" />
                <label className="text-gray-1 ml-2" for="four">
                  Chon Buri
                </label>
              </div>
              <div>
                <input type="radio" name="guest" />
                <label className="text-gray-1 ml-2" for="three">
                  Khao Yai
                </label>
              </div>
              <div>
                <input type="radio" name="guest" />
                <label className="text-gray-1 ml-2" for="two">
                  Prachin Buri
                </label>
              </div>
            </form>
          </div>
        </div>
        </form>

        {/* max-2xl:w-[20rem] */}
        <div className="flex flex-col w-full">
          <h1 className="text-xl">Showing {hotels.length} search results</h1>
          {hotels.map((item) => (
            <div className="mt-8 w-full">
              <HotelCard key={item.hotel_id} {...item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Hotel;
