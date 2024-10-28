const BASE_URL = "http://localhost:5000";

export async function getData(endpoint) {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`);

    if (!response.ok) {
      throw new Error("Data not found");
    }

    const data = await response.json();
  } catch (error) {
    throw error;
  }
}
