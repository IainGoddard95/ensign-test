'use server'
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation'

export async function authenticate(state: any, formData: FormData) {
    try {
        await loginWithCredentials(formData.get("email") as String, formData.get("password") as String);
    } catch(error) {
        //Generic error
        return 'Something went wrong. Please try again.'
    }
        //Redirect has to be thrown here, janky behaviour when inside try/catch
        //Trigger redirect if loginWithCredentials receives 200 status code and hits return without throwing an error
        redirect('/dashboard');
}

async function loginWithCredentials(email: String, password: String) {
    //auth post request. Base URL stored in .env.local
    await fetch(`${process.env.BASE_URL_AUTH}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: email, password: password})
    })
    .then(res => res.json()) //Convert response to readable data
    .then(data => {
        //We want an error for everything that isn't a 200
        console.log(data);
        switch(data.statusCode) {
            case 200:
                setSessionCookie(data.data.company.id);
                return
            default:
                throw new Error(data.message);
        }
    })
    return
}

function setSessionCookie(user:string){
    //Cookie based sessions - credit: https://www.youtube.com/watch?v=DJvM2lSPn6w&ab_channel=LeeRobinson
    //Improvements - Setting expiry was fine, struggled to update expiry when hitting dashboard with a valid cookie. So now it's permanant..
    //Improvements - Add encryption to cookie, demo'd in the video.
    cookies().set('session', user);
}