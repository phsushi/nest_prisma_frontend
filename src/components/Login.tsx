import { useEffect, useState } from "react";

const API_URL = "http://localhost:3000/auth/login";
const fetchLogin = async (email: string, password: string) => {
  try {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching login:", error);
    return null;
  }
};

function StatusLogin({email, password}: {email: string, password: string}) {
const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true; // Evita atualizar estado se o componente desmontar

    const getData = async () => {
      setLoading(true);
      const result = await fetchLogin(email, password);
      
      if (isMounted) {
        setData(result);
        setLoading(false);
      }
    };

    getData();

    return () => { isMounted = false; }; 
  }, []); // [] vazio se você quer que execute apenas UMA VEZ ao clicar no botão

  if (loading) return <p>Loading...</p>;
  
  // Verifica se o data existe antes de renderizar
  if (!data) return <p>Error fetching data</p>;

  return (
    <div>
      <p>Email: {email}</p>
      {/* Agora transformamos o objeto em string para o React não reclamar */}
      <p>Resultado: {data.token ? "Sucesso!" : JSON.stringify(data)}</p>
    </div>
  );
}

function Login() {
  const [IsSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <div>
        <input type="text" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <button onClick={() => setIsSubmitted(true)}>
          Login
        </button>
      </div>
      {IsSubmitted && <StatusLogin email={email} password={password} />}
    </>
  );
}

export default Login;
