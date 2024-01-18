import service from "./index";

export const fetchPartsDetail = async (partNumber) => {
  const res = await service.get(`/part/${partNumber}`);
  return res.data;
};

// export const addEstablishmentCategory = async (data) => {
//   const res = await service.post("/dashboard/establishment/addhce", data);
//   return res.data;
// };
