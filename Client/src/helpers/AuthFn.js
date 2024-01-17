export const loginFn  = async (user, type) => {

    try{


        const res = await fetch(`${process.env.REACT_APP_API_URL}/${type}/login`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: user.email,
                password: user.password
            })
    
        });
    
        const data = await res.json();

        return {data, status: res.status};
    }catch(error){
        console.log(error);
        return {status: 500, message: 'INTERNAL_SERVER_ERROR'};
    }
}



export const registerFn = async (user,type) => {
    try{
            
            const res = await fetch(`${process.env.REACT_APP_API_URL}/${type}/register`,{

                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: user.name,
                    email: user.email,
                    password: user.password,
                    age: user.age,
                    phone: user.phone,
                })
        
            });
        
            const data = await res.json();
        
            return {data, status: res.status};
    }catch(error){
        console.log(error);
        return {status: 500, message: 'INTERNAL_SERVER_ERROR'};
    }
}