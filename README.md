# SMART KIDS 90 — Landing Page

यह आपके **SMART KIDS 90 (90-Day Child Development Program)** के लिए तैयार पूरी लैंडिंग पेज है — पूरी तरह हिंदी में, मोबाइल-फ्रेंडली, और High-Sell डिज़ाइन के साथ।

## 📁 Folder Structure
```
smartkids90/
├── index.html      → मुख्य पेज (पूरा कंटेंट यहाँ है)
├── style.css       → पूरा डिज़ाइन / रंग / फॉन्ट
├── script.js       → मेनू, FAQ, एनिमेशन
├── images/         → सभी मॉड्यूल, बोनस और लोगो इमेज
└── README.md       → यह फाइल
```

## 🚀 Netlify पर Deploy कैसे करें (2 मिनट में)

**Option A — Drag & Drop (सबसे आसान)**
1. https://app.netlify.com पर लॉगिन करें (Free अकाउंट बना सकते हैं)
2. Dashboard पर **"Add new site" → "Deploy manually"** पर क्लिक करें
3. इस पूरे `smartkids90` फोल्डर को ब्राउज़र में drag करके drop कर दें
4. कुछ ही सेकंड में आपकी साइट लाइव हो जाएगी (जैसे `random-name-123.netlify.app`)
5. Site Settings → "Change site name" से अपना खुद का नाम दे सकते हैं

**Option B — GitHub से Deploy**
1. इस फोल्डर को एक GitHub repo में push करें
2. Netlify → "Add new site" → "Import from Git" → अपना repo चुनें
3. Build command खाली रखें, Publish directory: `.` (root)
4. Deploy पर क्लिक करें

**अपना डोमेन जोड़ना (www.smartkids90.in)**
- Netlify → Site settings → Domain management → "Add custom domain" में `smartkids90.in` डालें और अपने डोमेन रजिस्ट्रार में दिए गए DNS records अपडेट करें।

## ☁️ Cloudflare Pages पर Deploy कैसे करें (सबसे आसान, free)

यह प्रोजेक्ट अब Cloudflare के लिए पूरी तरह तैयार है — कोई build step नहीं चाहिए, कोई code change नहीं चाहिए। साथ में `_headers` (caching + security headers) और `_redirects` (future redirects के लिए) फाइलें भी शामिल कर दी गई हैं।

**Option A — Dashboard से Drag & Drop (सबसे आसान, 2 मिनट)**
1. https://dash.cloudflare.com पर लॉगिन करें (Free अकाउंट बना सकते हैं)
2. Sidebar में **Workers & Pages → Create → Pages → Upload assets** पर क्लिक करें
3. Project का नाम दें (जैसे `smartkids90`) और इस पूरे फोल्डर को browser में drag करके drop कर दें
4. **Deploy** पर क्लिक करें — कुछ ही सेकंड में साइट लाइव हो जाएगी (जैसे `smartkids90.pages.dev`)

**Option B — GitHub से Deploy (auto-deploy on every push)**
1. इस फोल्डर को एक GitHub repo में push करें
2. Cloudflare Dashboard → **Workers & Pages → Create → Pages → Connect to Git** → अपना repo चुनें
3. Build command खाली रखें, Build output directory: `/` (root) रखें
4. Save & Deploy पर क्लिक करें

**Option C — Wrangler CLI से Deploy (developers के लिए)**
प्रोजेक्ट में `wrangler.toml` पहले से दिया हुआ है। टर्मिनल में इस फोल्डर के अंदर जाकर:
```bash
npm install -g wrangler
wrangler login
wrangler deploy
```

**अपना डोमेन जोड़ना (www.smartkids90.in)**
- Dashboard → अपना Pages project → **Custom domains → Set up a custom domain** में `smartkids90.in` डालें और बताए गए DNS records (अगर डोमेन पहले से Cloudflare में है तो यह automatic हो जाता है) confirm करें।

⚠️ **Note:** Meta Pixel (`facebook.net`, `facebook.com/tr`) पहले से HTML में external script के तौर पर लगा है — Cloudflare Pages में यह बिना किसी extra setting के काम करेगा, कुछ बदलने की ज़रूरत नहीं।

## 🔧 इस बार क्या बदला गया — Sale ना आने की असली वजहें ठीक की गईं

पिछली बार क्लिक ₹0.36 का सस्ता आ रहा था लेकिन sell नहीं हो रही थी। वजह डिज़ाइन नहीं, **trust और tracking** की कमी थी। इस version में:

