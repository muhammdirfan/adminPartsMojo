import React, { useEffect, useState } from "react";
import { Button } from "flowbite-react";
import InputField from "components/fields/InputField";
import Notify from "simple-notify";
// import { updateProfessional } from "services/professionalApis";
// import { updateProfessionalSpeciality } from "services/professionalApis";

const EditModal = (props) => {
  const [selectedProfession, setSelectedProfession] = useState("");
  const [selectedAssociatesUpdate, setSelectedAssociatesUpdate] = useState("");

  const handleProfessionalUpdateChange = (value) => {
    setSelectedProfession(value);
  };

  const handleAssociatesChange = (value) => {
    setSelectedAssociatesUpdate(value);
  };

  useEffect(() => {
    if (props.selectedProfession) {
      setSelectedProfession(props.selectedProfession);
    }
    if (props.selectedAssociates) {
      setSelectedAssociatesUpdate(props.selectedAssociates);
    }
  }, [props.selectedProfession, props.selectedAssociates]);

  // const handleUpdateprofession = async (id) => {
  //   const data = {
  //     id: id,
  //     name: selectedProfession,
  //   };
  //   try {
  //     if (data?.name && data?.id) {
  //       props.setIsloading(true);
  //       const updated = await updateProfessional(data);
  //       if (updated?.data?.ok == 1) {
  //         new Notify({
  //           status: "success",
  //           title: "Success",
  //           text: updated?.message,
  //           effect: "fade",
  //           speed: 300,
  //           customClass: null,
  //           customIcon: null,
  //           showIcon: true,
  //           showCloseButton: true,
  //           autoclose: true,
  //           autotimeout: 3000,
  //           gap: 20,
  //           distance: 20,
  //           type: 1,
  //           position: "right bottom",
  //         });
  //         props.setIsloading(false);
  //         setSelectedProfession("");
  //         props.fetchProfessionals();
  //       }
  //     } else {
  //       new Notify({
  //         status: "error",
  //         title: "Error",
  //         text: "Please Enter Profession Name, and try again!",
  //         effect: "fade",
  //         speed: 300,
  //         customClass: null,
  //         customIcon: null,
  //         showIcon: true,
  //         showCloseButton: true,
  //         autoclose: true,
  //         autotimeout: 3000,
  //         gap: 20,
  //         distance: 20,
  //         type: 1,
  //         position: "right bottom",
  //       });
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     new Notify({
  //       status: "error",
  //       title: "Error",
  //       text: "Something went wrong, Please try again!",
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
  //     props.setIsloading(false);
  //   }
  // };

  // const handleUpdateSpeciality = async (id) => {
  //   const data = {
  //     id: id,
  //     name: selectedProfession,
  //     type: selectedAssociatesUpdate,
  //   };
  //   try {
  //     props.setIsloading(true);
  //     const updated = await updateProfessionalSpeciality(data);
  //     if (updated?.data?.ok == 1) {
  //       new Notify({
  //         status: "success",
  //         title: "Success",
  //         text: updated?.message,
  //         effect: "fade",
  //         speed: 300,
  //         customClass: null,
  //         customIcon: null,
  //         showIcon: true,
  //         showCloseButton: true,
  //         autoclose: true,
  //         autotimeout: 3000,
  //         gap: 20,
  //         distance: 20,
  //         type: 1,
  //         position: "right bottom",
  //       });
  //       props.setIsloading(false);
  //       setSelectedProfession("");
  //       setSelectedAssociatesUpdate("");
  //       props.fetchProfessionals();
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     new Notify({
  //       status: "error",
  //       title: "Error",
  //       text: "Something went asdfasdfasdn!",
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
  //     props.setIsloading(false);
  //   }
  // };

  return (
    <>
      <div
        className={`grid min-h-full grid-cols-1 items-start gap-5 ${
          props.tableFor === "Speciality"
            ? " md:grid-cols-2 lg:grid-cols-2"
            : ""
        }`}
      >
        <div className="rounded-[20px] bg-white px-5 py-3">
          <InputField
            variant="auth"
            extra="mb-3"
            label={props.tableFor}
            placeholder="Example: Surgeon, Cardiologist etc"
            id="profession"
            type="text"
            value={selectedProfession}
            onChange={(e) => handleProfessionalUpdateChange(e.target?.value)}
          />
        </div>
        {props.tableFor === "Professional" ? null : (
          <div className="rounded-[20px] bg-white px-5 py-3">
            <InputField
              variant="auth"
              extra="mb-3"
              label="Related Profession"
              placeholder="Example: Surgeon, Cardiologist etc"
              id="profession"
              type="text"
              value={selectedAssociatesUpdate}
              onChange={(e) => handleAssociatesChange(e.target?.value)}
            />
          </div>
        )}
      </div>
      {/* {props.modalData?.type === "Edit" ? (
        <div>
          <Button
            onClick={() => {
              props.tableFor === "Professional"
                ? handleUpdateprofession(props.modalData?.id)
                : handleUpdateSpeciality(props.modalData?.id);
            }}
          >
            {`${props.isLoading ? "loading..." : "Update"}`}
          </Button>
        </div>
      ) : null} */}
    </>
  );
};

export default EditModal;
