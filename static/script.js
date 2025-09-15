

document.addEventListener('DOMContentLoaded', () => {
    // --- UI Elements ---
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('main section');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mainNav = document.querySelector('.main-nav');
    const loginSignupBtn = document.getElementById('login-signup-btn');
    const authModal = document.getElementById('auth-modal');
    const closeBtn = authModal.querySelector('.close-btn');
    const tabButtons = authModal.querySelectorAll('.tab-btn');
    const tabPanels = authModal.querySelectorAll('.tab-panel');

    const featuredProductsGrid = document.getElementById('featured-products-grid');
    const allProductsGrid = document.getElementById('all-products-grid');
    const cartCountSpan = document.getElementById('cart-count');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartSubtotalSpan = document.getElementById('cart-subtotal');
    const cartTotalSpan = document.getElementById('cart-total');
    const checkoutBtn = document.getElementById('checkout-btn');

    // Updated Appointment Form Elements
    const patientNameInput = document.getElementById('patient-name');
    const specializationSelect = document.getElementById('specialization-select');
    const doctorSelect = document.getElementById('doctor-select');
    const appointmentMediumSelect = document.getElementById('appointment-medium');
    const appointmentDateInput = document.getElementById('appointment-date');
    const timeSlotsContainer = document.getElementById('time-slots');
    const bookAppointmentBtn = document.getElementById('book-appointment-btn');
    const appointmentList = document.getElementById('appointment-list');
    const appointmentCard = document.getElementById('appointment-card');

    // Identity Verification Elements
    const verificationStep = document.getElementById('verification-step');
    const contactInput = document.getElementById('contact-input');
    const sendOtpBtn = document.getElementById('send-otp-btn');
    const otpInputGroup = document.getElementById('otp-input-group');
    const otpInput = document.getElementById('otp-input');
    const verifyOtpBtn = document.getElementById('verify-otp-btn');
    const otpMessage = document.getElementById('otp-message');

    const prescriptionUploadArea = document.getElementById('prescription-upload-area');
    const prescriptionFileInput = document.getElementById('prescription-file-input');
    const chooseFileBtn = document.getElementById('choose-file-btn');
    const uploadProgressBar = document.getElementById('upload-progress-bar');
    const prescriptionList = document.getElementById('prescription-list');

    const productSearchInput = document.getElementById('product-search-input');
    const productSearchBtn = document.getElementById('product-search-btn');
    const clearSearchBtn = document.getElementById('clear-search-btn');


    // --- Data (Simulated, in a real app this comes from Django API) ---


    const products = [
        //medicines
        { id: 'prod001', name: 'Paracetamol 500mg', composition: 'Acetaminophen', type: 'medicine', usage: 'Pain relief, fever', imageUrl: '/images/paracetamol.png', prescriptionRequired: false, price: 25.00, isFeatured: true },
        { id: 'prod002', name: 'Ibuprofen 400mg', composition: 'Ibuprofen', type: 'medicine', usage: 'Anti-inflammatory and mild pain', imageUrl: '/images/ibuprofen.png', prescriptionRequired: false, price: 30.00, isFeatured: true },
        { id: 'prod003', name: 'Antacid Chewable Tablets', composition: 'Calcium Carbonate, Magnesium Hydroxide', type: 'medicine', usage: 'Indigestion and heartburn', imageUrl: '/images/antacid.png', prescriptionRequired: false, price: 40.00, isFeatured: false },
        { id: 'prod004', name: 'Levocetirizine 5mg', composition: 'Levocetirizine', type: 'medicine', usage: 'Relief from allergies', imageUrl: '/images/levocetirizine.png', prescriptionRequired: false, price: 35.00, isFeatured: false },
        { id: 'prod005', name: 'Montelukast + Levocetirizine', composition: 'Montelukast, Levocetirizine', type: 'medicine', usage: 'Allergic rhinitis, asthma prevention', imageUrl: '/images/montelukast.png', prescriptionRequired: false, price: 90.00, isFeatured: true },
        { id: 'prod006', name: 'Domperidone 10mg', composition: 'Domperidone', type: 'medicine', usage: 'Nausea and vomiting', imageUrl: '/images/domperidone.png', prescriptionRequired: false, price: 28.00, isFeatured: false },
        { id: 'prod007', name: 'Meclizine 25mg', composition: 'Meclizine', type: 'medicine', usage: 'Motion sickness', imageUrl: '/images/meclizine.png', prescriptionRequired: false, price: 35.00, isFeatured: false },
        { id: 'prod008', name: 'Dextromethorphan Syrup', composition: 'Dextromethorphan, Guaifenesin', type: 'medicine', usage: 'Dry cough relief', imageUrl: '/images/cough-syrup.png', prescriptionRequired: false, price: 70.00, isFeatured: false },
        { id: 'prod009', name: 'Cetirizine 10mg', composition: 'Cetirizine', type: 'medicine', usage: 'Cold and skin allergies', imageUrl: '/images/cetirizine.png', prescriptionRequired: false, price: 25.00, isFeatured: false },
        { id: 'prod010', name: 'Pantoprazole 40mg', composition: 'Pantoprazole', type: 'medicine', usage: 'Acidity and acid reflux', imageUrl: '/images/pantoprazole.png', prescriptionRequired: false, price: 55.00, isFeatured: true },

        // Continue with more OTC examples
        { id: 'prod011', name: 'Throat Lozenges', composition: 'Menthol, Eucalyptus oil', type: 'medicine', usage: 'Sore throat relief', imageUrl: '/images/lozenges.png', prescriptionRequired: false, price: 20.00, isFeatured: false },
        { id: 'prod012', name: 'Loperamide 2mg', composition: 'Loperamide', type: 'medicine', usage: 'Anti-diarrheal', imageUrl: '/images/loperamide.png', prescriptionRequired: false, price: 15.00, isFeatured: false },
        { id: 'prod013', name: 'Nimesulide 100mg', composition: 'Nimesulide', type: 'medicine', usage: 'Pain and inflammation', imageUrl: '/images/nimesulide.png', prescriptionRequired: false, price: 30.00, isFeatured: false },
        { id: 'prod014', name: 'Calcium + Vitamin D3 Tablets', composition: 'Calcium Carbonate, Cholecalciferol', type: 'medicine', usage: 'Bone strength', imageUrl: '/images/calcium-d3.png', prescriptionRequired: false, price: 90.00, isFeatured: true },
        { id: 'prod015', name: 'ORS Sachets (10-pack)', composition: 'Rehydration salts', type: 'medicine', usage: 'Dehydration treatment', imageUrl: '/images/ors.png', prescriptionRequired: false, price: 48.00, isFeatured: true },
        { id: 'prod016', name: 'Zinc Sulphate Tablet', composition: 'Zinc Sulphate', type: 'medicine', usage: 'Immunity support and wound healing', imageUrl: '/images/zinc.png', prescriptionRequired: false, price: 35.00, isFeatured: false },
        { id: 'prod017', name: 'B Complex Capsules', composition: 'B1, B2, B6, B12 + Niacin', type: 'medicine', usage: 'Fatigue and metabolism support', imageUrl: '/images/b-complex.png', prescriptionRequired: false, price: 80.00, isFeatured: true },
        { id: 'prod018', name: 'Simethicone Drops', composition: 'Simethicone', type: 'medicine', usage: 'Gas and bloating', imageUrl: '/images/simethicone.png', prescriptionRequired: false, price: 45.00, isFeatured: false },
        { id: 'prod019', name: 'Hydrocortisone Cream 1%', composition: 'Hydrocortisone', type: 'medicine', usage: 'Skin inflammation', imageUrl: '/images/hydrocortisone.png', prescriptionRequired: false, price: 75.00, isFeatured: false },
        { id: 'prod020', name: 'Lactulose Syrup 200ml', composition: 'Lactulose', type: 'medicine', usage: 'Constipation relief', imageUrl: '/images/lactulose.png', prescriptionRequired: false, price: 95.00, isFeatured: false },

        // Prescription Medicines – prod021 to prod100

        { id: 'prod021', name: 'Digene Antacid Tablets', composition: 'Magnesium Hydroxide, Aluminium Hydroxide', type: 'medicine', usage: 'Acidity, heartburn', imageUrl: '/images/digene.png', prescriptionRequired: false, price: 40.00, isFeatured: false },
        { id: 'prod022', name: 'Vicks Action 500', composition: 'Paracetamol, Phenylephrine, Caffeine', type: 'medicine', usage: 'Cold & headache relief', imageUrl: '/images/vicks-action.png', prescriptionRequired: false, price: 30.00, isFeatured: false },
        { id: 'prod023', name: 'Crocin Advance', composition: 'Paracetamol IP 500mg', type: 'medicine', usage: 'Pain & fever relief', imageUrl: '/images/crocin-advance.png', prescriptionRequired: false, price: 25.00, isFeatured: true },
        { id: 'prod024', name: 'Relent Cold Tablets', composition: 'Cetirizine, Phenylephrine', type: 'medicine', usage: 'Cold & sneezing', imageUrl: '/images/relent.png', prescriptionRequired: false, price: 52.00, isFeatured: false },
        { id: 'prod025', name: 'D-Cold Total Tablets', composition: 'Paracetamol, Phenylephrine, Caffeine', type: 'medicine', usage: 'Cold & flu symptoms', imageUrl: '/images/dcold.png', prescriptionRequired: false, price: 45.00, isFeatured: false },
        { id: 'prod026', name: 'Calpol 250 for Kids', composition: 'Paracetamol IP 250mg', type: 'medicine', usage: 'Fever in children', imageUrl: '/images/calpol250.png', prescriptionRequired: false, price: 35.00, isFeatured: false },
        { id: 'prod027', name: 'Herbal Cough Syrup', composition: 'Tulsi, Mulethi, Ginger Extracts', type: 'medicine', usage: 'Dry and wet cough', imageUrl: '/images/herbal-cough.png', prescriptionRequired: false, price: 75.00, isFeatured: false },
        { id: 'prod028', name: 'Cofsils Lozenges Pack', composition: 'Amylmetacresol, Dichlorobenzyl alcohol', type: 'medicine', usage: 'Sore throat relief', imageUrl: '/images/cofsils.png', prescriptionRequired: false, price: 20.00, isFeatured: false },
        { id: 'prod029', name: 'Zandu Balm 8ml', composition: 'Menthol, Methyl Salicylate, Camphor', type: 'medicine', usage: 'Headache, body ache', imageUrl: '/images/zandu-balm.png', prescriptionRequired: false, price: 35.00, isFeatured: false },
        { id: 'prod030', name: 'Moov Pain Relief Cream', composition: 'Diclofenac Diethylamine, Menthol', type: 'medicine', usage: 'Muscle and back pain', imageUrl: '/images/moov.png', prescriptionRequired: false, price: 79.00, isFeatured: false },

        { id: 'prod031', name: 'Volini Spray 60ml', composition: 'Diclofenac, Menthol, Methyl Salicylate', type: 'medicine', usage: 'Joint pain & sprains', imageUrl: '/images/volini.png', prescriptionRequired: false, price: 135.00, isFeatured: false },
        { id: 'prod032', name: 'ENO Sachet (6 pcs)', composition: 'Sodium bicarbonate, Citric acid', type: 'medicine', usage: 'Acidity & indigestion', imageUrl: '/images/eno.png', prescriptionRequired: false, price: 42.00, isFeatured: true },
        { id: 'prod033', name: 'Digene Gel Mint Flavour', composition: 'Magnesium Hydroxide Gel IP', type: 'medicine', usage: 'Heartburn, upset stomach', imageUrl: '/images/digene-gel.png', prescriptionRequired: false, price: 90.00, isFeatured: false },
        { id: 'prod034', name: 'Lacto Calamine Lotion', composition: 'Kaolin, Zinc Oxide, Glycerin', type: 'medicine', usage: 'Oily skin, acne', imageUrl: '/images/lacto-calamine.png', prescriptionRequired: false, price: 110.00, isFeatured: false },
        { id: 'prod035', name: 'Iodex Pain Balm', composition: 'Methyl Salicylate, Camphor, Turpentine Oil', type: 'medicine', usage: 'Muscle & joint pain', imageUrl: '/images/iodex.png', prescriptionRequired: false, price: 45.00, isFeatured: false },
        { id: 'prod036', name: 'Becosules Capsules', composition: 'B-complex, Vitamin C', type: 'medicine', usage: 'Vitamin deficiency', imageUrl: '/images/becosules.png', prescriptionRequired: false, price: 39.00, isFeatured: true },
        { id: 'prod037', name: 'Livogen-Z Tablets', composition: 'Ferrous Fumarate, Folic Acid, Zinc', type: 'medicine', usage: 'Iron deficiency, anemia', imageUrl: '/images/livogen.png', prescriptionRequired: false, price: 85.00, isFeatured: false },
        { id: 'prod038', name: 'Revital H Capsules', composition: 'Multivitamin + Ginseng + Zinc', type: 'medicine', usage: 'General wellness', imageUrl: '/images/revital.png', prescriptionRequired: false, price: 195.00, isFeatured: true },
        { id: 'prod039', name: 'Himalaya Septilin Tablets', composition: 'Guggul, Guduchi, Licorice', type: 'medicine', usage: 'Immunity booster (herbal)', imageUrl: '/images/septilin.png', prescriptionRequired: false, price: 135.00, isFeatured: false },
        { id: 'prod040', name: 'Vitawin Calcium D3 Tablets', composition: 'Calcium Citrate, Vitamin D3', type: 'medicine', usage: 'Bone health', imageUrl: '/images/vitawin-d3.png', prescriptionRequired: false, price: 95.00, isFeatured: false },

        { id: 'prod041', name: 'Glucon-D Instant Energy', composition: 'Glucose, Vitamin D', type: 'medicine', usage: 'Rehydration, energy', imageUrl: '/images/glucond.png', prescriptionRequired: false, price: 65.00, isFeatured: true },
        { id: 'prod042', name: 'Electral ORS Sachets', composition: 'Electrolytes with Glucose', type: 'medicine', usage: 'Dehydration, diarrhea', imageUrl: '/images/electral.png', prescriptionRequired: false, price: 30.00, isFeatured: false },
        { id: 'prod043', name: 'Zincovit Multivitamin Syrup', composition: 'Zinc + B complex + Lysine', type: 'medicine', usage: 'Immunity support', imageUrl: '/images/zincovit.png', prescriptionRequired: false, price: 90.00, isFeatured: true },
        { id: 'prod044', name: 'Dabur Honitus Cough Syrup', composition: 'Honey, Tulsi, Mulethi', type: 'medicine', usage: 'Cough and cold', imageUrl: '/images/honitus.png', prescriptionRequired: false, price: 85.00, isFeatured: false },
        { id: 'prod045', name: 'Itch Guard Cream', composition: 'Clotrimazole 1%', type: 'medicine', usage: 'Fungal infections', imageUrl: '/images/itchguard.png', prescriptionRequired: false, price: 55.00, isFeatured: false },
        { id: 'prod046', name: 'Ring Guard Cream', composition: 'Miconazole + Neomycin + Clobetasol', type: 'medicine', usage: 'Anti-fungal + antibacterial', imageUrl: '/images/ringguard.png', prescriptionRequired: false, price: 66.00, isFeatured: false },
        { id: 'prod047', name: 'Boroline Antiseptic Cream', composition: 'Boric acid, Zinc oxide, Lanolin', type: 'medicine', usage: 'Wound healing', imageUrl: '/images/boroline.png', prescriptionRequired: false, price: 40.00, isFeatured: false },
        { id: 'prod048', name: 'Burnol Cream', composition: 'Acriflavine + Cetrimide', type: 'medicine', usage: 'Burns and cuts', imageUrl: '/images/burnol.png', prescriptionRequired: false, price: 30.00, isFeatured: false },
        { id: 'prod049', name: 'T-Bact Ointment', composition: 'Mupirocin', type: 'medicine', usage: 'Skin infections', imageUrl: '/images/tbact.png', prescriptionRequired: false, price: 130.00, isFeatured: false },
        { id: 'prod050', name: 'Soframycin Skin Cream', composition: 'Framycetin Sulphate 1%', type: 'medicine', usage: 'Wounds, cuts, skin infection', imageUrl: '/images/soframycin.png', prescriptionRequired: false, price: 56.00, isFeatured: false },

        // 51–60: More chronic, acute, specialty, topical, eye/ear, anti-epileptics
        { id: 'prod051', name: 'Glimepiride + Metformin', composition: 'Glimepiride, Metformin', type: 'medicine', usage: 'Diabetes dual therapy', imageUrl: '/images/glimepiride-metformin.png', prescriptionRequired: true, price: 88.00, isFeatured: false },
        { id: 'prod052', name: 'Losartan 50mg', composition: 'Losartan Potassium', type: 'medicine', usage: 'Hypertension', imageUrl: '/images/losartan.png', prescriptionRequired: true, price: 73.00, isFeatured: false },
        { id: 'prod053', name: 'Amlodipine + Atenolol', composition: 'Amlodipine, Atenolol', type: 'medicine', usage: 'BP/heart management', imageUrl: '/images/amlodipine-atenolol.png', prescriptionRequired: true, price: 120.00, isFeatured: false },
        { id: 'prod054', name: 'Esomeprazole 40mg', composition: 'Esomeprazole', type: 'medicine', usage: 'Gastroesophageal reflux', imageUrl: '/images/esomeprazole.png', prescriptionRequired: true, price: 99.00, isFeatured: false },
        { id: 'prod055', name: 'Topiramate 50mg', composition: 'Topiramate', type: 'medicine', usage: 'Seizures, migraine prophylaxis', imageUrl: '/images/topiramate.png', prescriptionRequired: true, price: 310.00, isFeatured: false },
        { id: 'prod056', name: 'Valproate 200mg', composition: 'Sodium Valproate', type: 'medicine', usage: 'Epilepsy, bipolar disorder', imageUrl: '/images/valproate.png', prescriptionRequired: true, price: 175.00, isFeatured: false },
        { id: 'prod057', name: 'Lamotrigine 25mg', composition: 'Lamotrigine', type: 'medicine', usage: 'Epilepsy, mood stabilization', imageUrl: '/images/lamotrigine.png', prescriptionRequired: true, price: 135.00, isFeatured: false },
        { id: 'prod058', name: 'Clonazepam 0.5mg', composition: 'Clonazepam', type: 'medicine', usage: 'Epilepsy, anxiety', imageUrl: '/images/clonazepam.png', prescriptionRequired: true, price: 65.00, isFeatured: false },
        { id: 'prod059', name: 'Escitalopram 10mg', composition: 'Escitalopram', type: 'medicine', usage: 'Depression, anxiety', imageUrl: '/images/escitalopram.png', prescriptionRequired: true, price: 105.00, isFeatured: false },
        { id: 'prod060', name: 'Quetiapine 100mg', composition: 'Quetiapine', type: 'medicine', usage: 'Bipolar disorder, schizophrenia', imageUrl: '/images/quetiapine.png', prescriptionRequired: true, price: 320.00, isFeatured: false },

        // 61–80: Cardiovascular, anti-diabetic, antiplatelet, antiTB, more antibiotics, pediatric/eye/skin
        { id: 'prod061', name: 'Bisoprolol 5mg', composition: 'Bisoprolol', type: 'medicine', usage: 'Heart conditions', imageUrl: '/images/bisoprolol.png', prescriptionRequired: true, price: 115.00, isFeatured: false },
        { id: 'prod062', name: 'Gliclazide 80mg', composition: 'Gliclazide', type: 'medicine', usage: 'Type 2 diabetes', imageUrl: '/images/gliclazide.png', prescriptionRequired: true, price: 94.00, isFeatured: false },
        { id: 'prod063', name: 'Rosuvastatin 10mg', composition: 'Rosuvastatin', type: 'medicine', usage: 'Cholesterol lowering', imageUrl: '/images/rosuvastatin.png', prescriptionRequired: true, price: 124.00, isFeatured: false },
        { id: 'prod064', name: 'Enalapril 5mg', composition: 'Enalapril', type: 'medicine', usage: 'High BP, heart failure', imageUrl: '/images/enalapril.png', prescriptionRequired: true, price: 61.00, isFeatured: false },
        { id: 'prod065', name: 'Empagliflozin 10mg', composition: 'Empagliflozin', type: 'medicine', usage: 'Type 2 diabetes', imageUrl: '/images/empagliflozin.png', prescriptionRequired: true, price: 340.00, isFeatured: false },
        { id: 'prod066', name: 'Pioglitazone 15mg', composition: 'Pioglitazone', type: 'medicine', usage: 'Type 2 diabetes', imageUrl: '/images/pioglitazone.png', prescriptionRequired: true, price: 98.00, isFeatured: false },
        { id: 'prod067', name: 'Hydroxychloroquine 200mg', composition: 'Hydroxychloroquine', type: 'medicine', usage: 'RA, malaria', imageUrl: '/images/hydroxychloroquine.png', prescriptionRequired: true, price: 122.00, isFeatured: false },
        { id: 'prod068', name: 'Linezolid 600mg', composition: 'Linezolid', type: 'medicine', usage: 'Severe bacterial infection', imageUrl: '/images/linezolid.png', prescriptionRequired: true, price: 870.00, isFeatured: false },
        { id: 'prod069', name: 'Rifampicin 300mg', composition: 'Rifampicin', type: 'medicine', usage: 'Tuberculosis', imageUrl: '/images/rifampicin.png', prescriptionRequired: true, price: 180.00, isFeatured: false },
        { id: 'prod070', name: 'Moxifloxacin 400mg', composition: 'Moxifloxacin', type: 'medicine', usage: 'Respiratory, eye infection', imageUrl: '/images/moxifloxacin.png', prescriptionRequired: true, price: 295.00, isFeatured: false },

        { id: 'prod071', name: 'Cefuroxime Axetil 500mg', composition: 'Cefuroxime Axetil', type: 'medicine', usage: 'Bacterial infections', imageUrl: '/images/cefuroxime.png', prescriptionRequired: true, price: 220.00, isFeatured: false },
        { id: 'prod072', name: 'Trihexyphenidyl 2mg', composition: 'Trihexyphenidyl', type: 'medicine', usage: 'Parkinsonism, muscle disorders', imageUrl: '/images/trihexyphenidyl.png', prescriptionRequired: true, price: 56.00, isFeatured: false },
        { id: 'prod073', name: 'Ondansetron 4mg', composition: 'Ondansetron', type: 'medicine', usage: 'Nausea/vomiting', imageUrl: '/images/ondansetron.png', prescriptionRequired: true, price: 44.00, isFeatured: false },
        { id: 'prod074', name: 'Betamethasone Cream', composition: 'Betamethasone', type: 'medicine', usage: 'Severe skin inflammation', imageUrl: '/images/betamethasone.png', prescriptionRequired: true, price: 78.00, isFeatured: false },
        { id: 'prod075', name: 'Fluconazole 150mg', composition: 'Fluconazole', type: 'medicine', usage: 'Fungal infection', imageUrl: '/images/fluconazole.png', prescriptionRequired: true, price: 46.00, isFeatured: false },
        { id: 'prod076', name: 'Gentamicin Eye Drops', composition: 'Gentamicin', type: 'medicine', usage: 'Eye infection', imageUrl: '/images/gentamicin.png', prescriptionRequired: true, price: 33.00, isFeatured: false },
        { id: 'prod077', name: 'Cyclopentolate Eye Drops', composition: 'Cyclopentolate', type: 'medicine', usage: 'Eye exam preparation', imageUrl: '/images/cyclopentolate.png', prescriptionRequired: true, price: 75.00, isFeatured: false },
        { id: 'prod078', name: 'Latanoprost Eye Drops', composition: 'Latanoprost', type: 'medicine', usage: 'Glaucoma', imageUrl: '/images/latanoprost.png', prescriptionRequired: true, price: 360.00, isFeatured: false },
        { id: 'prod079', name: 'Methylprednisolone 4mg', composition: 'Methylprednisolone', type: 'medicine', usage: 'Severe inflammation, autoimmunity', imageUrl: '/images/methylprednisolone.png', prescriptionRequired: true, price: 92.00, isFeatured: false },
        { id: 'prod080', name: 'Sodium Valproate 500mg', composition: 'Sodium Valproate', type: 'medicine', usage: 'Epilepsy, mania', imageUrl: '/images/valproate.png', prescriptionRequired: true, price: 158.00, isFeatured: false },

        // 81–100: HIV, cancer, pediatric, neuro, gastro, pain, antiemetic, vitamins/trace
        { id: 'prod081', name: 'Tenofovir 300mg', composition: 'Tenofovir Disoproxil Fumarate', type: 'medicine', usage: 'HIV infection', imageUrl: '/images/tenofovir.png', prescriptionRequired: true, price: 1900.00, isFeatured: false },
        { id: 'prod082', name: 'Nevirapine 200mg', composition: 'Nevirapine', type: 'medicine', usage: 'HIV/AIDS', imageUrl: '/images/nevirapine.png', prescriptionRequired: true, price: 670.00, isFeatured: false },
        { id: 'prod083', name: 'Letrozole 2.5mg', composition: 'Letrozole', type: 'medicine', usage: 'Breast cancer, infertility', imageUrl: '/images/letrozole.png', prescriptionRequired: true, price: 390.00, isFeatured: false },
        { id: 'prod084', name: 'Vincristine Injection', composition: 'Vincristine Sulfate', type: 'medicine', usage: 'Leukemia', imageUrl: '/images/vincristine.png', prescriptionRequired: true, price: 900.00, isFeatured: false },
        { id: 'prod085', name: 'Mesalamine 400mg', composition: 'Mesalamine', type: 'medicine', usage: 'IBD/colitis', imageUrl: '/images/mesalamine.png', prescriptionRequired: true, price: 363.00, isFeatured: false },
        { id: 'prod086', name: 'Carbamazepine 200mg', composition: 'Carbamazepine', type: 'medicine', usage: 'Epilepsy, neuralgia', imageUrl: '/images/carbamazepine.png', prescriptionRequired: true, price: 155.00, isFeatured: false },
        { id: 'prod087', name: 'Erythropoietin Injection', composition: 'Erythropoietin', type: 'medicine', usage: 'Anemia (kidney)', imageUrl: '/images/erythropoietin.png', prescriptionRequired: true, price: 2500.00, isFeatured: false },
        { id: 'prod088', name: 'Mebendazole 100mg', composition: 'Mebendazole', type: 'medicine', usage: 'Deworming', imageUrl: '/images/mebendazole.png', prescriptionRequired: true, price: 49.00, isFeatured: false },
        { id: 'prod089', name: 'Folic Acid 5mg', composition: 'Folic Acid', type: 'medicine', usage: 'Anemia, pregnancy support', imageUrl: '/images/folic-acid.png', prescriptionRequired: true, price: 32.00, isFeatured: false },
        { id: 'prod090', name: 'Vitamin B12 Injection', composition: 'Cyanocobalamin', type: 'medicine', usage: 'B12 deficiency anemia, neuro', imageUrl: '/images/b12-inj.png', prescriptionRequired: true, price: 94.00, isFeatured: false },

        { id: 'prod091', name: 'Cholecalciferol Sachet', composition: 'Vitamin D3 60,000 IU', type: 'medicine', usage: 'Osteoporosis, vitamin D deficiency', imageUrl: '/images/d3-sachet.png', prescriptionRequired: true, price: 42.00, isFeatured: false },
        { id: 'prod092', name: 'Potassium Chloride', composition: 'Potassium Chloride', type: 'medicine', usage: 'Electrolyte replenishment', imageUrl: '/images/potassium.png', prescriptionRequired: true, price: 67.00, isFeatured: false },
        { id: 'prod093', name: 'Divalproex 250mg', composition: 'Divalproex Sodium', type: 'medicine', usage: 'Epilepsy, migraine', imageUrl: '/images/divalproex.png', prescriptionRequired: true, price: 210.00, isFeatured: false },
        { id: 'prod094', name: 'Tamsulosin 0.4mg', composition: 'Tamsulosin', type: 'medicine', usage: 'BPH (prostate)', imageUrl: '/images/tamsulosin.png', prescriptionRequired: true, price: 205.00, isFeatured: false },
        { id: 'prod095', name: 'Nifedipine 10mg', composition: 'Nifedipine', type: 'medicine', usage: 'Hypertension, angina', imageUrl: '/images/nifedipine.png', prescriptionRequired: true, price: 122.00, isFeatured: false },
        { id: 'prod096', name: 'Olanzapine 5mg', composition: 'Olanzapine', type: 'medicine', usage: 'Bipolar disorder, schizophrenia', imageUrl: '/images/olanzapine.png', prescriptionRequired: true, price: 312.00, isFeatured: false },
        { id: 'prod097', name: 'Amiodarone 200mg', composition: 'Amiodarone Hydrochloride', type: 'medicine', usage: 'Arrhythmias', imageUrl: '/images/amiodarone.png', prescriptionRequired: true, price: 290.00, isFeatured: false },
        { id: 'prod098', name: 'Sodium Bicarbonate Injection', composition: 'Sodium Bicarbonate', type: 'medicine', usage: 'Acidosis', imageUrl: '/images/sodi-bicarb-inj.png', prescriptionRequired: true, price: 110.00, isFeatured: false },
        { id: 'prod099', name: 'Midazolam Injection', composition: 'Midazolam', type: 'medicine', usage: 'Sedation, anesthesia', imageUrl: '/images/midazolam.png', prescriptionRequired: true, price: 195.00, isFeatured: false },
        { id: 'prod100', name: 'Piperacillin + Tazobactam', composition: 'Piperacillin, Tazobactam', type: 'medicine', usage: 'Severe bacterial infection', imageUrl: '/images/piptazo.png', prescriptionRequired: true, price: 430.00, isFeatured: false },

        { id: 'prod101', name: 'Citalopram 20mg', composition: 'Citalopram Hydrobromide', type: 'medicine', usage: 'Depression and anxiety', imageUrl: '/images/citalopram.png', prescriptionRequired: true, price: 110.00, isFeatured: false },
        { id: 'prod102', name: 'Escitalopram 10mg', composition: 'Escitalopram Oxalate', type: 'medicine', usage: 'Depression, anxiety', imageUrl: '/images/escitalopram.png', prescriptionRequired: true, price: 105.00, isFeatured: false },
        { id: 'prod103', name: 'Fluoxetine 20mg', composition: 'Fluoxetine Hydrochloride', type: 'medicine', usage: 'Depression, OCD', imageUrl: '/images/fluoxetine.png', prescriptionRequired: true, price: 95.00, isFeatured: false },
        { id: 'prod104', name: 'Risperidone 2mg', composition: 'Risperidone', type: 'medicine', usage: 'Schizophrenia, bipolar disorder', imageUrl: '/images/risperidone.png', prescriptionRequired: true, price: 180.00, isFeatured: false },
        { id: 'prod105', name: 'Olanzapine 5mg', composition: 'Olanzapine', type: 'medicine', usage: 'Bipolar disorder, schizophrenia', imageUrl: '/images/olanzapine.png', prescriptionRequired: true, price: 312.00, isFeatured: false },
        { id: 'prod106', name: 'Phenytoin 100mg', composition: 'Phenytoin Sodium', type: 'medicine', usage: 'Epilepsy', imageUrl: '/images/phenytoin.png', prescriptionRequired: true, price: 75.00, isFeatured: false },
        { id: 'prod107', name: 'Levetiracetam 500mg', composition: 'Levetiracetam', type: 'medicine', usage: 'Seizures', imageUrl: '/images/levetiracetam.png', prescriptionRequired: true, price: 250.00, isFeatured: false },
        { id: 'prod108', name: 'Pregabalin 75mg', composition: 'Pregabalin', type: 'medicine', usage: 'Neuropathic pain, epilepsy', imageUrl: '/images/pregabalin.png', prescriptionRequired: true, price: 210.00, isFeatured: false },
        { id: 'prod109', name: 'Clarithromycin 500mg', composition: 'Clarithromycin', type: 'medicine', usage: 'Bacterial infections', imageUrl: '/images/clarithromycin.png', prescriptionRequired: true, price: 130.00, isFeatured: false },
        { id: 'prod110', name: 'Dexamethasone 4mg', composition: 'Dexamethasone', type: 'medicine', usage: 'Inflammation, allergies', imageUrl: '/images/dexamethasone.png', prescriptionRequired: true, price: 90.00, isFeatured: false },

        { id: 'prod111', name: 'Mometasone Cream 0.1%', composition: 'Mometasone Furoate', type: 'medicine', usage: 'Skin inflammation and eczema', imageUrl: '/images/mometasone-cream.png', prescriptionRequired: true, price: 130.00, isFeatured: false },
        { id: 'prod112', name: 'Hydrocortisone Cream 1%', composition: 'Hydrocortisone', type: 'medicine', usage: 'Mild skin inflammation', imageUrl: '/images/hydrocortisone.png', prescriptionRequired: false, price: 75.00, isFeatured: false },
        { id: 'prod113', name: 'Nifedipine 10mg', composition: 'Nifedipine', type: 'medicine', usage: 'Hypertension and angina', imageUrl: '/images/nifedipine.png', prescriptionRequired: true, price: 122.00, isFeatured: false },
        { id: 'prod114', name: 'Dabigatran 110mg', composition: 'Dabigatran Etexilate', type: 'medicine', usage: 'Anticoagulation', imageUrl: '/images/dabigatran.png', prescriptionRequired: true, price: 910.00, isFeatured: false },
        { id: 'prod115', name: 'Tamsulosin 0.4mg', composition: 'Tamsulosin Hydrochloride', type: 'medicine', usage: 'Benign prostatic hyperplasia', imageUrl: '/images/tamsulosin.png', prescriptionRequired: true, price: 205.00, isFeatured: false },
        { id: 'prod116', name: 'Prednisone 10mg', composition: 'Prednisone', type: 'medicine', usage: 'Autoimmune diseases, allergies', imageUrl: '/images/prednisone.png', prescriptionRequired: true, price: 85.00, isFeatured: false },
        { id: 'prod117', name: 'Azathioprine 50mg', composition: 'Azathioprine', type: 'medicine', usage: 'Immunosuppressant', imageUrl: '/images/azathioprine.png', prescriptionRequired: true, price: 93.00, isFeatured: false },
        { id: 'prod118', name: 'Methotrexate 15mg', composition: 'Methotrexate', type: 'medicine', usage: 'Cancer, autoimmune diseases', imageUrl: '/images/methotrexate.png', prescriptionRequired: true, price: 220.00, isFeatured: false },
        { id: 'prod119', name: 'Amiodarone 200mg', composition: 'Amiodarone Hydrochloride', type: 'medicine', usage: 'Arrhythmia', imageUrl: '/images/amiodarone.png', prescriptionRequired: true, price: 290.00, isFeatured: false },
        { id: 'prod120', name: 'Ondansetron 4mg', composition: 'Ondansetron', type: 'medicine', usage: 'Nausea and vomiting', imageUrl: '/images/ondansetron.png', prescriptionRequired: true, price: 44.00, isFeatured: false },

        { id: 'prod121', name: 'Ranitidine 150mg', composition: 'Ranitidine', type: 'medicine', usage: 'Acid reflux and ulcers', imageUrl: '/images/ranitidine.png', prescriptionRequired: true, price: 35.00, isFeatured: false },
        { id: 'prod122', name: 'Loratadine 10mg', composition: 'Loratadine', type: 'medicine', usage: 'Allergy relief', imageUrl: '/images/loratadine.png', prescriptionRequired: false, price: 60.00, isFeatured: false },
        { id: 'prod123', name: 'Bupropion 150mg', composition: 'Bupropion', type: 'medicine', usage: 'Depression, smoking cessation', imageUrl: '/images/bupropion.png', prescriptionRequired: true, price: 310.00, isFeatured: false },
        { id: 'prod124', name: 'Carbamazepine 200mg', composition: 'Carbamazepine', type: 'medicine', usage: 'Epilepsy and nerve pain', imageUrl: '/images/carbamazepine.png', prescriptionRequired: true, price: 155.00, isFeatured: false },
        { id: 'prod125', name: 'Hydroxyzine 25mg', composition: 'Hydroxyzine', type: 'medicine', usage: 'Anxiety and allergies', imageUrl: '/images/hydroxyzine.png', prescriptionRequired: true, price: 70.00, isFeatured: false },
        { id: 'prod126', name: 'Methylphenidate 10mg', composition: 'Methylphenidate', type: 'medicine', usage: 'ADHD treatment', imageUrl: '/images/methylphenidate.png', prescriptionRequired: true, price: 320.00, isFeatured: false },
        { id: 'prod127', name: 'Sertraline 100mg', composition: 'Sertraline Hydrochloride', type: 'medicine', usage: 'Depression and anxiety', imageUrl: '/images/sertraline100.png', prescriptionRequired: true, price: 170.00, isFeatured: false },
        { id: 'prod128', name: 'Zolpidem 10mg', composition: 'Zolpidem Tartrate', type: 'medicine', usage: 'Insomnia', imageUrl: '/images/zolpidem.png', prescriptionRequired: true, price: 130.00, isFeatured: false },
        { id: 'prod129', name: 'Duloxetine 60mg', composition: 'Duloxetine', type: 'medicine', usage: 'Depression and nerve pain', imageUrl: '/images/duloxetine.png', prescriptionRequired: true, price: 210.00, isFeatured: false },
        { id: 'prod130', name: 'Clonazepam 0.5mg', composition: 'Clonazepam', type: 'medicine', usage: 'Seizures and anxiety', imageUrl: '/images/clonazepam.png', prescriptionRequired: true, price: 65.00, isFeatured: false },
        { id: 'prod131', name: 'Metformin 500mg', composition: 'Metformin Hydrochloride', type: 'medicine', usage: 'Type 2 diabetes', imageUrl: '/images/metformin.png', prescriptionRequired: true, price: 45.00, isFeatured: true },
        { id: 'prod132', name: 'Glimiperide 2mg', composition: 'Glimiperide', type: 'medicine', usage: 'Diabetes', imageUrl: '/images/glimiperide.png', prescriptionRequired: true, price: 70.00, isFeatured: false },
        { id: 'prod133', name: 'Amlodipine 5mg', composition: 'Amlodipine Besylate', type: 'medicine', usage: 'High blood pressure', imageUrl: '/images/amlodipine.png', prescriptionRequired: true, price: 65.00, isFeatured: true },
        { id: 'prod134', name: 'Telmisartan 40mg', composition: 'Telmisartan', type: 'medicine', usage: 'Hypertension', imageUrl: '/images/telmisartan.png', prescriptionRequired: true, price: 88.00, isFeatured: true },
        { id: 'prod135', name: 'Metoprolol 25mg', composition: 'Metoprolol Tartrate', type: 'medicine', usage: 'Heart conditions', imageUrl: '/images/metoprolol.png', prescriptionRequired: true, price: 110.00, isFeatured: false },
        { id: 'prod136', name: 'Atorvastatin 10mg', composition: 'Atorvastatin', type: 'medicine', usage: 'Cholesterol reduction', imageUrl: '/images/atorvastatin.png', prescriptionRequired: true, price: 120.00, isFeatured: false },
        { id: 'prod137', name: 'Levothyroxine 50mcg', composition: 'Levothyroxine Sodium', type: 'medicine', usage: 'Thyroid hormone replacement', imageUrl: '/images/levothyroxine.png', prescriptionRequired: true, price: 60.00, isFeatured: false },
        { id: 'prod138', name: 'Sertraline 50mg', composition: 'Sertraline', type: 'medicine', usage: 'Depression and anxiety', imageUrl: '/images/sertraline.png', prescriptionRequired: true, price: 180.00, isFeatured: false },
        { id: 'prod139', name: 'Gabapentin 300mg', composition: 'Gabapentin', type: 'medicine', usage: 'Neuropathic pain, seizures', imageUrl: '/images/gabapentin.png', prescriptionRequired: true, price: 220.00, isFeatured: false },
        { id: 'prod140', name: 'Omeprazole 20mg', composition: 'Omeprazole', type: 'medicine', usage: 'Acid reflux, ulcers', imageUrl: '/images/omeprazole.png', prescriptionRequired: true, price: 75.00, isFeatured: false },

        { id: 'prod141', name: 'Insulin Injection', composition: 'Human Insulin', type: 'medicine', usage: 'Diabetes management', imageUrl: '/images/insulin.png', prescriptionRequired: true, price: 350.00, isFeatured: false },
        { id: 'prod142', name: 'Warfarin 5mg', composition: 'Warfarin', type: 'medicine', usage: 'Blood clot prevention', imageUrl: '/images/warfarin.png', prescriptionRequired: true, price: 130.00, isFeatured: false },
        { id: 'prod143', name: 'Azithromycin 500mg', composition: 'Azithromycin', type: 'medicine', usage: 'Bacterial infection', imageUrl: '/images/azithromycin.png', prescriptionRequired: true, price: 98.00, isFeatured: true },
        { id: 'prod144', name: 'Ciprofloxacin 500mg', composition: 'Ciprofloxacin', type: 'medicine', usage: 'Bacterial infection', imageUrl: '/images/ciprofloxacin.png', prescriptionRequired: true, price: 62.00, isFeatured: false },
        { id: 'prod145', name: 'Amoxicillin-Clavulanic 625mg', composition: 'Amoxicillin + Clavulanic Acid', type: 'medicine', usage: 'Resistant bacterial infections', imageUrl: '/images/coamoxiclav.png', prescriptionRequired: true, price: 120.00, isFeatured: true },
        { id: 'prod146', name: 'Cephalexin 500mg', composition: 'Cephalexin', type: 'medicine', usage: 'Bacterial infection', imageUrl: '/images/cephalexin.png', prescriptionRequired: true, price: 90.00, isFeatured: false },
        { id: 'prod147', name: 'Doxycycline 100mg', composition: 'Doxycycline', type: 'medicine', usage: 'Bacterial infection, malaria', imageUrl: '/images/doxycycline.png', prescriptionRequired: true, price: 85.00, isFeatured: false },
        { id: 'prod148', name: 'Levofloxacin 500mg', composition: 'Levofloxacin', type: 'medicine', usage: 'Respiratory, urinary infections', imageUrl: '/images/levofloxacin.png', prescriptionRequired: true, price: 115.00, isFeatured: false },
        { id: 'prod149', name: 'Clopidogrel 75mg', composition: 'Clopidogrel', type: 'medicine', usage: 'Anti-platelet', imageUrl: '/images/clopidogrel.png', prescriptionRequired: true, price: 160.00, isFeatured: false },
        { id: 'prod150', name: 'Morphine 10mg', composition: 'Morphine Sulphate', type: 'medicine', usage: 'Severe pain', imageUrl: '/images/morphine.png', prescriptionRequired: true, price: 150.00, isFeatured: false },
        { id: 'prod151', name: 'Ramipril 5mg', composition: 'Ramipril', type: 'medicine', usage: 'High blood pressure, heart failure', imageUrl: '/images/ramipril.png', prescriptionRequired: true, price: 78.00, isFeatured: false },
        { id: 'prod152', name: 'Atenolol 50mg', composition: 'Atenolol', type: 'medicine', usage: 'Hypertension, heart disease', imageUrl: '/images/atenolol.png', prescriptionRequired: true, price: 68.00, isFeatured: false },
        { id: 'prod153', name: 'Hydrochlorothiazide 25mg', composition: 'Hydrochlorothiazide', type: 'medicine', usage: 'Fluid retention, hypertension', imageUrl: '/images/hctz.png', prescriptionRequired: true, price: 38.00, isFeatured: false },
        { id: 'prod154', name: 'Furosemide 40mg', composition: 'Furosemide', type: 'medicine', usage: 'Diuretic, fluid retention', imageUrl: '/images/furosemide.png', prescriptionRequired: true, price: 60.00, isFeatured: false },
        { id: 'prod155', name: 'Prednisolone 10mg', composition: 'Prednisolone', type: 'medicine', usage: 'Severe inflammation, allergy', imageUrl: '/images/prednisolone.png', prescriptionRequired: true, price: 80.00, isFeatured: false },
        { id: 'prod156', name: 'Salbutamol Inhaler', composition: 'Salbutamol', type: 'medicine', usage: 'Asthma attack relief', imageUrl: '/images/salbutamol.png', prescriptionRequired: true, price: 125.00, isFeatured: false },
        { id: 'prod157', name: 'Budesonide Nasal Spray', composition: 'Budesonide', type: 'medicine', usage: 'Allergic rhinitis', imageUrl: '/images/budesonide-nasal.png', prescriptionRequired: true, price: 198.00, isFeatured: false },
        { id: 'prod158', name: 'Beclomethasone Inhaler', composition: 'Beclomethasone', type: 'medicine', usage: 'Asthma maintenance', imageUrl: '/images/beclomethasone.png', prescriptionRequired: true, price: 160.00, isFeatured: false },
        { id: 'prod159', name: 'Montelukast 10mg', composition: 'Montelukast', type: 'medicine', usage: 'Asthma prevention', imageUrl: '/images/montelukast.png', prescriptionRequired: true, price: 110.00, isFeatured: true },
        { id: 'prod160', name: 'Alprazolam 0.5mg', composition: 'Alprazolam', type: 'medicine', usage: 'Anxiety, panic disorder', imageUrl: '/images/alprazolam.png', prescriptionRequired: true, price: 70.00, isFeatured: false },

        { id: 'prod161', name: 'Perlice Scalp Lotion', composition: 'Permethrin 1%', type: 'medicine', usage: 'Head lice treatment', imageUrl: '/images/perlice.png', prescriptionRequired: false, price: 65.00, isFeatured: false },
        { id: 'prod162', name: 'Dabur Chyawanprash 500g', composition: 'Amla, Ashwagandha, Giloy', type: 'medicine', usage: 'Immunity booster', imageUrl: '/images/chyawanprash.png', prescriptionRequired: false, price: 180.00, isFeatured: true },
        { id: 'prod163', name: 'Himalaya Abana Tablets', composition: 'Arjuna, Indian Bdellium', type: 'medicine', usage: 'Cholesterol & heart health', imageUrl: '/images/abana.png', prescriptionRequired: false, price: 150.00, isFeatured: false },
        { id: 'prod164', name: 'Sualin Tablets', composition: 'Tulsi, Ginger, Liquorice', type: 'medicine', usage: 'Cough and throat relief', imageUrl: '/images/sualin.png', prescriptionRequired: false, price: 55.00, isFeatured: false },
        { id: 'prod165', name: 'Vicks Cough Drops (Mint)', composition: 'Menthol, Eucalyptus', type: 'medicine', usage: 'Soothing sore throat', imageUrl: '/images/vicks-drops.png', prescriptionRequired: false, price: 15.00, isFeatured: false },
        { id: 'prod166', name: 'Isabgol Husk 100g', composition: 'Psyllium husk', type: 'medicine', usage: 'Constipation relief, digestion', imageUrl: '/images/isabgol.png', prescriptionRequired: false, price: 75.00, isFeatured: false },
        { id: 'prod167', name: 'Himalaya Liv.52 DS', composition: 'Capers, Chicory', type: 'medicine', usage: 'Liver support', imageUrl: '/images/liv52ds.png', prescriptionRequired: false, price: 135.00, isFeatured: true },
        { id: 'prod168', name: 'Himani Fast Relief Ointment', composition: 'Camphor, Wintergreen oil', type: 'medicine', usage: 'Pain relieving cream', imageUrl: '/images/fastrelief.png', prescriptionRequired: false, price: 55.00, isFeatured: false },
        { id: 'prod169', name: 'Sebamed Baby Rash Cream', composition: 'Panthenol, Titanium dioxide', type: 'medicine', usage: 'Diaper rash treatment', imageUrl: '/images/sebamed-rash.png', prescriptionRequired: false, price: 280.00, isFeatured: false },
        { id: 'prod170', name: 'Calamine Lotion 100ml', composition: 'Calamine 8%, Zinc oxide 1%', type: 'medicine', usage: 'Itching, skin irritation', imageUrl: '/images/calamine.png', prescriptionRequired: false, price: 70.00, isFeatured: false },

        { id: 'prod171', name: 'Himalaya Gasex Tablets', composition: 'Sunthi, Triphala', type: 'medicine', usage: 'Gas and indigestion', imageUrl: '/images/gasex.png', prescriptionRequired: false, price: 122.00, isFeatured: false },
        { id: 'prod172', name: 'Gaviscon Liquid 200ml', composition: 'Sodium alginate, Sodium bicarbonate', type: 'medicine', usage: 'Heartburn and acid reflux', imageUrl: '/images/gaviscon.png', prescriptionRequired: false, price: 95.00, isFeatured: false },
        { id: 'prod173', name: 'Cetaphil Moisturising Cream', composition: 'Glycerin, Petrolatum', type: 'medicine', usage: 'Dry & sensitive skin', imageUrl: '/images/cetaphil.png', prescriptionRequired: false, price: 295.00, isFeatured: true },
        { id: 'prod174', name: 'Clinsol Gel', composition: 'Clindamycin Phosphate 1%', type: 'medicine', usage: 'Acne treatment', imageUrl: '/images/clinsol.png', prescriptionRequired: false, price: 120.00, isFeatured: false },
        { id: 'prod175', name: 'Boroplus Antiseptic Cream', composition: 'Herbal antiseptic complex', type: 'medicine', usage: 'Dry skin, cuts, wounds', imageUrl: '/images/boroplus.png', prescriptionRequired: false, price: 32.00, isFeatured: false },
        { id: 'prod176', name: 'Zandu Balm Ultra Power', composition: 'Menthol, Methyl Salicylate', type: 'medicine', usage: 'Body pain relief', imageUrl: '/images/zandu-ultra.png', prescriptionRequired: false, price: 38.00, isFeatured: false },
        { id: 'prod177', name: 'Dabur Pudin Hara Pearls', composition: 'Mint oil', type: 'medicine', usage: 'Gas, stomach relief', imageUrl: '/images/pudinhara.png', prescriptionRequired: false, price: 55.00, isFeatured: false },
        { id: 'prod178', name: 'Nasivion Mini Drops', composition: 'Oxymetazoline', type: 'medicine', usage: 'Nasal congestion (babies)', imageUrl: '/images/nasivion-mini.png', prescriptionRequired: false, price: 72.00, isFeatured: false },
        { id: 'prod179', name: 'Nasivion 0.05% Spray', composition: 'Oxymetazoline', type: 'medicine', usage: 'Nasal decongestion (adults)', imageUrl: '/images/nasivion-adult.png', prescriptionRequired: false, price: 86.00, isFeatured: false },
        { id: 'prod180', name: 'Zoray Aquagel', composition: 'Vitamin E, Aloe Vera', type: 'medicine', usage: 'Lightweight moisturizer', imageUrl: '/images/zoray.png', prescriptionRequired: false, price: 205.00, isFeatured: false },

        { id: 'prod181', name: 'Adulsa Cough Syrup', composition: 'Adhatoda vasica (vasaka)', type: 'medicine', usage: 'Productive cough', imageUrl: '/images/adulsa.png', prescriptionRequired: false, price: 69.00, isFeatured: false },
        { id: 'prod182', name: 'Mentopas Gel', composition: 'Methyl Salicylate, Menthol', type: 'medicine', usage: 'Joint and muscle pain', imageUrl: '/images/mentopas.png', prescriptionRequired: false, price: 99.00, isFeatured: false },
        { id: 'prod183', name: 'Sebamed Baby Lotion', composition: 'Allantoin, Chamomile', type: 'medicine', usage: 'Softening baby skin', imageUrl: '/images/sebamed-lotion.png', prescriptionRequired: false, price: 260.00, isFeatured: false },
        { id: 'prod184', name: 'Becosule Z', composition: 'B-complex with Zinc', type: 'medicine', usage: 'General fatigue', imageUrl: '/images/becosulez.png', prescriptionRequired: false, price: 49.00, isFeatured: true },
        { id: 'prod185', name: 'Sucral O Suspension', composition: 'Sucralfate + Oxetacaine', type: 'medicine', usage: 'Ulcers, acidity', imageUrl: '/images/sucral.png', prescriptionRequired: false, price: 110.00, isFeatured: false },
        { id: 'prod186', name: 'Cipladine Ointment', composition: 'Povidone Iodine 5%', type: 'medicine', usage: 'Wound antiseptic', imageUrl: '/images/cipladine.png', prescriptionRequired: false, price: 35.00, isFeatured: false },
        { id: 'prod187', name: 'Neeri Tablet', composition: 'Ayurvedic formula', type: 'medicine', usage: 'Kidney and urinary health', imageUrl: '/images/neeri.png', prescriptionRequired: false, price: 120.00, isFeatured: false },
        { id: 'prod188', name: 'Himalaya Cystone Tablets', composition: 'Shilapushpa, Pasanabheda', type: 'medicine', usage: 'Kidney stones', imageUrl: '/images/cystone.png', prescriptionRequired: false, price: 140.00, isFeatured: false },
        { id: 'prod189', name: 'Zandu Pancharishta Syrup', composition: 'Ayurvedic herbs', type: 'medicine', usage: 'Digestive health', imageUrl: '/images/pancharishta.png', prescriptionRequired: false, price: 155.00, isFeatured: false },
        { id: 'prod190', name: 'Sinarest-AF Drop (Kids)', composition: 'Paracetamol + Phenylephrine + Chlorpheniramine', type: 'medicine', usage: 'Cold, cough, fever (infants)', imageUrl: '/images/sinarest-af.png', prescriptionRequired: false, price: 68.00, isFeatured: false },

        { id: 'prod191', name: 'Himani Navratna Oil 100ml', composition: '9 Ayurvedic herbs', type: 'medicine', usage: 'Headache & stress relief', imageUrl: '/images/navratna.png', prescriptionRequired: false, price: 99.00, isFeatured: false },
        { id: 'prod192', name: 'Kwiknic Nicotine Gum', composition: 'Nicotine 2mg', type: 'medicine', usage: 'Smoking cessation aid', imageUrl: '/images/kwiknic.png', prescriptionRequired: false, price: 135.00, isFeatured: false },
        { id: 'prod193', name: 'ORS-L Tetra Pack', composition: 'WHO-recommended ORS formula', type: 'medicine', usage: 'Rehydration therapy', imageUrl: '/images/ors-l.png', prescriptionRequired: false, price: 35.00, isFeatured: true },
        { id: 'prod194', name: 'Zinc + Vitamin C Chewables', composition: 'Elemental Zinc + Ascorbic Acid', type: 'medicine', usage: 'Immunity booster', imageUrl: '/images/zinc-c.png', prescriptionRequired: false, price: 85.00, isFeatured: false },
        { id: 'prod195', name: 'Himalaya Ashwagandha Tablet', composition: 'Ashwagandha root extract', type: 'medicine', usage: 'Stress relief, stamina', imageUrl: '/images/ashwagandha.png', prescriptionRequired: false, price: 145.00, isFeatured: false },
        { id: 'prod196', name: 'Himalaya Shatavari Tablet', composition: 'Shatavari extract', type: 'medicine', usage: 'Women health', imageUrl: '/images/shatavari.png', prescriptionRequired: false, price: 132.00, isFeatured: false },
        { id: 'prod197', name: 'SBL Bio-Combination 28', composition: 'Calcarea Phos, Natrum Muriaticum', type: 'medicine', usage: 'Menstrual pain relief (homeo)', imageUrl: '/images/sbl28.png', prescriptionRequired: false, price: 85.00, isFeatured: false },
        { id: 'prod198', name: 'Lupizyme Syrup', composition: 'Fungal Diastase + Pepsin', type: 'medicine', usage: 'Indigestion & bloating', imageUrl: '/images/lupizyme.png', prescriptionRequired: false, price: 70.00, isFeatured: false },
        { id: 'prod199', name: 'Otrivin Adult Nasal Spray', composition: 'Xylometazoline', type: 'medicine', usage: 'Nasal decongestion', imageUrl: '/images/otrivin.png', prescriptionRequired: false, price: 95.00, isFeatured: false },
        { id: 'prod200', name: 'Otrivin Baby Saline Spray', composition: 'Isotonic Sodium Chloride', type: 'medicine', usage: 'Nasal hygiene for babies', imageUrl: '/images/otrivin-baby.png', prescriptionRequired: false, price: 88.00, isFeatured: false },

        //Devices
        { id: 'prod201', name: 'Digital Thermometer', composition: 'Thermistor sensor', type: 'device', usage: 'Body temperature measurement', imageUrl: '/images/digital_thermometer.png', prescriptionRequired: false, price: 180, isFeatured: false },
        { id: 'prod202', name: 'Blood Pressure Monitor', composition: 'Automatic digital monitor', type: 'device', usage: 'Blood pressure measurement', imageUrl: '/images/blood_pressure_monitor.png', prescriptionRequired: false, price: 1450, isFeatured: false },
        { id: 'prod203', name: 'Glucometer', composition: 'Electronic sensor & strips', type: 'device', usage: 'Blood glucose monitoring', imageUrl: '/images/glucometer.png', prescriptionRequired: false, price: 800, isFeatured: false },
        { id: 'prod204', name: 'Pulse Oximeter', composition: 'LED sensor', type: 'device', usage: 'Oxygen saturation monitoring', imageUrl: '/images/pulse_oximeter.png', prescriptionRequired: false, price: 700, isFeatured: false },
        { id: 'prod205', name: 'Nebulizer Machine', composition: 'Compressor nebulizer', type: 'device', usage: 'Respiratory aerosol therapy', imageUrl: '/images/nebulizer_machine.png', prescriptionRequired: false, price: 1200, isFeatured: false },
        { id: 'prod206', name: 'Weighing Scale', composition: 'Digital electronic scale', type: 'device', usage: 'Body weight measurement', imageUrl: '/images/weighing_scale.png', prescriptionRequired: false, price: 750, isFeatured: false },
        { id: 'prod207', name: 'ECG Machine Portable', composition: 'Electrocardiograph', type: 'device', usage: 'Heart electrical activity monitoring', imageUrl: '/images/ecg_machine_portable.png', prescriptionRequired: false, price: 4500, isFeatured: false },
        { id: 'prod208', name: 'Stethoscope', composition: 'Acoustic device', type: 'device', usage: 'Auscultation of chest and heart', imageUrl: '/images/stethoscope.png', prescriptionRequired: false, price: 750, isFeatured: false },
        { id: 'prod209', name: 'Sphygmomanometer', composition: 'Mercury or Aneroid', type: 'device', usage: 'Manual blood pressure measurement', imageUrl: '/images/sphygmomanometer.png', prescriptionRequired: false, price: 950, isFeatured: false },
        { id: 'prod210', name: 'Otoscope', composition: 'LED illuminated', type: 'device', usage: 'Ear examination', imageUrl: '/images/otoscope.png', prescriptionRequired: false, price: 2100, isFeatured: false },
        { id: 'prod211', name: 'Laryngoscope', composition: 'LED light & metal blade', type: 'device', usage: 'Airway examination and intubation', imageUrl: '/images/laryngoscope.png', prescriptionRequired: false, price: 4000, isFeatured: false },
        { id: 'prod212', name: 'Defibrillator Portable', composition: 'Electronic device', type: 'device', usage: 'Emergency heart rhythm correction', imageUrl: '/images/defibrillator_portable.png', prescriptionRequired: false, price: 45000, isFeatured: false },
        { id: 'prod213', name: 'Ultrasound Machine', composition: 'Ultrasound transducer', type: 'device', usage: 'Diagnostic imaging', imageUrl: '/images/ultrasound_machine.png', prescriptionRequired: false, price: 88000, isFeatured: false },
        { id: 'prod214', name: 'X-Ray Machine', composition: 'Radiographic device', type: 'device', usage: 'Medical imaging', imageUrl: '/images/x-ray_machine.png', prescriptionRequired: false, price: 90000, isFeatured: false },
        { id: 'prod215', name: 'Glucometer Strips (Pack of 50)', composition: 'Glucose reactive strips', type: 'device', usage: 'Blood glucose monitoring', imageUrl: '/images/glucometer_strips_(pack_of_50).png', prescriptionRequired: false, price: 500, isFeatured: false },
        { id: 'prod216', name: 'Disposable Syringe 5ml (Pack of 10)', composition: 'Plastic syringe', type: 'device', usage: 'Injection administration', imageUrl: '/images/disposable_syringe_5ml_(pack_of_10).png', prescriptionRequired: false, price: 90, isFeatured: false },
        { id: 'prod217', name: 'Medical Face Mask (Pack of 50)', composition: 'Non-woven fabric', type: 'device', usage: 'Airborne protection', imageUrl: '/images/medical_face_mask_(pack_of_50).png', prescriptionRequired: false, price: 250, isFeatured: false },
        { id: 'prod218', name: 'Surgical Gloves Nitrile (Box of 100)', composition: 'Nitrile polymer', type: 'device', usage: 'Sterile protection', imageUrl: '/images/surgical_gloves_nitrile_(box_of_100).png', prescriptionRequired: false, price: 380, isFeatured: false },
        { id: 'prod219', name: 'Oxygen Cylinder', composition: 'Medical grade oxygen cylinder', type: 'device', usage: 'Oxygen therapy', imageUrl: '/images/oxygen_cylinder.png', prescriptionRequired: false, price: 12000, isFeatured: false },
        { id: 'prod220', name: 'IV Infusion Set', composition: 'Sterile disposable', type: 'device', usage: 'IV drug/fluid administration', imageUrl: '/images/iv_infusion_set.png', prescriptionRequired: false, price: 1500, isFeatured: false },
        { id: 'prod221', name: 'Wheelchair Foldable', composition: 'Aluminum frame', type: 'device', usage: 'Patient mobility', imageUrl: '/images/wheelchair_foldable.png', prescriptionRequired: false, price: 8000, isFeatured: false },
        { id: 'prod222', name: 'Patient Monitor', composition: 'ECG, pulse, SpO2 sensors', type: 'device', usage: 'Vital signs monitoring', imageUrl: '/images/patient_monitor.png', prescriptionRequired: false, price: 60000, isFeatured: false },
        { id: 'prod223', name: 'Surgical Light', composition: 'LED surgical lamp', type: 'device', usage: 'Illumination during surgery', imageUrl: '/images/surgical_light.png', prescriptionRequired: false, price: 15000, isFeatured: false },
        { id: 'prod224', name: 'Wheelchair Manual', composition: 'Steel frame', type: 'device', usage: 'Patient mobility', imageUrl: '/images/wheelchair_manual.png', prescriptionRequired: false, price: 3500, isFeatured: false },
        { id: 'prod225', name: 'Portable Suction Machine', composition: 'Electric suction device', type: 'device', usage: 'Airway clearance', imageUrl: '/images/portable_suction_machine.png', prescriptionRequired: false, price: 20000, isFeatured: false },
        { id: 'prod226', name: 'Therapeutic Ultrasound', composition: 'Ultrasound waves generator', type: 'device', usage: 'Physical therapy', imageUrl: '/images/therapeutic_ultrasound.png', prescriptionRequired: false, price: 19000, isFeatured: false },
        { id: 'prod227', name: 'Autoclave Sterilizer', composition: 'Steam sterilizer', type: 'device', usage: 'Medical instrument sterilization', imageUrl: '/images/autoclave_sterilizer.png', prescriptionRequired: false, price: 13500, isFeatured: false },
        { id: 'prod228', name: 'Nebulizer Spare Parts', composition: 'Various parts', type: 'device', usage: 'Replacement components', imageUrl: '/images/nebulizer_spare_parts.png', prescriptionRequired: false, price: 2500, isFeatured: false },
        { id: 'prod229', name: 'Sterile Cotton Swabs (Pack of 100)', composition: 'Cotton and sticks', type: 'device', usage: 'Specimen collection and care', imageUrl: '/images/sterile_cotton_swabs_(pack_of_100).png', prescriptionRequired: false, price: 600, isFeatured: false },
        { id: 'prod230', name: 'Surgical Scissors', composition: 'Stainless steel', type: 'device', usage: 'Cutting tissue and sutures', imageUrl: '/images/surgical_scissors.png', prescriptionRequired: false, price: 220, isFeatured: false },
        { id: 'prod231', name: 'Surgical Forceps', composition: 'Stainless steel', type: 'device', usage: 'Grasping tissue', imageUrl: '/images/surgical_forceps.png', prescriptionRequired: false, price: 330, isFeatured: false },
        { id: 'prod232', name: 'Surgical Needle Holder', composition: 'Stainless steel', type: 'device', usage: 'Holding needles during suturing', imageUrl: '/images/surgical_needle_holder.png', prescriptionRequired: false, price: 250, isFeatured: false },
        { id: 'prod233', name: 'Speculum', composition: 'Stainless steel', type: 'device', usage: 'Examination of body orifices', imageUrl: '/images/speculum.png', prescriptionRequired: false, price: 450, isFeatured: false },
        { id: 'prod234', name: 'Surgical Drapes', composition: 'Disposable fabric', type: 'device', usage: 'Operating field coverage', imageUrl: '/images/surgical_drapes.png', prescriptionRequired: false, price: 800, isFeatured: false },
        { id: 'prod235', name: 'Patient Stretcher', composition: 'Steel frame with mattress', type: 'device', usage: 'Transporting patients', imageUrl: '/images/patient_stretcher.png', prescriptionRequired: false, price: 12000, isFeatured: false },
        { id: 'prod236', name: 'Surgical Table', composition: 'Stainless steel frame', type: 'device', usage: 'Operating table', imageUrl: '/images/surgical_table.png', prescriptionRequired: false, price: 25000, isFeatured: false },
        { id: 'prod237', name: 'Defibrillator Pads', composition: 'Adhesive conductive pads', type: 'device', usage: 'Defibrillation', imageUrl: '/images/defibrillator_pads.png', prescriptionRequired: false, price: 900, isFeatured: false },
        { id: 'prod238', name: 'Electrodes for ECG (Pack of 20)', composition: 'Silver/silver chloride', type: 'device', usage: 'ECG signal detection', imageUrl: '/images/electrodes_for_ecg_(pack_of_20).png', prescriptionRequired: false, price: 300, isFeatured: false },
        { id: 'prod239', name: 'Blood Collection Tubes', composition: 'Vacuum tubes', type: 'device', usage: 'Blood sample collection', imageUrl: '/images/blood_collection_tubes.png', prescriptionRequired: false, price: 120, isFeatured: false },
        { id: 'prod240', name: 'Nebulizer Mask', composition: 'Plastic and silicone', type: 'device', usage: 'Respiratory aerosol delivery', imageUrl: '/images/nebulizer_mask.png', prescriptionRequired: false, price: 150, isFeatured: false },
        { id: 'prod241', name: 'Surgical Sutures', composition: 'Absorbable and non-absorbable', type: 'device', usage: 'Wound closure', imageUrl: '/images/surgical_sutures.png', prescriptionRequired: false, price: 350, isFeatured: false },
        { id: 'prod242', name: 'Medical Thermometer Covers (Pack of 50)', composition: 'Plastic disposable', type: 'device', usage: 'Hygienic thermometer use', imageUrl: '/images/medical_thermometer_covers_(pack_of_50).png', prescriptionRequired: false, price: 180, isFeatured: false },
        { id: 'prod243', name: 'Ophthalmoscope', composition: 'LED and lens', type: 'device', usage: 'Eye examination', imageUrl: '/images/ophthalmoscope.png', prescriptionRequired: false, price: 4800, isFeatured: false },
        { id: 'prod244', name: 'Tuning Fork', composition: 'Steel', type: 'device', usage: 'Hearing and neurological tests', imageUrl: '/images/tuning_fork.png', prescriptionRequired: false, price: 800, isFeatured: false },
        { id: 'prod245', name: 'Medical Refrigerator', composition: 'Temperature controlled', type: 'device', usage: 'Storage of medicines', imageUrl: '/images/medical_refrigerator.png', prescriptionRequired: false, price: 36000, isFeatured: false },
        { id: 'prod246', name: 'Surgical Stapler', composition: 'Disposable staples device', type: 'device', usage: 'Tissue stapling', imageUrl: '/images/surgical_stapler.png', prescriptionRequired: false, price: 3500, isFeatured: false },
        { id: 'prod247', name: 'Bandages (Pack of 20)', composition: 'Cotton, adhesive', type: 'consumable', usage: 'Wound dressing', imageUrl: '/images/bandages_(pack_of_20).png', prescriptionRequired: false, price: 35, isFeatured: false },
        { id: 'prod248', name: 'Cotton Roll', composition: 'Medical grade cotton', type: 'consumable', usage: 'First aid and dressing', imageUrl: '/images/cotton_roll.png', prescriptionRequired: false, price: 30, isFeatured: false },
        { id: 'prod249', name: 'Surgical Gloves Latex (Box of 100)', composition: 'Latex', type: 'consumable', usage: 'Sterile protection', imageUrl: '/images/surgical_gloves_latex_(box_of_100).png', prescriptionRequired: false, price: 350, isFeatured: false },
        { id: 'prod250', name: 'Surgical Masks (Box of 50)', composition: 'Non-woven fabric', type: 'consumable', usage: 'Airborne protection', imageUrl: '/images/surgical_masks_(box_of_50).png', prescriptionRequired: false, price: 250, isFeatured: false },
        { id: 'prod251', name: 'Sterile Gauze Pads (Pack of 20)', composition: 'Cotton', type: 'consumable', usage: 'Wound cleaning', imageUrl: '/images/sterile_gauze_pads_(pack_of_20).png', prescriptionRequired: false, price: 45, isFeatured: false },
        { id: 'prod252', name: 'Thermometer Disposable Covers (Pack of 100)', composition: 'Plastic', type: 'consumable', usage: 'Hygienic thermometer use', imageUrl: '/images/thermometer_disposable_covers_(pack_of_100).png', prescriptionRequired: false, price: 160, isFeatured: false },
        { id: 'prod253', name: 'Medical Adhesive Tape', composition: 'Hypoallergenic adhesive', type: 'consumable', usage: 'Wound securing', imageUrl: '/images/medical_adhesive_tape.png', prescriptionRequired: false, price: 120, isFeatured: false },
        { id: 'prod254', name: 'Surgical Sutures', composition: 'Absorbable and non-absorbable', type: 'consumable', usage: 'Wound closure', imageUrl: '/images/surgical_sutures.png', prescriptionRequired: false, price: 350, isFeatured: false },
        { id: 'prod255', name: 'Antiseptic Solution', composition: 'Povidone-iodine', type: 'consumable', usage: 'Wound antiseptic', imageUrl: '/images/antiseptic_solution.png', prescriptionRequired: false, price: 90, isFeatured: false },
        { id: 'prod256', name: 'Hot Water Bag', composition: 'Rubber', type: 'personal care', usage: 'Pain relief', imageUrl: '/images/hot_water_bag.png', prescriptionRequired: false, price: 120, isFeatured: false },
        { id: 'prod257', name: 'Heating Pad', composition: 'Electric mattress', type: 'personal care', usage: 'Muscle relaxation', imageUrl: '/images/heating_pad.png', prescriptionRequired: false, price: 850, isFeatured: false },
        { id: 'prod258', name: 'Orthopedic Support Belt', composition: 'Elastic and cotton', type: 'personal care', usage: 'Back support', imageUrl: '/images/orthopedic_support_belt.png', prescriptionRequired: false, price: 350, isFeatured: false },
        { id: 'prod259', name: 'Inhaler Spacer', composition: 'Plastic', type: 'device', usage: 'Improves inhaler medication', imageUrl: '/images/inhaler_spacer.png', prescriptionRequired: false, price: 150, isFeatured: false },
        { id: 'prod260', name: 'First Aid Kit', composition: 'Various medical supplies', type: 'first-aid', usage: 'Emergency treatment', imageUrl: '/images/first_aid_kit.png', prescriptionRequired: false, price: 700, isFeatured: false },
        { id: 'prod261', name: 'Elastic Bandage', composition: 'Cotton and elastic', type: 'consumable', usage: 'Compression support', imageUrl: '/images/elastic_bandage.png', prescriptionRequired: false, price: 55, isFeatured: false },
        { id: 'prod262', name: 'Eye Drop Bottle 10ml', composition: 'Sterile solution', type: 'medicine', usage: 'Eye infection and lubrication', imageUrl: '/images/eye_drop_bottle_10ml.png', prescriptionRequired: false, price: 100, isFeatured: false },
        { id: 'prod263', name: 'Hand Sanitizer 200ml', composition: 'Alcohol 70%', type: 'personal care', usage: 'Hand hygiene', imageUrl: '/images/hand_sanitizer_200ml.png', prescriptionRequired: false, price: 60, isFeatured: false },
        { id: 'prod264', name: 'Antibacterial Soap Pack of 3', composition: 'Triclosan', type: 'personal care', usage: 'Skin cleansing', imageUrl: '/images/antibacterial_soap_pack_of_3.png', prescriptionRequired: false, price: 160, isFeatured: false },
        { id: 'prod265', name: 'Nail Clippers', composition: 'Stainless steel', type: 'personal care', usage: 'Nail grooming', imageUrl: '/images/nail_clippers.png', prescriptionRequired: false, price: 75, isFeatured: false },
        { id: 'prod266', name: 'Toothbrush Adult', composition: 'Nylon bristles', type: 'personal care', usage: 'Oral hygiene', imageUrl: '/images/toothbrush_adult.png', prescriptionRequired: false, price: 55, isFeatured: false },
        { id: 'prod267', name: 'Toothpaste 100g', composition: 'Fluoride, calcium carbonate', type: 'personal care', usage: 'Oral care', imageUrl: '/images/toothpaste_100g.png', prescriptionRequired: false, price: 45, isFeatured: false },
        { id: 'prod268', name: 'Hair Comb', composition: 'Plastic', type: 'personal care', usage: 'Hair grooming', imageUrl: '/images/hair_comb.png', prescriptionRequired: false, price: 35, isFeatured: false },
        { id: 'prod269', name: 'Electric Toothbrush', composition: 'Electric motor', type: 'personal care', usage: 'Oral hygiene', imageUrl: '/images/electric_toothbrush.png', prescriptionRequired: false, price: 1800, isFeatured: false },
        { id: 'prod270', name: 'Electric Razor', composition: 'Electric motor blades', type: 'personal care', usage: 'Facial hair shaving', imageUrl: '/images/electric_razor.png', prescriptionRequired: false, price: 1600, isFeatured: false },
        { id: 'prod271', name: 'Body Lotion 200ml', composition: 'Aloe vera, glycerin', type: 'personal care', usage: 'Skin hydration', imageUrl: '/images/body_lotion_200ml.png', prescriptionRequired: false, price: 220, isFeatured: false },

        // Hospital & Clinic Furniture
        { id: 'prod272', name: 'Hospital Bed Adjustable', composition: 'Metal, foam mattress', type: 'furniture', usage: 'Patient resting and treatment', imageUrl: '/images/hospital_bed_adjustable.png', prescriptionRequired: false, price: 25000, isFeatured: false },
        { id: 'prod273', name: 'Examination Table', composition: 'Steel frame and padding', type: 'furniture', usage: 'Patient examination', imageUrl: '/images/examination_table.png', prescriptionRequired: false, price: 9000, isFeatured: false },
        { id: 'prod274', name: 'Doctor Stool', composition: 'Steel frame with cushion', type: 'furniture', usage: 'Seating for doctors', imageUrl: '/images/doctor_stool.png', prescriptionRequired: false, price: 2500, isFeatured: false },
        { id: 'prod275', name: 'Waiting Chairs (3-seater)', composition: 'Steel and plastic', type: 'furniture', usage: 'Patient waiting area', imageUrl: '/images/waiting_chairs_(3-seater).png', prescriptionRequired: false, price: 4500, isFeatured: false },
        { id: 'prod276', name: 'Medicine Storage Cabinet', composition: 'Metal and glass doors', type: 'furniture', usage: 'Medicine storage', imageUrl: '/images/medicine_storage_cabinet.png', prescriptionRequired: false, price: 4000, isFeatured: false },
        { id: 'prod277', name: 'IV Pole Stand', composition: 'Stainless steel', type: 'furniture', usage: 'IV bag hanging', imageUrl: '/images/iv_pole_stand.png', prescriptionRequired: false, price: 1500, isFeatured: false },

        // Mobility & Elderly/Baby/Mother Care
        { id: 'prod278', name: 'Wheelchair', composition: 'Aluminum frame', type: 'device', usage: 'Patient mobility', imageUrl: '/images/wheelchair.png', prescriptionRequired: false, price: 8000, isFeatured: false },
        { id: 'prod279', name: 'Adult Diapers (Pack of 10)', composition: 'Absorbent polymer', type: 'personal care', usage: 'Incontinence management', imageUrl: '/images/adult_diapers_(pack_of_10).png', prescriptionRequired: false, price: 350, isFeatured: false },
        { id: 'prod280', name: 'Baby Diapers (Pack of 20)', composition: 'Absorbent polymer', type: 'personal care', usage: 'Infant hygiene', imageUrl: '/images/baby_diapers_(pack_of_20).png', prescriptionRequired: false, price: 330, isFeatured: false },
        { id: 'prod281', name: 'Baby Wipes (Pack of 80)', composition: 'Non-woven fabric', type: 'personal care', usage: 'Infant skin cleaning', imageUrl: '/images/baby_wipes_(pack_of_80).png', prescriptionRequired: false, price: 320, isFeatured: false },
        { id: 'prod282', name: 'Maternity Pads (Pack of 10)', composition: 'Absorbent cotton', type: 'personal care', usage: 'Postnatal care', imageUrl: '/images/maternity_pads_(pack_of_10).png', prescriptionRequired: false, price: 250, isFeatured: false },
        { id: 'prod283', name: 'Breastfeeding Pillow', composition: 'Foam and cotton', type: 'personal care', usage: 'Breastfeeding support', imageUrl: '/images/breastfeeding_pillow.png', prescriptionRequired: false, price: 1450, isFeatured: false },
        { id: 'prod284', name: 'Baby Feeding Bottle', composition: 'Plastic BPA free', type: 'personal care', usage: 'Feeding infants', imageUrl: '/images/baby_feeding_bottle.png', prescriptionRequired: false, price: 550, isFeatured: false },
        { id: 'prod285', name: 'Elderly Walker', composition: 'Aluminum frame', type: 'device', usage: 'Mobility aid for elderly', imageUrl: '/images/elderly_walker.png', prescriptionRequired: false, price: 7000, isFeatured: false },
        { id: 'prod286', name: 'Compression Socks', composition: 'Nylon and elastane', type: 'personal care', usage: 'Improves blood circulation', imageUrl: '/images/compression_socks.png', prescriptionRequired: false, price: 400, isFeatured: false },
        { id: 'prod287', name: 'Orthopedic Insoles', composition: 'Foam and gel', type: 'personal care', usage: 'Foot support', imageUrl: '/images/orthopedic_insoles.png', prescriptionRequired: false, price: 600, isFeatured: false },

        // Nutrition & Supplements
        { id: 'prod288', name: 'Protein Powder (500g)', composition: 'Whey protein concentrate', type: 'nutrition', usage: 'Muscle building', imageUrl: '/images/protein_powder_(500g).png', prescriptionRequired: false, price: 1200, isFeatured: false },
        { id: 'prod289', name: 'Electrolyte Drink Sachets (6 pack)', composition: 'Sodium, potassium, magnesium', type: 'nutrition', usage: 'Hydration and electrolytes', imageUrl: '/images/electrolyte_drink_sachets_(6_pack).png', prescriptionRequired: false, price: 250, isFeatured: false },
        { id: 'prod290', name: 'Weight Management Capsules', composition: 'Herbal blend', type: 'supplement', usage: 'Weight loss support', imageUrl: '/images/weight_management_capsules.png', prescriptionRequired: false, price: 1400, isFeatured: false },
        { id: 'prod291', name: 'Omega-3 Fish Oil Capsules', composition: 'EPA and DHA', type: 'supplement', usage: 'Heart and brain health', imageUrl: '/images/omega-3_fish_oil_capsules.png', prescriptionRequired: false, price: 1100, isFeatured: false },
        { id: 'prod292', name: 'Multivitamin Gummies', composition: 'Vitamins A, B, C, D, Zinc', type: 'supplement', usage: 'General health support', imageUrl: '/images/multivitamin_gummies.png', prescriptionRequired: false, price: 900, isFeatured: false },
        { id: 'prod293', name: 'Calcium + Vitamin D Tablets', composition: 'Calcium carbonate, Vitamin D3', type: 'supplement', usage: 'Bone and teeth health', imageUrl: '/images/calcium_+_vitamin_d_tablets.png', prescriptionRequired: false, price: 800, isFeatured: false },
        { id: 'prod294', name: 'Iron + Folic Acid Tablets', composition: 'Ferrous sulfate, Folic acid', type: 'supplement', usage: 'Blood health', imageUrl: '/images/iron_+_folic_acid_tablets.png', prescriptionRequired: false, price: 750, isFeatured: false },
        { id: 'prod295', name: 'Probiotic Capsules', composition: 'Lactobacillus acidophilus', type: 'supplement', usage: 'Gut health', imageUrl: '/images/probiotic_capsules.png', prescriptionRequired: false, price: 1200, isFeatured: false }
    ];
  


    const doctors = [
        { id: 'doc1', name: 'Dr. Priya Sharma', specialization: 'General Physician' },
        { id: 'doc2', name: 'Dr. Rohit Verma', specialization: 'Cardiologist' },
        { id: 'doc3', name: 'Dr. Anjali Gupta', specialization: 'Dermatologist' },
        { id: 'doc4', name: 'Dr. Sameer Khan', specialization: 'Pediatrician' },
        { id: 'doc5', name: 'Dr. Neha Singh', specialization: 'General Physician' },
        { id: 'doc6', name: 'Dr. Alok Kumar', specialization: 'Cardiologist' },
        { id: 'doc7', name: 'Dr. Ritu Desai', specialization: 'Dermatologist' },
        { id: 'doc8', name: 'Dr. Vikram Reddy', specialization: 'Pediatrician' },
    ];

    // Try to fetch products & doctors from backend API and override local data when available.
    (async function fetchApiData() {
        try {
            const [prodRes, docRes] = await Promise.all([
                fetch('/api/products/?page_size=500'),
                fetch('/api/doctors/')
            ]);

            if (docRes.ok) {
                const prodJson = await prodRes.json();
                // DRF Default pagination returns {results: [...]} — handle both cases
                const prodList = Array.isArray(prodJson) ? prodJson : (prodJson.results || []);
                if (prodList.length) {
                    // Map backend product shape to frontend expected shape
                    products.splice(0, products.length, ...prodList.map(p => ({
                        id: p.sku || p.id || (`prod_${p.pk || Date.now()}`),
                        name: p.name || p.title || 'Unnamed',
                        composition: p.description || '',
                        type: 'medicine',
                        usage: p.description || '',
                        imageUrl: p.image || (p.image_url || '/images/logo.jpg'),
                        prescriptionRequired: !!p.prescription_required,
                        price: Number(p.price) || 0,
                        isFeatured: !!p.is_featured
                    })));
                }
            }

            if (docRes.ok) {
                const docJson = await docRes.json();
                const docList = Array.isArray(docJson) ? docJson : (docJson.results || []);
                if (docList.length) {
                    doctors.splice(0, doctors.length, ...docList.map(d => ({
                        id: d.id || (`doc_${Date.now()}`),
                        name: d.name,
                        specialization: d.specialization || ''
                    })));
                    // mark that doctors were loaded from backend (their ids are real PKs)
                    window.doctorsLoadedFromApi = true;
                    try { if (bookAppointmentBtn) bookAppointmentBtn.disabled = false; } catch (e) { }
                }
            }

            // Re-render UI now that we may have fresh data
            if (allProductsGrid) renderProducts(allProductsGrid, false);
            renderDoctors('');
            renderAppointments();
        } catch (err) {
            // If API isn't available, keep using local JS arrays. This prevents breaking the UI.
            console.warn('Could not fetch API data for products/doctors — using local data.', err);
        }
    })();

    // Generate time slots from 9:00 AM to 7:00 PM with 20-minute intervals
    function generateTimeSlots(startHour, endHour, intervalMinutes) {
        const slots = [];
        let current = new Date();
        current.setHours(startHour, 0, 0, 0); // Set to the start hour

        const end = new Date();
        end.setHours(endHour, 0, 0, 0); // Set to the end hour

        // Loop while current time is less than or equal to end time
        while (current.getHours() < endHour || (current.getHours() === endHour && current.getMinutes() === 0)) {
            slots.push(current.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }));
            current.setMinutes(current.getMinutes() + intervalMinutes);
        }
        return slots;
    }

    const availableTimeSlots = generateTimeSlots(9, 19, 20); // 9 AM to 7 PM (19:00) with 20-minute intervals


    let cart = JSON.parse(localStorage.getItem('medicoNexaCart')) || [];
    let appointments = JSON.parse(localStorage.getItem('medicoNexaAppointments')) || [];
    let prescriptions = JSON.parse(localStorage.getItem('medicoNexaPrescriptions')) || [];

    // State for appointment booking form
    let selectedSlot = null;
    let isOtpVerified = false;
    let currentGeneratedOtp = ''; // To store the simulated OTP
    // Track whether doctors were loaded from the backend (their ids are numeric PKs)
    window.doctorsLoadedFromApi = false;

    // Prevent booking until we have backend doctor ids to avoid invalid payloads
    try { if (bookAppointmentBtn) bookAppointmentBtn.disabled = true; } catch (e) { }

    // --- Functions ---

    // Section Visibility
    function showSection(id) {
        sections.forEach(section => {
            section.classList.add('hidden-section');
            section.classList.remove('active-section');
        });
        document.getElementById(id).classList.remove('hidden-section');
        document.getElementById(id).classList.add('active-section');

        navLinks.forEach(link => link.classList.remove('active'));
        document.querySelector(`.nav-link[href="#${id}"]`).classList.add('active');

        // Hide search bar except in products section
        const searchBarHome = document.querySelector('.header-top .search-bar');
        const searchBarProducts = document.querySelector('#products .search-bar');
        if (searchBarHome) searchBarHome.style.display = (id === 'products') ? 'flex' : 'none';
        if (searchBarProducts) searchBarProducts.style.display = (id === 'products') ? 'flex' : 'none';

        // Hide featured products section if not home
        if (id !== 'home') {
            if (featuredSectionTitle) featuredSectionTitle.style.display = 'none';
            if (featuredProductsGrid) featuredProductsGrid.style.display = 'none';
        } else {
            if (products.filter(p => p.isFeatured).length > 0) {
                featuredSectionTitle.style.display = '';
                featuredProductsGrid.style.display = '';
            } else {
                featuredSectionTitle.style.display = 'none';
                featuredProductsGrid.style.display = 'none';
            }
        }

        // Close mobile menu if open
        mainNav.classList.remove('active');
    }

    // Render Products
    function renderProducts(container, isFeatured = false, filteredProducts = products) {
        container.innerHTML = '';
        const productsToRender = isFeatured ? filteredProducts.filter(p => p.isFeatured) : filteredProducts;

        if (productsToRender.length === 0) {
            container.innerHTML = `<div class="empty-state">
                                        <i class="fas fa-box-open empty-icon"></i>
                                        <p>${isFeatured ? 'No featured products available.' : 'No products found matching your search criteria.'}</p>
                                   </div>`;
            return;
        }

        productsToRender.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.innerHTML = `
                <img src="${product.imageUrl}" alt="${product.name}">
                <div class="product-card-content">
                    <h3>${product.name}</h3>
                    <p>${product.usage}</p>
                    <p class="price">₹${product.price.toFixed(2)}</p>
                    ${product.prescriptionRequired ? '<span class="prescription-badge">Prescription Required</span>' : ''}
                    <div class="product-actions">
                        <button class="btn btn-primary add-to-cart-btn animated-btn" data-product-id="${product.id}">
                            <i class="fas fa-cart-plus icon-left"></i> Add to Cart
                        </button>
                        <button class="btn btn-secondary buy-now-btn animated-btn" data-product-id="${product.id}">
                            <i class="fas fa-money-bill-wave icon-left"></i> Buy Now
                        </button>
                    </div>
                </div>
            `;
            container.appendChild(productCard);
        });

        container.querySelectorAll('.add-to-cart-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const productId = e.currentTarget.dataset.productId;
                addToCart(productId);
                e.currentTarget.classList.add('btn-secondary');
                e.currentTarget.innerHTML = '<i class="fas fa-check icon-left"></i> Added!';
                setTimeout(() => {
                    e.currentTarget.classList.remove('btn-secondary');
                    e.currentTarget.innerHTML = '<i class="fas fa-cart-plus icon-left"></i> Add to Cart';
                }, 1500);
            });
        });

        container.querySelectorAll('.buy-now-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const productId = e.currentTarget.dataset.productId;
                buyNow(productId);
            });
        });
    }

    // Cart Functions
    function addToCart(productId) {
        const product = products.find(p => p.id === productId);
        if (product) {
            const existingItem = cart.find(item => item.id === productId);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({ ...product, quantity: 1 });
            }
            localStorage.setItem('medicoNexaCart', JSON.stringify(cart));
            updateCartDisplay();
        }
    }

    function buyNow(productId) {
        const product = products.find(p => p.id === productId);
        if (product) {
            cart = [{ ...product, quantity: 1 }];
            localStorage.setItem('medicoNexaCart', JSON.stringify(cart));
            updateCartDisplay();
            showSection('cart');
        }
    }

    function updateCartDisplay() {
        cartCountSpan.text = cart.reduce((total, item) => total + item.quantity, 0);
        cartItemsContainer.innerHTML = '';
        let subtotal = 0;

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = `<div class="empty-state">
                                                <i class="fas fa-shopping-bag empty-icon"></i>
                                                <p>Your cart is empty. Start adding medicines!</p>
                                           </div>`;
            checkoutBtn.disabled = true;
            checkoutBtn.classList.add('btn-outline');
            checkoutBtn.classList.remove('btn-primary');
        } else {
            checkoutBtn.disabled = false;
            checkoutBtn.classList.remove('btn-outline');
            checkoutBtn.classList.add('btn-primary');

            cart.forEach(item => {
                const itemTotal = item.price * item.quantity;
                subtotal += itemTotal;
                const cartItemDiv = document.createElement('div');
                cartItemDiv.classList.add('cart-item');
                cartItemDiv.innerHTML = `
                    <div class="cart-item-info">
                        <img src="${item.imageUrl}" alt="${item.name}">
                        <div class="cart-item-details">
                            <h4>${item.name}</h4>
                            <p>${item.composition}</p>
                        </div>
                    </div>
                    <div class="cart-item-actions">
                        <button class="quantity-btn" data-id="${item.id}" data-action="decrease"><i class="fas fa-minus-circle"></i></button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn" data-id="${item.id}" data-action="increase"><i class="fas fa-plus-circle"></i></button>
                        <button class="remove-btn" data-id="${item.id}"><i class="fas fa-trash-alt"></i></button>
                    </div>
                    <span class="cart-item-price">₹${itemTotal.toFixed(2)}</span>
                `;
                cartItemsContainer.appendChild(cartItemDiv);
            });
        }

        cartSubtotalSpan.textContent = `₹${subtotal.toFixed(2)}`;
        cartTotalSpan.textContent = `₹${subtotal.toFixed(2)}`;

        cartItemsContainer.querySelectorAll('.quantity-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = e.currentTarget.dataset.id;
                const action = e.currentTarget.dataset.action;
                const itemIndex = cart.findIndex(item => item.id === id);
                if (itemIndex > -1) {
                    if (action === 'increase') {
                        cart[itemIndex].quantity++;
                    } else if (action === 'decrease' && cart[itemIndex].quantity > 1) {
                        cart[itemIndex].quantity--;
                    }
                    localStorage.setItem('medicoNexaCart', JSON.stringify(cart));
                    updateCartDisplay();
                }
            });
        });

        cartItemsContainer.querySelectorAll('.remove-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = e.currentTarget.dataset.id;
                cart = cart.filter(item => item.id !== id);
                localStorage.setItem('medicoNexaCart', JSON.stringify(cart));
                updateCartDisplay();
            });
        });
    }

    // Appointment Functions
    function renderDoctors(specialization = '') {
        doctorSelect.innerHTML = '<option value="">-- Select Doctor --</option>';
        const filteredDoctors = doctors.filter(doc => specialization === '' || doc.specialization === specialization);
        if (filteredDoctors.length === 0 && specialization !== '') {
            const noDocOption = document.createElement('option');
            noDocOption.value = '';
            noDocOption.textContent = `No ${specialization} doctors available.`;
            noDocOption.disabled = true;
            doctorSelect.appendChild(noDocOption);
        } else {
            filteredDoctors.forEach(doctor => {
                const option = document.createElement('option');
                option.value = doctor.id;
                option.textContent = `${doctor.name} (${doctor.specialization})`;
                doctorSelect.appendChild(option);
            });
        }
    }

    function renderTimeSlots() {
        timeSlotsContainer.innerHTML = '';
        selectedSlot = null; // Reset selected slot
        updateBookAppointmentButton(); // Disable button

        // Reset the visual state of the time slots container
        timeSlotsContainer.classList.remove('slot-selected');
        appointmentCard.classList.remove('slot-chosen');

        const selectedDate = appointmentDateInput.value;
        const selectedDoctorId = doctorSelect.value;

        if (!selectedDate || !selectedDoctorId) {
            timeSlotsContainer.innerHTML = '<p class="empty-state-small">Select a date and doctor to see available slots.</p>';
            return;
        }

        const dateAppointments = appointments.filter(app => {
            const appDate = new Date(app.dateTime).toISOString().split('T')[0];
            return appDate === selectedDate && app.doctorId === selectedDoctorId;
        });

        if (availableTimeSlots.length === 0) {
            timeSlotsContainer.innerHTML = '<p class="empty-state-small">No time slots available for this date.</p>';
            return;
        }

        availableTimeSlots.forEach(slot => {
            // Convert slot to Date object for comparison, assuming selectedDate is YYYY-MM-DD
            const slotDateTime = new Date(`${selectedDate}T${formatTimeForDateObject(slot)}`);

            // Check if slot is in the past, considering current time in Charthawal
            const now = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
            const todayDateString = now.toISOString().split('T')[0];

            let isPast = false;
            if (selectedDate === todayDateString) {
                // If the selected date is today, check if the slot time is in the past relative to now
                if (slotDateTime <= now) {
                    isPast = true;
                }
            } else if (slotDateTime < now) {
                // If selected date is in the past (before today), all slots are considered past
                isPast = true;
            }

            // Check if slot is already appointed for this doctor and date
            const isAppointed = dateAppointments.some(app =>
                new Date(app.dateTime).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }) === slot
            );

            const timeSlotDiv = document.createElement('div');
            timeSlotDiv.classList.add('time-slot');
            timeSlotDiv.textContent = slot;

            if (isAppointed || isPast) {
                timeSlotDiv.classList.add('appointed');
            } else {
                timeSlotDiv.addEventListener('click', () => {
                    // Remove 'selected' from all previous slots
                    document.querySelectorAll('.time-slot').forEach(s => s.classList.remove('selected'));
                    // Add 'selected' to the clicked slot
                    timeSlotDiv.classList.add('selected');
                    selectedSlot = slot; // Set the global selectedSlot variable

                    // Add a class to the container to style other slots as hidden/disabled
                    timeSlotsContainer.classList.add('slot-selected');
                    appointmentCard.classList.add('slot-chosen'); // Apply class to parent for overlay

                    updateBookAppointmentButton();
                });
            }
            timeSlotsContainer.appendChild(timeSlotDiv);
        });
    }

    // Helper function to format time strings for Date object creation
    function formatTimeForDateObject(timeString) {
        // Converts "09:00 AM" to "09:00:00", "01:00 PM" to "13:00:00"
        const [time, period] = timeString.split(' ');
        let [hours, minutes] = time.split(':');
        hours = parseInt(hours);

        if (period === 'PM' && hours !== 12) {
            hours += 12;
        } else if (period === 'AM' && hours === 12) { // Midnight 12 AM is 00:xx
            hours = 0;
        }
        return `${String(hours).padStart(2, '0')}:${minutes}:00`;
    }

    function renderAppointments() {
        appointmentList.innerHTML = '';
        if (appointments.length === 0) {
            appointmentList.innerHTML = `<div class="empty-state">
                                            <i class="fas fa-notes-medical empty-icon"></i>
                                            <p>No appointments booked yet.</p>
                                        </div>`;
        } else {
            const sortedAppointments = [...appointments].sort((a, b) => new Date(b.dateTime) - new Date(a.dateTime));

            sortedAppointments.forEach(app => {
                const doctorName = doctors.find(doc => doc.id === app.doctorId)?.name || 'Unknown Doctor';
                const appDiv = document.createElement('div');
                appDiv.classList.add('appointment-item');
                appDiv.innerHTML = `
                    <div class="appointment-details">
                        <h4>${doctorName} - ${app.specialization}</h4>
                        <p><i class="fas fa-user"></i> Patient: ${app.patientName}</p>
                        <p><i class="fas fa-calendar-alt"></i> ${new Date(app.dateTime).toLocaleString()}</p>
                        <p><i class="fas fa-video"></i> Medium: ${app.appointmentMedium}</p>
                        <p class="status ${app.status.toLowerCase().replace(' ', '-')}"><i class="fas fa-info-circle"></i> Status: ${app.status}</p>
                    </div>
                `;
                appointmentList.appendChild(appDiv);
            });
        }
    }

    // Prescription Functions
    function renderPrescriptions() {
        prescriptionList.innerHTML = '';
        if (prescriptions.length === 0) {
            prescriptionList.innerHTML = `<div class="empty-state">
                                            <i class="fas fa-prescription-bottle-alt empty-icon"></i>
                                            <p>No prescriptions uploaded yet.</p>
                                        </div>`;
        } else {
            const sortedPrescriptions = [...prescriptions].sort((a, b) => new Date(b.uploadDate) - new Date(a.uploadDate));

            sortedPrescriptions.forEach(p => {
                const pDiv = document.createElement('div');
                pDiv.classList.add('prescription-item');
                pDiv.innerHTML = `
                    <div class="prescription-info">
                        <h4>Prescription - ${p.fileName}</h4>
                        <p><i class="fas fa-upload"></i> Uploaded: ${new Date(p.uploadDate).toLocaleDateString()}</p>
                        <p class="status ${p.status.toLowerCase().replace(' ', '-')}"><i class="fas fa-check-circle"></i> Status: ${p.status}</p>
                    </div>
                    <a href="${p.fileUrl}" target="_blank" class="btn btn-outline btn-small"><i class="fas fa-eye"></i> View</a>
                `;
                prescriptionList.appendChild(pDiv);
            });
        }
    }

    function performProductSearch() {
        const searchTerm = productSearchInput.value.toLowerCase().trim();
        let filtered = products;

        if (searchTerm) {
            filtered = products.filter(product =>
                product.name.toLowerCase().includes(searchTerm) ||
                product.composition.toLowerCase().includes(searchTerm) ||
                (product.usage && product.usage.toLowerCase().includes(searchTerm)) ||
                (product.prescriptionRequired && 'prescription required'.includes(searchTerm)) ||
                (!product.prescriptionRequired && ('no prescription required'.includes(searchTerm) || 'no rx'.includes(searchTerm) || 'otc'.includes(searchTerm)))
            );
            clearSearchBtn.style.display = 'inline-flex';
        } else {
            clearSearchBtn.style.display = 'none';
        }
        renderProducts(allProductsGrid, false, filtered); // Pass all products and filtered results
    }

    function updateBookAppointmentButton() {
        const patientName = patientNameInput.value.trim();
        const selectedSpecialization = specializationSelect.value;
        const selectedDoctorId = doctorSelect.value;
        const selectedMedium = appointmentMediumSelect.value;
        const selectedDate = appointmentDateInput.value;

        // Enable button only if all required fields are filled and OTP is verified and a slot is selected
        if (patientName && selectedSpecialization && selectedDoctorId && selectedMedium && selectedDate && selectedSlot && isOtpVerified) {
            bookAppointmentBtn.disabled = false;
        } else {
            bookAppointmentBtn.disabled = true;
        }
    }

    // Simulate online payment process
    function simulatePayment() {
        return new Promise(resolve => {
            const paymentModal = document.createElement('div');
            paymentModal.classList.add('modal');
            paymentModal.innerHTML = `
                <div class="modal-content" style="max-width: 400px; text-align: center;">
                    <h3>Processing Payment...</h3>
                    <div class="payment-loader"></div>
                    <p style="margin-top: 20px;">Please wait while we process your payment.</p>
                </div>
            `;
            document.body.appendChild(paymentModal);
            paymentModal.style.display = 'flex'; // Show the modal

            // Simulate a delay for payment processing
            setTimeout(() => {
                paymentModal.remove(); // Remove the modal
                const paymentSuccess = Math.random() > 0.1; // 90% success rate
                resolve(paymentSuccess);
            }, 3000); // 3-second delay
        });
    }


    // --- Event Listeners ---

    // Navigation
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            // MODIFIED LINE: Use dataset.target. It's more robust and works on any element type (<a>, <button>, <div>).
            const targetId = e.currentTarget.dataset.target;

            // Do nothing if there's no target
            if (!targetId) return;

            showSection(targetId);
            if (targetId === 'products') {
                productSearchInput.value = '';
                clearSearchBtn.style.display = 'none';
                renderProducts(allProductsGrid, false); // Render all products when navigating to the products section
            }
            if (targetId === 'cart') updateCartDisplay();
            if (targetId === 'appointments') {
                renderAppointments();
                // Reset appointment form specific elements when entering section
                patientNameInput.value = '';
                specializationSelect.value = '';
                doctorSelect.innerHTML = '<option value="">-- Select Doctor --</option>';
                appointmentMediumSelect.value = '';
                appointmentDateInput.value = '';
                timeSlotsContainer.innerHTML = '<p class="empty-state-small">Select a date and doctor to see available slots.</p>';
                selectedSlot = null;
                isOtpVerified = false;
                currentGeneratedOtp = '';
                contactInput.value = '';
                otpInput.value = '';
                otpInputGroup.classList.add('hidden');
                otpMessage.textContent = '';
                contactInput.disabled = false; // Re-enable contact input
                sendOtpBtn.disabled = false;
                otpInput.disabled = false;
                verifyOtpBtn.disabled = false;
                updateBookAppointmentButton();
                // Reset appointment card visual state
                appointmentCard.classList.remove('slot-chosen');
                timeSlotsContainer.classList.remove('slot-selected');
            }
            if (targetId === 'prescriptions') renderPrescriptions();
        });
    });

    hamburgerMenu.addEventListener('click', () => {
        mainNav.classList.toggle('active');
    });

    // Modal Events
    loginSignupBtn.addEventListener('click', () => {
        authModal.style.display = 'flex'; // Show the modal
        // Explicitly set login tab as active and signup as hidden
        document.getElementById('login-panel').classList.remove('hidden');
        document.getElementById('signup-panel').classList.add('hidden');
        tabButtons[0].classList.add('active'); // Assuming tabButtons[0] is Login
        tabButtons[1].classList.remove('active'); // Assuming tabButtons[1] is Signup
    });

    closeBtn.addEventListener('click', () => {
        authModal.style.display = 'none'; // Hide the modal
    });

    window.addEventListener('click', (event) => {
        if (event.target === authModal) { // If click outside modal content
            authModal.style.display = 'none'; // Hide the modal
        }
    });

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanels.forEach(panel => panel.classList.add('hidden'));

            button.classList.add('active');
            document.getElementById(button.dataset.tab + '-panel').classList.remove('hidden');
        });
    });

    // Doctor Appointments Form Events
    patientNameInput.addEventListener('input', updateBookAppointmentButton);
    specializationSelect.addEventListener('change', (e) => {
        renderDoctors(e.target.value);
        appointmentDateInput.value = ''; // Reset date when specialization changes
        renderTimeSlots(); // Re-render slots (this will also reset selection)
        updateBookAppointmentButton();
    });
    doctorSelect.addEventListener('change', () => {
        appointmentDateInput.value = ''; // Reset date when doctor changes
        renderTimeSlots(); // Re-render slots (this will also reset selection)
        updateBookAppointmentButton();
    });
    appointmentMediumSelect.addEventListener('change', updateBookAppointmentButton);

    // Set min date for appointment date input
    const today = new Date();
    const todayString = today.toISOString().split('T')[0];
    appointmentDateInput.setAttribute('min', todayString);

    appointmentDateInput.addEventListener('change', () => {
        renderTimeSlots(); // Render slots when date changes
        updateBookAppointmentButton(); // Update button state
    });

    // Identity Verification Events
    contactInput.addEventListener('input', () => {
        isOtpVerified = false; // Reset verification on contact change
        otpInputGroup.classList.add('hidden');
        otpMessage.textContent = '';
        otpInput.value = '';
        updateBookAppointmentButton();
    });

    sendOtpBtn.addEventListener('click', () => {
        const contact = contactInput.value.trim();
        if (!contact) {
            otpMessage.textContent = 'Please enter your email or phone number.';
            otpMessage.classList.remove('success');
            otpMessage.classList.add('error');
            return;
        }

        // Simulate OTP generation and sending
        currentGeneratedOtp = Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP
        otpInputGroup.classList.remove('hidden');
        otpMessage.textContent = `OTP sent to ${contact}. It's ${currentGeneratedOtp} (for demo).`;
        otpMessage.classList.remove('error');
        otpMessage.classList.add('success');

        // Disable send OTP button for a few seconds to simulate sending
        sendOtpBtn.disabled = true;
        setTimeout(() => {
            sendOtpBtn.disabled = false;
        }, 10000); // Re-enable after 10 seconds
    });

    verifyOtpBtn.addEventListener('click', () => {
        const enteredOtp = otpInput.value.trim();
        if (!enteredOtp) {
            otpMessage.textContent = 'Please enter the OTP.';
            otpMessage.classList.remove('success');
            otpMessage.classList.add('error');
            return;
        }

        if (enteredOtp === currentGeneratedOtp) {
            isOtpVerified = true;
            otpMessage.textContent = 'OTP Verified! You can now book the appointment.';
            otpMessage.classList.remove('error');
            otpMessage.classList.add('success');
            // Optionally disable OTP section inputs after verification
            contactInput.disabled = true;
            sendOtpBtn.disabled = true;
            otpInput.disabled = true;
            verifyOtpBtn.disabled = true;
        } else {
            isOtpVerified = false;
            otpMessage.textContent = 'Invalid OTP. Please try again.';
            otpMessage.classList.remove('success');
            otpMessage.classList.add('error');
        }
        updateBookAppointmentButton();
    });


    bookAppointmentBtn.addEventListener('click', async () => {
        const patientName = patientNameInput.value.trim();
        const selectedDoctorId = doctorSelect.value;
        const selectedSpecialization = specializationSelect.value;
        const selectedMedium = appointmentMediumSelect.value;
        const selectedDate = appointmentDateInput.value;

        if (!patientName || !selectedDoctorId || !selectedSpecialization || !selectedMedium || !selectedDate || !selectedSlot || !isOtpVerified) {
            alert('Please fill all appointment details and verify your identity.');
            return;
        }

        const fullDateTime = new Date(`${selectedDate}T${formatTimeForDateObject(selectedSlot)}`);


        // Final check for future date/time based on Charthawal IST
        const nowInCharthawal = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
        if (fullDateTime <= nowInCharthawal) {
            alert('Please select a future date and time for your appointment. Current time in Charthawal is ' + nowInCharthawal.toLocaleTimeString() + '.');
            return;
        }

        // Simulate payment process
        const paymentSuccessful = await simulatePayment();

        if (!paymentSuccessful) {
            alert('Payment failed. Please try again.');
            return;
        }

        // Ensure doctor id is numeric when sending to backend (DRF expects PK integer)
        let doctorForPayload = selectedDoctorId;
        if (!isNaN(Number(selectedDoctorId))) {
            doctorForPayload = Number(selectedDoctorId);
        } else if (window.doctorsLoadedFromApi) {
            // doctors should be loaded from API and have numeric ids; block if still non-numeric
            alert('Doctor selection is not valid for backend submission. Please reload the page and select a doctor from the updated list.');
            return;
        }

        const payload = {
            patient_name: patientName,
            doctor: doctorForPayload,
            appointment_medium: selectedMedium,
            date_time: fullDateTime.toISOString(),
            status: 'Booked'
        };

        // Helper to reset form after booking (shared for API or local)
        function resetAppointmentForm() {
            patientNameInput.value = '';
            specializationSelect.value = '';
            doctorSelect.innerHTML = '<option value="">-- Select Doctor --</option>';
            appointmentMediumSelect.value = '';
            appointmentDateInput.value = '';
            timeSlotsContainer.innerHTML = '<p class="empty-state-small">Select a date and doctor to see available slots.</p>';
            selectedSlot = null;
            isOtpVerified = false;
            currentGeneratedOtp = '';
            contactInput.value = '';
            otpInput.value = '';
            otpInputGroup.classList.add('hidden');
            otpMessage.textContent = '';
            contactInput.disabled = false; // Re-enable contact input
            sendOtpBtn.disabled = false;
            otpInput.disabled = false;
            verifyOtpBtn.disabled = false;
            updateBookAppointmentButton();
            // Reset appointment card visual state
            appointmentCard.classList.remove('slot-chosen');
            timeSlotsContainer.classList.remove('slot-selected');
        }

        // Try to send appointment to backend, otherwise save locally
        try {
            const res = await authFetch('/api/appointments/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (res.ok) {
                const data = await res.json();
                appointments.push({
                    id: data.id || ('app' + Date.now()),
                    patientName: data.patient_name || patientName,
                    doctorId: data.doctor || selectedDoctorId,
                    specialization: selectedSpecialization,
                    appointmentMedium: data.appointment_medium || selectedMedium,
                    dateTime: data.date_time || fullDateTime.toISOString(),
                    status: data.status || 'Booked'
                });
                localStorage.setItem('medicoNexaAppointments', JSON.stringify(appointments));
                alert('Appointment booked and payment successful!');
                renderAppointments();
                resetAppointmentForm();
            } else {
                // fallback to local save
                console.warn('Appointment POST failed with status', res.status);
                saveLocally();
            }
        } catch (err) {
            console.warn('Appointment POST threw error, saving locally.', err);
            saveLocally();
        }

        function saveLocally() {
            const newAppointment = {
                id: 'app' + Date.now(),
                patientName: patientName,
                doctorId: selectedDoctorId,
                specialization: selectedSpecialization,
                appointmentMedium: selectedMedium,
                dateTime: fullDateTime.toISOString(),
                status: 'Booked'
            };
            appointments.push(newAppointment);
            localStorage.setItem('medicoNexaAppointments', JSON.stringify(appointments));
            alert('Appointment booked (offline).');
            renderAppointments();
            resetAppointmentForm();
        }
    });

    // Prescription Upload
    chooseFileBtn.addEventListener('click', () => {
        prescriptionFileInput.click();
    });

    prescriptionFileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            uploadFile(file);
        }
    });

    prescriptionUploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        prescriptionUploadArea.classList.add('hover');
    });

    prescriptionUploadArea.addEventListener('dragleave', () => {
        prescriptionUploadArea.classList.remove('hover');
    });

    prescriptionUploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        prescriptionUploadArea.classList.remove('hover');
        const file = e.dataTransfer.files[0];
        if (file) {
            uploadFile(file);
        }
    });

    function uploadFile(file) {
        const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];
        if (!allowedTypes.includes(file.type)) {
            alert('Only JPG, PNG, and PDF files are allowed for prescriptions.');
            return;
        }

        // Build FormData for upload
        const formData = new FormData();
        formData.append('file', file, file.name);
        // Optional: include a client-side generated filename
        formData.append('file_name', file.name);

        // Prepare XHR for progress reporting
        const xhr = new XMLHttpRequest();
        const uploadUrl = '/api/prescriptions/';

        xhr.open('POST', uploadUrl, true);

        // Attach JWT Authorization header if available
        try {
            const token = localStorage.getItem('medicoNexaAuthToken');
            if (token) {
                xhr.setRequestHeader('Authorization', 'Bearer ' + token);
            }
        } catch (e) {
            // ignore localStorage issues
        }

        uploadProgressBar.style.width = '0%';

        xhr.upload.onprogress = function (event) {
            if (event.lengthComputable) {
                const percent = Math.round((event.loaded / event.total) * 100);
                uploadProgressBar.style.width = percent + '%';
            }
        };

        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status >= 200 && xhr.status < 300) {
                    try {
                        const resp = JSON.parse(xhr.responseText);
                        const newPrescription = {
                            id: resp.id || ('presc' + Date.now()),
                            fileName: resp.file_name || file.name,
                            fileUrl: resp.file ? resp.file : (resp.file_url || URL.createObjectURL(file)),
                            uploadDate: (new Date()).toISOString(),
                            status: resp.status || 'Pending'
                        };
                        prescriptions.push(newPrescription);
                        localStorage.setItem('medicoNexaPrescriptions', JSON.stringify(prescriptions));
                        renderPrescriptions();
                        uploadProgressBar.style.width = '0%';
                    } catch (err) {
                        console.warn('Invalid JSON response from upload, falling back to client save.', err);
                        fallbackSave();
                    }
                } else {
                    console.warn('Upload failed with status', xhr.status, xhr.responseText);
                    fallbackSave();
                }
            }
        };

        xhr.onerror = function () {
            console.warn('Upload XHR error; saving locally.');
            fallbackSave();
        };

        // Send request
        try {
            xhr.send(formData);
        } catch (err) {
            console.warn('XHR send failed, falling back to client-side save.', err);
            fallbackSave();
        }

        function fallbackSave() {
            // Simulate progress and save locally (original behavior)
            let progress = 0;
            uploadProgressBar.style.width = '0%';
            const interval = setInterval(() => {
                progress += 10;
                uploadProgressBar.style.width = progress + '%';
                if (progress >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        const newPrescription = {
                            id: 'presc' + Date.now(),
                            fileName: file.name,
                            fileUrl: URL.createObjectURL(file),
                            uploadDate: new Date().toISOString(),
                            status: 'Pending'
                        };
                        prescriptions.push(newPrescription);
                        localStorage.setItem('medicoNexaPrescriptions', JSON.stringify(prescriptions));
                        renderPrescriptions();
                        uploadProgressBar.style.width = '0%';
                    }, 500);
                }
            }, 100);
        }
    }

    // Product Search Event Listeners (Dynamic Search)
    productSearchBtn.addEventListener('click', performProductSearch);
    productSearchInput.addEventListener('input', performProductSearch);

    clearSearchBtn.addEventListener('click', () => {
        productSearchInput.value = '';
        performProductSearch(); // Re-render to show all products
    });


    // Checkout (Simulated)
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Your cart is empty. Nothing to checkout!');
            return;
        }
        const confirmCheckout = confirm(`Proceed to checkout with total: ${cartTotalSpan.textContent}?`);
        if (confirmCheckout) {
            // Simulate payment process (if not already handled for appointments)
            simulatePayment().then(async paymentSuccess => {
                if (!paymentSuccess) {
                    alert('Payment failed. Please try again.');
                    return;
                }

                // If products were loaded from backend and product IDs are numeric, try to POST order
                const canPostOrder = products.length > 0 && !isNaN(Number(products[0].id));
                if (canPostOrder) {
                    try {
                        const items = cart.map(item => ({ product: Number(item.id), quantity: item.quantity }));
                        const total = parseFloat(cartTotalSpan.textContent.replace(/[^0-9.-]+/g, '')) || 0;
                        const res = await authFetch('/api/orders/', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ items, total })
                        });
                        if (res.ok) {
                            alert('Order placed successfully!');
                            cart = [];
                            localStorage.removeItem('medicoNexaCart');
                            updateCartDisplay();
                            showSection('home');
                            return;
                        } else {
                            console.warn('Order POST failed, falling back to simulated order. Status:', res.status);
                        }
                    } catch (err) {
                        console.warn('Order POST threw error, falling back to simulated order.', err);
                    }
                }

                // Fallback simulated behavior
                alert('Order placed successfully! (Simulated)');
                cart = [];
                localStorage.removeItem('medicoNexaCart');
                updateCartDisplay();
                showSection('home');
            });
        }
    });


    // --- Initial Renders ---
    // --- Authentication helpers ---
    async function registerUser(username, email, password) {
        try {
            const res = await fetch('/api/register/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, email, password })
            });
            if (res.ok) {
                const data = await res.json();
                // Try obtaining JWT automatically
                await obtainToken(username, password);
                return data;
            }
            return null;
        } catch (e) {
            console.warn('Register failed', e);
            return null;
        }
    }

    async function obtainToken(usernameOrEmail, password) {
        try {
            const res = await fetch('/api/token/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username: usernameOrEmail, password })
            });
            if (res.ok) {
                const data = await res.json();
                if (data.access) {
                    localStorage.setItem('medicoNexaAuthToken', data.access);
                    localStorage.setItem('medicoNexaAuthRefresh', data.refresh || '');
                    return true;
                }
            }
        } catch (e) {
            console.warn('Token obtain failed', e);
        }
        return false;
    }

    function authFetch(url, opts = {}) {
        const token = localStorage.getItem('medicoNexaAuthToken');
        opts.headers = opts.headers || {};
        if (token) opts.headers['Authorization'] = 'Bearer ' + token;
        return fetch(url, opts);
    }
    // Show featured products only if available, else hide section
    const featuredSectionTitle = document.getElementById('featured-section-title');
    if (products.filter(p => p.isFeatured).length > 0) {
        featuredSectionTitle.style.display = '';
        featuredProductsGrid.style.display = '';
        renderProducts(featuredProductsGrid, true);
    } else {
        featuredSectionTitle.style.display = 'none';
        featuredProductsGrid.style.display = 'none';
    }

    updateCartDisplay();
    renderDoctors('');
    renderAppointments();
    renderPrescriptions();
    // Initialize the appointment button state
    updateBookAppointmentButton();

    // Set initial state for auth modal (login tab active, signup hidden)
    document.getElementById('login-panel').classList.remove('hidden');
    document.getElementById('signup-panel').classList.add('hidden');
    if (tabButtons.length > 1) {
        tabButtons[0].classList.add('active');
        tabButtons[1].classList.remove('active');
    }
    // IMPORTANT: The modal is NOT shown on DOMContentLoaded.
    // Its display is handled only by loginSignupBtn click and closeBtn/overlay clicks.

    // Carousel animation script for error-free operation

    // Doctor carousel
    const docItems = document.querySelectorAll('.hero-image-carousel .carousel-item');
    let docCurrent = 0;
    let docPrev = null;
    function showDocImage(idx) {
        docItems.forEach((item, i) => {
            item.classList.remove('active', 'exit');
            if (i === idx) {
                item.classList.add('active');
            } else if (i === docPrev) {
                item.classList.add('exit');
            }
        });
    }
    showDocImage(docCurrent);
    setInterval(() => {
        docPrev = docCurrent;
        docCurrent = (docCurrent + 1) % docItems.length;
        showDocImage(docCurrent);
    }, 4000);

    // Trending products carousel
    const prodItems = document.querySelectorAll('.trending-products-carousel .trending-carousel-item');
    let prodCurrent = 0;
    let prodPrev = null;
    function showProdImage(idx) {
        prodItems.forEach((item, i) => {
            item.classList.remove('active', 'exit');
            if (i === idx) {
                item.classList.add('active');
            } else if (i === prodPrev) {
                item.classList.add('exit');
            }
        });
    }
    showProdImage(prodCurrent);
    setInterval(() => {
        prodPrev = prodCurrent;
        prodCurrent = (prodCurrent + 1) % prodItems.length;
        showProdImage(prodCurrent);
    }, 4000);
});