1. **Fake countdown हटाया** — पहले टाइमर हर 10 मिनट में लूप होकर दोबारा 10:00 पर पहुँच जाता था (refresh करने पर भी)। समझदार parents यह पकड़ लेते हैं और भरोसा टूट जाता है। अब यह **आज रात 11:59 तक** का genuine बचा हुआ समय दिखाता है और दिन खत्म होने पर खुद रीसेट होता है — कोई नकली अर्जेंसी नहीं।
2. **2 अलग-अलग countdown bars को 1 में मिलाया** — पहले टॉप बार और urgency बार दोनों अलग टाइमर दिखा रहे थे, जो repetitive और suspicious लगता है।
3. **7-दिन Money-Back Guarantee जोड़ी** (pricing के ठीक ऊपर) — कम कीमत वाले digital product पर parents को risk-free लगना ज़रूरी है। ⚠️ **आपको असली रिफंड पॉलिसी डालनी होगी** — अभी सिर्फ example है (index.html में "guarantee-strip" खोजें)।
4. **Secure checkout को साफ किया** — अब बटन पर "🔒 सिक्योर चेकआउट" लिखा है और नीचे बताया गया है कि payment के लिए Superprofile पार्टनर पर जाएँगे। इससे external site पर redirect होने का डर कम होता है।
5. **Free sample link जोड़ा** (Modules section में) — ताकि खरीदने से पहले लोग असली worksheet का एक पेज देख सकें। अभी यह Module-1 इमेज खोलता है — चाहें तो असली PDF सैंपल से बदल दें।
6. **Footer में Trust info जोड़ी** — Support email, WhatsApp support, रिफंड पॉलिसी और नियम-शर्तें के placeholder लिंक। ⚠️ **इन्हें असली जानकारी से भरें** — बिना सही business identity के, कम कीमत वाले ऑफर scam जैसे लग सकते हैं।
7. **Meta Pixel placeholder जोड़ा** (`<head>` में, कमेंट किया हुआ) — देखें नीचे "Conversion Tracking" सेक्शन।

## 📣 सबसे ज़रूरी काम — इसके बिना sales नहीं बढ़ेंगी

**Ad campaign अभी "Link Clicks" objective पर चल रही है** — Meta सिर्फ सस्ते क्लिक ढूंढता है, buyers नहीं। इसे ठीक करने के लिए:

1. `index.html` के `<head>` में दिया गया Meta Pixel कोड uncomment करें और उसमें अपना असली Pixel ID डालें (Meta Events Manager से मिलता है)।
2. Superprofile checkout page पर भी वही Pixel + एक **Purchase event** फायर करवाएं (Superprofile की integrations/tracking setting में Pixel ID डाल सकते हैं, या उनसे पूछें)।
3. कम-से-कम 15-20 purchases track होने के बाद, Meta Ads Manager में campaign objective **"Sales" / "Conversions"** पर switch करें (अभी "Link Clicks" से हटाएं)।
4. तब तक टेस्ट न रोकें — Pixel डेटा जमा होने में 3-7 दिन लग सकते हैं।

## 🎯 CRO Framework — इस पेज में कहाँ क्या लगाया गया

आपने AIDA + PAS + StoryBrand + FOMO + Social Proof + Trust का इस्तेमाल माँगा था। यहाँ है कि कौन सा हिस्सा किस principle पर बना है:

| Section | Framework | क्या करता है |
|---|---|---|
| **Hero** | AIDA — Attention | बड़ा promise ("रोज़ 20 मिनट → 90 दिन में बदलाव"), तुरंत ध्यान खींचता है |
| **Problem-Agitate-Solution** (नया, "program" section) | PAS | पहले parent की असली तकलीफ (गिल्ट, समय की कमी) बताई, फिर उसे agitate किया (सुनहरी उम्र वापस नहीं आती), फिर SMART KIDS 90 को solution की तरह पेश किया |
| **3-Step Simple Plan** (नया, PAS के नीचे) | StoryBrand — Plan | खरीदने का डर कम करता है: "बस 3 आसान स्टेप — Join, 20 मिनट रोज़, 90 दिन में result" |
| **9 Skills / Modules / Bonus** | AIDA — Interest + Desire | Feature-dump नहीं, बल्कि "आपके बच्चे को यह सब मिलेगा" वाली desire-building |
| **Stakes vs Success** (नया, pricing से पहले) | StoryBrand — Stakes/Success + FOMO | दो रास्ते साफ दिखाए — टालने का नुकसान बनाम आज शुरू करने का फायदा, बिना डराए |
| **Guarantee + Secure Checkout** | Trust Psychology | Risk हटाकर "हाँ" कहना आसान बनाता है |
| **Trust Counter + Testimonials** (counter नया जोड़ा गया) | Social Proof | "मैं अकेला नहीं हूँ जो try कर रहा" वाला भरोसा |
| **FAQ** | Trust — Objection Handling | खरीदने से पहले के आखिरी सवाल खत्म करता है |
| **Final CTA** | AIDA — Action | आखिरी, बिना घुमाव वाला clear call to action |

