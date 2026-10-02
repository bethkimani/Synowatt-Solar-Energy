
/**
 * Form integrations. Set these to a form backend URL (e.g. Formspree, Web3Forms or your own API) that accepts
 * a JSON POST. While null, nothing is sent: the quote form hands the request over to WhatsApp/email instead,
 * and the newsletter form tells visitors sign-ups aren't live yet.
 */
export const integrations: {quoteEndpoint: string | null;newsletterEndpoint: string | null;} = {
  quoteEndpoint: null,
  newsletterEndpoint: null
};

export const propertyTypes = ['Residential', 'Commercial', 'Institutional'] as const;

export const energyNeedOptions: string[] = [
'Basic — lighting, TV, Wi-Fi, phone charging',
'Moderate — plus fridge, water pump, CCTV',
'High — plus washing machine, freezer, multiple appliances',
'Business / institutional loads',
'Not sure — I need an assessment'];