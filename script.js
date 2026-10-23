const imageSet = [
  'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80'
];

const indiaSpots = [
  ['Agra', 'Uttar Pradesh', 'Taj Mahal, Agra Fort and Mughal heritage'],
  ['Ahmedabad', 'Gujarat', 'Sabarmati Ashram, stepwells and Gujarati culture'],
  ['Alappuzha', 'Kerala', 'Houseboats, lagoons and peaceful backwaters'],
  ['Amritsar', 'Punjab', 'Golden Temple, history and famous Punjabi food'],
  ['Andaman', 'Andaman and Nicobar', 'Beaches, coral reefs and island adventures'],
  ['Aurangabad', 'Maharashtra', 'Ajanta and Ellora caves and Deccan heritage'],
  ['Bengaluru', 'Karnataka', 'Gardens, palaces, cafés and modern city life'],
  ['Rameswaram', 'Tamil Nadu', 'Ramanathaswamy Temple, beaches and island heritage'],
  ['Bodh Gaya', 'Bihar', 'Mahabodhi Temple and Buddhist pilgrimage'],
  ['Chennai', 'Tamil Nadu', 'Marina Beach, temples, museums and city culture'],
  ['Coimbatore', 'Tamil Nadu', 'Isha Yoga Centre, hills and western Tamil Nadu'],
  ['Darjeeling', 'West Bengal', 'Tea gardens, toy train and Himalayan views'],
  ['Dehradun', 'Uttarakhand', 'Forest gateways, caves and Himalayan foothills'],
  ['Gangtok', 'Sikkim', 'Monasteries, mountain roads and Kanchenjunga views'],
  ['Goa', 'Goa', 'Beaches, forts, food and Portuguese heritage'],
  ['Gokarna', 'Karnataka', 'Quiet beaches, temples and coastal trails'],
  ['Hampi', 'Karnataka', 'Ruins, boulders and the Vijayanagara story'],
  ['Haridwar', 'Uttarakhand', 'Ganga aarti, ghats and spiritual journeys'],
  ['Hyderabad', 'Telangana', 'Charminar, forts, biryani and old-city culture'],
  ['Jaipur', 'Rajasthan', 'Forts, palaces, bazaars and royal history'],
  ['Jaisalmer', 'Rajasthan', 'Golden Fort, camel safaris and desert camps'],
  ['Jodhpur', 'Rajasthan', 'Mehrangarh Fort and the blue city lanes'],
  ['Kanyakumari', 'Tamil Nadu', 'Sunrise, sunset and the meeting of three seas'],
  ['Kasauli', 'Himachal Pradesh', 'Quiet hill walks and colonial mountain charm'],
  ['Kashmir', 'Jammu and Kashmir', 'Shikara rides, gardens and alpine valleys'],
  ['Kochi', 'Kerala', 'Fort Kochi, spice markets and harbour heritage'],
  ['Kodaikanal', 'Tamil Nadu', 'Misty lakes, pine forests and hill viewpoints'],
  ['Kolkata', 'West Bengal', 'Colonial landmarks, art, literature and cuisine'],
  ['Kovalam', 'Kerala', 'Lighthouse beach, Ayurveda and coastal relaxation'],
  ['Kullu', 'Himachal Pradesh', 'River valleys, temples and mountain villages'],
  ['Leh', 'Ladakh', 'Monasteries, high passes and Himalayan landscapes'],
  ['Lonavala', 'Maharashtra', 'Waterfalls, forts and monsoon viewpoints'],
  ['Lucknow', 'Uttar Pradesh', 'Nawabi architecture, chikankari and kebabs'],
  ['Madurai', 'Tamil Nadu', 'Meenakshi Temple and living Tamil culture'],
  ['Mahabalipuram', 'Tamil Nadu', 'Shore Temple, stone carvings and coastal history'],
  ['Manali', 'Himachal Pradesh', 'Snow peaks, river valleys and adventure sports'],
  ['Matheran', 'Maharashtra', 'Vehicle-free hill station and forest viewpoints'],
  ['Munnar', 'Kerala', 'Tea plantations, misty hills and wildlife'],
  ['Mysuru', 'Karnataka', 'Mysore Palace, markets and royal traditions'],
  ['Nainital', 'Uttarakhand', 'Lake boating, hills and family-friendly escapes'],
  ['Ooty', 'Tamil Nadu', 'Nilgiri train, tea gardens and cool mountain air'],
  ['Pachmarhi', 'Madhya Pradesh', 'Waterfalls, caves and Satpura forests'],
  ['Pondicherry', 'Puducherry', 'French quarter, promenade and coastal cafés'],
  ['Puri', 'Odisha', 'Jagannath Temple, beaches and coastal culture'],
  ['Ranthambore', 'Rajasthan', 'Tiger safaris, forests and ancient fort ruins'],
  ['Rishikesh', 'Uttarakhand', 'Yoga, rafting and Ganga river adventures'],
  ['Shimla', 'Himachal Pradesh', 'The Ridge, toy train and Himalayan views'],
  ['Srinagar', 'Jammu and Kashmir', 'Dal Lake, Mughal gardens and houseboats'],
  ['Thanjavur', 'Tamil Nadu', 'Brihadeeswarar Temple, art and Chola heritage'],
  ['Udaipur', 'Rajasthan', 'Lakes, palaces and romantic old-city views'],
  ['Varanasi', 'Uttar Pradesh', 'Ghats, Ganga aarti and spiritual traditions'],
  ['Wayanad', 'Kerala', 'Rainforests, waterfalls and tribal heritage']
].map(([name, state, summary], index) => {
  const baseCost = 8999 + (index % 8) * 2000;
  return { name, state, summary, image: imageSet[index % imageSet.length], baseCost, price: `₹${baseCost.toLocaleString('en-IN')}` };
});

