import service from "./index";

export const fetchPartsDetail = async (partNumber) => {
  const res = await service.get(`/part/${partNumber}`);
  return res.data;
};

export const fetchAllParts = async (partName) => {
  const res = await service.get(`/partsearch/${partName}`);
  return res.data;
};
