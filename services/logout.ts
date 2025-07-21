import axios from "axios";
export const Logout = async (): Promise<void> => {
	await axios.post("/logout");
};