const touristPlacesByState = [
  ['Andhra Pradesh', ['Tirumala Venkateswara Temple', 'Araku Valley', 'RK Beach, Visakhapatnam', 'Borra Caves', 'Undavalli Caves']],
  ['Arunachal Pradesh', ['Tawang Monastery', 'Sela Pass', 'Ziro Valley', 'Bomdila Monastery', 'Namdapha National Park']],
  ['Assam', ['Kaziranga National Park', 'Kamakhya Temple, Guwahati', 'Majuli Island', 'Manas National Park', 'Sivasagar Ahom monuments']],
  ['Bihar', ['Mahabodhi Temple, Bodh Gaya', 'Nalanda Mahavihara', 'Rajgir and Vishwa Shanti Stupa', 'Vaishali archaeological site', 'Vikramshila ruins']],
  ['Chhattisgarh', ['Chitrakote Falls', 'Kanger Valley National Park', 'Bastar and Jagdalpur', 'Sirpur heritage site', 'Bhoramdeo Temple']],
  ['Goa', ['Baga Beach', 'Calangute Beach', 'Palolem Beach', 'Basilica of Bom Jesus', 'Fort Aguada', 'Dudhsagar Falls', 'Anjuna Beach', 'Colva Beach']],
  ['Gujarat', ['Statue of Unity, Kevadia', 'Rann of Kutch', 'Somnath Temple', 'Dwarkadhish Temple', 'Gir National Park', 'Rani ki Vav, Patan']],
  ['Haryana', ['Sultanpur National Park', 'Kurukshetra and Brahma Sarovar', 'Morni Hills', 'Pinjore Gardens', 'Surajkund']],
  ['Himachal Pradesh', ['Shimla and The Ridge', 'Manali and Solang Valley', 'Dharamshala and McLeod Ganj', 'Khajjiar', 'Spiti Valley', 'Bir Billing']],
  ['Jharkhand', ['Betla National Park', 'Baidyanath Temple, Deoghar', 'Hundru Falls', 'Dassam Falls', 'Netarhat']],
  ['Karnataka', ['Hampi monuments', 'Mysore Palace', 'Coorg (Kodagu)', 'Gokarna beaches', 'Jog Falls', 'Wonderla Bengaluru', 'Bengaluru Palace']],
  ['Kerala', ['Fort Kochi Beach', 'Cherai Beach, Kochi', 'Wonderla Kochi', 'Alappuzha Backwaters', 'Munnar tea gardens', 'Wayanad wildlife and waterfalls', 'Varkala Beach', 'Kovalam Beach', 'Athirappilly Waterfalls', 'Periyar Wildlife Sanctuary']],
  ['Madhya Pradesh', ['Khajuraho Group of Monuments', 'Sanchi Stupa', 'Kanha National Park', 'Bandhavgarh National Park', 'Bhedaghat Marble Rocks', 'Ujjain Mahakaleshwar Temple', 'Pachmarhi']],
  ['Maharashtra', ['Gateway of India, Mumbai', 'Ajanta Caves', 'Ellora Caves', 'Lonavala and Khandala', 'Mahabaleshwar', 'Shirdi Sai Baba Temple', 'Tadoba-Andhari Tiger Reserve', 'Elephanta Caves']],
  ['Manipur', ['Loktak Lake', 'Kangla Fort, Imphal', 'Keibul Lamjao National Park', 'Shirui Hills', 'INA Memorial, Moirang']],
  ['Meghalaya', ['Shillong and Umiam Lake', 'Cherrapunji (Sohra)', 'Dawki and Umngot River', 'Mawlynnong Village', 'Nongriat Living Root Bridges']],
  ['Mizoram', ['Aizawl and Solomon’s Temple', 'Reiek', 'Vantawng Falls', 'Phawngpui (Blue Mountain)', 'Hmuifang']],
  ['Nagaland', ['Kohima War Cemetery', 'Dzukou Valley', 'Khonoma Heritage Village', 'Mokokchung', 'Kisama Heritage Village']],
  ['Odisha', ['Jagannath Temple and Puri Beach', 'Konark Sun Temple', 'Lingaraj Temple, Bhubaneswar', 'Chilika Lake', 'Similipal National Park', 'Dhauli Shanti Stupa']],
  ['Punjab', ['Golden Temple, Amritsar', 'Jallianwala Bagh', 'Wagah-Attari Border', 'Anandpur Sahib', 'Qila Mubarak, Patiala']],
  ['Rajasthan', ['Hawa Mahal, Jaipur', 'Jaisalmer Fort', 'Mehrangarh Fort, Jodhpur', 'Lake Pichola, Udaipur', 'Ranthambore National Park', 'Chittorgarh Fort', 'Pushkar Lake']],
  ['Sikkim', ['Gangtok and MG Marg', 'Tsomgo Lake', 'Nathula Pass', 'Pelling and Pemayangtse Monastery', 'Gurudongmar Lake']],
  ['Tamil Nadu', ['Marina Beach, Chennai', 'Meenakshi Amman Temple, Madurai', 'Mahabalipuram Shore Temple', 'Ooty and Nilgiri Mountain Railway', 'Kodaikanal Lake', 'Rameswaram Ramanathaswamy Temple', 'Kanyakumari viewpoint', 'Brihadeeswarar Temple, Thanjavur', 'Adiyogi, Coimbatore']],
  ['Telangana', ['Charminar, Hyderabad', 'Ramoji Film City', 'Golconda Fort', 'Hussain Sagar Lake', 'Thousand Pillar Temple, Warangal', 'Yadadri Temple']],
  ['Tripura', ['Ujjayanta Palace, Agartala', 'Neermahal Palace', 'Unakoti rock carvings', 'Tripura Sundari Temple', 'Jampui Hills']],
  ['Uttar Pradesh', ['Taj Mahal, Agra', 'Varanasi Ghats', 'Ram Mandir, Ayodhya', 'Fatehpur Sikri', 'Bara Imambara, Lucknow', 'Sarnath', 'Prem Mandir, Vrindavan']],
  ['Uttarakhand', ['Rishikesh and Lakshman Jhula', 'Nainital Lake', 'Mussoorie and Kempty Falls', 'Kedarnath Temple', 'Jim Corbett National Park', 'Auli', 'Valley of Flowers']],
  ['West Bengal', ['Victoria Memorial, Kolkata', 'Darjeeling Himalayan Railway', 'Sundarbans National Park', 'Digha Beach', 'Kalimpong', 'Bishnupur terracotta temples']],
  ['Andaman and Nicobar Islands', ['Radhanagar Beach, Havelock Island', 'Cellular Jail, Port Blair', 'Shaheed Dweep (Neil Island)', 'Netaji Subhas Chandra Bose Island', 'Baratang limestone caves']],
  ['Chandigarh', ['Rock Garden', 'Sukhna Lake', 'Capitol Complex', 'Rose Garden']],
  ['Dadra and Nagar Haveli and Daman and Diu', ['Diu Fort', 'Nagoa Beach, Diu', 'Jampore Beach, Daman', 'Vanganga Lake Garden, Silvassa', 'Dudhni Lake']],
  ['Delhi', ['Red Fort', 'Qutub Minar', 'India Gate', 'Humayun’s Tomb', 'Akshardham Temple', 'Lotus Temple']],
  ['Jammu and Kashmir', ['Dal Lake, Srinagar', 'Gulmarg', 'Pahalgam', 'Vaishno Devi Temple', 'Sonamarg', 'Mughal Gardens, Srinagar']],
  ['Ladakh', ['Leh Palace', 'Pangong Tso', 'Nubra Valley', 'Hemis Monastery', 'Tso Moriri', 'Khardung La']],
  ['Lakshadweep', ['Agatti Island', 'Bangaram Island', 'Kavaratti Island', 'Kadmat Island', 'Minicoy Island']],
  ['Puducherry', ['White Town, Puducherry', 'Promenade Beach', 'Auroville', 'Paradise Beach', 'Basilica of the Sacred Heart of Jesus']]
];