// ===== CATEGORY CAROUSEL POPULATION =====
document.addEventListener("DOMContentLoaded", function () {
    // Use FontAwesome icons for a professional look
    const categories = [
        { name: "Medicines", icon: "fas fa-pills", offer: "Up to 25% OFF" },
        { name: "Healthcare Devices", icon: "fas fa-thermometer-half", offer: "Up to 30% OFF" },
        { name: "Personal Care", icon: "fas fa-heart", offer: "Up to 40% OFF" },
        { name: "Vitamins & Supplements", icon: "fas fa-capsules", offer: "Up to 35% OFF" },
        { name: "Baby Care", icon: "fas fa-baby", offer: "Up to 20% OFF" },
        { name: "Hygiene Essentials", icon: "fas fa-soap", offer: "Up to 15% OFF" },
        { name: "Dental Care", icon: "fas fa-tooth", offer: "Up to 30% OFF" },
        { name: "Mental Wellness", icon: "fas fa-brain", offer: "Up to 10% OFF" },
        { name: "First Aid", icon: "fas fa-band-aid", offer: "Up to 25% OFF" },
        { name: "Pet Care", icon: "fas fa-dog", offer: "Up to 20% OFF" }
    ];

    const categoryTrack = document.getElementById("categoryTrack");
    categoryTrack.innerHTML = '';

    categories.forEach(cat => {
        const card = document.createElement('a');
        card.className = 'category-card grid';
        card.href = '#products';
        card.innerHTML = `
            <div class="category-icon"><i class="${cat.icon}"></i></div>
            <div class="category-name">${cat.name}</div>
            <div class="category-offer">${cat.offer}</div>
        `;
        categoryTrack.appendChild(card);
    });

    // Enable smooth horizontal scroll with mouse wheel
    const categoryScroll = document.querySelector('.category-scroll');
    if (categoryScroll) {
        categoryScroll.addEventListener('wheel', function (e) {
            if (e.deltaY !== 0) {
                e.preventDefault();
                categoryScroll.scrollLeft += e.deltaY;
            }
        });
    }
});
// ===== medicine CAROUSEL POPULATION =====
document.addEventListener("DOMContentLoaded", function () {
    // Use FontAwesome icons for a professional look
    const medicines = [
        { name: "Stomach Care", icon: "fas fa-pills", offer: "Up to 25% OFF" },
        { name: "Pain &amp; Relief", icon: "fas fa-pills", offer: "Up to 25% OFF" },
        { name: "Cold &map; Cough", icon: "fas fa-thermometer-half", offer: "Up to 30% OFF" },
        { name: "Personal Care", icon: "fas fa-heart", offer: "Up to 40% OFF" },
        { name: "Vitamins & Supplements", icon: "fas fa-capsules", offer: "Up to 35% OFF" },
        { name: "Mother &amp; Baby Care", icon: "fas fa-baby", offer: "Up to 20% OFF" },
        { name: "Hygiene Essentials", icon: "fas fa-soap", offer: "Up to 15% OFF" },
        { name: "Dental Care", icon: "fas fa-tooth", offer: "Up to 30% OFF" },
        { name: "Imunity Boosters", icon: "fas fa-brain", offer: "Up to 10% OFF" },
        { name: "First Aid", icon: "fas fa-band-aid", offer: "Up to 25% OFF" },
        { name: "Bone &map; Joint Health", icon: "fas fa-dog", offer: "Up to 20% OFF" }
    ];

    const medicineTrack = document.getElementById("medicineTrack");
    medicineTrack.innerHTML = '';

    medicines.forEach(cat => {
        const card = document.createElement('a');
        card.className = 'medicine-card grid';
        card.href = '#products';
        card.innerHTML = `
            <div class="medicine-icon"><i class="${cat.icon}"></i></div>
            <div class="medicine-name">${cat.name}</div>
            <div class="medicine-offer">${cat.offer}</div>
        `;
        medicineTrack.appendChild(card);
    });

    // Enable smooth horizontal scroll with mouse wheel
    const medicineScroll = document.querySelector('.medicine-scroll');
    if (medicineScroll) {
        medicineScroll.addEventListener('wheel', function (e) {
            if (e.deltaY !== 0) {
                e.preventDefault();
                medicineScroll.scrollLeft += e.deltaY;
            }
        });
    }
});





