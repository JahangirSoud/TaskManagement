import Axios from "axios"
export const dataSave=async(data)=>{
    return await Axios.post(
      "http://localhost/test/api/projects",
      data
    ).then((res) => {
      return res.data;
    });
}
export const taskdataSave=async(data)=>{
  data.project_id = parseInt(data.project_id);
  return await Axios.post(
    "http://localhost/test/api/tasks",
    data
  ).then((res) => {
    return res.data;
  });
}

export const updateProject=async(id,data)=>{
  data.user_id =1;
  return await Axios.put(
    `http://localhost/test/api/projects/${id}`,
    data
  ).then((res) => {
    return res.data;
  });
}

export const deleteproject = async (id) => {
  console.log("id", id);
  return await Axios.delete(
    `http://localhost/test/api/projects/${id}`
  ).then((res) => {
    return res.data;
  });
};

export const registerUser = async (data) => {
  return await Axios.post(
    "http://localhost/test/api/register",
    data
  ).then((res) => {
    return res.data;
  });
};
