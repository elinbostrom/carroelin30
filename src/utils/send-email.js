export async function sendEmail(data) {
  const apiEndpoint = "/api/email";

  const res = await fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      alert(response.message);
      return response;
    })
    .catch((err) => {
      alert(err);
    });

  return res;
}