const touristPlaces = touristPlacesByState.flatMap(([state, places]) =>
  places.map((name) => ({ name, state }))
);
const keralaPlaceDescriptions = {
  'Fort Kochi Beach': 'Walk along the historic waterfront, see the Chinese fishing nets and explore Fort Kochi’s cafés and heritage streets.',
  'Cherai Beach, Kochi': 'A relaxed coastal stretch on Vypin Island, known for its broad sandy shore and calm village atmosphere.',
  'Wonderla Kochi': 'A family amusement and water park near Kochi with rides, pools and full-day attractions.',
  'Alappuzha Backwaters': 'Cruise palm-lined canals and lagoons around Alappuzha, the gateway to Kerala’s famous backwaters.',
  'Munnar tea gardens': 'Explore rolling tea plantations, cool mountain air and viewpoints in Kerala’s Western Ghats.',
  'Wayanad wildlife and waterfalls': 'Discover forest trails, waterfalls and wildlife landscapes in the hills of northern Kerala.',
  'Varkala Beach': 'Visit the dramatic cliffside promenade above the Arabian Sea and the beach below.',
  'Kovalam Beach': 'Relax by Kovalam’s curved shoreline, lighthouse views and coastal cafés south of Thiruvananthapuram.',
  'Athirappilly Waterfalls': 'See Kerala’s best-known waterfall surrounded by forest in the Thrissur district.',
  'Periyar Wildlife Sanctuary': 'Explore the forests and lake of the Periyar reserve near Thekkady.'
};
const placeImageSearchTerms = {
  'Fort Kochi Beach': 'Fort Kochi Beach Kerala',
  'Cherai Beach, Kochi': 'Cherai Beach Kerala',
  'Wonderla Kochi': 'Veegaland Kochi Wonderla',
  'Alappuzha Backwaters': 'Alappuzha Kerala backwaters',
  'Munnar tea gardens': 'Munnar Kerala tea plantations',
  'Wayanad wildlife and waterfalls': 'Wayanad Kerala waterfalls',
  'Varkala Beach': 'Varkala Beach Kerala',
  'Kovalam Beach': 'Kovalam Beach Kerala',
  'Athirappilly Waterfalls': 'Athirappilly Falls Kerala',
  'Periyar Wildlife Sanctuary': 'Periyar Wildlife Sanctuary Thekkady'
};
const placeImageCache = new Map();
let placeImageRequestQueue = Promise.resolve();
const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
}[character]));
const placeDescription = (spot) => keralaPlaceDescriptions[spot.name]
  || `Discover ${spot.name} in ${spot.state}, a memorable stop for local sights and experiences.`;
const wait = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));
const requestCommonsPhotos = async (url, retries = 2) => {
  const response = await fetch(url);
  if (response.ok) return response.json();
  if (response.status === 429 && retries > 0) {
    const retryAfter = Number(response.headers.get('Retry-After')) || 4;
    await wait(Math.max(1, retryAfter) * 1000);
    return requestCommonsPhotos(url, retries - 1);
  }
  throw new Error(`Wikimedia Commons returned ${response.status}.`);
};
const fetchPlaceImages = (spot) => {
  const cacheKey = `${spot.name}|${spot.state}`;
  if (!placeImageCache.has(cacheKey)) {
    const search = new URLSearchParams({
      action: 'query',
      generator: 'search',
      gsrnamespace: '6',
      gsrsearch: placeImageSearchTerms[spot.name] || `${spot.name} ${spot.state}`,
      gsrlimit: '4',
      prop: 'imageinfo',
      iiprop: 'url|extmetadata',
      iiurlwidth: '1100',
      format: 'json',
      origin: '*'
    });
    const imageRequest = placeImageRequestQueue
      .then(() => wait(900))
      .then(() => requestCommonsPhotos(`https://commons.wikimedia.org/w/api.php?${search}`))
      .then((data) => {
        const pages = Object.values(data.query?.pages || {});
        const photos = pages.flatMap((page) => page.imageinfo || []).map((image) => {
          const artistMarkup = image.extmetadata?.Artist?.value || '';
          const artist = artistMarkup
            ? new DOMParser().parseFromString(artistMarkup, 'text/html').body.textContent.trim()
            : 'Wikimedia Commons contributor';
          return {
            url: image.thumburl || image.url,
            sourceUrl: image.descriptionurl,
            title: image.extmetadata?.ObjectName?.value || image.title || 'Wikimedia Commons image',
            artist,
            license: image.extmetadata?.LicenseShortName?.value?.replace(/<[^>]*>/g, '') || 'See source for license'
          };
        });
        return photos.filter((photo, index) =>
          photo.url && photos.findIndex((candidate) => candidate.url === photo.url) === index
        ).slice(0, 4);
      })
      .catch((error) => {
        placeImageCache.delete(cacheKey);
        throw error;
      });
    placeImageRequestQueue = imageRequest.then(() => undefined, () => undefined);
    placeImageCache.set(cacheKey, imageRequest);
  }
  return placeImageCache.get(cacheKey);
};
const showPlacePhoto = (image, credit, photo, spot) => {
  if (!photo) {
    image.closest('.place-photo')?.classList.add('is-unavailable');
    return;
  }
  image.src = photo.url;
  image.addEventListener('error', () => {
    image.closest('.place-photo')?.classList.add('is-unavailable');
    if (credit) credit.textContent = 'Photo unavailable';
  }, { once: true });
  image.addEventListener('load', () => image.closest('.place-photo')?.classList.remove('is-loading'), { once: true });
  if (credit) {
    const attribution = `Photo by ${photo.artist} · Wikimedia Commons · ${photo.license}`;
    credit.href = photo.sourceUrl;
    credit.textContent = attribution;
    credit.title = `${attribution} — ${photo.title}`;
    credit.hidden = false;
  }
  image.alt = `Photograph of ${spot.name}, ${spot.state}`;
};
const loadPlaceImage = (image, credit, spot) => {
  image.alt = `Photograph of ${spot.name}, ${spot.state}`;
  image.loading = 'lazy';
  image.closest('.place-photo')?.classList.add('is-loading');
  fetchPlaceImages(spot).then((photos) => {
    if (!image.isConnected) return;
    showPlacePhoto(image, credit, photos[0], spot);
  }).catch((error) => {
    if (!image.isConnected) return;
    image.closest('.place-photo')?.classList.add('is-unavailable');
    if (credit) credit.textContent = 'Photo unavailable';
    console.warn(`Unable to load a photo for ${spot.name}.`, error);
  });
};
const notifyPlanChanged = () => document.dispatchEvent(new Event('trip-plan-change'));

