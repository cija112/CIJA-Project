import { useEffect } from "react";
import { supabase } from "./supabaseClient";

function App() {

  useEffect(() => {
    async function testConnection() {
      const { data, error } = await supabase
        .from("jovem_aprendiz")
        .select("*");

      if (error) {
        console.log("Erro:", error);
      } else {
        console.log("Conectado! Dados:", data);
      }
    }

    testConnection();
  }, []);

  return <h1>Teste Supabase</h1>;
}

export default App;