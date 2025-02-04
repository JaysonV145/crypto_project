import React, { useEffect, useState } from "react";
import "./assets/styles.css";

const CryptoPrices = () => {
  const [cryptos, setCryptos] = useState([]);
  const [loading, setLoading] = useState(true); //Guarda el estado de las criptomonedas y si la página está cargando

  //Obtiene los datos de la API
  const fetchCryptoPrices = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/prices/");
      const data = await response.json();
      setCryptos(data);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCryptoPrices(); //Hace una petición get a la api de django, que obtiene los datos de las criptomonedas
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="crypto-dashboard">
      <h1 className="title">Top Cryptocurrencies</h1>
      <ul>
        {cryptos.map((crypto) => (
          <li key={crypto.id}>
            <div className="crypto-item">
              <div className="crypto-info">
                <h2>
                  {crypto.name} ({crypto.symbol.toUpperCase()})
                </h2>
                <p>Price: ${crypto.current_price}</p>
                <p>Market cap: ${crypto.market_cap}</p>
              </div>
              <img src={crypto.image} alt={crypto.name} width={50} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CryptoPrices;
