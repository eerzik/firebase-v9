import { useState } from "react";

export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);
    }
    return (
        <div>
            <h2>Giriş Yap</h2>
            <form onSubmit={handleSubmit} >
<label>
    <span>EMail Adresiniz :</span>
    <input required type="email" onChange={(e)=>setEmail(e.target.value)} value={email}></input>
</label>
<label>
    <span>Parola :</span>
    <input required type="password" onChange={(e)=>setPassword(e.target.value)} value={password}></input>
</label>
<button>Giriş</button>
            </form>
        </div>
    );
};

