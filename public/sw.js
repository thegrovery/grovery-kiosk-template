if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,a)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let r={};const f=e=>n(e,c),o={module:{uri:c},exports:r,require:f};i[c]=Promise.all(s.map((e=>o[e]||f(e)))).then((e=>(a(...e),r)))}}define(["./workbox-6f6ad7fd"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/aaeuHmscjZk7mdb4RKYZV/_buildManifest.js",revision:"fd0cb66ef26b11a574256e7186df6a1d"},{url:"/_next/static/aaeuHmscjZk7mdb4RKYZV/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0c428ae2-8e3883136d4be54f.js",revision:"8e3883136d4be54f"},{url:"/_next/static/chunks/227-1ce5a912afa1c8a1.js",revision:"1ce5a912afa1c8a1"},{url:"/_next/static/chunks/538-80b49f056f84f4e8.js",revision:"80b49f056f84f4e8"},{url:"/_next/static/chunks/726-110165e7f5e81085.js",revision:"110165e7f5e81085"},{url:"/_next/static/chunks/839-f326f0d60a32969a.js",revision:"f326f0d60a32969a"},{url:"/_next/static/chunks/framework-5f4595e5518b5600.js",revision:"5f4595e5518b5600"},{url:"/_next/static/chunks/main-91fc9e77fec3df57.js",revision:"91fc9e77fec3df57"},{url:"/_next/static/chunks/pages/_app-868359cdbf961d7a.js",revision:"868359cdbf961d7a"},{url:"/_next/static/chunks/pages/_error-a4ba2246ff8fb532.js",revision:"a4ba2246ff8fb532"},{url:"/_next/static/chunks/pages/access-d9a3244264a57a26.js",revision:"d9a3244264a57a26"},{url:"/_next/static/chunks/pages/access/appeals-89b2de9807c0011b.js",revision:"89b2de9807c0011b"},{url:"/_next/static/chunks/pages/access/benefits-52a3b7d5cdd7279f.js",revision:"52a3b7d5cdd7279f"},{url:"/_next/static/chunks/pages/access/billing-549bb1eb121ef48c.js",revision:"549bb1eb121ef48c"},{url:"/_next/static/chunks/pages/enrollment-4025cf270ea4e8c0.js",revision:"4025cf270ea4e8c0"},{url:"/_next/static/chunks/pages/enrollment/enrollment-form-ff49c8675c19c40f.js",revision:"ff49c8675c19c40f"},{url:"/_next/static/chunks/pages/enrollment/options-1b8c4a0649534807.js",revision:"1b8c4a0649534807"},{url:"/_next/static/chunks/pages/enrollment/provider-portal-381915df02c69678.js",revision:"381915df02c69678"},{url:"/_next/static/chunks/pages/financial-872d3644336bb420.js",revision:"872d3644336bb420"},{url:"/_next/static/chunks/pages/financial/commercial-patients-6acd013166f41d00.js",revision:"6acd013166f41d00"},{url:"/_next/static/chunks/pages/financial/government-uninsured-patients-0c843e84f0255b1d.js",revision:"0c843e84f0255b1d"},{url:"/_next/static/chunks/pages/index-e9045a40037f920b.js",revision:"e9045a40037f920b"},{url:"/_next/static/chunks/pages/resources-72a15b647557d2d9.js",revision:"72a15b647557d2d9"},{url:"/_next/static/chunks/pages/resources/brochures-a842b468278149c9.js",revision:"a842b468278149c9"},{url:"/_next/static/chunks/pages/resources/videos-5355deb97c0fd8f8.js",revision:"5355deb97c0fd8f8"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-5dcbf4f62e053e1f.js",revision:"5dcbf4f62e053e1f"},{url:"/_next/static/css/528498ad0ec7ad94.css",revision:"528498ad0ec7ad94"},{url:"/_next/static/css/6c7b38c7e4955ff1.css",revision:"6c7b38c7e4955ff1"},{url:"/_next/static/css/6da6c7308028b229.css",revision:"6da6c7308028b229"},{url:"/_next/static/css/770a9a566a83b952.css",revision:"770a9a566a83b952"},{url:"/_next/static/css/959e4db55527265f.css",revision:"959e4db55527265f"},{url:"/_next/static/css/f34576898b1421c0.css",revision:"f34576898b1421c0"},{url:"/_next/static/css/fe6a3ebc68bacce2.css",revision:"fe6a3ebc68bacce2"},{url:"/favicon.ico",revision:"6d0ddf3ab946648955bdbaeddd71e8c7"},{url:"/favicon.png",revision:"fdea8ec605653e5febef5227d4d36e06"},{url:"/fonts/bms-humanity-ar/bmshumanityar-bold-webfont.woff",revision:"7428f3660365a095ac870ebe0c178ec5"},{url:"/fonts/bms-humanity-ar/bmshumanityar-bold-webfont.woff2",revision:"3089834a1fe099c1bf8a70284fd40d7c"},{url:"/fonts/bms-humanity-ar/bmshumanityar-extrabold-webfont.woff",revision:"6a1fa83476cf3e09a9da7b459249eead"},{url:"/fonts/bms-humanity-ar/bmshumanityar-extrabold-webfont.woff2",revision:"60102edd3d78be4565db73f94d06da2f"},{url:"/fonts/bms-humanity-ar/bmshumanityar-light-webfont.woff",revision:"9f60a151df7e165bdfd3ab09832485a6"},{url:"/fonts/bms-humanity-ar/bmshumanityar-light-webfont.woff2",revision:"c2a6aa45c9cc14b034daf45f52700139"},{url:"/fonts/bms-humanity-ar/bmshumanityar-regular-webfont.woff",revision:"26c683e7a9fbddc795e899bdd6df67d1"},{url:"/fonts/bms-humanity-ar/bmshumanityar-regular-webfont.woff2",revision:"b6ad1a49ef915dcc430e35df7d3453d5"},{url:"/fonts/bms-humanity-ar/bmshumanityar-thin-webfont.woff",revision:"0c8b5b1d106ea859e67641ab38b0ef41"},{url:"/fonts/bms-humanity-ar/bmshumanityar-thin-webfont.woff2",revision:"491abe8e761f75d7c001f8eb7d694250"},{url:"/fonts/bms-humanity-nw/bmshumanitynw-bold-webfont.woff",revision:"17b4b03004f2ff0aed4a17750574e616"},{url:"/fonts/bms-humanity-nw/bmshumanitynw-bold-webfont.woff2",revision:"730dad196cb467de351acac12a1919f5"},{url:"/fonts/bms-humanity-nw/bmshumanitynw-bolditalic-webfont.woff",revision:"896394df0c37e7232abbca6b1c2daa28"},{url:"/fonts/bms-humanity-nw/bmshumanitynw-bolditalic-webfont.woff2",revision:"5ad4234341b2f250c527613cba7c1650"},{url:"/fonts/bms-humanity-nw/bmshumanitynw-extrabold-webfont.woff",revision:"9222b056073cdfb4c04849ea04685f27"},{url:"/fonts/bms-humanity-nw/bmshumanitynw-extrabold-webfont.woff2",revision:"a4032d564462c5ee622643520cdec1e6"},{url:"/fonts/bms-humanity-nw/bmshumanitynw-italic-webfont.woff",revision:"79b7114e6310e7f3751e026ae10b85db"},{url:"/fonts/bms-humanity-nw/bmshumanitynw-italic-webfont.woff2",revision:"c463c8fdabe9a39b3a7b7b5b428004d7"},{url:"/fonts/bms-humanity-nw/bmshumanitynw-light-webfont.woff",revision:"4fd4e8ff2e8468bdc44bec66e2a05ebc"},{url:"/fonts/bms-humanity-nw/bmshumanitynw-light-webfont.woff2",revision:"5a93243a09f6eb4a4f65f35cd19dc936"},{url:"/fonts/bms-humanity-nw/bmshumanitynw-lightitalic-webfont.woff",revision:"8c7d3be88378134f760c4ed24c01abc4"},{url:"/fonts/bms-humanity-nw/bmshumanitynw-lightitalic-webfont.woff2",revision:"9fbd13e0b9d87cd5a48e2d884dc3ab0d"},{url:"/fonts/bms-humanity-nw/bmshumanitynw-regular-webfont.woff",revision:"68d6d139b56bb7c43ed9e1bf3f726b45"},{url:"/fonts/bms-humanity-nw/bmshumanitynw-regular-webfont.woff2",revision:"a5a5331ed3d93043b5f0cfd4f9a7fe1b"},{url:"/fonts/bms-humanity-nw/bmshumanitynw-thin-webfont.woff",revision:"513a4099d2e5826f04d828c9f6386080"},{url:"/fonts/bms-humanity-nw/bmshumanitynw-thin-webfont.woff2",revision:"53c5fae69414fb9b4e878935d3e793ab"},{url:"/fonts/bms-humanity-nw/bmshumanitynw-thinitalic-webfont.woff",revision:"b54c8aaedfc9cd291c02fba6d4c65c12"},{url:"/fonts/bms-humanity-nw/bmshumanitynw-thinitalic-webfont.woff2",revision:"3d4ea9af73e50cf686a81f38d28bdf81"},{url:"/fonts/bms-humanity/bmshumanity-bold-webfont.woff",revision:"dfded1e48343966ceba930b472eb0086"},{url:"/fonts/bms-humanity/bmshumanity-bold-webfont.woff2",revision:"c56890a8780705b4aac04759a37542fc"},{url:"/fonts/bms-humanity/bmshumanity-bolditalic-webfont.woff",revision:"5eddd060ac22a805cf422c34dec38825"},{url:"/fonts/bms-humanity/bmshumanity-bolditalic-webfont.woff2",revision:"f7bac366688c48a0ef89026e556d02eb"},{url:"/fonts/bms-humanity/bmshumanity-extrabold-webfont.woff",revision:"91e634521cac94bbb7d1c8e1d28715dd"},{url:"/fonts/bms-humanity/bmshumanity-extrabold-webfont.woff2",revision:"6ae029f146d0fcbe8635edf6e93d0426"},{url:"/fonts/bms-humanity/bmshumanity-italic-webfont.woff",revision:"30b58dad007953933ef1946bb1f8978c"},{url:"/fonts/bms-humanity/bmshumanity-italic-webfont.woff2",revision:"fdb64c89830727342bbb80dc89c5b0d8"},{url:"/fonts/bms-humanity/bmshumanity-light-webfont.woff",revision:"774fd6be15e5bf9bf48727893e39700a"},{url:"/fonts/bms-humanity/bmshumanity-light-webfont.woff2",revision:"6e6099888067a3efd84bbbf82c1d9a47"},{url:"/fonts/bms-humanity/bmshumanity-lightitalic-webfont.woff",revision:"7ad842a99f717eb3745b0072ab7125dc"},{url:"/fonts/bms-humanity/bmshumanity-lightitalic-webfont.woff2",revision:"3ea9ad38d3fd8c29bc5008e2562fd802"},{url:"/fonts/bms-humanity/bmshumanity-regular-webfont.woff",revision:"e533a9e4016e32e48d5f6ca16269536e"},{url:"/fonts/bms-humanity/bmshumanity-regular-webfont.woff2",revision:"5b8cb74fc8d4e93fcc0ecc14f49d50a9"},{url:"/fonts/bms-humanity/bmshumanity-thin-webfont.woff",revision:"3b585141e4204ee657e0191d841cd35b"},{url:"/fonts/bms-humanity/bmshumanity-thin-webfont.woff2",revision:"3709c4aa26f3a7b6dc16c5a27c26d9f9"},{url:"/fonts/bms-humanity/bmshumanity-thinitalic-webfont.woff",revision:"116128cd0c96aa1e133636926ad71d32"},{url:"/fonts/bms-humanity/bmshumanity-thinitalic-webfont.woff2",revision:"f35f6d4891ad70fd6784939ca99cdccd"},{url:"/images/BMSLogo.svg",revision:"40d5ca384207e2720f72163f508194bd"},{url:"/images/BMSLogoSmall.svg",revision:"2719f74461f15811b6713221f92f95c0"},{url:"/images/cards/access.svg",revision:"8e26d3248cb3999c6034025daa6e5296"},{url:"/images/cards/enrollment.svg",revision:"05dfffeb2940b29650d6066cf5c53f92"},{url:"/images/cards/financial-assistance.svg",revision:"ebdb15487ad21e5a48b1131b4b23a3c4"},{url:"/images/cards/patient-resources.svg",revision:"62cf219201c69bbc3d000418e06dab2e"},{url:"/images/computerFrames/frame-1.svg",revision:"abc5eda482b2e171b122ced3317d8edd"},{url:"/images/content/A_Guide_to_Medicare_Part_D_2023_thumbnail.png",revision:"990f28fdc0bd4493e7071b520ce69698"},{url:"/images/content/EnrollmentFormContentImage-1.png",revision:"f43e1003eae000e8f7680705fd08fe0e"},{url:"/images/content/EnrollmentFormContentImage-2.png",revision:"4f97e48e71b751b381cde9dd1c22c0ab"},{url:"/images/content/EnrollmentFormContentImage-3.png",revision:"7a06da5c50d151c2ee8a0dcc89cf3e14"},{url:"/images/content/EnrollmentFormContentImage-4.png",revision:"cbf5ee6b41e302270112a5293d003b27"},{url:"/images/content/EnrollmentFormContentImage.png",revision:"33907ae193b45828f63ba406c3ff9178"},{url:"/images/content/Patient_Brochure_thumbnail.png",revision:"9828434910b33e382b6c9742427e75ce"},{url:"/images/content/Patient_Reimbursement_Process_Map.png",revision:"3bf6517f39a1efe71cf7821ebd15fa6f"},{url:"/images/content/Understanding_Healthcare_Benefits_thumbnail.jpg",revision:"cec73d4856735bc4c5c8434c577d8e8f"},{url:"/images/content/appeals-img.png",revision:"eacdcc994f3a4f4ede363cbc8f441c2e"},{url:"/images/content/as-video-generic-poster_ss.png",revision:"8c54c81bc77276f3484a3382cb246f0e"},{url:"/images/content/assistpoint_supporting-image.png",revision:"a85a5fe3214367aabe852a586e080f80"},{url:"/images/content/billing-coding-medselector-img-v2.png",revision:"7bc9bf3cbb54b975cda675f41e1af901"},{url:"/images/content/billing-coding-medselector-img.png",revision:"3ffbcdc793a5f12db46abaf5990d28ec"},{url:"/images/content/bmsas-charitable-foundations-resource.png",revision:"2c066bcc563572a96ef6993e966d3722"},{url:"/images/content/commerical-patients-image-1-v2.png",revision:"ac6c7efa0dd39cc10aee4035b44dc7cd"},{url:"/images/content/commerical-patients-image-1-v3.png",revision:"6a65c63a7b061e14b85456aef194eb90"},{url:"/images/content/commerical-patients-image-1.jpg",revision:"63dfa2d545b3f3e1dd3a404c732bcbd1"},{url:"/images/content/commerical-patients-image-1.png",revision:"c4a3f1cb323ab0de9cac07890e39e0ff"},{url:"/images/content/commerical-patients-image-2-v3.png",revision:"5a5e8841b2224cb81e41ba8f63617c25"},{url:"/images/content/commerical-patients-image-2.jpg",revision:"be361269049d950e1e9128965b82a37b"},{url:"/images/content/commerical-patients-image-2.png",revision:"54783d807a55e87086ca90e3c3306955"},{url:"/images/content/pa-appeals-supporting.png",revision:"6bb95a25e1621a493d816da1808b8385"},{url:"/images/content/provider-portal-img.png",revision:"d0697b20cfd8790fefa53b52d9e0c346"},{url:"/images/content/sob-sample-form-thumbnail-1.png",revision:"50cb944dee1fb075855db797ac5f4eef"},{url:"/images/doors/doors-bg-1.svg",revision:"f3332589f384d110677db3cd32a9bae5"},{url:"/images/doors/doors-bg-2.svg",revision:"c62bd4e9f3fae0404cf0e2bbecd52268"},{url:"/images/doors/doors-bg-3.svg",revision:"8c0df19c10184349951491d5bb3918d0"},{url:"/images/doors/doors-bg-4.svg",revision:"49da738d0cfb4afabce279eb73bfb229"},{url:"/images/grovery-logo.svg",revision:"89591192f7a6fe43b01a714aced83074"},{url:"/images/groverylogo_color.svg",revision:"6bfaeaa84fa8df1b244d06b0b4f5d5e8"},{url:"/images/home-background.svg",revision:"807c8bec2fe8b8d03763f7d51e8a013d"},{url:"/images/icons/cardIconEnrollment.svg",revision:"1f44e0c229fa2cbb7683246999452c02"},{url:"/images/icons/cardIconFinancial.svg",revision:"5be5c1cb95372b32e6cacfa373b83421"},{url:"/images/icons/cardIconResources.svg",revision:"867cf9d7212968d6cbfda9a48e0836f9"},{url:"/images/icons/cardIconSupport.svg",revision:"9c4d42fca5630a0e97feb3260a091cb4"},{url:"/images/icons/contentCalendarIcon.svg",revision:"c5c025148f1ece09d75d6235b932ee95"},{url:"/images/icons/contentClipboardIcon.svg",revision:"fb4e6580ff8cc212d7eb1ff63e86a042"},{url:"/images/icons/contentComputerScreen.svg",revision:"e6de177238fd2f09f167f73be1cc56cb"},{url:"/images/icons/contentFormIcon.svg",revision:"b8d0a02ef43eecb2651c256c2821e9b7"},{url:"/images/icons/contentListIcon.svg",revision:"4cf4e337cff8d8eb3e77df836a3ae791"},{url:"/images/icons/contentPrinterIcon.svg",revision:"145ec038678c7b046ce51498a2964dff"},{url:"/images/icons/iconIdleTimer.svg",revision:"d469d86d91b554f2c9e66a50f3423f91"},{url:"/images/icons/sidebarAccessCard.svg",revision:"36f5239f53b720ccf1ff57f4a24832d3"},{url:"/images/icons/sidebarBack.svg",revision:"1dd7d71c1d122029301067d48f8034e1"},{url:"/images/icons/sidebarHome.svg",revision:"43d23f6724b63566e112f76d0b3abd65"},{url:"/images/icons/sidebarSupport.svg",revision:"b7b159fa428b9773c70c0a14e4087225"},{url:"/images/icons/support-modal-icon-1.png",revision:"5eeba206fb60b37c32fde20fc652b9d1"},{url:"/images/icons/support-modal-icon-2.png",revision:"ca542001a1ad7ff5437a3018453068ff"},{url:"/images/icons/support-modal-icon-3.png",revision:"d260834db2cc23df7a7d10484495b519"},{url:"/images/icons/wirelessBlue.svg",revision:"d14502c5375a6e3df27dbf42137c268b"},{url:"/images/icons/wirelessGreen.svg",revision:"acf48e1967ecf3ebaa5306bcd30e2edd"},{url:"/images/icons/wirelessRed.svg",revision:"541e1da40fe4d8f64f0238f05783cb8d"},{url:"/images/icons/wirelessYellow.svg",revision:"0282b429fca3473c270b409704beb85d"},{url:"/images/planet-caravan-studios-logo.png",revision:"c6860b580a75cd6a1522d1c139c2b75a"},{url:"/images/thumbnails/N0-US-2200225_BMS10288 AS Sample SOB Form_Site of Care_FINAL.png",revision:"2c893dee92fc41e97f5640b3458cce6a"},{url:"/images/thumbnails/NO-US-2200487_A_Guide_to_Medicare_Part_D_2023_thumb2x.jpg",revision:"3b20274e965c646cd423163ba4aecc99"},{url:"/images/thumbnails/Oncology_Enrollment_Form_EN.jpg",revision:"fd1998b60c70af898093ad43557fbfd0"},{url:"/images/thumbnails/PatientBrochure_Thumb.png",revision:"e3d5779c9ad4b50bab446fcaf7dd7c39"},{url:"/images/thumbnails/Patient_Reimbursement_Process_Map_thumb.png",revision:"221f16ba2d3f28f246863b6c191cf723"},{url:"/images/thumbnails/Understanding_Healthcare_Benefits_thumb.png",revision:"a192e4ed860644c3ee1941888c0bd3d3"},{url:"/images/transitionScreens/screen-1.svg",revision:"b20c61e8aaffcf30da126497e6566782"},{url:"/images/transitionScreens/screen-10.svg",revision:"019f4c1cff3ecb01923666bf7f9b4060"},{url:"/images/transitionScreens/screen-2.svg",revision:"d04874de798948e58469e798cce63597"},{url:"/images/transitionScreens/screen-3.svg",revision:"0aca909222b9bc0982a4afe1441f8570"},{url:"/images/transitionScreens/screen-4.svg",revision:"1dae459f1002cac8cefe36dbf2345607"},{url:"/images/transitionScreens/screen-5.svg",revision:"61c4048464ca905dc9631fd620d957e6"},{url:"/images/transitionScreens/screen-6.svg",revision:"74a6e057b71905257190d83b62e1d2be"},{url:"/images/transitionScreens/screen-7.svg",revision:"84ead8a7424e16eabee1b1591144cd23"},{url:"/images/transitionScreens/screen-8.svg",revision:"5aa493d7a111d1633ac6a84ee806bc7b"},{url:"/images/transitionScreens/screen-9.svg",revision:"090a43212f46cc7e5678d04433bd2c5d"},{url:"/manifest.json",revision:"a5f228d5064caeb83fc2ca1de127be08"},{url:"/pdf/A_Guide_to_Medicare_Part_D_2023.pdf",revision:"e03b6ea9a7fbc32f551ad7b57737027c"},{url:"/pdf/Abraxane_Reblozyl_T_C.pdf",revision:"07175f5bf143f616e1fedac773f78e76"},{url:"/pdf/Empliciti_Opdivo_O_Y_Opdualag_Yervoy_T_C.pdf",revision:"e09b3b70335c6f8b6e8fc65ef67142a5"},{url:"/pdf/Heme_Orals_Terms_and_Conditions.pdf",revision:"bfcd8a2e485799ef7951377a705e789e"},{url:"/pdf/N0-US-2200225_BMS10288 AS Sample SOB Form_Site of Care_FINAL.pdf",revision:"be91adf370a94abc295453cc0db006cb"},{url:"/pdf/Oncology_Enrollment_Form_EN.pdf",revision:"3ce7dca98c1d32b601f7512fef42a1a4"},{url:"/pdf/Patient_Brochure.pdf",revision:"142177d95dfb3109713abf9d39c42652"},{url:"/pdf/Patient_Reimbursement_Process_Map.pdf",revision:"928e36815d74fcbd83b1da0274c7db82"},{url:"/pdf/Sprycel_Terms_and_Conditions_Copay_Card.pdf",revision:"794ffea2c370664696ccd10a0a14198f"},{url:"/pdf/Understanding_Healthcare_Benefits.pdf",revision:"6f4a5b6557a84c4921d4393af76c7d98"},{url:"/pdf/test.pdf",revision:"047714a251ce17a7dcd4eb06e5d36917"},{url:"/pwa-icons/android-chrome-192x192.png",revision:"741f4c2022c52c0f3ba1907c77bd031b"},{url:"/pwa-icons/android-chrome-384x384.png",revision:"ca7bf8bd35745c0074a431538e10fa1d"},{url:"/pwa-icons/icon-512x512.png",revision:"fdea8ec605653e5febef5227d4d36e06"},{url:"/pwa-icons/touch-icon-ipad-retina.png",revision:"8ae32b54a4418be959224eebd2c758ec"},{url:"/pwa-icons/touch-icon-ipad.png",revision:"d8613aa3a59f136ecc3adb764f6e9901"},{url:"/pwa-icons/touch-icon-iphone-retina.png",revision:"7cf421e450afa71b589d56f7645e493c"},{url:"/robots.txt",revision:"9e285cb2ddf79dbabc4291c096f17ecd"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:i,event:n,state:s})=>i&&"opaqueredirect"===i.type?new Response(i.body,{status:200,statusText:"OK",headers:i.headers}):i}]}),"GET"),e.registerRoute("**/.(?:html|js|css|jpg|png|svg)$/,",new e.NetworkFirst,"GET")}));
