import { useState } from "react";

export default function useFeedNow() {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  return function (apiUrl, catId, foodId) {
    setLoading(true);
    fetch(`http://${apiUrl}:8080/feeding_service/manuell`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ catId, foodId }),
    })
      .then((response) => response.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));

    return { data, error, loading };
  };
}
