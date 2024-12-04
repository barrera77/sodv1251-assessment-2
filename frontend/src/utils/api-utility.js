const BASE_URL = "http://localhost:1000";

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

export const saveData = async (endpoint, object) => {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(object),
  });

  if (!response.ok) {
    throw new Error("Failed to save data");
  } else {
    const data = await response.json();
    return data;
  }
};

export async function updateData(endpoint, id, updatedData) {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });

    if (!response.ok) {
      throw new Error(`Failed to update data: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating data:", error);
    throw error;
  }
}
