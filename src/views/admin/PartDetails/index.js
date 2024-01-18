import React, { useEffect, useState } from "react";
import { fetchPartsDetail } from "../../../services/partsApis";
import { FiSearch } from "react-icons/fi";
import JSONbig from "json-bigint";

const PartDetails = () => {
  const [PartSearchValue, setPartSearchValue] = useState();
  const [PartDetails, setPartDetails] = useState();
  const [PartImages, setPartImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPartDetails = async (searchValue) => {
    try {
      setLoading(true);
      const partDetails = await fetchPartsDetail(searchValue);
      setPartDetails(partDetails);
      console.log(partDetails, "partDetails");
      setLoading(false);
      const imageArray = JSON?.parse(partDetails?.images);
      //   const jsonStringArray = partDetails.split('}{').map((jsonString, index, array) => {
      //     // Add missing curly braces to each JSON string
      //     const jsonStringWithBraces = `{${jsonString}${index < array.length - 1 ? '}' : ''}`;
      //     return jsonStringWithBraces;
      //   });
      //   // Parse each JSON string into an array of objects using json-bigint library
      //   const parsedData = jsonStringArray.map(jsonString => JSONbig.parse(jsonString));
      //   console.log(partDetails, parsedData?.text, "partDetails");
      setPartImages(imageArray);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (!PartSearchValue) {
      fetchPartDetails("13527805");
    }
  }, []);

  const handleSearch = () => {
    fetchPartDetails(PartSearchValue);
    setPartSearchValue("")
  };

  return (
    <div className="w-12/12 mx-auto mt-5 md:w-11/12">
      <div className="flex items-center justify-start">
        <div className="w-12/12 my-4 flex h-full items-center rounded-full border bg-white text-navy-700 dark:bg-navy-900 dark:text-white md:w-6/12">
          <p className="pl-3 pr-2 text-xl">
            <FiSearch className="h-4 w-4 text-gray-400 dark:text-white" />
          </p>
          <input
            type="number"
            placeholder="Part Number Search..."
            value={PartSearchValue}
            onChange={(e) => setPartSearchValue(e.target.value)}
            class="block h-full w-full rounded-full bg-white py-2 text-lg font-medium text-navy-700 outline-none placeholder:!text-gray-400 dark:bg-navy-900 dark:text-white dark:placeholder:!text-white"
          />
        </div>
        <button
          onClick={handleSearch}
          className="ml-5 rounded-full border bg-white px-10 py-2"
        >
          {loading ? "loading..." : "Search"}
        </button>
      </div>
      {loading ? (
        <div className="flex justify-center items-center h-96">
          <p>loading...</p>
        </div>
      ) : (
        <div className="mt-8">
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-12 md:col-span-5">
              {PartImages?.map((imgPath, index) => (
                <img
                  key={index}
                //   src={imgPath}
                  src={
                    "https://www.rockauto.com/Newsletter/images/6415tomStory.jpg"
                  }
                  alt={`Image ${index + 1}`}
                  className="mt-5"
                />
              ))}
            </div>
            <div className="col-span-12 md:col-span-7">
              <div className="grid grid-cols-12 gap-5">
                <div className="col-span-12 md:col-span-6">
                  <p className="py-1">
                    Part Name:
                    <span className="pl-2 font-semibold">
                      {PartDetails?.partname}
                    </span>
                  </p>
                  <p className="py-1">
                    Part Number:
                    <span className="pl-2 font-semibold">
                      {PartDetails?.partno}
                    </span>
                  </p>
                </div>
                <div className="col-span-12 md:col-span-6">
                  <p className="py-1">
                    Part Description:
                    <span className="pl-2 font-semibold">
                      {PartDetails?.PartDescription}
                    </span>
                  </p>
                </div>
              </div>
              <div className="col-span-12 mt-3">
                <div
                  dangerouslySetInnerHTML={{ __html: PartDetails?.MoreInfo }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PartDetails;
