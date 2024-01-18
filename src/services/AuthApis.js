import service from "./index";

export const AdminLogin = async data => {
    const res = await service.post("/admin/login", data);
    return res.data;
};