const URL = "http://localhost:3000/api/bbdf00af-6929-48a1-b485-95f642b55b38/categories";

const getCategories = async () => {
  const res = await fetch(URL);
  const data = await res.json();
  console.log(data)
  return data;
};

export default getCategories;
