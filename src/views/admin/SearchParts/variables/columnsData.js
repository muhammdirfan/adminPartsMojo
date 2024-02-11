export const columnsDataComplex = [
  { field: "brand", headerName: "BRAND NAME", width: 400 },
  { field: "category", headerName: "CATEGORY", width: 250 },
  { field: "partno", headerName: "PART NO", width: 250 },
  { field: "pk", headerName: "PK NO", width: 250 },
  // {
  //   field: "images",
  //   headerName: "Image",
  //   renderCell: (params) => {
  //     <img
  //       src={`https://www.rockauto.com/${params?.row?.images}`}
  //       className=""
  //     />;
  //   },
  // },
];

export const VISIBLE_FIELDS = [
  "brand",
  "category",
  "modal",
  "partno",
  "pk",
  // "images",
];
