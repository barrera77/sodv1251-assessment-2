const BASE_URL = "http://localhost:5000";

//GET request
export async function getData(endpoint) {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`);

    if (!response.ok) {
      throw new Error("Data not found");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}
