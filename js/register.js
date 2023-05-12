const registerUser = async (email, password, event) =>{
    event.preventDefault()
    try{
        const userCredential = createUserWithEmailAndPassword(auth, email, password)
        const user = userCredential.user

        await db.colection("users").doc(user.uid).set({
            email: email,
            uid: user.uid
        })
    }
    catch(error){
        console.log(error);
    }
}

document.getElementById("registerButton").addEventListener("click", async (event)=>{
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const confirmPassword = document.getElementById("confirmPassword").value
    
    if(password!==confirmPassword){
        alert("Senhas não são iguals!")
    }
    registerUser(email, password)
})