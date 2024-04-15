import axiosTasaCambio from ".";

export const getTasaCambio = async () => {
  try {
    const { data } = await axiosTasaCambio.get(`/latest?to=USD,EUR`);
    return data;
  } catch (error) {
    throw {
      message: "algo paso",
      status: 500,
    };
  }
};
