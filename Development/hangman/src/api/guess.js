import instance from ".";

const guess = async (letter) => {
  try {
    const response = await instance.post("/guess", { letter });

    return response.json();
  } catch (error) {
    console.error(error);
  }
};

export { guess };
