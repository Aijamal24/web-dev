// Функция для обработки поиска
document.getElementById('search-btn').addEventListener('click', performSearch);
document.getElementById('search-input').addEventListener('keyup', function(event) {
  if (event.key === 'Enter') performSearch();
});

function performSearch() {
  const searchTerm = document.getElementById('search-input').value.toLowerCase();
  const products = document.querySelectorAll('.product');

  let found = false;

  products.forEach(product => {
    const productName = product.querySelector('h3').innerText.toLowerCase();
    if (productName.includes(searchTerm)) {
      product.style.display = 'block'; // Показываем подходящий товар
      found = true;
    } else {
      product.style.display = 'none'; // Скрываем товар, если он не подходит
    }
  });

  if (!found) {
    alert('Ничего не найдено!');
  }
}

// Функция для очистки корзины
function clearCart() {
  cart = []; // Очищаем массив корзины
  localStorage.setItem("cart", JSON.stringify(cart)); // Сохраняем пустую корзину в localStorage
  updateCart(); // Обновляем отображение корзины
  alert("Корзина очищена!");
}

// Привязываем обработчик к кнопке
document.getElementById("clearCartButton").addEventListener("click", clearCart);


const products = {
    wallet1: {
      name: "Кожаный кошелек",
      images: ["img/wallet/bdkny1.jpg", "img/wallet/bdkny3.jpg"],
      description: "Кошелек от dkny",
      price: "5500C"
    },
    wallet2: {
      name: "Кожаный кошелек",
      images: ["img/wallet/mkwr1.jpg", "img/wallet/mkwr2.jpg", "img/wallet/mkwr3.jpg"],
      description: "Высококачественный кожаный кошелек с множеством отделений для карт и наличных.",
      price: "$50.00"
    },
    wallet3: {
      name: "Кожаный кошелек",
      images: ["img/wallet/mkmwb3.jpg", "img/wallet/mkmwb2.jpg", "img/wallet/mkmwb1.jpg"],
      description: "Высококачественный кожаный кошелек с множеством отделений для карт и наличных.",
      price: "$50.00"
    },
    wallet4: {
      name: "Кожаный кошелек",
      images: ["img/wallet/mkwabr.jpg", "img/wallet/mkwabr2.jpg", "img/wallet/mkwabr1.jpg"],
      description: "Высококачественный кожаный кошелек с множеством отделений для карт и наличных.",
      price: "$50.00"
    },
    wallet5: {
      name: "Кожаный кошелек",
      images: ["img/wallet/mkwabrbr.jpg", "img/wallet/mkwabrbr1.jpg", "img/wallet/mkwabrbr2.jpg"],
      description: "Высококачественный кожаный кошелек с множеством отделений для карт и наличных.",
      price: "$50.00"
    },
    wallet6: {
      name: "Кожаный кошелек",
      images: ["img/wallet/mkwawh1.jpg", "img/wallet/mkwawh3.jpg", "img/wallet/mkwawh2.jpg"],
      description: "Высококачественный кожаный кошелек с множеством отделений для карт и наличных.",
      price: "$50.00"
    },
    wallet7: {
      name: "Кожаный кошелек",
      images: ["img/wallet/mkwbl1.jpg", "img/wallet/mkwbl3.jpg", "img/wallet/mkwbl2.jpg"],
      description: "Высококачественный кожаный кошелек с множеством отделений для карт и наличных.",
      price: "$50.00"
    },
    wallet8: {
      name: "Кожаный кошелек",
      images: ["img/wallet/mkwbr1.jpg", "img/wallet/mkwbr2.jpg"],
      description: "Высококачественный кожаный кошелек с множеством отделений для карт и наличных.",
      price: "$50.00"
    },
    wallet9: {
      name: "Кожаный кошелек",
      images: ["img/wallet/mkwgr.jpg", "img/wallet/mkwgr2.jpg"],
      description: "Высококачественный кожаный кошелек с множеством отделений для карт и наличных.",
      price: "$50.00"
    },
    wallet10: {
      name: "Кожаный кошелек",
      images: ["img/wallet/mkwwh1.jpg", "img/wallet/mkwwh2.jpg", "img/wallet/mkwwh3"],
      description: "Высококачественный кожаный кошелек с множеством отделений для карт и наличных.",
      price: "$50.00"
    },
    wallet11: {
      name: "Кожаный кошелек",
      images: ["img/wallet/mkwwhk.jpg", "img/wallet/mkwwhk2.jpg", "img/wallet/mkwwhk3.jpg"],
      description: "Высококачественный кожаный кошелек с множеством отделений для карт и наличных.",
      price: "$50.00"
    },
    wallet12: {
      name: "Кожаный кошелек",
      images: ["img/wallet/thwb2.jpg", "img/wallet/thwb1.jpg", "img/wallet/thwb3.jpg"],
      description: "Высококачественный кожаный кошелек с множеством отделений для карт и наличных.",
      price: "$50.00"
    },
    

    bag1: {
      name: "Сумка через плечо",
      images: ["img/bag/ckruksak3.jpg", "img/bag/ckruksak2.jpg", "img/bag/ckruksak1.jpg"],
      description: "Элегантная сумка для стильных женщин, удобно носить на плечах.",
      price: "$60.00"
    },
    bag2: {
      name: "Сумка через плечо",
      images: ["img/bag/platoc1.jpg", "img/bag/platoc2.jpg", "img/bag/platoc3.jpg"],
      description: "Элегантная сумка для стильных женщин, удобно носить на плечах.",
      price: "$60.00"
    },
    bag3: {
      name: "Сумка через плечо",
      images: ["img/bag/mkcbwh1.jpg", "img/bag/mkcbwh3.jpg", "img/bag/mkcbwh2.jpg"],
      description: "Элегантная сумка для стильных женщин, удобно носить на плечах.",
      price: "$60.00"
    },
    bag4: {
      name: "Сумка через плечо",
      images: ["img/bag/mkbagwh2.jpg", "img/bag/mkbagwh3.jpg", "img/bag/mkbagwh1.jpg"],
      description: "Элегантная сумка для стильных женщин, удобно носить на плечах.",
      price: "$60.00"
    },
    bag5: {
      name: "Сумка через плечо",
      images: ["img/bag/gcbbl1.jpg", "img/bag/gcbbl2.jpg", "img/bag/gcbbl3.jpg"],
      description: "Элегантная сумка для стильных женщин, удобно носить на плечах.",
      price: "$60.00"
    },
    bag6: {
      name: "Сумка через плечо",
      images: ["img/bag/karlcat2.jpg", "img/bag/karlcat1.jpg", "img/bag/karlcat3.jpg"],
      description: "Элегантная сумка для стильных женщин, удобно носить на плечах.",
      price: "$60.00"
    },
    bag7: {
      name: "Рюкзак",
      images: ["./img/bag/photo_2024-11-22_19-59-33.jpg", "./img/bag/photo_2024-11-22_19-59-40.jpg", "./img/bag/photo_2024-11-22_19-59-47.jpg"],
      description: "Модный рюкзак с современным дизайном, идеально подходит для повседневного использования.",
      price: "$80.00"
    },
    bag9: {
      name: "Сумка через плечо",
      images: ["img/bag/ckbag1.jpg", "img/bag/ckbag2.jpg", "img/bag/ckbag3.jpg"],
      description: "Элегантная сумка для стильных женщин, удобно носить на плечах.",
      price: "$60.00"
    },
    bag10: {
      name: "Сумка через плечо",
      images: ["img/bag/ckcb1.jpg", "img/bag/ckcb2.jpg", "img/bag/ckcb3.jpg"],
      description: "Элегантная сумка для стильных женщин, удобно носить на плечах.",
      price: "$60.00"
    },
    bag11: {
      name: "Сумка через плечо",
      images: ["img/bag/gbc1.jpg", "img/bag/gbc2.jpg", "img/bag/gbc3.jpg"],
      description: "Элегантная сумка для стильных женщин, удобно носить на плечах.",
      price: "$60.00"
    },
    bag12: {
      name: "Сумка через плечо",
      images: ["img/bag/ckbbag1.jpg", "img/bag/ckbbag2.jpg", "img/bag/ckbbag3.jpg"],
      description: "Элегантная сумка для стильных женщин, удобно носить на плечах.",
      price: "$60.00"
    },
    bag13: {
      name: "Сумка через плечо",
      images: ["img/bag/mkcbbr1.jpg", "img/bag/mkcbbr2.jpg", "img/bag/mkcbbr3.jpg"],
      description: "Элегантная сумка для стильных женщин, удобно носить на плечах.",
      price: "$60.00"
    },
    bag14: {
      name: "Сумка через плечо",
      images: ["img/bag/mkcbpink1.jpg", "img/bag/mkcbpink2.jpg", "img/bag/mkcbpink3.jpg"],
      description: "Элегантная сумка для стильных женщин, удобно носить на плечах.",
      price: "$60.00"
    },
    bag15: {
      name: "Сумка через плечо",
      images: ["img/bag/ckbagwh.jpg","img/bag/ckbagwh1.jpg", "img/bag/ckbagwh2.jpg", "img/bag/ckbagwh3.jpg"],
      description: "Элегантная сумка для стильных женщин, удобно носить на плечах.",
      price: "$60.00"
    },
    bag16: {
      name: "Сумка через плечо",
      images: ["img/bag/dknycb1.jpg", "img/bag/dknycb2.jpg"],
      description: "Элегантная сумка для стильных женщин, удобно носить на плечах.",
      price: "$60.00"
    },
    bag17: {
      name: "Сумка через плечо",
      images: ["img/bag/ckruksakbr.jpg", "img/bag/ckruksakbr1.jpg", "img/bag/ckruksakbr2.jpg"],
      description: "Элегантная сумка для стильных женщин, удобно носить на плечах.",
      price: "$60.00"
    },
    bag18: {
      name: "Сумка через плечо",
      images: ["img/bag/ruksak2.jpg", "img/bag/ruksak.jpg", "img/bag/ruksak1.jpg", "img/bag/ruksak3.jpg"],
      description: "Элегантная сумка для стильных женщин, удобно носить на плечах.",
      price: "$60.00"
    },
    bag19: {
      name: "Сумка через плечо",
      images: ["img/bag/gruksakbr1.jpg", "img/bag/gruksakbr2.jpg", "img/bag/gruksakbr3.jpg", ],
      description: "Элегантная сумка для стильных женщин, удобно носить на плечах.",
      price: "$60.00"
    },
    bag20: {
      name: "Сумка через плечо",
      images: ["img/bag/gruksakbl1.jpg",  "img/bag/gruksakbl3.jpg", ],
      description: "Элегантная сумка для стильных женщин, удобно носить на плечах.",
      price: "$60.00"
    },
    bag21: {
      name: "Сумка через плечо",
      images: ["img/bag/gcbbr1.jpg", "img/bag/gcbbr2.jpg", "img/bag/gcbbr3.jpg", ],
      description: "Элегантная сумка для стильных женщин, удобно носить на плечах.",
      price: "$60.00"
    },
    bag22: {
      name: "Сумка через плечо",
      images: ["img/bag/karlbagblm1.jpg", "img/bag/karlbagblm2.jpg", "img/bag/karlbagblm3.jpg", ],
      description: "Элегантная сумка для стильных женщин, удобно носить на плечах.",
      price: "$60.00"
    },
    bag23: {
      name: "Сумка через плечо",
      images: ["img/bag/karlhr1.jpg", "img/bag/karlhr2.jpg", "img/bag/karlhr.jpg", ],
      description: "Элегантная сумка для стильных женщин, удобно носить на плечах.",
      price: "$60.00"
    },
    bag24: {
      name: "Сумка через плечо",
      images: ["img/bag/dknybag1.jpg", "img/bag/dknybag2.jpg", "img/bag/dknybag3.jpg"],
      description: "Элегантная сумка для стильных женщин, удобно носить на плечах.",
      price: "$60.00"
    },
    bag25: {
      name: "Сумка через плечо",
      images: ["img/bag/mkcbbl1.jpg", "img/bag/mkcbbl2.jpg", "img/bag/mkcbbl3.jpg"],
      description: "Элегантная сумка для стильных женщин, удобно носить на плечах.",
      price: "$60.00"
    },
    bag26: {
      name: "Сумка через плечо",
      images: ["img/bag/ckbagbrbl1.jpg", "img/bag/ckbagbrbl2.jpg", "img/bag/dknybag3.jpg"],
      description: "Элегантная сумка для стильных женщин, удобно носить на плечах.",
      price: "$60.00"
    },
    bag27: {
      name: "Сумка через плечо",
      images: ["img/bag/gbag1.jpg", "img/bag/gbag2.jpg", "img/bag/gbag3.jpg"],
      description: "Элегантная сумка для стильных женщин, удобно носить на плечах.",
      price: "$60.00"
    },
    bag28: {
      name: "Сумка через плечо",
      images: ["img/bag/mkbagbl1.jpg", "img/bag/mkbagbl2.jpg", "img/bag/mkbagbl3.jpg"],
      description: "Элегантная сумка для стильных женщин, удобно носить на плечах.",
      price: "$60.00"
    },

    bag8: {
      name: "Сумка через плечо",
      images: ["img/bag/mkbm1.jpg", "img/bag/mkbm2.jpg", "img/bag/mkbm3.jpg"],
      description: "Элегантная сумка для стильных женщин, удобно носить на плечах.",
      price: "$60.00"
    },




    shoes1: {
      name: "Кроссовки",
      images: ["img/boot/mkpink1.jpg", "img/boot/mkpink2.jpg", "img/boot/mkpink3.jpg"],
      description: "Современные кроссовки, идеально подходящие для спорта и повседневной носки.",
      price: "$90.00"
    },
    shoes2: {
      name: "Ботинки",
      images: ["img/boot/mkbrown1.jpg", "img/boot/mkbrown2.jpg", "img/boot/mkbrown3.jpg"],
      description: "Зимние ботинки, обеспечивающие тепло и комфорт в холодное время года.",
      price: "$120.00"
    },
    shoes3: {
      name: "Ботинки",
      images: ["img/boot/karlbkwh3.jpg", "img/boot/karlbkwh2.jpg", "img/boot/karlbkwh1.jpg"],
      description: "Зимние ботинки, обеспечивающие тепло и комфорт в холодное время года.",
      price: "$120.00"
    },
    shoes4: {
      name: "Ботинки",
      images: ["img/boot/karlblack1.jpg", "img/boot/karlblack3.jpg", "img/boot/karlblack2.jpg"],
      description: "Зимние ботинки, обеспечивающие тепло и комфорт в холодное время года.",
      price: "$120.00"
    },
    shoes5: {
      name: "Ботинки",
      images: ["img/boot/karlh3.jpg", "img/boot/karlh1.jpg", "img/boot/karlh2.jpg"],
      description: "Зимние ботинки, обеспечивающие тепло и комфорт в холодное время года.",
      price: "$120.00"
    },
    shoes6: {
      name: "Ботинки",
      images: ["img/boot/karlwh3.jpg", "img/boot/karlwh1.jpg", "img/boot/karlwh2.jpg"],
      description: "Зимние ботинки, обеспечивающие тепло и комфорт в холодное время года.",
      price: "$120.00"
    },
    shoes7: {
      name: "Ботинки",
      images: ["img/boot/leviboot1.jpg", "img/boot/leviboot2.jpg", "img/boot/leviboot3.jpg"],
      description: "Зимние ботинки, обеспечивающие тепло и комфорт в холодное время года.",
      price: "$120.00"
    },

    shoes8: {
      name: "Ботинки",
      images: ["img/boot/mkbalbl1.jpg", "img/boot/mkbalbl2.jpg", "img/boot/mkbalbl3.jpg"],
      description: "Зимние ботинки, обеспечивающие тепло и комфорт в холодное время года.",
      price: "$120.00"
    },
    shoes9: {
      name: "Ботинки",
      images: ["img/boot/mkbalbr1.jpg", "img/boot/mkbalbr2.jpg", "img/boot/mkbalbr3.jpg"],
      description: "Зимние ботинки, обеспечивающие тепло и комфорт в холодное время года.",
      price: "$120.00"
    },
    shoes10: {
      name: "Ботинки",
      images: ["img/boot/mkbalwh1.jpg", "img/boot/mkbalwh2.jpg", "img/boot/mkbalwh.jpg"],
      description: "Зимние ботинки, обеспечивающие тепло и комфорт в холодное время года.",
      price: "$120.00"
    },
    shoes11: {
      name: "Ботинки",
      images: ["img/boot/mkblack1.jpg", "img/boot/mkblack2.jpg", ],
      description: "Зимние ботинки, обеспечивающие тепло и комфорт в холодное время года.",
      price: "$120.00"
    },
    shoes12: {
      name: "Ботинки",
      images: [ "img/boot/mkbootbl1.jpg", "img/boot/mkbootbl2.jpg"],
      description: "Зимние ботинки, обеспечивающие тепло и комфорт в холодное время года.",
      price: "$120.00"
    },
    shoes13: {
      name: "Ботинки",
      images: ["img/boot/mkbootblu1.jpg", "img/boot/mkbootblu2.jpg", "img/boot/mkbootblu3.jpg"],
      description: "Зимние ботинки, обеспечивающие тепло и комфорт в холодное время года.",
      price: "$120.00"
    },
    shoes14: {
      name: "Ботинки",
      images: ["img/boot/mkbootsbl1.jpg", "img/boot/mkbootsbl2.jpg", "img/boot/mkbootsbl3.jpg"],
      description: "Зимние ботинки, обеспечивающие тепло и комфорт в холодное время года.",
      price: "$120.00"
    },
    shoes15: {
      name: "Ботинки",
      images: ["img/boot/thbootgr1.jpg", "img/boot/thbootgr2.jpg", "img/boot/thbootgr3.jpg"],
      description: "Зимние ботинки, обеспечивающие тепло и комфорт в холодное время года.",
      price: "$120.00"
    },


    boot1: {
      name: "Ботинки",
      images: ["img/boot/levibootbl1.jpg", "img/boot/levibootbl2.jpg", "img/boot/levibootbl3.jpg"],
      description: "Зимние ботинки, обеспечивающие тепло и комфорт в холодное время года.",
      price: "$120.00"
    },

    boot2: {
      name: "Ботинки",
      images: ["img/boot/mch1.jpg", "img/boot/mch2.jpg", "img/boot/mch3.jpg"],
      description: "Зимние ботинки, обеспечивающие тепло и комфорт в холодное время года.",
      price: "$120.00"
    },

    boot3: {
      name: "Ботинки",
      images: ["img/boot/mfl1.jpg", "img/boot/mfl2.jpg", "img/boot/mfl.jpg"],
      description: "Зимние ботинки, обеспечивающие тепло и комфорт в холодное время года.",
      price: "$120.00"
    },

    boot4: {
      name: "Ботинки",
      images: ["img/boot/mth1.jpg", "img/boot/mth2.jpg", "img/boot/mth3.jpg"],
      description: "Зимние ботинки, обеспечивающие тепло и комфорт в холодное время года.",
      price: "$120.00"
    },

    boot5: {
      name: "Ботинки",
      images: ["img/boot/mleo1.jpg", "img/boot/mleo2.jpg", "img/boot/mleo3.jpg"],
      description: "Зимние ботинки, обеспечивающие тепло и комфорт в холодное время года.",
      price: "$120.00"
    },

    boot6: {
      name: "Ботинки",
      images: ["img/boot/mle1.jpg", "img/boot/mle2.jpg", "img/boot/mle3.jpg"],
      description: "Зимние ботинки, обеспечивающие тепло и комфорт в холодное время года.",
      price: "$120.00"
    },

    boot7: {
      name: "Ботинки",
      images: ["img/boot/mthbr1.jpg", "img/boot/mthbr2.jpg", "img/boot/mthbr3.jpg"],
      description: "Зимние ботинки, обеспечивающие тепло и комфорт в холодное время года.",
      price: "$120.00"
    },

    boot8: {
      name: "Ботинки",
      images: ["img/boot/mthb1.jpg", "img/boot/mthb2.jpg", "img/boot/mthb3.jpg"],
      description: "Зимние ботинки, обеспечивающие тепло и комфорт в холодное время года.",
      price: "$120.00"
    },



  };

  
  
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
  function showProductDetails(productId) {
    const product = products[productId];
    const productInfo = document.getElementById("product-info");
  
    let imagesHtml = '';
    product.images.forEach(img => {
      imagesHtml += `<img src="${img}" alt="${product.name}" class="product-detail-img">`;
    });
  
    productInfo.innerHTML = `
      <h2>${product.name}</h2>
      <div class="product-images">${imagesHtml}</div>
      <p>${product.description}</p>
      <p><strong>Цена:</strong> ${product.price}</p>
      <button class="add-to-cart" onclick="addToCart('${productId}')">Добавить в корзину</button>
    `;
  
    document.getElementById("product-details").style.display = "flex";
  }
  
  function closeProductDetails() {
    document.getElementById("product-details").style.display = "none";
  }
  
  function addToCart(productId) {
    cart.push(products[productId]);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCart();
    closeProductDetails();
  }
  
  function updateCart() {
    const cartCount = document.getElementById("cart-count");
    const cartItems = document.getElementById("cart-items");
  
    cartCount.innerText = cart.length;
  
    if (cart.length > 0) {
      cartItems.innerHTML = '';
      cart.forEach(product => {
        cartItems.innerHTML += `<p>${product.name} - ${product.price}</p>`;
      });
    } else {
      cartItems.innerHTML = "<p>Корзина пуста.</p>";
    }
  }
  
  function closeCart() {
    document.getElementById("cart").style.display = "none";
  }
  
  document.querySelector(".cart-btn").addEventListener("click", function() {
    document.getElementById("cart").style.display = "flex";
  });
  
  updateCart();

  
  