import { callAPI, handleJSONResponse } from './common';

export const getProductsList = async () => {
  const response = await handleJSONResponse(
    callAPI('https://api.mercadolibre.com/sites/MLA/search?category=MLA1055', 'GET')
  );
  return response;
};