const packageCatalog = [
  ['rajasthan-royal', 'Rajasthan Royal Circuit', 'Jaipur, Jodhpur & Udaipur', '6 Nights / 7 Days', '₹28,999', '4.9', ['Hotel', 'Fort Tours', 'Desert Camp', 'Breakfast'], 'Best Seller'],
  ['kashmir-valley', 'Kashmir Valley Escape', 'Srinagar, Gulmarg & Pahalgam', '5 Nights / 6 Days', '₹24,999', '4.9', ['Houseboat', 'Shikara Ride', 'Valley Tour', 'Breakfast'], 'Popular'],
  ['kerala-backwaters', 'Kerala Backwater Trail', 'Kochi, Munnar & Alappuzha', '5 Nights / 6 Days', '₹21,999', '4.8', ['Hotel', 'Houseboat', 'Tea Gardens', 'Transfers'], ''],
  ['goa-coast', 'Goa Coast & Culture', 'North Goa & South Goa', '3 Nights / 4 Days', '₹13,999', '4.7', ['Hotel', 'Beach Tour', 'Sightseeing', 'Breakfast'], ''],
  ['ladakh-highways', 'Ladakh Highways', 'Leh, Nubra & Pangong', '6 Nights / 7 Days', '₹32,999', '4.9', ['Hotel', 'Monastery Tour', 'Scenic Drive', 'Permits'], 'Adventure'],
  ['andaman-islands', 'Andaman Island Escape', 'Port Blair & Havelock', '4 Nights / 5 Days', '₹26,999', '4.8', ['Hotel', 'Ferry Tickets', 'Island Tour', 'Breakfast'], ''],
  ['tamil-nadu-heritage', 'Tamil Nadu Heritage Route', 'Chennai, Mahabalipuram & Thanjavur', '5 Nights / 6 Days', '₹19,999', '4.8', ['Hotel', 'Temple Tours', 'Guide', 'Transfers'], 'New'],
  ['nilgiri-hills', 'Nilgiri Hills Retreat', 'Ooty, Coonoor & Coimbatore', '3 Nights / 4 Days', '₹14,999', '4.7', ['Resort', 'Toy Train', 'Tea Estate', 'Breakfast'], ''],
  ['madurai-kanyakumari', 'Temple Coast Journey', 'Madurai, Rameswaram & Kanyakumari', '4 Nights / 5 Days', '₹16,999', '4.8', ['Hotel', 'Temple Tours', 'Local Guide', 'Transfers'], ''],
  ['himachal-mountains', 'Himachal Mountain Trail', 'Shimla, Manali & Kullu', '6 Nights / 7 Days', '₹23,999', '4.8', ['Hotel', 'Valley Tours', 'Volvo Bus', 'Breakfast'], 'Popular'],
  ['uttarakhand-spiritual', 'Uttarakhand Spiritual Trail', 'Haridwar, Rishikesh & Dehradun', '4 Nights / 5 Days', '₹15,999', '4.7', ['Hotel', 'Ganga Aarti', 'River Rafting', 'Transfers'], ''],
  ['meghalaya-clouds', 'Meghalaya Cloud Country', 'Shillong, Cherrapunji & Dawki', '5 Nights / 6 Days', '₹22,999', '4.8', ['Hotel', 'Waterfalls', 'Local Driver', 'Breakfast'], ''],
  ['sikkim-himalaya', 'Sikkim Himalayan Views', 'Gangtok, Pelling & Tsomgo Lake', '5 Nights / 6 Days', '₹24,999', '4.8', ['Hotel', 'Lake Permit', 'Monastery Tour', 'Transfers'], ''],
  ['rajasthan-safari', 'Ranthambore Wildlife', 'Jaipur, Ranthambore & Pushkar', '5 Nights / 6 Days', '₹25,999', '4.7', ['Hotel', 'Safari', 'Fort Tour', 'Breakfast'], 'Wildlife'],
  ['odisha-coast', 'Odisha Temple & Coast', 'Bhubaneswar, Puri & Konark', '4 Nights / 5 Days', '₹17,999', '4.7', ['Hotel', 'Temple Tours', 'Beach Visit', 'Transfers'], ''],
  ['karnataka-heritage', 'Karnataka Heritage Drive', 'Bengaluru, Mysuru & Hampi', '6 Nights / 7 Days', '₹22,999', '4.8', ['Hotel', 'Palace Tour', 'Heritage Guide', 'Car'], ''],
  ['maharashtra-forts', 'Maharashtra Forts & Hills', 'Mumbai, Lonavala & Aurangabad', '5 Nights / 6 Days', '₹20,999', '4.7', ['Hotel', 'Cave Tour', 'Fort Visit', 'Transfers'], ''],
  ['gujarat-culture', 'Gujarat Culture Circuit', 'Ahmedabad, Rann of Kutch & Dwarka', '6 Nights / 7 Days', '₹27,999', '4.8', ['Hotel', 'Rann Visit', 'Temple Tour', 'Breakfast'], ''],
  ['uttar-pradesh-spiritual', 'Uttar Pradesh Spiritual Trail', 'Agra, Lucknow & Varanasi', '5 Nights / 6 Days', '₹21,999', '4.9', ['Hotel', 'Taj Mahal', 'Ganga Aarti', 'Guide'], 'Best Seller'],
  ['central-india-wildlife', 'Central India Nature Tour', 'Bhopal, Pachmarhi & Khajuraho', '5 Nights / 6 Days', '₹20,999', '4.7', ['Hotel', 'Forest Visit', 'Heritage Tour', 'Car'], '']
].map(([id, name, destination, duration, price, rating, includes, badge], index) => ({ id, name, destination, duration, price, basePrice: Number(price.replace(/[^0-9]/g, '')), rating, includes, badge, image: id === 'kerala-backwaters' ? 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80' : imageSet[index % imageSet.length], description: `A carefully planned ${name.toLowerCase()} covering ${destination} with local experiences and comfortable travel.` }));

const renderTravelCatalog = () => {
  const destinationGrid = document.querySelector('.dest-grid');
  const packageGrid = document.querySelector('.package-grid');
  if (destinationGrid) {
    const destinationState = document.getElementById('destinationState');
    const selectedState = destinationState?.value || 'Kerala';
    const selectedPlaces = touristPlaces.filter((spot) => spot.state === selectedState);
    const heading = document.getElementById('destinationHeading');
    const description = document.getElementById('destinationDescription');
    if (heading) heading.textContent = `${selectedState}, one beautiful stop at a time`;
    if (description) description.textContent = `Explore ${selectedPlaces.length} featured places in ${selectedState}. Open any gallery to see four photos of the destination.`;
    destinationGrid.innerHTML = selectedPlaces.map((spot) => {
      const placeIndex = touristPlaces.indexOf(spot);
      return `
        <article class="dest-card reveal" data-place-index="${placeIndex}">
          <div class="dest-img-box place-photo is-loading">
            <img alt="Photograph of ${escapeHtml(spot.name)}, ${escapeHtml(spot.state)}">
            <a class="photo-credit" target="_blank" rel="noopener noreferrer" hidden></a>
          </div>
          <div class="dest-info">
            <span class="dest-location">${escapeHtml(spot.state)} · ${escapeHtml(spot.name.split(',')[0])}</span>
            <h3>${escapeHtml(spot.name)}</h3>
            <p>${escapeHtml(placeDescription(spot))}</p>
            <div class="dest-footer">
              <button type="button" class="btn btn-outline dest-btn" data-explore-place="${placeIndex}">View 4 photos</button>
              <a href="#contact" class="btn btn-primary dest-btn" data-requires-auth data-state="${escapeHtml(spot.state)}" data-spot="${escapeHtml(spot.name)}">Plan trip</a>
            </div>
          </div>
        </article>`;
    }).join('');
    destinationGrid.querySelectorAll('.dest-card').forEach((card) => {
      const spot = touristPlaces[Number(card.dataset.placeIndex)];
      loadPlaceImage(card.querySelector('img'), card.querySelector('.photo-credit'), spot);
    });
  }
  if (packageGrid) {
    const featuredPackages = [...packageCatalog].sort((left, right) =>
      Number(right.id === 'kerala-backwaters') - Number(left.id === 'kerala-backwaters')
    );
    packageGrid.innerHTML = featuredPackages.map((item) => `
      <article class="package-card reveal" data-package="${item.id}">
        <div class="package-img-box"><img src="${item.image}" alt="${item.name}" loading="lazy">${item.badge ? `<span class="package-badge">${item.badge}</span>` : ''}</div>
        <div class="package-body"><div class="package-top"><h3>${item.name}</h3><span class="package-rating">★ ${item.rating}</span></div>
          <p class="package-duration">${item.destination} · ${item.duration}</p><ul class="package-includes">${item.includes.map((include) => `<li>✓ ${include}</li>`).join('')}</ul>
          <p class="package-price">From <strong>${item.price}</strong></p><div class="package-actions"><button class="btn btn-outline view-details" data-package="${item.id}">View Package</button><a href="#contact" class="btn btn-primary" data-requires-auth>Book Now</a></div>
        </div>
      </article>`).join('');
  }
};

const populateDestinationOptions = () => {
  const stateSelect = document.getElementById('contactState');
  const destinationState = document.getElementById('destinationState');
  const spotPicker = document.getElementById('spotPicker');
  const spotSearch = document.getElementById('spotSearch');
  const spotNoResults = document.getElementById('spotNoResults');
  const states = touristPlacesByState.map(([state]) => state).sort((left, right) => left.localeCompare(right));
  states.forEach((state) => stateSelect?.add(new Option(state, state)));
  if (destinationState) {
    states.forEach((state) => destinationState.add(new Option(state, state)));
    destinationState.value = 'Kerala';
    destinationState.addEventListener('change', renderTravelCatalog);
  }
  const renderSpots = () => {
    if (!spotPicker) return;
    const spots = touristPlaces.filter((spot) =>
      spot.state === stateSelect?.value
    );
    spotPicker.innerHTML = spots.length
      ? spots.map((spot) => `<label class="spot-option"><input type="checkbox" value="${spot.name}"> ${spot.name}</label>`).join('')
      : '<p class="wizard-hint">Choose a state to see famous places.</p>';
    spotPicker.querySelectorAll('input').forEach((input) => input.addEventListener('change', notifyPlanChanged));
    if (spotNoResults) spotNoResults.hidden = true;
    const stateHint = document.getElementById('stateHint');
    if (stateHint) stateHint.textContent = stateSelect?.value
      ? `${stateSelect.value}: ${spots.length} famous places to choose from.`
      : 'Choose a state to see its famous tourist places.';
  };
  const filterSpots = () => {
    if (!spotPicker) return;
    const query = spotSearch?.value.trim().toLocaleLowerCase() || '';
    let visibleCount = 0;
    spotPicker.querySelectorAll('.spot-option').forEach((option) => {
      const matches = option.textContent.toLocaleLowerCase().includes(query);
      option.hidden = !matches;
      if (matches) visibleCount += 1;
    });
    if (spotNoResults) spotNoResults.hidden = !query || visibleCount > 0;
  };
  stateSelect?.addEventListener('change', () => {
    if (spotSearch) spotSearch.value = '';
    const packageSelect = document.getElementById('contactPackage');
    if (packageSelect) packageSelect.value = 'custom';
    renderSpots();
    notifyPlanChanged();
  });
  spotSearch?.addEventListener('input', filterSpots);
  const packageSelect = document.getElementById('contactPackage');
  if (packageSelect) packageCatalog.forEach((item) => packageSelect.add(new Option(`${item.name} - ${item.price}`, item.id)));
};

document.addEventListener('DOMContentLoaded', () => {
  populateDestinationOptions();
  renderTravelCatalog();
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  hamburger?.addEventListener('click', () => {
    navbar.classList.toggle('nav-open');
    hamburger.setAttribute('aria-label', navbar.classList.contains('nav-open') ? 'Close menu' : 'Open menu');
  });
  document.querySelectorAll('.nav-link').forEach((link) => link.addEventListener('click', () => navbar.classList.remove('nav-open')));

  const setMessage = (id, message) => { const element = document.getElementById(id); if (element) element.textContent = message; };
  const submitToFirebase = async (payload, messageId, successMessage) => {
    try {
      await firebaseDb.collection('submissions').add({ ...payload, createdAt: firebase.firestore.FieldValue.serverTimestamp() });
      setMessage(messageId, successMessage);
      return true;
    } catch (error) {
      setMessage(messageId, error.message || 'Unable to submit the form.');
      return false;
    }
  };
  const placeSearch = document.getElementById('placeSearch');
  const placeSearchResults = document.getElementById('placeSearchResults');
  const renderPlaceSearch = () => {
    if (!placeSearch || !placeSearchResults) return;
    const query = placeSearch.value.trim().toLocaleLowerCase();
    if (!query) {
      placeSearchResults.hidden = true;
      placeSearchResults.replaceChildren();
      placeSearch.setAttribute('aria-expanded', 'false');
      return;
    }
    const matches = touristPlaces
      .filter((spot) => `${spot.name} ${spot.state}`.toLocaleLowerCase().includes(query))
      .sort((left, right) => {
        const leftStarts = left.name.toLocaleLowerCase().startsWith(query) ? 0 : 1;
        const rightStarts = right.name.toLocaleLowerCase().startsWith(query) ? 0 : 1;
        return leftStarts - rightStarts || left.name.localeCompare(right.name);
      })
      .slice(0, 8);
    placeSearchResults.innerHTML = matches.length
      ? matches.map((spot) => {
        const placeIndex = touristPlaces.indexOf(spot);
        return `
        <article class="place-search-result" data-place-index="${placeIndex}">
          <div class="place-photo search-place-photo is-loading">
            <img alt="Photograph of ${escapeHtml(spot.name)}, ${escapeHtml(spot.state)}">
            <a class="photo-credit" target="_blank" rel="noopener noreferrer" hidden></a>
          </div>
          <div class="place-result-copy">
            <span>${escapeHtml(spot.state)}</span>
            <strong>${escapeHtml(spot.name)}</strong>
          </div>
          <button type="button" class="btn btn-outline" data-explore-place="${placeIndex}">Explore</button>
          <a href="#contact" class="btn btn-primary" data-requires-auth data-state="${escapeHtml(spot.state)}" data-spot="${escapeHtml(spot.name)}">Plan trip</a>
        </article>`;
      }).join('')
      : '<p class="place-search-empty">No matching places found. Try another place or state.</p>';
    placeSearchResults.hidden = false;
    placeSearch.setAttribute('aria-expanded', 'true');
    placeSearchResults.querySelectorAll('.place-search-result').forEach((result) => {
      const spot = touristPlaces[Number(result.dataset.placeIndex)];
      loadPlaceImage(result.querySelector('img'), result.querySelector('.photo-credit'), spot);
    });
  };
  let placeSearchTimer;
  placeSearch?.addEventListener('input', () => {
    clearTimeout(placeSearchTimer);
    placeSearchTimer = setTimeout(renderPlaceSearch, 180);
  });
  document.getElementById('searchForm')?.addEventListener('submit', (event) => {
    event.preventDefault();
    renderPlaceSearch();
    placeSearch?.focus();
  });
  const wizardSteps = [...document.querySelectorAll('.wizard-step')];
  const wizardProgress = document.getElementById('wizardProgress');
  const wizardBack = document.getElementById('wizardBack');
  const wizardNext = document.getElementById('wizardNext');
  let currentStep = 1;
  const transportRates = { 'Car-4': 3500, 'Car-7': 5000, 'Maxi Cab': 6500, Traveller: 7500, 'Mini Bus': 10000, 'Tourist Bus': 13000, Train: 2500, Airline: 7000 };
  const vehicleCapacity = { 'Car-4': 4, 'Car-7': 7, 'Maxi Cab': 12, Traveller: 17, 'Mini Bus': 20, 'Tourist Bus': 40, Train: 60, Airline: 180 };
  const hotelRates = { budget: 900, standard: 1600, premium: 2800, luxury: 5000 };
  const foodRates = { Vegetarian: 550, 'Non-Vegetarian': 700, Both: 700, Jain: 600, Vegan: 750, Other: 650 };
  const selectedSpots = () => [...document.querySelectorAll('#spotPicker input:checked')].map((input) => input.value);
  const getPlan = () => {
    const days = Number(document.getElementById('tripDays')?.value) || 0;
    const nights = Number(document.getElementById('tripNights')?.value) || 0;
    const adults = Number(document.getElementById('adults')?.value) || 0;
    const children = Number(document.getElementById('children')?.value) || 0;
    const travelers = adults + children;
    const state = document.getElementById('contactState')?.value.trim() || '';
    const spots = selectedSpots();
    const packageItem = packageCatalog.find((item) => item.id === document.getElementById('contactPackage')?.value);
    const hotelCategory = document.getElementById('hotelCategory')?.value || 'standard';
    const transport = document.getElementById('contactTransport')?.value || '';
    const meals = Number(document.getElementById('mealPlan')?.value) || 3;
    const percent = Math.min(30, Math.max(0, Number(document.getElementById('servicePercent')?.value) || 0));
    const distance = Math.max(25, spots.length * 85 + Math.max(0, spots.length - 1) * 35);
    const hotelCost = hotelRates[hotelCategory] * Math.max(1, Number(document.getElementById('roomCount')?.value) || 1) * nights;
    const foodCost = (foodRates[document.getElementById('foodType')?.value || 'Vegetarian'] * travelers * meals * Math.max(1, days)) / 3;
    const transportCost = (transportRates[transport] || 0) + distance * 12 + (days * 450) + (distance > 300 ? 1500 : 500);
    const activities = spots.length * 450 + (packageItem ? 1500 : 0);
    const baseCost = Math.round(hotelCost + foodCost + transportCost + activities);
    const percentageAmount = Math.round(baseCost * percent / 100);
    const finalCost = baseCost + percentageAmount;
    return { days, nights, adults, children, travelers, state, spots, packageItem, hotelCategory, transport, meals, distance, hotelCost, foodCost, transportCost, activities, baseCost, percent, percentageAmount, finalCost, perPerson: travelers ? Math.round(finalCost / travelers) : 0 };
  };
  const suggestTransport = () => {
    const people = getPlan().travelers;
    const choice = people <= 4 ? 'Car-4' : people <= 7 ? 'Car-7' : people <= 12 ? 'Maxi Cab' : people <= 17 ? 'Traveller' : people <= 20 ? 'Mini Bus' : 'Tourist Bus';
    const select = document.getElementById('contactTransport');
    if (select && (!select.dataset.edited || !select.value)) select.value = choice;
  };
  const updateWizard = () => {
    if (!document.getElementById('tripDays')) return;
    const plan = getPlan();
    const minSpots = plan.days * 2;
    const summary = document.getElementById('travellerSummary');
    if (summary) summary.textContent = `${plan.travelers} total travellers (${plan.adults} adults, ${plan.children} children).`;
    const rule = document.getElementById('spotRule');
    if (rule) rule.textContent = `For ${plan.days || 1} day${plan.days === 1 ? '' : 's'}, we recommend at least ${minSpots} sightseeing spots.`;
    const spotSuggestion = document.getElementById('spotSuggestion');
    if (spotSuggestion) spotSuggestion.textContent = plan.spots.length < minSpots ? `Based on your trip duration, we recommend at least ${minSpots} places for a better travel experience.` : `${plan.spots.length} places selected. The route will be arranged to reduce backtracking.`;
    const hotelName = document.getElementById('hotelName');
    if (hotelName && !hotelName.options.length) ['Local verified stay', 'Comfort city hotel', 'Premium resort', 'Luxury heritage stay'].forEach((name) => hotelName.add(new Option(name)));
    const hotelEstimate = document.getElementById('hotelEstimate');
    if (hotelEstimate) hotelEstimate.textContent = `Estimated hotel cost: ₹${plan.hotelCost.toLocaleString('en-IN')} for ${plan.nights} nights.`;
    const foodEstimate = document.getElementById('foodEstimate');
    if (foodEstimate) foodEstimate.textContent = `Estimated food cost: ₹${Math.round(plan.foodCost).toLocaleString('en-IN')} for ${plan.travelers} people and ${plan.meals} meal${plan.meals === 1 ? '' : 's'} per day.`;
    const transportEstimate = document.getElementById('transportEstimate');
    if (transportEstimate) transportEstimate.textContent = `${plan.transport || 'Vehicle'} · Capacity ${vehicleCapacity[plan.transport] || '-'} · ${plan.distance} km · ₹${Math.round(plan.transportCost).toLocaleString('en-IN')} including driver, fuel, toll and parking allowance.`;
    const analysis = document.getElementById('analysisBox');
    if (analysis) analysis.innerHTML = plan.spots.length > plan.days * 3 ? `<strong>Adjustment:</strong> ${plan.spots.length} places may be too many for ${plan.days} days. Consider ${Math.max(2, plan.days * 2)} to ${plan.days * 2 + 1} places to reduce travel fatigue.` : `<strong>Plan looks workable:</strong> ${plan.spots.length || 0} selected places across ${plan.days || 0} days, with ${plan.transport || 'transport'} capacity for ${plan.travelers || 0} travellers.`;
    const recommendation = document.getElementById('recommendationBox');
    if (recommendation) {
      const foodType = document.getElementById('foodType')?.value || 'Vegetarian';
      const hotelRate = hotelRates[hotelCategory] ?? hotelRates.standard;
      const foodRate = foodRates[foodType] ?? foodRates.Vegetarian;
      recommendation.innerHTML = `<strong>Hotel:</strong> ${hotelName?.value || 'Local verified stay'} · ${hotelCategory} · ₹${hotelRate.toLocaleString('en-IN')}/night<br><strong>Restaurant:</strong> ${foodType} · ₹${foodRate.toLocaleString('en-IN')}/person/day<br><strong>Transport:</strong> ${plan.transport || 'Choose vehicle'} · capacity ${vehicleCapacity[plan.transport] || '-'} · ₹${Math.round(plan.transportCost).toLocaleString('en-IN')}<br><strong>Route:</strong> ${plan.spots.join(' → ') || 'Choose places'}`;
    }
    const costs = document.getElementById('costBreakdown');
    if (costs) costs.innerHTML = [['Hotel', plan.hotelCost], ['Food', plan.foodCost], ['Transport', plan.transportCost], ['Activities / other', plan.activities], ['Base trip cost', plan.baseCost], [`Service / advance (${plan.percent}%)`, plan.percentageAmount], ['Final trip cost', plan.finalCost], ['Cost per person', plan.perPerson]].map(([label, value], index) => `<div class="cost-line ${index > 5 ? 'total' : ''}"><span>${label}</span><strong>₹${Math.round(value).toLocaleString('en-IN')}</strong></div>`).join('');
    const final = document.getElementById('finalSummary');
    if (final) final.innerHTML = `<strong>Your trip plan</strong><br>${plan.days} days / ${plan.nights} nights · ${plan.travelers} travellers · ${plan.state || 'State not selected'}<br>Places: ${plan.spots.join(', ') || 'Not selected'}<br>Transport: ${plan.transport || 'Not selected'} · Hotel: ${hotelName?.value || 'Not selected'} · Food: ${document.getElementById('foodType')?.value || 'Not selected'}<br><br><strong>Final trip cost: ₹${plan.finalCost.toLocaleString('en-IN')}</strong> · ₹${plan.perPerson.toLocaleString('en-IN')} per person`;
    if (wizardProgress) wizardProgress.innerHTML = ['Duration', 'Travellers', 'State', 'Places', 'Hotel', 'Food', 'Transport', 'AI Plan', 'Cost', 'Review'].map((label, index) => `<span class="${index + 1 === currentStep ? 'active' : ''}">${index + 1} ${label}</span>`).join('');
  };
  document.addEventListener('trip-plan-change', updateWizard);
  const validateStep = () => {
    const plan = getPlan();
    if (currentStep === 1 && (!plan.days || plan.nights < 0 || plan.nights >= plan.days + 1)) return 'Select a valid duration and nights first.';
    if (currentStep === 2 && (!plan.adults || !plan.travelers)) return 'Select at least one adult traveller.';
    if (currentStep === 3 && !plan.state) return 'Select a state.';
    if (currentStep === 4 && !plan.spots.length) return 'Choose at least one famous place in your selected state.';
    return '';
  };
  const showStep = (step) => { currentStep = Math.min(10, Math.max(1, step)); wizardSteps.forEach((section, index) => section.classList.toggle('active', index + 1 === currentStep)); wizardBack.style.visibility = currentStep === 1 ? 'hidden' : 'visible'; wizardNext.hidden = currentStep === 10; updateWizard(); };
  const selectPlaceForBooking = (state, place) => {
    const stateSelect = document.getElementById('contactState');
    const packageSelect = document.getElementById('contactPackage');
    if (stateSelect) {
      stateSelect.value = state;
      stateSelect.dispatchEvent(new Event('change'));
    }
    const placeCheckbox = [...document.querySelectorAll('#spotPicker input')].find((input) => input.value === place);
    if (placeCheckbox) {
      placeCheckbox.checked = true;
      placeCheckbox.dispatchEvent(new Event('change'));
    }
    if (packageSelect) packageSelect.value = 'custom';
    showStep(4);
    window.location.hash = '#contact';
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  document.addEventListener('trip-place-selected', (event) => {
    const { state, place } = event.detail || {};
    if (state && place) selectPlaceForBooking(state, place);
  });
  document.addEventListener('click', (event) => {
    if (!(event.target instanceof Element)) return;
    const exploreButton = event.target.closest('[data-explore-place]');
    if (exploreButton) {
      const spot = touristPlaces[Number(exploreButton.dataset.explorePlace)];
      if (spot) openPlaceDetails(spot);
      return;
    }
    const bookingLink = event.target.closest('a[data-requires-auth][data-state][data-spot]');
    if (!bookingLink || !firebaseAuth.currentUser) return;
    event.preventDefault();
    selectPlaceForBooking(bookingLink.dataset.state, bookingLink.dataset.spot);
  });
  wizardNext?.addEventListener('click', () => { const error = validateStep(); if (error) return setMessage('contactMessageResult', error); suggestTransport(); updateWizard(); showStep(currentStep + 1); });
  wizardBack?.addEventListener('click', () => showStep(currentStep - 1));
  document.getElementById('contactTransport')?.addEventListener('change', (event) => { event.target.dataset.edited = 'true'; updateWizard(); });
  document.getElementById('tripDays')?.addEventListener('input', () => { const days = Number(document.getElementById('tripDays').value) || 1; document.getElementById('tripNights').value = Math.max(0, days - 1); updateWizard(); });
  document.querySelectorAll('#contactForm input, #contactForm select').forEach((element) => element.addEventListener('input', updateWizard));
  suggestTransport();
  updateWizard();
  document.querySelectorAll('.package-actions a[href="#contact"]').forEach((button) => button.addEventListener('click', () => {
    const packageCard = button.closest('.package-card');
    const packageSelect = document.getElementById('contactPackage');
    if (packageCard && packageSelect) packageSelect.value = packageCard.dataset.package;
    updateWizard();
  }));
  document.getElementById('newsletterForm')?.addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = document.getElementById('newsletterEmail').value.trim();
    if (!email.includes('@')) return setMessage('newsletterMessage', 'Please enter a valid email address.');
    await submitToFirebase({ type: 'newsletter', email }, 'newsletterMessage', 'Thanks. Travel inspiration is on its way.');
  });
  document.getElementById('contactForm')?.addEventListener('submit', async (event) => {
    event.preventDefault();
    const contactForm = document.getElementById('contactForm');
    if (!firebaseAuth.currentUser) {
      setMessage('contactMessageResult', 'Please sign in before sending a trip enquiry.');
      window.location.hash = '#account';
      return;
    }
    const incompleteField = contactForm.querySelector('.wizard-step.active input:invalid');
    if (incompleteField) {
      incompleteField.reportValidity();
      return;
    }
    const plan = getPlan();
    const enquiryId = `ENQ-${new Date().getFullYear()}-${Math.random().toString(36).slice(2, 7).toUpperCase()}`;
    const payload = {
      type: 'contact',
      name: document.getElementById('contactName').value,
      email: document.getElementById('contactEmail').value,
      phone: document.getElementById('contactPhone').value,
      state: plan.state,
      destination: plan.spots[0] || '',
      packageId: plan.packageItem?.id || 'custom',
      travelers: plan.travelers,
      stayDays: plan.days,
      hotelPlan: plan.hotelCategory,
      transport: plan.transport,
      estimatedPrice: `Final trip cost: ₹${plan.finalCost.toLocaleString('en-IN')}`,
      suggestion: `Enquiry ID ${enquiryId}: ${plan.spots.length} places, ${plan.nights} nights, ${plan.hotelCategory} stay, ${document.getElementById('foodType').value} food.`,
      tripPlan: { enquiryId, ...plan, hotelName: document.getElementById('hotelName').value, roomType: document.getElementById('roomType').value, rooms: Number(document.getElementById('roomCount').value) || 1, foodType: document.getElementById('foodType').value, mealPlan: document.getElementById('mealPlan').selectedOptions[0].textContent, pickupLocation: document.getElementById('pickupLocation').value, recommendations: document.getElementById('recommendationBox').textContent }
    };
    const saved = await submitToFirebase(payload, 'contactMessageResult', `Your enquiry has been successfully submitted. Enquiry ID: ${enquiryId}`);
    if (saved) {
      contactForm.reset();
      document.getElementById('contactState').dispatchEvent(new Event('change'));
      document.getElementById('contactTransport').dataset.edited = '';
      suggestTransport();
      showStep(1);
      setMessage('contactMessageResult', `Your enquiry has been successfully submitted. Enquiry ID: ${enquiryId}`);
    }
  });

  const packageDetails = Object.fromEntries(packageCatalog.map((item) => [item.id, [item.name, item.description]]));
  const modal = document.getElementById('packageModal');
  const modalContent = document.getElementById('modalContent');
  const closeModal = () => { modal.classList.remove('open'); modal.setAttribute('aria-hidden', 'true'); };
  const openPlaceDetails = (spot) => {
    const gallery = document.createElement('div');
    gallery.className = 'place-gallery-grid';
    const galleryStatus = document.createElement('p');
    galleryStatus.className = 'place-gallery-status';
    galleryStatus.textContent = 'Loading destination photos...';
    const galleryFrames = Array.from({ length: 4 }, () => {
      const frame = document.createElement('div');
      frame.className = 'place-photo place-gallery-photo is-loading';
      const image = document.createElement('img');
      image.loading = 'lazy';
      image.alt = `Photo ${gallery.children.length + 1} of ${spot.name}, ${spot.state}`;
      const credit = document.createElement('a');
      credit.className = 'photo-credit';
      credit.target = '_blank';
      credit.rel = 'noopener noreferrer';
      credit.hidden = true;
      frame.append(image, credit);
      gallery.append(frame);
      return { frame, image, credit };
    });
    const location = document.createElement('span');
    location.className = 'dest-location';
    location.textContent = spot.state;
    const title = document.createElement('h2');
    title.textContent = spot.name;
    const description = document.createElement('p');
    description.textContent = placeDescription(spot);
    const bookLink = document.createElement('a');
    bookLink.href = '#contact';
    bookLink.className = 'btn btn-primary';
    bookLink.textContent = 'Plan a trip to this place';
    bookLink.dataset.requiresAuth = '';
    bookLink.dataset.state = spot.state;
    bookLink.dataset.spot = spot.name;
    bookLink.dataset.placeIndex = String(touristPlaces.indexOf(spot));

    modalContent.replaceChildren(location, title, description, galleryStatus, gallery, bookLink);
    fetchPlaceImages(spot).then((photos) => {
      if (!modal.classList.contains('open') || !gallery.isConnected) return;
      galleryStatus.textContent = photos.length
        ? `Showing ${photos.length} ${photos.length === 1 ? 'photo' : 'photos'} for ${spot.name}.`
        : `No Commons photos are currently available for ${spot.name}.`;
      galleryFrames.forEach(({ image, credit }, index) => {
        showPlacePhoto(image, credit, photos[index], spot);
      });
    }).catch((error) => {
      if (!gallery.isConnected) return;
      galleryStatus.textContent = 'Photos could not be loaded right now. Please try again.';
      galleryFrames.forEach(({ image }) => image.closest('.place-photo')?.classList.add('is-unavailable'));
      console.warn(`Unable to load the photo gallery for ${spot.name}.`, error);
    });
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
  };
  document.querySelectorAll('.view-details').forEach((button) => button.addEventListener('click', () => {
    const detail = packageDetails[button.dataset.package];
    if (!detail) return;
    modalContent.innerHTML = `<h2>${detail[0]}</h2><p>${detail[1]}</p><a class="btn btn-primary" href="#contact" data-package="${button.dataset.package}" data-requires-auth>Plan this trip</a>`;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
  }));
  modalContent.addEventListener('click', (event) => {
    if (!(event.target instanceof Element)) return;
    const bookingLink = event.target.closest('a[data-requires-auth]');
    if (!bookingLink) return;
    const packageSelect = document.getElementById('contactPackage');
    if (packageSelect && bookingLink.dataset.package) packageSelect.value = bookingLink.dataset.package;
    closeModal();
  });
  document.getElementById('modalClose')?.addEventListener('click', closeModal);
  document.getElementById('modalOverlay')?.addEventListener('click', closeModal);

  const offerEnd = Date.now() + 5 * 24 * 60 * 60 * 1000;
  const updateCountdown = () => {
    const remaining = Math.max(0, offerEnd - Date.now());
    const values = [Math.floor(remaining / 86400000), Math.floor(remaining / 3600000) % 24, Math.floor(remaining / 60000) % 60, Math.floor(remaining / 1000) % 60];
    ['countDays', 'countHours', 'countMinutes', 'countSeconds'].forEach((id, index) => { document.getElementById(id).textContent = String(values[index]).padStart(2, '0'); });
  };
  updateCountdown();
  setInterval(updateCountdown, 1000);

  const backToTop = document.getElementById('backToTop');
  window.addEventListener('scroll', () => backToTop.classList.toggle('visible', window.scrollY > 500));
  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('revealed')), { threshold: .12 });
  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
});
