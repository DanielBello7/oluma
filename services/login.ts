import axios from "axios";
import { z } from "zod";

export const auth_response_assert = z.object({
	userid: z.string(),
	jwt_token: z.string(),
	expires: z.string().transform((val) => new Date(val)),
});

type LoginResponse = {
	userid: string;
	jwt_token: string;
	expires: Date;
};

type Params = {
	username: string;
	password: string;
};
export const Login = async (params: Params): Promise<LoginResponse> => {
	const response = await axios.post("/login", { data: params });
	return auth_response_assert.parse(response.data);
};