⚠️ **ज़रूरी:** Trust Counter में अभी "1,200+ माता-पिता जुड़ चुके" और "4.7★ रेटिंग" **उदाहरण नंबर** हैं (testimonial-section में, index.html में "trust-counter" खोजें)। इन्हें असली आँकड़ों से बदलें — गलत संख्या दिखाना भरोसा तोड़ता है और कानूनी तौर पर भी risky है। अगर अभी सही संख्या नहीं है, तो इस section को हटा भी सकते हैं जब तक असली data ना हो।

## 📊 Meta Pixel — अब लाइव है (आपका असली ID लगा दिया गया)

Pixel ID `3467992940054971` अब `index.html` के `<head>` में सक्रिय (uncommented) है। साथ ही एक ज़रूरी अतिरिक्त इवेंट भी जोड़ा गया:

- **PageView** — पेज लोड होते ही फायर होता है (default)
- **InitiateCheckout** — जब कोई असली "🔒 सिक्योर चेकआउट पर जाएँ" बटन दबाता है (सिर्फ लिंक क्लिक नहीं, बल्कि असली buying-intent) — `script.js` में `.checkout-link` सुनता है

**अगला कदम — Ads Manager में:**
1. Events Manager में जाकर पुष्टि करें कि PageView + InitiateCheckout आ रहे हैं (Test Events टैब से लाइव चेक कर सकते हैं)।
2. Ads Manager → Custom Conversions → **InitiateCheckout** को conversion event बनाएं।
3. Campaign objective **"Sales"** चुनें और conversion event में यही InitiateCheckout सेट करें — कम से कम 15-20 events जमा होने तक "Link Clicks" पर मत लौटें।
4. अगर Superprofile checkout पर भी Pixel + Purchase event डलवा सकें (उनसे integration/tracking setting पूछें), तो वो सबसे मज़बूत सिग्नल होगा — तब campaign को सीधे Purchase पर optimize करें, InitiateCheckout पर नहीं।

## ✍️ Publish करने से पहले ज़रूर बदलें (Important)

1. **Payment / Buy Now लिंक** — अभी `superprofile.bio/vp/SmartKids90` लगा है, अगर बदलना है तो `id="buyNowBtn"` खोजें।
2. **WhatsApp नंबर** — अभी `919099706592` लगा है, ज़रूरत पड़े तो बदलें (2 जगह: Hero बटन + Floating WhatsApp बटन)।
3. **Testimonials (माता-पिता के रिव्यू)** — अभी जो 3 रिव्यू दिए हैं वो सिर्फ उदाहरण/placeholder हैं। लॉन्च से पहले इन्हें असली ग्राहकों की समीक्षाओं (screenshot के साथ हो तो और बेहतर) से बदल दें।
4. **Guarantee + Footer trust info** — ऊपर बताए गए placeholders को असली policy/contact details से भरें।
5. **Trust Counter नंबर** — testimonial section में "1,200+" और "4.7★" उदाहरण हैं, असली संख्या से बदलें या हटाएं।
6. **Meta Pixel** — यह अब लाइव है, बस Ads Manager में ऊपर बताए अनुसार Custom Conversion सेट करें।
7. **डोमेन लिंक** — फुटर में `www.smartkids90.in` पहले से लगा है, ज़रूरत पड़े तो अपडेट करें।

## 🎨 डिज़ाइन कस्टमाइज़ करना
- सभी रंग `style.css` की शुरुआत में `:root { ... }` में variables के रूप में दिए हैं — सिर्फ hex code बदलें, पूरी साइट का रंग बदल जाएगा।
- फॉन्ट: Heading के लिए **Baloo 2**, बॉडी टेक्स्ट के लिए **Mukta** (दोनों Google Fonts, अपने आप लोड होते हैं)।

## 📱 फीचर्स जो पहले से शामिल हैं
- ✅ Sticky header + mobile hamburger menu
- ✅ Hero section with CTA buttons
- ✅ 90-दिन की Journey Path (13 clickable stops → सीधे उस मॉड्यूल तक ले जाते हैं)
- ✅ 13 मॉड्यूल्स ग्रिड (आपकी असली इमेज के साथ)
- ✅ 7 बोनस ग्रिड (आपकी असली इमेज के साथ)
- ✅ Pricing card (₹5000+ value → ₹479 offer)
- ✅ FAQ accordion
- ✅ Floating WhatsApp button + mobile sticky "Buy Now" bar
- ✅ Scroll-reveal animations
- ✅ पूरी तरह Responsive (Mobile, Tablet, Desktop)

बस ऊपर दिए 2-3 बदलाव करें और साइट लाइव करने के लिए तैयार है। 🎉
