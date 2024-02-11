import React, { useEffect, useState } from "react";
import { fetchPartsDetail } from "../../../services/partsApis";
import Slider from "components/Slider";
import DisplayText from "components/DisplayText";
import "./customStyles.css";
import { useParams } from "react-router-dom";

const PartDetails = () => {
  const [PartDetails, setPartDetails] = useState();
  const [PartImages, setPartImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  
  const fetchPartDetails = async (searchValue) => {
    try {
      setLoading(true);
      const partDetails = await fetchPartsDetail(searchValue);
      setPartDetails(partDetails);
      setLoading(false);
      const imageArray = JSON?.parse(partDetails?.images);
      setPartImages(imageArray);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (id) {
      fetchPartDetails(id);
    }
  }, [id]);

  return (
    <div className="w-12/12 mx-auto mt-5 md:w-11/12">
      {loading ? (
        <div className="flex h-96 items-center justify-center">
          <p>loading...</p>
        </div>
      ) : PartDetails?.partname ? (
        <div className="mt-8">
          <div className="grid grid-cols-12 items-start gap-5">
            <div className="col-span-12 md:col-span-5">
              <Slider items={PartImages} />
            </div>
            <div className="col-span-12 md:col-span-7">
              <div className="grid grid-cols-12 gap-5">
                <div className="col-span-12 md:col-span-5">
                  <DisplayText
                    title="Part Name"
                    value={PartDetails?.partname || "No Data"}
                  />
                  <DisplayText
                    title="Part Number"
                    value={PartDetails?.partno || "No Data"}
                  />
                  <DisplayText title="SKU" value={"No Data"} />
                  <DisplayText
                    title="Warranty"
                    value={PartDetails?.Warranty || "No Data"}
                  />
                  <DisplayText
                    title="Engine"
                    value={PartDetails?.engine || "No Data"}
                  />
                  <DisplayText
                    title="Group Name"
                    value={PartDetails?.groupname || "No Data"}
                  />
                  <DisplayText
                    title="Group Number"
                    value={PartDetails?.groupno || "No Data"}
                  />
                  <DisplayText
                    title="Car Code"
                    value={PartDetails?.carcode || "No Data"}
                  />
                  <DisplayText
                    title="Make"
                    value={PartDetails?.make || "No Data"}
                  />
                </div>
                <div className="col-span-12 md:col-span-7">
                  <DisplayText
                    title="Brand Name"
                    value={PartDetails?.brandname || "No Data"}
                  />
                  <DisplayText
                    title="Part Description"
                    value={PartDetails?.PartDescription || "No Data"}
                  />
                  <DisplayText
                    title="Model"
                    value={PartDetails?.model || "No Data"}
                  />
                  <DisplayText
                    title="Part Type"
                    value={PartDetails?.parttype || "No Data"}
                  />
                  <DisplayText
                    title="PK"
                    value={PartDetails?.pk || "No Data"}
                  />
                  <DisplayText
                    title="OEM"
                    value={PartDetails?.OEM || "No Data"}
                  />
                  <DisplayText
                    title="Safety"
                    value={PartDetails?.safety || "No Data"}
                  />
                  <DisplayText
                    title="Year"
                    value={PartDetails?.year || "No Data"}
                  />
                </div>
              </div>
              {PartDetails?.Specifications ? (
                <div className="col-span-12 mt-3">
                  <p className="py-1">
                    Specifications:
                    <div
                      dangerouslySetInnerHTML={{
                        __html: PartDetails?.Specifications,
                      }}
                    ></div>
                  </p>
                </div>
              ) : null}
              <div className="col-span-12 mt-3">
                <div
                  dangerouslySetInnerHTML={{ __html: PartDetails?.MoreInfo }}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex h-96 items-center justify-center">
          <p>No Part Found</p>
        </div>
      )}
    </div>
  );
};

export default PartDetails;
