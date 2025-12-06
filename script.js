const OWNER_PHONE = "918799429307"; 

        const translations = {
            en: {
                nav_home: "Home", nav_products: "Collection", nav_features: "Why Us", nav_ai: "AI Tool",
                hero_title: "Build Your Dream With Confidence", hero_sub: "Premium Indian cement and materials delivered to your site.",
                btn_buy: "Explore Products", btn_ai: "AI Estimate", slide_site: "On-Site Delivery", slide_stock: "Fresh Cement Stock",
                prod_title: "Complete Material Catalog", search_ph: "Search cement, steel...", filter_all: "All",
                feat_title: "Why Choose Us", feat_fast: "Super Fast Delivery", feat_quality: "Authorized Partner", feat_price: "Best Market Price",
                testi_title: "Client Stories", ai_title: "Smart AI Estimation", ai_sub: "Know exactly how much material you need.",
                lbl_plot: "Plot Area (Sq. Ft)", lbl_floors: "Floors", btn_calc: "Calculate Now",
                msg_enter_details: "Enter details", res_title: "Your Estimate", res_cement: "Cement", res_sand: "Sand", res_steel: "Steel", res_cost: "Est. Cost", btn_add_cart: "Add All to Cart",
                footer_tag: "Building India's Future.", cart_title: "Your Bag", total: "Total", btn_whatsapp: "Order on WhatsApp",
                feat_fast_desc: "On-time site delivery.", feat_quality_desc: "100% genuine materials.", feat_price_desc: "Lowest wholesale rates."
            },
            hi: {
                nav_home: "होम", nav_products: "सामग्री", nav_features: "विशेषताएं", nav_ai: "AI टूल",
                hero_title: "अपने सपनों का घर बनाएं", hero_sub: "प्रीमियम सामग्री आपकी साइट पर।",
                btn_buy: "उत्पाद देखें", btn_ai: "AI अनुमान", slide_site: "साइट पर डिलीवरी", slide_stock: "ताजा स्टॉक",
                prod_title: "सामग्री सूची", search_ph: "खोजें...", filter_all: "सभी",
                feat_title: "हमें क्यों चुनें", feat_fast: "तेज़ डिलीवरी", feat_quality: "अधिकृत भागीदार", feat_price: "सर्वोत्तम मूल्य",
                testi_title: "ग्राहकों की कहानियां", ai_title: "AI अनुमान", ai_sub: "आवश्यकता जानें",
                lbl_plot: "प्लॉट (वर्ग फुट)", lbl_floors: "मंजिलें", btn_calc: "गणना करें",
                msg_enter_details: "विवरण दर्ज करें", res_title: "अनुमान", res_cement: "सीमेंट", res_sand: "रेत", res_steel: "स्टील", res_cost: "लागत", btn_add_cart: "कार्ट में जोड़ें",
                footer_tag: "भारत का भविष्य", cart_title: "बैग", total: "कुल", btn_whatsapp: "ऑर्डर करें",
                feat_fast_desc: "समय पर डिलीवरी", feat_quality_desc: "100% असली", feat_price_desc: "कम दरें"
            },
            gu: {
                nav_home: "હોમ", nav_products: "કલેક્શન", nav_features: "વિશેષતા", nav_ai: "AI ટૂલ",
                hero_title: "તમારા સપનાનું ઘર બનાવો", hero_sub: "શ્રેષ્ઠ સામગ્રી તમારી સાઇટ પર.",
                btn_buy: "ઉત્પાદનો જુઓ", btn_ai: "AI અંદાજ", slide_site: "સાઇટ પર ડિલિવરી", slide_stock: "તાજો સ્ટોક",
                prod_title: "સામગ્રી સૂચિ", search_ph: "શોધો...", filter_all: "બધા",
                feat_title: "અમને શા માટે પસંદ કરો", feat_fast: "ઝડપી ડિલિવરી", feat_quality: "અધિકૃત ભાગીદાર", feat_price: "શ્રેષ્ઠ કિંમત",
                testi_title: "ગ્રાહકોની વાતો", ai_title: "AI અંદાજ", ai_sub: "જરૂરિયાત જાણો",
                lbl_plot: "પ્લોટ (ચો.ફૂટ)", lbl_floors: "માળ", btn_calc: "ગણતરી કરો",
                msg_enter_details: "વિગતો નાખો", res_title: "અંદાજ", res_cement: "સિમેન્ટ", res_sand: "રેતી", res_steel: "સ્ટીલ", res_cost: "ખર્ચ", btn_add_cart: "કાર્ટમાં ઉમેરો",
                footer_tag: "ભારતનું ભવિષ્ય", cart_title: "કાર્ટ", total: "કુલ", btn_whatsapp: "ઓર્ડર કરો",
                feat_fast_desc: "સમયસર ડિલિવરી", feat_quality_desc: "100% અસલ", feat_price_desc: "સૌથી ઓછા દર"
            }
        };

        const products = [
            { id: 101, name: "UltraTech Cement", cat: "Cement", price: 380, unit: "Bag", img: "images/ultratech_cement.jpg" },
            { id: 102, name: "UltraTech Weather Plus", cat: "Cement", price: 410, unit: "Bag", img: "images/weather_plus.jpg" },
            { id: 201, name: "Seal & Dry ILW+", cat: "Waterproofing", price: 250, unit: "Litre", img: "images/waterproofing/Seal_&_Dry_ILW+.avif" },
            { id: 202, name: "Seal & Dry SBR", cat: "Waterproofing", price: 3500, unit: "20kg Pack", img: "images/waterproofing/Seal & Dry SBR.jpeg" },
            { id: 301, name: "SEAL & Dry SBR", cat: "Repair", price: 300, unit: "1kg", img: "images/seal_dry_sbr.jpg" },
            { id: 401, name: "Tilefixo CT", cat: "Tile Adhesives", price: 450, unit: "20kg Bag", img: "images/tilefixo_ct.jpg" },
            { id: 402, name: "Tilefixo CT Strong", cat: "Tile Adhesives", price: 550, unit: "20kg Bag", img: "images/tilefixo_ct_strong.jpg" },
            { id: 406, name: "Tilefixo X'tra Plus", cat: "Tile Adhesives", price: 1100, unit: "20kg Bag", img: "images/tilefixo_xtra_plus.jpg" },
            { id: 410, name: "Build Champ Cleaner", cat: "Cleaner", price: 150, unit: "Litre", img: "images/build_champ_cleaner.jpg" },
            { id: 501, name: "Tata TMT Fe550", cat: "Steel", price: 65, unit: "Kg", img: "images/tata_tmt.jpg" },
            { id: 502, name: "River Sand", cat: "Sand", price: 1200, unit: "Ton", img: "images/river_sand.jpg" }
        ];

        let cart = [];
        let currentLang = 'en';

        document.addEventListener("DOMContentLoaded", () => {
            renderFeaturedProducts();
            renderAllProducts(products);
            startHeroSlider();
            setupScrollReveal();
        });

        // VIEW SWITCHING LOGIC
        function switchPage(pageId) {
            document.querySelectorAll('.page-section').forEach(p => p.classList.remove('active-page'));
            document.getElementById('page-' + pageId).classList.add('active-page');
            document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
            document.getElementById('link-' + pageId)?.classList.add('active');
            window.scrollTo(0,0);
        }

        // RENDER TOP 5 FEATURED
        function renderFeaturedProducts() {
            const featuredIds = [101, 201, 301, 401, 501]; // Manual selection of top items
            const featuredItems = products.filter(p => featuredIds.includes(p.id));
            const grid = document.getElementById('featuredGrid');
            grid.innerHTML = "";
            featuredItems.forEach(p => grid.appendChild(createProductCard(p)));
        }

        // RENDER ALL PRODUCTS
        function renderAllProducts(items) {
            const grid = document.getElementById('productsGrid');
            grid.innerHTML = "";
            items.forEach(p => grid.appendChild(createProductCard(p)));
            setupScrollReveal();
        }

        function createProductCard(p) {
            const div = document.createElement('div');
            div.className = "product-card reveal";
            div.innerHTML = `
                <img src="${p.img}" class="card-img" alt="${p.name}">
                <div class="card-info">
                    <span class="cat-tag">${p.cat}</span>
                    <h3>${p.name}</h3>
                    <div class="card-bottom">
                        <span class="price">₹${p.price} <small style="font-size:0.8rem; color:#888;">/${p.unit}</small></span>
                        <div class="add-btn" onclick="addToCart(${p.id})"><i class="fas fa-plus"></i></div>
                    </div>
                </div>`;
            return div;
        }

        function filterCategory(cat) {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            event.target.classList.add('active');
            if(cat === 'all') renderAllProducts(products);
            else renderAllProducts(products.filter(p => p.cat === cat));
        }

        function filterProducts() {
            const txt = document.getElementById('searchInput').value.toLowerCase();
            renderAllProducts(products.filter(p => p.name.toLowerCase().includes(txt) || p.cat.toLowerCase().includes(txt)));
        }

        function addToCart(id, qty = 1) {
            const p = products.find(x => x.id === id);
            const ex = cart.find(x => x.id === id);
            if(ex) ex.qty += qty; else cart.push({...p, qty});
            updateCartUI();
            showToast(`Added ${p.name}`);
        }

        function updateCartUI() {
            document.getElementById('cart-badge').innerText = cart.length;
            const container = document.getElementById('cartItems');
            container.innerHTML = "";
            let total = 0;
            if(cart.length === 0) container.innerHTML = "<p style='text-align:center; color:#999; margin-top:20px;'>Your cart is empty.</p>";
            cart.forEach((item, index) => {
                total += item.price * item.qty;
                container.innerHTML += `
                    <div class="cart-item">
                        <div><strong>${item.name}</strong><br><small>${item.qty} ${item.unit} x ₹${item.price}</small></div>
                        <div style="text-align:right;"><div>₹${item.price * item.qty}</div><i class="fas fa-trash" onclick="removeFromCart(${index})" style="color:red; cursor:pointer; margin-top:5px;"></i></div>
                    </div>`;
            });
            document.getElementById('cartTotal').innerText = "₹" + total.toLocaleString();
        }

        function removeFromCart(idx) { cart.splice(idx, 1); updateCartUI(); }
        function toggleCart() { document.getElementById('cartSidebar').classList.toggle('active'); document.getElementById('cartOverlay').classList.toggle('active'); }
        
        function changeLanguage(lang) {
            const t = translations[lang];
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if(t[key]) el.innerText = t[key];
            });
            document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
                const key = el.getAttribute('data-i18n-placeholder');
                if(t[key]) el.placeholder = t[key];
            });
        }

        function startHeroSlider() {
            const slides = document.querySelectorAll('.slide');
            let idx = 0;
            setInterval(() => {
                slides[idx].classList.remove('active');
                idx = (idx + 1) % slides.length;
                slides[idx].classList.add('active');
            }, 5000); 
        }

        function calculateMaterials() {
            const area = parseFloat(document.getElementById('plotSize').value);
            const floors = parseFloat(document.getElementById('floors').value);
            if(!area || !floors) { alert("Please enter details"); return; }
            const total = area * floors;
            const cement = Math.ceil(total * 0.4); 
            const sand = Math.ceil(total * 0.0816);
            const steel = Math.ceil(total * 3.5); 
            const cost = (cement * 380) + (sand * 1200) + (steel * 65);
            document.querySelector('.empty-state').style.display = 'none';
            document.querySelector('.results-content').style.display = 'block';
            document.getElementById('res-cement').innerText = cement + " Bags";
            document.getElementById('res-sand').innerText = sand + " Tons";
            document.getElementById('res-steel').innerText = steel + " Kg";
            document.getElementById('res-cost').innerText = "₹" + cost.toLocaleString();
        }

        function addEstimatesToCart() {
            const cement = parseInt(document.getElementById('res-cement').innerText);
            if(cement > 0) addToCart(101, cement);
            toggleCart();
        }

        function checkoutWhatsApp() {
            if(cart.length === 0) { alert("Empty Cart!"); return; }
            
            const name = document.getElementById('cName').value;
            const phone = document.getElementById('cPhone').value;
            const loc = document.getElementById('cLoc').value;
            
            if(!name || !phone || !loc) { alert("Please enter Name, Phone Number & Location"); return; }
            
            let msg = `*New Order @ New Ujaval Trading*\n👤 Name: ${name}\n📞 Phone: ${phone}\n📍 Location: ${loc}\n\n*Order Details:*\n`;
            cart.forEach(i => msg += `▪ ${i.name} (${i.qty} ${i.unit})\n`);
            msg += `\n💰 *Total: ${document.getElementById('cartTotal').innerText}*`;
            
            window.open(`https://wa.me/${OWNER_PHONE}?text=${encodeURIComponent(msg)}`, '_blank');
        }

        function scrollToSection(id) { document.getElementById(id).scrollIntoView({ behavior: 'smooth' }); }
        function showToast(msg) {
            const t = document.getElementById('toast');
            document.getElementById('toastMsg').innerText = msg;
            t.classList.add('show');
            setTimeout(() => t.classList.remove('show'), 3000);
        }
        function setupScrollReveal() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('active'); });
            }, { threshold: 0.1 });
            document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
        }
        function toggleMobileMenu() { document.querySelector('.nav-links').classList.toggle('active'); }