export const createFileName = (
  dni: string | number,
  name: string,
  lastname: string,
) => `public/${dni}_${name}_${lastname}`;
