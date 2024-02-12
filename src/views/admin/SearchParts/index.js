import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { fetchAllParts } from "services/partsApis";
import { VISIBLE_FIELDS, columnsDataComplex } from "./variables/columnsData";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { IoMdEye } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const SearchParts = () => {
  const [allParts, setAllParts] = useState();
  const [isLoading, setIsloading] = useState(false);

  const [PartSearchValue, setPartSearchValue] = useState();

  const navigate = useNavigate();

  const handlePostDetail = async (id) => {
    navigate(`/admin/part-details/${id}`);
  };

  const fetchParts = async (searchValue) => {
    try {
      setIsloading(true);
      const parts = await fetchAllParts(searchValue);
      setAllParts(parts);
      if (parts?.length) {
        setIsloading(false);
      } else {
        setIsloading(false);
      }
    } catch (e) {
      setIsloading(false);
      console.log(e);
    }
  };

  useEffect(() => {
    if (!PartSearchValue) {
      fetchParts("AF3300");
    }
  }, []);

  const handleSearch = () => {
    fetchParts(PartSearchValue);
    setPartSearchValue("");
  };

  const renderViewButton = (params) => (
    <IoMdEye
      className="h-8 w-8 rounded bg-gray-200 p-1 hover:cursor-pointer hover:bg-gray-300"
      onClick={() => handlePostDetail(params.row.pk)}
    />
  );

  const columns = React.useMemo(() => {
    return [
      ...columnsDataComplex.filter((column) =>
        VISIBLE_FIELDS.includes(column.field)
      ),
      {
        field: "actions",
        headerName: "ACTIONS",
        width: 150,
        renderCell: (params) => (
          <div style={{ display: "flex", justifyContent: "start" }}>
            {renderViewButton(params)}
          </div>
        ),
      },
    ];
  }, [columnsDataComplex]);

  const dataWithIds = allParts?.map((row, index) => ({
    ...row,
    id: index + 1, // You can use any method to generate a unique id
  }));

  // const getRowId = (row) => (row._id ? row._id : 1);

  return (
    <div className="mt-5">
      <p>
        If is not working or shows just loading please add this browser
        extension:
        <a
          href="https://chromewebstore.google.com/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino?pli=1"
          target="_blank"
          className="text-red-600 underline pl-3"
        >
          Cors Brower Extension
        </a>
      </p>
      <div className="flex items-center justify-start">
        <div className="w-12/12 my-4 flex h-full items-center rounded-full border bg-white text-navy-700 dark:bg-navy-900 dark:text-white md:w-6/12">
          <p className="pl-3 pr-2 text-xl">
            <FiSearch className="h-4 w-4 text-gray-400 dark:text-white" />
          </p>
          <input
            type="text"
            placeholder="Part Number Search..."
            value={PartSearchValue}
            onChange={(e) => setPartSearchValue(e.target.value)}
            class="block h-full w-full rounded-full border-0 bg-white py-2 text-lg font-medium text-navy-700 outline-none placeholder:!text-gray-400 dark:bg-navy-900 dark:text-white dark:placeholder:!text-white"
          />
        </div>
        <button
          onClick={handleSearch}
          className="ml-5 rounded-full border bg-white px-10 py-2"
        >
          {isLoading ? "loading..." : "Search"}
        </button>
      </div>
      <div className="my-3 mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3">
        {
          console.log(allParts, "allParts")
        }
        <div className="col-span-12 mt-5 h-fit w-full xl:col-span-12 2xl:col-span-12">
          {allParts?.length ? (
            <DataGrid
              rows={dataWithIds}
              columns={columns}
              components={{ Toolbar: GridToolbar }}
              slotProps={{
                toolbar: {
                  showQuickFilter: true,
                },
              }}
              disableColumnFilter
              disableColumnSelector
              disableDensitySelector
              // getRowId={getRowId}
            />
          ) : (
            <div className="mt-5 flex items-center justify-center">
              <p>loading...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchParts;