// Lab Test Search
document.getElementById('lab-test-search-btn').addEventListener('click', () => {
    const query = document.getElementById('lab-test-search-input').value.toLowerCase();
    const labTests = document.querySelectorAll('.lab-test-card');
    labTests.forEach(test => {
        const title = test.querySelector('h4').textContent.toLowerCase();
        test.style.display = title.includes(query) ? 'block' : 'none';
    });
    document.getElementById('clear-lab-test-search-btn').classList.remove('hidden');
});

document.getElementById('clear-lab-test-search-btn').addEventListener('click', () => {
    document.getElementById('lab-test-search-input').value = '';
    const labTests = document.querySelectorAll('.lab-test-card');
    labTests.forEach(test => test.style.display = 'block');
    document.getElementById('clear-lab-test-search-btn').classList.add('hidden');
});

// Doctor Search
document.getElementById('doctor-search-btn').addEventListener('click', () => {
    const query = document.getElementById('doctor-search-input').value.toLowerCase();
    const doctor = doctor.find(doc => doc.name.toLowerCase().includes(query));
    if (doctor) {
        document.getElementById('specialization-select').value = doctor.specialization;
        renderDoctors(doctor.specialization);
        document.getElementById('doctor-select').value = doctor.id;
    }
    document.getElementById('clear-doctor-search-btn').classList.remove('hidden');
});

document.getElementById('clear-doctor-search-btn').addEventListener('click', () => {
    document.getElementById('doctor-search-input').value = '';
    document.getElementById('specialization-select').value = '';
    renderDoctors('');
    document.getElementById('doctor-select').value = '';
    document.getElementById('clear-doctor-search-btn').classList.add('hidden');
});