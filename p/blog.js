<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <title>Compimedic solutions</title>
    <!-- Favicon -->
  <link rel="icon" type="image/png" href="https://raw.githubusercontent.com/EdilAhtera/compimedic/main/logo-compimedic.png">
    <!-- link -->
 <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
  <link href="./input.css" rel="stylesheet">
  <link href="./tailwind.config.js">
  <link href="./server.js">
  <link href="https://cdn.jsdelivr.net/npm/flowbite@2.4.1/dist/flowbite.min.css"  rel="stylesheet" />
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Calistoga&family=Didact+Gothic&display=swap" rel="stylesheet">
<link rel="manifest" href="/manifest.json">
<meta name="theme-color" content="#000000">
<script src="/service-worker.js" defer></script>
<link rel="stylesheet" href="style.css">
<!-- favicon Js -->
    <script>
        function setFavicon(url) {
            let link = document.createElement('link');
            let oldLink = document.getElementById('favicon');
            link.id = 'favicon';
            link.rel = 'icon';
            link.href = url;
            if (oldLink) {
                document.head.removeChild(oldLink);
            }
            document.head.appendChild(link);
        }
        setFavicon('/logo-compimedic.png');
    </script>
<!-- end favicon Js -->
</head>
<body>
<!-- header -->
  <header style="backdrop-filter: blur(10px) saturate(180%); background: rgba(255, 255, 255, 0.5); box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); border: 1px solid rgba(255, 255, 255, 0.3); position: fixed; top: 0; left: 0; right: 0; width: 100%; z-index: 10;">
    <nav style="background: transparent; solid rgba(128, 128, 128, 0.3); padding: 3px;">
      <div class="flex flex-wrap justify-between items-center mx-auto" style="max-width: 97%;">
        <a href="index.php" class="flex items-center justify-center lg:justify-start">
          <img src="https://raw.githubusercontent.com/EdilAhtera/compimedic/main/img/1721568418869.png" style="height: 4rem; sm:height: 5rem;" alt="Compimedic Logo" />
        </a>
        <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-[#3396BB] rounded-lg lg:hidden hover:backdrop-filter: blur(10px) focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="mobile-menu-2" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
          </svg>
          <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
          </svg>
        </button>
        <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
          <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <a href="/Compimedic.php" class="block py-2 pr-4 pl-3 text-[#3396BB] rounded bg-primary-700 lg:bg-transparent lg:text-[#3396BB] lg:p-0" aria-current="page">Home</a>
            </li>
            <li>
              <a href="/catalogue.php" class="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-[#3396BB] lg:p-0">Catalogue Products</a>
            </li>
            <li>
              <a href="/Store.php" class="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-[#3396BB] lg:p-0">Store</a>
            </li>
            <li>
              <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-[#3396BB] lg:p-0">Branchs</a>
            </li>
            <li>
              <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-[#3396BB] lg:p-0">Investor</a>
            </li>
            <li>
              <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-[#3396BB] lg:p-0">Licensing</a>
            </li>
            <li>
              <a href="/check-order.php" class="block py-2 pr-4 pl-3 text-700 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-[#3396BB] lg:p-0">My Order Status</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
<!-- end header -->



<!-- footer -->
<footer id="footer" class="bg-[#3396BB]">
    <div class="mx-auto w-full max-w-[97%] p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
            <div class="mb-6 md:mb-0">
                <a class="flex items-center justify-center md:justify-start">
                    <img src="https://raw.githubusercontent.com/EdilAhtera/compimedic/main/img/Picsart_24-07-21_21-15-12-407.png" class="h-15 payment-method" style="height: 75px;" alt="compimedic" />
                </a>
            </div>
            <div class="grid grid-cols-2 gap-8 sm:gaAp-6 sm:grid-cols-3">
                <div>
                    <h2 class="mb-6 text-sm font-bold text-white uppercase">Business Licensing</h2>
                    <ul class="text-white font-medium">
                        <li class="mb-4">
                            <a href="https://flowbite.com/" class="hover:underline">IPAK</a>
                        </li>
                        <li>
                            <a href="https://tailwindcss.com/" class="hover:underline">AKL/AKD</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 class="mb-6 text-sm font-bold text-white uppercase">Follow us</h2>
                    <ul class="text-white font-medium">
                        <li class="mb-4">
                            <a href="https://www.linkedin.com/company/pt-compimedic-solutions/" class="hover:underline ">LinkedIn</a>
                        </li>
                        <li class="mb-4">
                            <a href="https://github.com/themesberg/flowbite" class="hover:underline ">E-Commerce</a>
                        </li>

                    </ul>
                </div>
                <div>
                    <h2 class="mb-6 text-sm font-bold text-white uppercase">Legal</h2>
                    <ul class="text-white font-medium">
                        <li class="mb-4">
                            <a href="#" class="hover:underline">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="sm:flex sm:items-center sm:justify-between mt-6">
            <span class="text-sm text-white sm:text-center">© 2024 <a href="#" class="hover:underline">Compimedic™ PT Compimedic Solutions Healthcare</a>. All Rights Reserved.
            </span>
        </div>
    </div>
</footer>

<script src="https://cdn.tailwindcss.com"></script>
<script>
    const tham = document.querySelector(".tham");

    tham.addEventListener('click', () => {
        tham.classList.toggle('tham-active');
    });
</script>

<script src="../path/to/flowbite/dist/flowbite.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/flowbite@2.4.1/dist/flowbite.min.js"></script>

<script src="../path/to/flowbite/dist/flowbite.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/flowbite@2.4.1/dist/flowbite.min.js"></script>
<!-- end footer -->

</body>
</html>