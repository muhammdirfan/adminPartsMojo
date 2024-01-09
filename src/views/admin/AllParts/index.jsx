import CategoriesTable from "./components/CategoriesTable";
import {
  VISIBLE_FIELDS,
  columnsDataComplex,
  columnsDataSpeciality,
} from "./variables/columnsData";
import Widget from "components/widget/Widget";
import { MdBarChart } from "react-icons/md";
import { IoDocuments } from "react-icons/io5";
import React, { useState, useEffect } from "react";
// import { fetchProffesionalCategory } from "services/professionalApis";
import Toggle from "../../../components/toggle";
// import { fetchallSpecialities } from "services/professionalApis";
import Notify from "simple-notify";
// import {
//   deleteProfessionalSpeciality,
//   deleteProfessional,
// } from "services/professionalApis";

const allPartsData = [
  {
    id: 1,
    name: "Part 1",
    modal: "5234",
    description: "dsdgdfgdf",
  },
  {
    id: 2,
    name: "Part2",
    modal: "574",
    description: "dsdgdfgdf",
  },
];

const DataTables = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openSpecialityModal, setOpenSpecialityModal] = useState(false);
  const [Professionals, setProfessionals] = useState();
  const [allSpecialities, setAllSpecialities] = useState();
  const [enableMessage, setEnableMessage] = useState(true);
  const [isLoading, setIsloading] = useState(false);

  const [modalData, setModalData] = useState({
    type: "",
    id: "",
  });
  const [selectedProfession, setSelectedProfession] = useState("");
  const [selectedProfessionUpdate, setSelectedProfessionUpdate] = useState("");
  const [selectedAssociatesUpdate, setSelectedAssociatesUpdate] = useState("");

  const handleToggle = () => {
    setEnableMessage(!enableMessage);
  };

  // const fetchProfessionals = async () => {
  //   try {
  //     const proffesionalCategory = await fetchProffesionalCategory();
  //     const specialities = await fetchallSpecialities();
  //     setProfessionals(proffesionalCategory.reverse());
  //     setAllSpecialities(specialities.reverse());
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  useEffect(() => {
    setProfessionals(allPartsData);
    setAllSpecialities(allPartsData);
  }, []);

  const handleDelete = async (id) => {
    // const data = { id: id };
    // try {
    //   setIsloading(true);
    //   const deleted = await deleteProfessionalSpeciality(data);
    //   if (deleted?.data?.ok == 1) {
    //     new Notify({
    //       status: "success",
    //       title: "Success",
    //       text: deleted?.message,
    //       effect: "fade",
    //       speed: 300,
    //       customClass: null,
    //       customIcon: null,
    //       showIcon: true,
    //       showCloseButton: true,
    //       autoclose: true,
    //       autotimeout: 3000,
    //       gap: 20,
    //       distance: 20,
    //       type: 1,
    //       position: "right bottom",
    //     });
    //     setIsloading(false);
    //     fetchProfessionals();
    //   }
    // } catch (error) {
    //   console.log(error);
    //   new Notify({
    //     status: "error",
    //     title: "Error",
    //     text: "Something went wrong, Please try again!",
    //     effect: "fade",
    //     speed: 300,
    //     customClass: null,
    //     customIcon: null,
    //     showIcon: true,
    //     showCloseButton: true,
    //     autoclose: true,
    //     autotimeout: 3000,
    //     gap: 20,
    //     distance: 20,
    //     type: 1,
    //     position: "right bottom",
    //   });
    //   setIsloading(false);
    // }
  };

  // React.useEffect(() => {
  //   const slectedData = allSpecialities?.filter(
  //     (item) => item?.id == modalData?.id
  //   );
  //   if (slectedData?.length) {
  //     setSelectedProfessionUpdate(slectedData[0]?.name);
  //     setSelectedAssociatesUpdate(slectedData[0]?.type);
  //   }

  //   const slectedProfession = Professionals?.filter(
  //     (item) => item?.id == modalData?.id
  //   );
  //   if (slectedProfession?.length) {
  //     setSelectedProfession(slectedProfession[0]?.name);
  //   }
  // }, [allSpecialities, Professionals, modalData?.id]);

  const handleProfessionDelete = async (id) => {
    // const data = { id: id };
    // try {
    //   setIsloading(true);
    //   const deleted = await deleteProfessional(data);
    //   if (deleted?.data?.ok == 1) {
    //     new Notify({
    //       status: "success",
    //       title: "Success",
    //       text: deleted?.message,
    //       effect: "fade",
    //       speed: 300,
    //       customClass: null,
    //       customIcon: null,
    //       showIcon: true,
    //       showCloseButton: true,
    //       autoclose: true,
    //       autotimeout: 3000,
    //       gap: 20,
    //       distance: 20,
    //       type: 1,
    //       position: "right bottom",
    //     });
    //     setIsloading(false);
    //     setSelectedProfession({ selectedOption: null });
    //     fetchProfessionals();
    //   }
    // } catch (error) {
    //   console.log(error);
    //   new Notify({
    //     status: "error",
    //     title: "Error",
    //     text: "Something went wrong, Please try again!",
    //     effect: "fade",
    //     speed: 300,
    //     customClass: null,
    //     customIcon: null,
    //     showIcon: true,
    //     showCloseButton: true,
    //     autoclose: true,
    //     autotimeout: 3000,
    //     gap: 20,
    //     distance: 20,
    //     type: 1,
    //     position: "right bottom",
    //   });
    //   setIsloading(false);
    // }
  };

  return (
    <div className="mt-5">
      {/* <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Total HCP"}
          subtitle={Professionals?.length}
        />
        <Widget
          icon={<IoDocuments className="h-6 w-6" />}
          title={"HCP specialities"}
          subtitle={"0"}
        />
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"HCP Countries"}
          subtitle={"0"}
        />
      </div> */}
      <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3 my-3">
        <Toggle
          value={enableMessage}
          onChange={handleToggle}
          label={enableMessage ? "In Stoch Parts" : "Out of Stoch Parts"}
        />
        <div className="col-span-12 h-fit w-full xl:col-span-12 2xl:col-span-12 mt-5">
          {enableMessage ? (
            <CategoriesTable
              tableData={Professionals}
              tableHeader="In Stock Parts Table"
              tableFor="Professional"
              columnsData={columnsDataComplex}
              VISIBLE_FIELDS={VISIBLE_FIELDS}
              handleDelete={handleProfessionDelete}
              isLoading={isLoading}
              setIsloading={setIsloading}
              selectedProfession={selectedProfession}
              // fetchProfessionals={fetchProfessionals}
              modalData={modalData}
              setModalData={setModalData}
            />
          ) : (
            <CategoriesTable
              tableData={allSpecialities}
              tableHeader="Out of Stock Parts Table"
              tableFor="Speciality"
              columnsData={columnsDataSpeciality}
              VISIBLE_FIELDS={VISIBLE_FIELDS}
              handleDelete={handleDelete}
              // isLoading={isLoading}
              setIsloading={setIsloading}
              // fetchProfessionals={fetchProfessionals}
              selectedProfession={selectedProfessionUpdate}
              selectedAssociates={selectedAssociatesUpdate}
              modalData={modalData}
              setModalData={setModalData}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default DataTables;
