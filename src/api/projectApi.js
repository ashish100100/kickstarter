export default async function getProductList() {
  try {
      const response = await fetch('/kickstarter.json',
      {
        method: 'GET',
        mode: 'no-cors',
        header: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin':'*',
        }
      });
      if(response){
        const result = await response.json();
        return result;
      }
    } catch (error) {
        return error;
    }
}