import { AuthData } from "../contexts/Auth";

function signIn(email: string, password: string): Promise<AuthData> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(password === "12345"){
                resolve({   
                    token: 'fake-token',
                    email: "mauricio@gmail.com",
                    name: "m"
                })
            } else {
                reject(new Error('Credenciais inválidas'))
            }
        }, 500);
    } )
}

export const authService = {signIn}