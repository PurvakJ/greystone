// pages/Catalog.jsx
import React, { useState, useEffect } from 'react';
import './catalog.css';

const Catalog = () => {
  const [searchTerm] = useState('');
  const [selectedCategory] = useState('All');
  const [isLoading, setIsLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(12);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const catalogImages = [
    // ========================================
    // CLEANED LOUVERS V2 (00-80)
    // ========================================
    { id: 1, src: 'https://i.postimg.cc/pddFjj5w/cleaned-louvers-v2-00.png', category: 'Louvers', title: 'Cleaned Louvers V2 - 00' },
    { id: 2, src: 'https://i.postimg.cc/pLCjyCrZ/cleaned-louvers-v2-01.png', category: 'Louvers', title: 'Cleaned Louvers V2 - 01' },
    { id: 3, src: 'https://i.postimg.cc/CKKq88nJ/cleaned-louvers-v2-02.png', category: 'Louvers', title: 'Cleaned Louvers V2 - 02' },
    { id: 4, src: 'https://i.postimg.cc/dV6CD63n/cleaned-louvers-v2-03.png', category: 'Louvers', title: 'Cleaned Louvers V2 - 03' },
    { id: 5, src: 'https://i.postimg.cc/QMnWJMps/cleaned-louvers-v2-04.png', category: 'Louvers', title: 'Cleaned Louvers V2 - 04' },
    { id: 6, src: 'https://i.postimg.cc/FKnJVKjK/cleaned-louvers-v2-05.png', category: 'Louvers', title: 'Cleaned Louvers V2 - 05' },
    { id: 7, src: 'https://i.postimg.cc/W4fJw4MJ/cleaned-louvers-v2-06.png', category: 'Louvers', title: 'Cleaned Louvers V2 - 06' },
    { id: 8, src: 'https://i.postimg.cc/XvDykvw5/cleaned-louvers-v2-07.png', category: 'Louvers', title: 'Cleaned Louvers V2 - 07' },
    { id: 9, src: 'https://i.postimg.cc/pTh5GtZ9/cleaned-louvers-v2-08.png', category: 'Louvers', title: 'Cleaned Louvers V2 - 08' },
    { id: 10, src: 'https://i.postimg.cc/gJXLSPDx/cleaned-louvers-v2-09.png', category: 'Louvers', title: 'Cleaned Louvers V2 - 09' },
    { id: 11, src: 'https://i.postimg.cc/9MRw8jp9/cleaned-louvers-v2-10.png', category: 'Louvers', title: 'Cleaned Louvers V2 - 10' },
    { id: 12, src: 'https://i.postimg.cc/tTZnSH53/cleaned-louvers-v2-11.png', category: 'Louvers', title: 'Cleaned Louvers V2 - 11' },
    { id: 13, src: 'https://i.postimg.cc/XJRGtDHQ/cleaned-louvers-v2-12.png', category: 'Louvers', title: 'Cleaned Louvers V2 - 12' },
    { id: 14, src: 'https://i.postimg.cc/63k2F1jH/cleaned-louvers-v2-13.png', category: 'Louvers', title: 'Cleaned Louvers V2 - 13' },
    { id: 15, src: 'https://i.postimg.cc/pTwh31cP/cleaned-louvers-v2-14.png', category: 'Louvers', title: 'Cleaned Louvers V2 - 14' },
    { id: 16, src: 'https://i.postimg.cc/k406LhYn/cleaned-louvers-v2-15.png', category: 'Louvers', title: 'Cleaned Louvers V2 - 15' },
    { id: 17, src: 'https://i.postimg.cc/h4m7VchW/cleaned-louvers-v2-16.png', category: 'Louvers', title: 'Cleaned Louvers V2 - 16' },
    { id: 18, src: 'https://i.postimg.cc/vT5gyLCM/cleaned-louvers-v2-17.png', category: 'Louvers', title: 'Cleaned Louvers V2 - 17' },
    { id: 19, src: 'https://i.postimg.cc/sDRGcqZZ/cleaned-louvers-v2-18.png', category: 'Louvers', title: 'Cleaned Louvers V2 - 18' },
    { id: 20, src: 'https://i.postimg.cc/YqwL3Zm2/cleaned-louvers-v2-19.png', category: 'Louvers', title: 'Cleaned Louvers V2 - 19' },
    { id: 21, src: 'https://i.postimg.cc/HsC82R7x/cleaned-louvers-v2-20.png', category: 'Louvers', title: 'Cleaned Louvers V2 - 20' },
    { id: 22, src: 'https://i.postimg.cc/4xWKX327/cleaned-louvers-v2-21.png', category: 'Louvers', title: 'Cleaned Louvers V2 - 21' },
    { id: 23, src: 'https://i.postimg.cc/MG4vjFSX/cleaned-louvers-v2-22.png', category: 'Louvers', title: 'Cleaned Louvers V2 - 22' },
    { id: 24, src: 'https://i.postimg.cc/hGwf75Bd/cleaned-louvers-v2-23.png', category: 'Louvers', title: 'Cleaned Louvers V2 - 23' },
    { id: 25, src: 'https://i.postimg.cc/fbkVyh6Z/cleaned-louvers-v2-24.png', category: 'Louvers', title: 'Cleaned Louvers V2 - 24' },
    { id: 26, src: 'https://i.postimg.cc/762b1nHX/cleaned-louvers-v2-25.png', category: 'Louvers', title: 'Cleaned Louvers V2 - 25' },
    { id: 27, src: 'https://i.postimg.cc/cCGCFtC2/cleaned-louvers-v2-26.png', category: 'Louvers', title: 'Cleaned Louvers V2 - 26' },
    { id: 28, src: 'https://i.postimg.cc/kGPGTRD6/cleaned-louvers-v2-27.png', category: 'Louvers', title: 'Cleaned Louvers V2 - 27' },
    { id: 29, src: 'https://i.postimg.cc/QCZCfKVF/cleaned-louvers-v2-28.png', category: 'Louvers', title: 'Cleaned Louvers V2 - 28' },
    { id: 30, src: 'https://i.postimg.cc/tJdTwRVY/cleaned-louvers-v2-29.png', category: 'Louvers', title: 'Cleaned Louvers V2 - 29' },
    { id: 31, src: 'https://i.postimg.cc/Kj7zwcgt/cleaned-louvers-v2-30.png', category: 'Louvers', title: 'Cleaned Louvers V2 - 30' },
    { id: 32, src: 'https://i.postimg.cc/Hn0xRW7t/cleaned-louvers-v2-31.png', category: 'Louvers', title: 'Cleaned Louvers V2 - 31' },
    { id: 33, src: 'https://i.postimg.cc/PJbx9f8y/cleaned-louvers-v2-32.png', category: 'Louvers', title: 'Cleaned Louvers V2 - 32' },
    { id: 34, src: 'https://i.postimg.cc/tRFYYkv8/cleaned-louvers-v2-33.png', category: 'Louvers', title: 'Cleaned Louvers V2 - 33' },
    { id: 35, src: 'https://i.postimg.cc/qM0gnK9t/cleaned-louvers-v2-34.png', category: 'Louvers', title: 'Cleaned Louvers V2 - 34' },
    { id: 36, src: 'https://i.postimg.cc/h4Vffs37/cleaned-louvers-v2-35.png', category: 'Louvers', title: 'Cleaned Louvers V2 - 35' },
    { id: 37, src: 'https://i.postimg.cc/7YDb7zp2/cleaned-louvers-v2-36.png', category: 'Louvers', title: 'Cleaned Louvers V2 - 36' },
    { id: 38, src: 'https://i.postimg.cc/m2RhM907/cleaned-louvers-v2-37.png', category: 'Louvers', title: 'Cleaned Louvers V2 - 37' },
    { id: 39, src: 'https://i.postimg.cc/PrhNZDBz/cleaned-louvers-v2-38.png', category: 'Louvers', title: 'Cleaned Louvers V2 - 38' },
    { id: 40, src: 'https://i.postimg.cc/ncZM7m6W/cleaned-louvers-v2-39.png', category: 'Louvers', title: 'Cleaned Louvers V2 - 39' },
    { id: 41, src: 'https://i.postimg.cc/28wyx6DG/cleaned-louvers-v2-40.png', category: 'Louvers', title: 'Cleaned Louvers V2 - 40' },
    { id: 42, src: 'https://i.postimg.cc/Yq30x9Hb/cleaned-louvers-v2-41.png', category: 'Louvers', title: 'Cleaned Louvers V2 - 41' },
    { id: 43, src: 'https://i.postimg.cc/CLN541gt/cleaned-louvers-v2-42.png', category: 'Louvers', title: 'Cleaned Louvers V2 - 42' },
    { id: 44, src: 'https://i.postimg.cc/g22JtWcJ/cleaned-louvers-v2-43.png', category: 'Louvers', title: 'Cleaned Louvers V2 - 43' },
    { id: 45, src: 'https://i.postimg.cc/qvD795g5/cleaned-louvers-v2-44.png', category: 'Louvers', title: 'Cleaned Louvers V2 - 44' },
    { id: 46, src: 'https://i.postimg.cc/dVN0zxDz/cleaned-louvers-v2-45.png', category: 'Louvers', title: 'Cleaned Louvers V2 - 45' },
    { id: 47, src: 'https://i.postimg.cc/XvTYvBf7/cleaned-louvers-v2-46.png', category: 'Louvers', title: 'Cleaned Louvers V2 - 46' },
    { id: 48, src: 'https://i.postimg.cc/xdW1dNvG/cleaned-louvers-v2-47.png', category: 'Louvers', title: 'Cleaned Louvers V2 - 47' },
    { id: 49, src: 'https://i.postimg.cc/25PS5LQ2/cleaned-louvers-v2-48.png', category: 'Louvers', title: 'Cleaned Louvers V2 - 48' },
    { id: 50, src: 'https://i.postimg.cc/yNw8N3mT/cleaned-louvers-v2-49.png', category: 'Louvers', title: 'Cleaned Louvers V2 - 49' },
    { id: 51, src: 'https://i.postimg.cc/PxYrvfy3/cleaned-louvers-v2-50.png', category: 'Louvers', title: 'Cleaned Louvers V2 - 50' },
    { id: 52, src: 'https://i.postimg.cc/760YJPXr/cleaned-louvers-v2-51.png', category: 'Louvers', title: 'Cleaned Louvers V2 - 51' },
    { id: 53, src: 'https://i.postimg.cc/V6nL0sgV/cleaned-louvers-v2-52.png', category: 'Louvers', title: 'Cleaned Louvers V2 - 52' },
    { id: 54, src: 'https://i.postimg.cc/ydcY36j2/cleaned-louvers-v2-53.png', category: 'Louvers', title: 'Cleaned Louvers V2 - 53' },
    { id: 55, src: 'https://i.postimg.cc/k4KXRMwm/cleaned-louvers-v2-54.png', category: 'Louvers', title: 'Cleaned Louvers V2 - 54' },
    { id: 56, src: 'https://i.postimg.cc/wMzxXK4Z/cleaned-louvers-v2-55.png', category: 'Louvers', title: 'Cleaned Louvers V2 - 55' },
    { id: 57, src: 'https://i.postimg.cc/7h4P3vQv/cleaned-louvers-v2-56.png', category: 'Louvers', title: 'Cleaned Louvers V2 - 56' },
    { id: 58, src: 'https://i.postimg.cc/PJHfWGVg/cleaned-louvers-v2-57.png', category: 'Louvers', title: 'Cleaned Louvers V2 - 57' },
    { id: 59, src: 'https://i.postimg.cc/QCDNQLn3/cleaned-louvers-v2-58.png', category: 'Louvers', title: 'Cleaned Louvers V2 - 58' },
    { id: 60, src: 'https://i.postimg.cc/J087NwdR/cleaned-louvers-v2-59.png', category: 'Louvers', title: 'Cleaned Louvers V2 - 59' },
    { id: 61, src: 'https://i.postimg.cc/L5V9vyrN/cleaned-louvers-v2-60.png', category: 'Louvers', title: 'Cleaned Louvers V2 - 60' },
    { id: 62, src: 'https://i.postimg.cc/d3FQ2MSr/cleaned-louvers-v2-61.png', category: 'Louvers', title: 'Cleaned Louvers V2 - 61' },
    { id: 63, src: 'https://i.postimg.cc/4y1fw8rL/cleaned-louvers-v2-62.png', category: 'Louvers', title: 'Cleaned Louvers V2 - 62' },
    { id: 64, src: 'https://i.postimg.cc/zDwGJBVh/cleaned-louvers-v2-63.png', category: 'Louvers', title: 'Cleaned Louvers V2 - 63' },
    { id: 65, src: 'https://i.postimg.cc/xTtjz4Gr/cleaned-louvers-v2-64.png', category: 'Louvers', title: 'Cleaned Louvers V2 - 64' },
    { id: 66, src: 'https://i.postimg.cc/KvJcMH73/cleaned-louvers-v2-65.png', category: 'Louvers', title: 'Cleaned Louvers V2 - 65' },
    { id: 67, src: 'https://i.postimg.cc/qMjB35cg/cleaned-louvers-v2-66.png', category: 'Louvers', title: 'Cleaned Louvers V2 - 66' },
    { id: 68, src: 'https://i.postimg.cc/hPp4d58X/cleaned-louvers-v2-67.png', category: 'Louvers', title: 'Cleaned Louvers V2 - 67' },
    { id: 69, src: 'https://i.postimg.cc/4xyfbQwp/cleaned-louvers-v2-68.png', category: 'Louvers', title: 'Cleaned Louvers V2 - 68' },
    { id: 70, src: 'https://i.postimg.cc/pLS2056P/cleaned-louvers-v2-69.png', category: 'Louvers', title: 'Cleaned Louvers V2 - 69' },
    { id: 71, src: 'https://i.postimg.cc/wjr6WRGq/cleaned-louvers-v2-70.png', category: 'Louvers', title: 'Cleaned Louvers V2 - 70' },
    { id: 72, src: 'https://i.postimg.cc/xdb9BjwN/cleaned-louvers-v2-71.png', category: 'Louvers', title: 'Cleaned Louvers V2 - 71' },
    { id: 73, src: 'https://i.postimg.cc/Gpsb63Wv/cleaned-louvers-v2-72.png', category: 'Louvers', title: 'Cleaned Louvers V2 - 72' },
    { id: 74, src: 'https://i.postimg.cc/C1Tw0T0b/cleaned-louvers-v2-73.png', category: 'Louvers', title: 'Cleaned Louvers V2 - 73' },
    { id: 75, src: 'https://i.postimg.cc/vTGM1rcy/cleaned-louvers-v2-74.png', category: 'Louvers', title: 'Cleaned Louvers V2 - 74' },
    { id: 76, src: 'https://i.postimg.cc/1XyPgGfZ/cleaned-louvers-v2-75.png', category: 'Louvers', title: 'Cleaned Louvers V2 - 75' },
    { id: 77, src: 'https://i.postimg.cc/j2RKWHLR/cleaned-louvers-v2-76.png', category: 'Louvers', title: 'Cleaned Louvers V2 - 76' },
    { id: 78, src: 'https://i.postimg.cc/6qBw7ry3/cleaned-louvers-v2-77.png', category: 'Louvers', title: 'Cleaned Louvers V2 - 77' },
    { id: 79, src: 'https://i.postimg.cc/Vvz1Sqdt/cleaned-louvers-v2-78.png', category: 'Louvers', title: 'Cleaned Louvers V2 - 78' },
    { id: 80, src: 'https://i.postimg.cc/6qzKC8vd/cleaned-louvers-v2-79.png', category: 'Louvers', title: 'Cleaned Louvers V2 - 79' },
    { id: 81, src: 'https://i.postimg.cc/RhGmwWHw/cleaned-louvers-v2-80.png', category: 'Louvers', title: 'Cleaned Louvers V2 - 80' },
  
    // ========================================
    // FLUTED LOUVERS NEW (00-19)
    // ========================================
    { id: 82, src: 'https://i.postimg.cc/Bnj31QQ8/FLUTED-LOUVERS-NEW-page-0001-00.png', category: 'Fluted Louvers', title: 'Fluted Louvers New - 00' },
    { id: 83, src: 'https://i.postimg.cc/HsZHx7HM/FLUTED-LOUVERS-NEW-page-0001-01.png', category: 'Fluted Louvers', title: 'Fluted Louvers New - 01' },
    { id: 84, src: 'https://i.postimg.cc/vZ4y6HHV/FLUTED-LOUVERS-NEW-page-0001-02.png', category: 'Fluted Louvers', title: 'Fluted Louvers New - 02' },
    { id: 85, src: 'https://i.postimg.cc/t4sbVCC3/FLUTED-LOUVERS-NEW-page-0001-03.png', category: 'Fluted Louvers', title: 'Fluted Louvers New - 03' },
    { id: 86, src: 'https://i.postimg.cc/cJYNX93h/FLUTED-LOUVERS-NEW-page-0001-04.png', category: 'Fluted Louvers', title: 'Fluted Louvers New - 04' },
    { id: 87, src: 'https://i.postimg.cc/fLNQFc79/FLUTED-LOUVERS-NEW-page-0001-05.png', category: 'Fluted Louvers', title: 'Fluted Louvers New - 05' },
    { id: 88, src: 'https://i.postimg.cc/MTSJ470V/FLUTED-LOUVERS-NEW-page-0001-06.png', category: 'Fluted Louvers', title: 'Fluted Louvers New - 06' },
    { id: 89, src: 'https://i.postimg.cc/ydHC5mhF/FLUTED-LOUVERS-NEW-page-0001-07.png', category: 'Fluted Louvers', title: 'Fluted Louvers New - 07' },
    { id: 90, src: 'https://i.postimg.cc/pTHM7fQY/FLUTED-LOUVERS-NEW-page-0001-08.png', category: 'Fluted Louvers', title: 'Fluted Louvers New - 08' },
    { id: 91, src: 'https://i.postimg.cc/tTjGf3d5/FLUTED-LOUVERS-NEW-page-0001-09.png', category: 'Fluted Louvers', title: 'Fluted Louvers New - 09' },
    { id: 92, src: 'https://i.postimg.cc/cHSGjR79/FLUTED-LOUVERS-NEW-page-0001-10.png', category: 'Fluted Louvers', title: 'Fluted Louvers New - 10' },
    { id: 93, src: 'https://i.postimg.cc/vBswjr72/FLUTED-LOUVERS-NEW-page-0001-11.png', category: 'Fluted Louvers', title: 'Fluted Louvers New - 11' },
    { id: 94, src: 'https://i.postimg.cc/xC2V7vGw/FLUTED-LOUVERS-NEW-page-0001-12.png', category: 'Fluted Louvers', title: 'Fluted Louvers New - 12' },
    { id: 95, src: 'https://i.postimg.cc/26DNJQFR/FLUTED-LOUVERS-NEW-page-0001-13.png', category: 'Fluted Louvers', title: 'Fluted Louvers New - 13' },
    { id: 96, src: 'https://i.postimg.cc/hj1RqXMZ/FLUTED-LOUVERS-NEW-page-0001-14.png', category: 'Fluted Louvers', title: 'Fluted Louvers New - 14' },
    { id: 97, src: 'https://i.postimg.cc/RFLxzWGY/FLUTED-LOUVERS-NEW-page-0001-15.png', category: 'Fluted Louvers', title: 'Fluted Louvers New - 15' },
    { id: 98, src: 'https://i.postimg.cc/3RFQHknH/FLUTED-LOUVERS-NEW-page-0001-16.png', category: 'Fluted Louvers', title: 'Fluted Louvers New - 16' },
    { id: 99, src: 'https://i.postimg.cc/W3wcPdXc/FLUTED-LOUVERS-NEW-page-0001-17.png', category: 'Fluted Louvers', title: 'Fluted Louvers New - 17' },
    { id: 100, src: 'https://i.postimg.cc/vBtwd438/FLUTED-LOUVERS-NEW-page-0001-18.png', category: 'Fluted Louvers', title: 'Fluted Louvers New - 18' },
    { id: 101, src: 'https://i.postimg.cc/zBFY1y0f/FLUTED-LOUVERS-NEW-page-0001-19.png', category: 'Fluted Louvers', title: 'Fluted Louvers New - 19' },
  
    // ========================================
    // NX-6H ACRYLIC (02-16)
    // ========================================
    { id: 102, src: 'https://i.postimg.cc/63fxN8Yq/NX-6H-ACRYLIC-page-0001-02.png', category: 'Acrylic', title: 'NX-6H Acrylic - 02' },
    { id: 103, src: 'https://i.postimg.cc/PxQnkC2N/NX-6H-ACRYLIC-page-0001-03.png', category: 'Acrylic', title: 'NX-6H Acrylic - 03' },
    { id: 104, src: 'https://i.postimg.cc/tJRQR9MR/NX-6H-ACRYLIC-page-0001-04.png', category: 'Acrylic', title: 'NX-6H Acrylic - 04' },
    { id: 105, src: 'https://i.postimg.cc/cC1y1dbx/NX-6H-ACRYLIC-page-0001-05.png', category: 'Acrylic', title: 'NX-6H Acrylic - 05' },
    { id: 106, src: 'https://i.postimg.cc/Gt3w3b5h/NX-6H-ACRYLIC-page-0001-06.png', category: 'Acrylic', title: 'NX-6H Acrylic - 06' },
    { id: 107, src: 'https://i.postimg.cc/tJRQR9MS/NX-6H-ACRYLIC-page-0001-07.png', category: 'Acrylic', title: 'NX-6H Acrylic - 07' },
    { id: 108, src: 'https://i.postimg.cc/D0fkf7MC/NX-6H-ACRYLIC-page-0001-08.png', category: 'Acrylic', title: 'NX-6H Acrylic - 08' },
    { id: 109, src: 'https://i.postimg.cc/D0CV8R9q/NX-6H-ACRYLIC-page-0001-09.png', category: 'Acrylic', title: 'NX-6H Acrylic - 09' },
    { id: 110, src: 'https://i.postimg.cc/Kj9XRC6r/NX-6H-ACRYLIC-page-0001-10.png', category: 'Acrylic', title: 'NX-6H Acrylic - 10' },
    { id: 111, src: 'https://i.postimg.cc/wMWK7nCV/NX-6H-ACRYLIC-page-0001-11.png', category: 'Acrylic', title: 'NX-6H Acrylic - 11' },
    { id: 112, src: 'https://i.postimg.cc/7hBvfjFt/NX-6H-ACRYLIC-page-0001-12.png', category: 'Acrylic', title: 'NX-6H Acrylic - 12' },
    { id: 113, src: 'https://i.postimg.cc/vTPRcpRR/NX-6H-ACRYLIC-page-0001-13.png', category: 'Acrylic', title: 'NX-6H Acrylic - 13' },
    { id: 114, src: 'https://i.postimg.cc/kGjrBkrd/NX-6H-ACRYLIC-page-0001-14.png', category: 'Acrylic', title: 'NX-6H Acrylic - 14' },
    { id: 115, src: 'https://i.postimg.cc/yxfqkwqH/NX-6H-ACRYLIC-page-0001-15.png', category: 'Acrylic', title: 'NX-6H Acrylic - 15' },
    { id: 116, src: 'https://i.postimg.cc/ZnfkC1kJ/NX-6H-ACRYLIC-page-0001-16.png', category: 'Acrylic', title: 'NX-6H Acrylic - 16' },
  
    // ========================================
    // VENEER (00-109)
    // ========================================
    { id: 117, src: 'https://i.postimg.cc/66zxjG8k/VENEER-00.png', category: 'Veneer', title: 'Veneer - 00' },
    { id: 118, src: 'https://i.postimg.cc/tCTQLC6f/VENEER-01.png', category: 'Veneer', title: 'Veneer - 01' },
    { id: 119, src: 'https://i.postimg.cc/CL1TWL8Q/VENEER-02.png', category: 'Veneer', title: 'Veneer - 02' },
    { id: 120, src: 'https://i.postimg.cc/jd50GdNR/VENEER-03.png', category: 'Veneer', title: 'Veneer - 03' },
    { id: 121, src: 'https://i.postimg.cc/sDNdyd9W/VENEER-04.png', category: 'Veneer', title: 'Veneer - 04' },
    { id: 122, src: 'https://i.postimg.cc/ncPbZbYv/VENEER-05.png', category: 'Veneer', title: 'Veneer - 05' },
    { id: 123, src: 'https://i.postimg.cc/g2L92SNT/VENEER-06.png', category: 'Veneer', title: 'Veneer - 06' },
    { id: 124, src: 'https://i.postimg.cc/13Vx3CJk/VENEER-07.png', category: 'Veneer', title: 'Veneer - 07' },
    { id: 125, src: 'https://i.postimg.cc/kg006QHG/VENEER-08.png', category: 'Veneer', title: 'Veneer - 08' },
    { id: 126, src: 'https://i.postimg.cc/nLq6vs8L/VENEER-09.png', category: 'Veneer', title: 'Veneer - 09' },
    { id: 127, src: 'https://i.postimg.cc/qR0WQk0c/VENEER-10.png', category: 'Veneer', title: 'Veneer - 10' },
    { id: 128, src: 'https://i.postimg.cc/rp5vSd6n/VENEER-11.png', category: 'Veneer', title: 'Veneer - 11' },
    { id: 129, src: 'https://i.postimg.cc/26wMKPSR/VENEER-12.png', category: 'Veneer', title: 'Veneer - 12' },
    { id: 130, src: 'https://i.postimg.cc/ydPtbw8K/VENEER-13.png', category: 'Veneer', title: 'Veneer - 13' },
    { id: 131, src: 'https://i.postimg.cc/zBj6c9GV/VENEER-14.png', category: 'Veneer', title: 'Veneer - 14' },
    { id: 132, src: 'https://i.postimg.cc/QCdwG0FH/VENEER-15.png', category: 'Veneer', title: 'Veneer - 15' },
    { id: 133, src: 'https://i.postimg.cc/cCL2yXvn/VENEER-16.png', category: 'Veneer', title: 'Veneer - 16' },
    { id: 134, src: 'https://i.postimg.cc/HnkRDBrb/VENEER-17.png', category: 'Veneer', title: 'Veneer - 17' },
    { id: 135, src: 'https://i.postimg.cc/T13FMCKV/VENEER-18.png', category: 'Veneer', title: 'Veneer - 18' },
    { id: 136, src: 'https://i.postimg.cc/FzH85DY2/VENEER-19.png', category: 'Veneer', title: 'Veneer - 19' },
    { id: 137, src: 'https://i.postimg.cc/L5Q7HLPD/VENEER-20.png', category: 'Veneer', title: 'Veneer - 20' },
    { id: 138, src: 'https://i.postimg.cc/J7pScVFY/VENEER-21.png', category: 'Veneer', title: 'Veneer - 21' },
    { id: 139, src: 'https://i.postimg.cc/9XLst5SH/VENEER-22.png', category: 'Veneer', title: 'Veneer - 22' },
    { id: 140, src: 'https://i.postimg.cc/BQtkm79J/VENEER-23.png', category: 'Veneer', title: 'Veneer - 23' },
    { id: 141, src: 'https://i.postimg.cc/rFz3fZXp/VENEER-24.png', category: 'Veneer', title: 'Veneer - 24' },
    { id: 142, src: 'https://i.postimg.cc/rp2HF8d8/VENEER-25.png', category: 'Veneer', title: 'Veneer - 25' },
    { id: 143, src: 'https://i.postimg.cc/dVyXY70c/VENEER-26.png', category: 'Veneer', title: 'Veneer - 26' },
    { id: 144, src: 'https://i.postimg.cc/W4cyb2DR/VENEER-27.png', category: 'Veneer', title: 'Veneer - 27' },
    { id: 145, src: 'https://i.postimg.cc/G2qgQGX4/VENEER-28.png', category: 'Veneer', title: 'Veneer - 28' },
    { id: 146, src: 'https://i.postimg.cc/8ccKnc38/VENEER-29.png', category: 'Veneer', title: 'Veneer - 29' },
    { id: 147, src: 'https://i.postimg.cc/br5CX8cJ/VENEER-30.png', category: 'Veneer', title: 'Veneer - 30' },
    { id: 148, src: 'https://i.postimg.cc/FFCnkbfn/VENEER-31.png', category: 'Veneer', title: 'Veneer - 31' },
    { id: 149, src: 'https://i.postimg.cc/J7YdH3DC/VENEER-32.png', category: 'Veneer', title: 'Veneer - 32' },
    { id: 150, src: 'https://i.postimg.cc/YCYXPJdy/VENEER-33.png', category: 'Veneer', title: 'Veneer - 33' },
    { id: 151, src: 'https://i.postimg.cc/HkXSNfSn/VENEER-34.png', category: 'Veneer', title: 'Veneer - 34' },
    { id: 152, src: 'https://i.postimg.cc/jjT8YZ9h/VENEER-35.png', category: 'Veneer', title: 'Veneer - 35' },
    { id: 153, src: 'https://i.postimg.cc/FKvPXDqp/VENEER-36.png', category: 'Veneer', title: 'Veneer - 36' },
    { id: 154, src: 'https://i.postimg.cc/YSxdrQBK/VENEER-37.png', category: 'Veneer', title: 'Veneer - 37' },
    { id: 155, src: 'https://i.postimg.cc/7LNKHSrr/VENEER-38.png', category: 'Veneer', title: 'Veneer - 38' },
    { id: 156, src: 'https://i.postimg.cc/85PtjsTC/VENEER-39.png', category: 'Veneer', title: 'Veneer - 39' },
    { id: 157, src: 'https://i.postimg.cc/tTSDPygT/VENEER-40.png', category: 'Veneer', title: 'Veneer - 40' },
    { id: 158, src: 'https://i.postimg.cc/ZKyj9GzH/VENEER-41.png', category: 'Veneer', title: 'Veneer - 41' },
    { id: 159, src: 'https://i.postimg.cc/qMCQtPHQ/VENEER-42.png', category: 'Veneer', title: 'Veneer - 42' },
    { id: 160, src: 'https://i.postimg.cc/fRnCY8MF/VENEER-43.png', category: 'Veneer', title: 'Veneer - 43' },
    { id: 161, src: 'https://i.postimg.cc/qvsLw27S/VENEER-44.png', category: 'Veneer', title: 'Veneer - 44' },
    { id: 162, src: 'https://i.postimg.cc/FRRVhqxd/VENEER-45.png', category: 'Veneer', title: 'Veneer - 45' },
    { id: 163, src: 'https://i.postimg.cc/kGRNbbzB/VENEER-46.png', category: 'Veneer', title: 'Veneer - 46' },
    { id: 164, src: 'https://i.postimg.cc/rz61Cp29/VENEER-47.png', category: 'Veneer', title: 'Veneer - 47' },
    { id: 165, src: 'https://i.postimg.cc/qBWSZXk2/VENEER-48.png', category: 'Veneer', title: 'Veneer - 48' },
    { id: 166, src: 'https://i.postimg.cc/wjpP9qRv/VENEER-49.png', category: 'Veneer', title: 'Veneer - 49' },
    { id: 167, src: 'https://i.postimg.cc/2S7t6sn7/VENEER-50.png', category: 'Veneer', title: 'Veneer - 50' },
    { id: 168, src: 'https://i.postimg.cc/YCzP95QL/VENEER-51.png', category: 'Veneer', title: 'Veneer - 51' },
    { id: 169, src: 'https://i.postimg.cc/RZLYFkwy/VENEER-52.png', category: 'Veneer', title: 'Veneer - 52' },
    { id: 170, src: 'https://i.postimg.cc/mrd637XR/VENEER-53.png', category: 'Veneer', title: 'Veneer - 53' },
    { id: 171, src: 'https://i.postimg.cc/ZqYMywcn/VENEER-54.png', category: 'Veneer', title: 'Veneer - 54' },
    { id: 172, src: 'https://i.postimg.cc/6QH1VCj5/VENEER-55.png', category: 'Veneer', title: 'Veneer - 55' },
    { id: 173, src: 'https://i.postimg.cc/Xv2DK9HK/VENEER-56.png', category: 'Veneer', title: 'Veneer - 56' },
    { id: 174, src: 'https://i.postimg.cc/SxkZwgH8/VENEER-57.png', category: 'Veneer', title: 'Veneer - 57' },
    { id: 175, src: 'https://i.postimg.cc/qv4m91WK/VENEER-58.png', category: 'Veneer', title: 'Veneer - 58' },
    { id: 176, src: 'https://i.postimg.cc/6QQMQy9m/VENEER-59.png', category: 'Veneer', title: 'Veneer - 59' },
    { id: 177, src: 'https://i.postimg.cc/mgjdRQs4/VENEER-60.png', category: 'Veneer', title: 'Veneer - 60' },
    { id: 178, src: 'https://i.postimg.cc/JnDKbvHY/VENEER-61.png', category: 'Veneer', title: 'Veneer - 61' },
    { id: 179, src: 'https://i.postimg.cc/wvC2F2DS/VENEER-62.png', category: 'Veneer', title: 'Veneer - 62' },
    { id: 180, src: 'https://i.postimg.cc/vBJhXhW4/VENEER-63.png', category: 'Veneer', title: 'Veneer - 63' },
    { id: 181, src: 'https://i.postimg.cc/nzy2T2vm/VENEER-64.png', category: 'Veneer', title: 'Veneer - 64' },
    { id: 182, src: 'https://i.postimg.cc/GtvQfDQT/VENEER-65.png', category: 'Veneer', title: 'Veneer - 65' },
    { id: 183, src: 'https://i.postimg.cc/QN70VL3j/VENEER-66.png', category: 'Veneer', title: 'Veneer - 66' },
    { id: 184, src: 'https://i.postimg.cc/rFLgrhV9/VENEER-67.png', category: 'Veneer', title: 'Veneer - 67' },
    { id: 185, src: 'https://i.postimg.cc/J7XPtwLK/VENEER-68.png', category: 'Veneer', title: 'Veneer - 68' },
    { id: 186, src: 'https://i.postimg.cc/J4WKkT7m/VENEER-69.png', category: 'Veneer', title: 'Veneer - 69' },
    { id: 187, src: 'https://i.postimg.cc/kXFsFxDn/VENEER-70.png', category: 'Veneer', title: 'Veneer - 70' },
    { id: 188, src: 'https://i.postimg.cc/XYsgt4wK/VENEER-71.png', category: 'Veneer', title: 'Veneer - 71' },
    { id: 189, src: 'https://i.postimg.cc/bvdRhWgN/VENEER-72.png', category: 'Veneer', title: 'Veneer - 72' },
    { id: 190, src: 'https://i.postimg.cc/tgfNCkvY/VENEER-73.png', category: 'Veneer', title: 'Veneer - 73' },
    { id: 191, src: 'https://i.postimg.cc/7LcnY9t7/VENEER-74.png', category: 'Veneer', title: 'Veneer - 74' },
    { id: 192, src: 'https://i.postimg.cc/k4bFVSL1/VENEER-75.png', category: 'Veneer', title: 'Veneer - 75' },
    { id: 193, src: 'https://i.postimg.cc/T1jV06dq/VENEER-76.png', category: 'Veneer', title: 'Veneer - 76' },
    { id: 194, src: 'https://i.postimg.cc/wM5X2pq4/VENEER-77.png', category: 'Veneer', title: 'Veneer - 77' },
    { id: 195, src: 'https://i.postimg.cc/PJbWyjX3/VENEER-78.png', category: 'Veneer', title: 'Veneer - 78' },
    { id: 196, src: 'https://i.postimg.cc/7h139kHp/VENEER-79.png', category: 'Veneer', title: 'Veneer - 79' },
    { id: 197, src: 'https://i.postimg.cc/KvFrzRfr/VENEER-80.png', category: 'Veneer', title: 'Veneer - 80' },
    { id: 198, src: 'https://i.postimg.cc/ZKZFRCHf/VENEER-81.png', category: 'Veneer', title: 'Veneer - 81' },
    { id: 199, src: 'https://i.postimg.cc/5N35Fbk2/VENEER-82.png', category: 'Veneer', title: 'Veneer - 82' },
    { id: 200, src: 'https://i.postimg.cc/650VGt1Q/VENEER-83.png', category: 'Veneer', title: 'Veneer - 83' },
    { id: 201, src: 'https://i.postimg.cc/qvvssS9L/VENEER-84.png', category: 'Veneer', title: 'Veneer - 84' },
    { id: 202, src: 'https://i.postimg.cc/YCD1b87r/VENEER-85.png', category: 'Veneer', title: 'Veneer - 85' },
    { id: 203, src: 'https://i.postimg.cc/CKZbtDMm/VENEER-86.png', category: 'Veneer', title: 'Veneer - 86' },
    { id: 204, src: 'https://i.postimg.cc/6Q7CSR62/VENEER-87.png', category: 'Veneer', title: 'Veneer - 87' },
    { id: 205, src: 'https://i.postimg.cc/HxXXWg7F/VENEER-88.png', category: 'Veneer', title: 'Veneer - 88' },
    { id: 206, src: 'https://i.postimg.cc/hvnxf5Lm/VENEER-89.png', category: 'Veneer', title: 'Veneer - 89' },
    { id: 207, src: 'https://i.postimg.cc/sxJWS4Kr/VENEER-90.png', category: 'Veneer', title: 'Veneer - 90' },
    { id: 208, src: 'https://i.postimg.cc/Y0xFgz8p/VENEER-91.png', category: 'Veneer', title: 'Veneer - 91' },
    { id: 209, src: 'https://i.postimg.cc/Kj5TLDQG/VENEER-92.png', category: 'Veneer', title: 'Veneer - 92' },
    { id: 210, src: 'https://i.postimg.cc/Xqg5FkxN/VENEER-93.png', category: 'Veneer', title: 'Veneer - 93' },
    { id: 211, src: 'https://i.postimg.cc/J73Z9R8k/VENEER-94.png', category: 'Veneer', title: 'Veneer - 94' },
    { id: 212, src: 'https://i.postimg.cc/66VnDBKS/VENEER-95.png', category: 'Veneer', title: 'Veneer - 95' },
    { id: 213, src: 'https://i.postimg.cc/c4swWP19/VENEER-96.png', category: 'Veneer', title: 'Veneer - 96' },
    { id: 214, src: 'https://i.postimg.cc/vHQfyC82/VENEER-97.png', category: 'Veneer', title: 'Veneer - 97' },
    { id: 215, src: 'https://i.postimg.cc/L6HLSG6F/VENEER-98.png', category: 'Veneer', title: 'Veneer - 98' },
    { id: 216, src: 'https://i.postimg.cc/g2jhXRhp/VENEER-99.png', category: 'Veneer', title: 'Veneer - 99' },
    { id: 217, src: 'https://i.postimg.cc/43hhwgw9/VENEER-100.png', category: 'Veneer', title: 'Veneer - 100' },
    { id: 218, src: 'https://i.postimg.cc/bv22LhLF/VENEER-101.png', category: 'Veneer', title: 'Veneer - 101' },
    { id: 219, src: 'https://i.postimg.cc/DZk4MMYc/VENEER-102.png', category: 'Veneer', title: 'Veneer - 102' },
    { id: 220, src: 'https://i.postimg.cc/3RX05FsM/VENEER-103.png', category: 'Veneer', title: 'Veneer - 103' },
    { id: 221, src: 'https://i.postimg.cc/vTX1DHH8/VENEER-104.png', category: 'Veneer', title: 'Veneer - 104' },
    { id: 222, src: 'https://i.postimg.cc/441HWwvP/VENEER-105.png', category: 'Veneer', title: 'Veneer - 105' },
    { id: 223, src: 'https://i.postimg.cc/qqQtgMMM/VENEER-106.png', category: 'Veneer', title: 'Veneer - 106' },
    { id: 224, src: 'https://i.postimg.cc/59mQsp5n/VENEER-107.png', category: 'Veneer', title: 'Veneer - 107' },
    { id: 225, src: 'https://i.postimg.cc/9FFRKTJz/VENEER-108.png', category: 'Veneer', title: 'Veneer - 108' },
    { id: 226, src: 'https://i.postimg.cc/Gh78C259/VENEER-109.png', category: 'Veneer', title: 'Veneer - 109' },
  ];

  // Filter images based on search and category
  const filteredImages = catalogImages.filter(image => {
    const matchesSearch = image.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || image.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Get visible images (for load more functionality)
  const visibleImages = filteredImages.slice(0, visibleCount);
  const hasMore = visibleCount < filteredImages.length;

  // Load more images
  const loadMoreImages = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisibleCount(prev => Math.min(prev + 12, filteredImages.length));
      setIsLoadingMore(false);
    }, 500);
  };

  // Reset visible count when filters change
  useEffect(() => {
    setVisibleCount(12);
  }, [searchTerm, selectedCategory]);

  // Simulate loading
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);


  return (
    <div className="catalog-page">
      {/* Hero Section */}
      <section className="catalog-hero">
        <div className="catalog-hero-content">
          <h1>PRODUCT CATALOG</h1>
          <p>Browse Our Complete Collection</p>

        </div>
      </section>


      {/* Catalog Grid Section */}
      <section className="catalog-grid-section">
        <div className="container">
          {isLoading ? (
            <div className="loading-spinner">
              <div className="spinner"></div>
              <p>Loading catalog...</p>
            </div>
          ) : (
            <>
              <div className="catalog-stats">
                <p>Showing {visibleImages.length} of {filteredImages.length} items</p>
              </div>

              <div className="catalog-grid">
                {visibleImages.map((image, index) => (
                  <div key={image.id} className="catalog-item">
                    <div className="catalog-image-wrapper">
                      <img 
                        src={image.src} 
                        alt={image.title}
                        className="catalog-image"
                        loading="lazy"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {hasMore && (
                <div className="load-more-container">
                  <button 
                    className="load-more-btn"
                    onClick={loadMoreImages}
                    disabled={isLoadingMore}
                  >
                    {isLoadingMore ? 'Loading...' : `Load More (${filteredImages.length - visibleCount} remaining)`}
                  </button>
                </div>
              )}

              {filteredImages.length === 0 && (
                <div className="no-results">
                  <p>No catalog items found matching "{searchTerm}"</p>
                </div>
              )}
            </>
          )}
        </div>
      </section>

    </div>
  );
};

export default Catalog;
