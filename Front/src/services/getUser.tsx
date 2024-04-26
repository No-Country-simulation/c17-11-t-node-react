import { UserProfile } from "../types/types";
import { user } from "./fakeAPI";

export const getUserById = (userId: string): Promise<UserProfile> => {
  // Busca el usuario en el array 'users' por su ID
  const users = user.find((user) => user.id === userId);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (users) {
        resolve(users);
      } else {
        reject(new Error("Usuario no encontrado"));
      }
    }, 1000);
  });
};
