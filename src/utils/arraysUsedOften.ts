//from 1 to 15
export const startPoints = Array.from({ length: 4 }, (_, index) =>
  (index + 1).toString(),
);

//from 10 to 15
export const endPoints = Array.from({ length: 6 }, (_, index) =>
  (index + 10).toString(),
);

export const loadNames = ["Stone", "Cement", "Iron"];

export const agvIDs = Array.from({ length: 4 }, (_, index) =>
  (index + 1).toString(),
);

export const guidanceTypes = ["Line Following", "Computer Vision"];
