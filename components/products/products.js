class Products {
    renderDog() {
        let htmldogfood = "";
        let htmldogtoys = "";
        let htmldogtransfer = "";
        let htmldoghygiene = "";
        CATALOG.forEach(({ name_product, price, img, procent, category, subcategory,id , }) => {
            if (category == "dog") {
                if (subcategory == "food") {
                    if (procent != 0) {
                        htmldogfood += `
                          <div class="tovar">
                           <div class="name_of_product">${name_product}</div>
                           <div  class="price">${(price - price * procent).toFixed(2)} BYN</div>
                           <div class="offprice">${price} BYN</div>
                           <div class="deliver" id="${id}" >Заказать</div>
                           <img src="${img}" class="img"></img>
                           <div class="akti">Акция</div>
                           <div class="proccent">-${procent * 100}%</div>
                           </div>
                          `;
                    }
                    else {
                        htmldogfood += `
                            <div class="tovar">
                             <div class="name_of_product">${name_product}</div>
                             <div  class="priceee">${(price - price * procent).toFixed(2)}BYN</div>
                             <div class="deliver" id="${id}" >Заказать</div>
                             <img src="${img}" class="img"></img>
                             </div>
                            `;
                    }

                }
                if (subcategory == "toys") {
                    if (procent != 0) {
                        htmldogtoys += `
                          <div class="tovar">
                           <div class="name_of_product">${name_product}</div>
                           <div  class="price">${(price - price * procent).toFixed(2)}BYN</div>
                           <div class="offprice">${price}BYN</div>
                           <div class="deliver" id="${id}" >Заказать</div>
                           <img src="${img}" class="img"></img>
                           <div class="akti">Акция</div>
                           <div class="proccent">-${procent * 100}%</div>
                           </div>
                          `;
                    }
                    else {
                        htmldogtoys += `
                            <div class="tovar">
                             <div class="name_of_product">${name_product}</div>
                             <div  class="priceee">${(price - price * procent).toFixed(2)}BYN</div>
                             <div class="deliver" id="${id}" >Заказать</div>
                             <img src="${img}" class="img"></img>
                             </div>
                            `;
                    }
                }
                if (subcategory == "transfer") {
                    if (procent != 0) {
                        htmldogtransfer += `
                          <div class="tovar">
                           <div class="name_of_product">${name_product}</div>
                           <div  class="price">${(price - price * procent).toFixed(2)}BYN</div>
                           <div class="offprice">${price}BYN</div>
                           <div class="deliver" id="${id}" >Заказать</div>
                           <img src="${img}" class="img"></img>
                           <div class="akti">Акция</div>
                           <div class="proccent">-${procent * 100}%</div>
                           </div>
                          `;
                    }
                    else {
                        htmldogtransfer += `
                            <div class="tovar">
                             <div class="name_of_product">${name_product}</div>
                             <div  class="priceee">${(price - price * procent).toFixed(2)}BYN</div>
                             <div class="deliver" id="${id}" >Заказать</div>
                             <img src="${img}" class="img"></img>
                             </div>
                            `;
                    }
                }
                if (subcategory == "hygiene") {
                    if (procent != 0) {
                        htmldoghygiene += `
                          <div class="tovar">
                           <div class="name_of_product">${name_product}</div>
                           <div  class="price">${(price - price * procent).toFixed(2)}BYN</div>
                           <div class="offprice">${price}BYN</div>
                           <div class="deliver" id="${id}" >Заказать</div>
                           <img src="${img}" class="img"></img>
                           <div class="akti">Акция</div>
                           <div class="proccent">-${procent * 100}%</div>
                           </div>
                          `;
                    }
                    else {
                        htmldoghygiene += `
                            <div class="tovar">
                             <div class="name_of_product">${name_product}</div>
                             <div  class="priceee">${(price - price * procent).toFixed(2)}BYN</div>
                             <div class="deliver" id="${id}" >Заказать</div>
                             <img src="${img}" class="img"></img>
                             </div>
                            `;
                    }
                }
            }
        });

        const htmldog = `
        
        <div  class="act_tov">${htmldogfood}
        ${htmldogtoys}
        ${htmldogtransfer}
        ${htmldoghygiene}</div>
        `;
        ROOT_PRODUCTS.innerHTML = htmldog;
    }

    renderCat() {
        let htmlcatfood = "";
        let htmlcattoys = "";
        let htmlcathouses = "";
        let htmlcathygiene = "";
        CATALOG.forEach(({ id ,name_product, price, img, procent, category, subcategory }) => {
            if (category == "cat") {
                if (subcategory == "food") {
                    if (procent != 0) {
                        htmlcatfood += `
                          <div class="tovar">
                           <div class="name_of_product">${name_product}</div>
                           <div  class="price">${(price - price * procent).toFixed(2)}BYN</div>
                           <div class="offprice">${price}BYN</div>
                           <div class="deliver" id="${id}" >Заказать</div>
                           <img src="${img}" class="img"></img>
                           <div class="akti">Акция</div>
                           <div class="proccent">-${procent * 100}%</div>
                           </div>
                          `;
                    }
                    else {
                        htmlcatfood += `
                            <div class="tovar">
                             <div class="name_of_product">${name_product}</div>
                             <div  class="priceee">${(price - price * procent).toFixed(2)}BYN</div>
                             <div class="deliver" id="${id}" >Заказать</div>
                             <img src="${img}" class="img"></img>
                             </div>
                            `;
                    }

                }
                if (subcategory == "toys") {
                    if (procent != 0) {
                        htmlcattoys += `
                          <div class="tovar">
                           <div class="name_of_product">${name_product}</div>
                           <div  class="price">${(price - price * procent).toFixed(2)}BYN</div>
                           <div class="offprice">${price}BYN</div>
                           <div class="deliver" id="${id}" >Заказать</div>
                           <img src="${img}" class="img"></img>
                           <div class="akti">Акция</div>
                           <div class="proccent">-${procent * 100}%</div>
                           </div>
                          `;
                    }
                    else {
                        htmlcattoys += `
                            <div class="tovar">
                             <div class="name_of_product">${name_product}</div>
                             <div  class="priceee">${(price - price * procent).toFixed(2)}BYN</div>
                             <div class="deliver" id="${id}" >Заказать</div>
                             <img src="${img}" class="img"></img>
                             </div>
                            `;
                    }
                }
                if (subcategory == "houses") {
                    if (procent != 0) {
                        htmlcathouses += `
                          <div class="tovar">
                           <div class="name_of_product">${name_product}</div>
                           <div  class="price">${(price - price * procent).toFixed(2)}BYN</div>
                           <div class="offprice">${price}BYN</div>
                           <div class="deliver" id="${id}" >Заказать</div>
                           <img src="${img}" class="img"></img>
                           <div class="akti">Акция</div>
                           <div class="proccent">-${procent * 100}%</div>
                           </div>
                          `;
                    }
                    else {
                        htmlcathouses += `
                            <div class="tovar">
                             <div class="name_of_product">${name_product}</div>
                             <div  class="priceee">${(price - price * procent).toFixed(2)}BYN</div>
                             <div class="deliver" id="${id}" >Заказать</div>
                             <img src="${img}" class="img"></img>
                             </div>
                            `;
                    }
                }
                if (subcategory == "hygiene") {
                    if (procent != 0) {
                        htmlcathygiene += `
                          <div class="tovar">
                           <div class="name_of_product">${name_product}</div>
                           <div  class="price">${(price - price * procent).toFixed(2)}BYN</div>
                           <div class="offprice">${price}BYN</div>
                           <div class="deliver" id="${id}" >Заказать</div>
                           <img src="${img}" class="img"></img>
                           <div class="akti">Акция</div>
                           <div class="proccent">-${procent * 100}%</div>
                           </div>
                          `;
                    }
                    else {
                        htmlcathygiene += `
                            <div class="tovar">
                             <div class="name_of_product">${name_product}</div>
                             <div  class="priceee">${(price - price * procent).toFixed(2)}BYN</div>
                             <div class="deliver" id="${id}" >Заказать</div>
                             <img src="${img}" class="img"></img>
                             </div>
                            `;
                    }
                }
            }
        });

        const htmlcat = `
        
        <div  class="act_tov">${htmlcatfood}
        ${htmlcattoys}
        ${htmlcathouses}
        ${htmlcathygiene}</div>
        `;
        ROOT_PRODUCTS.innerHTML = htmlcat;
    }

    renderRodent() {
        let htmlrodentfood = "";
        let htmlrodenthouses = "";
        let htmlrodenthygiene = "";
        CATALOG.forEach(({ name_product, id ,price, img, procent, category, subcategory }) => {
            if (category == "rodent") {
                if (subcategory == "food") {
                    if (procent != 0) {
                        htmlrodentfood += `
                          <div class="tovar">
                           <div class="name_of_product">${name_product}</div>
                           <div  class="price">${(price - price * procent).toFixed(2)}BYN</div>
                           <div class="offprice">${price}BYN</div>
                           <div class="deliver" id="${id}" >Заказать</div>                           <img src="${img}" class="img"></img>
                           <div class="akti">Акция</div>
                           <div class="proccent">-${procent * 100}%</div>
                           </div>
                          `;
                    }
                    else {
                        htmlrodentfood += `
                            <div class="tovar">
                             <div class="name_of_product">${name_product}</div>
                             <div  class="priceee">${(price - price * procent).toFixed(2)}BYN</div>
                             <div class="deliver" id="${id}" >Заказать</div>                             <img src="${img}" class="img"></img>
                             </div>
                            `;
                    }

                }

                if (subcategory == "houses") {
                    if (procent != 0) {
                        htmlrodenthouses += `
                          <div class="tovar">
                           <div class="name_of_product">${name_product}</div>
                           <div  class="price">${(price - price * procent).toFixed(2)}BYN</div>
                           <div class="offprice">${price}BYN</div>
                           <div class="deliver" id="${id}" >Заказать</div>
                           <img src="${img}" class="img"></img>
                           <div class="akti">Акция</div>
                           <div class="proccent">-${procent * 100}%</div>
                           </div>
                          `;
                    }
                    else {
                        htmlrodenthouses += `
                            <div class="tovar">
                             <div class="name_of_product">${name_product}</div>
                             <div  class="priceee">${(price - price * procent).toFixed(2)}BYN</div>
                             <div class="deliver" id="${id}" >Заказать</div>
                             <img src="${img}" class="img"></img>
                             </div>
                            `;
                    }
                }
                if (subcategory == "hygiene") {
                    if (procent != 0) {
                        htmlrodenthygiene += `
                          <div class="tovar">
                           <div class="name_of_product">${name_product}</div>
                           <div  class="price">${(price - price * procent).toFixed(2)}BYN</div>
                           <div class="offprice">${price}BYN</div>
                           <div class="deliver" id="${id}" >Заказать</div>
                           <img src="${img}" class="img"></img>
                           <div class="akti">Акция</div>
                           <div class="proccent">-${procent * 100}%</div>
                           </div>
                          `;
                    }
                    else {
                        htmlrodenthygiene += `
                            <div class="tovar">
                             <div class="name_of_product">${name_product}</div>
                             <div  class="priceee">${(price - price * procent).toFixed(2)}BYN</div>
                             <div class="deliver" id="${id}" >Заказать</div>
                             <img src="${img}" class="img"></img>
                             </div>
                            `;
                    }
                }
            }
        });

        const htmlrodent = `
        
        <div  class="act_tov">${htmlrodentfood}
        ${htmlrodenthouses}
        ${htmlrodenthygiene}</div>
        `;
        ROOT_PRODUCTS.innerHTML = htmlrodent;
    }

    renderBird() {
        let htmlbirdfood = "";
        let htmlbirdtoys = "";
        let htmlbirdhouses = "";

        CATALOG.forEach(({ name_product,id , price, img, procent, category, subcategory }) => {
            if (category == "bird") {
                if (subcategory == "food") {
                    if (procent != 0) {
                        htmlbirdfood += `
                          <div class="tovar">
                           <div class="name_of_product">${name_product}</div>
                           <div  class="price">${(price - price * procent).toFixed(2)}BYN</div>
                           <div class="offprice">${price}BYN</div>
                           <div class="deliver" id="${id}" >Заказать</div>
                           <img src="${img}" class="img"></img>
                           <div class="akti">Акция</div>
                           <div class="proccent">-${procent * 100}%</div>
                           </div>
                          `;
                    }
                    else {
                        htmlbirdfood += `
                            <div class="tovar">
                             <div class="name_of_product">${name_product}</div>
                             <div  class="priceee">${(price - price * procent).toFixed(2)}BYN</div>
                             <div class="deliver"  id="${id}" >Заказать</div>
                             <img src="${img}" class="img"></img>
                             </div>
                            `;
                    }

                }
                if (subcategory == "toys") {
                    if (procent != 0) {
                        htmlbirdtoys += `
                          <div class="tovar">
                           <div class="name_of_product">${name_product}</div>
                           <div  class="price">${(price - price * procent).toFixed(2)}BYN</div>
                           <div class="offprice">${price}BYN</div>
                           <div class="deliver" id="${id}" >Заказать</div>
                           <img src="${img}" class="img"></img>
                           <div class="akti">Акция</div>
                           <div class="proccent">-${procent * 100}%</div>
                           </div>
                          `;
                    }
                    else {
                        htmlbirdtoys += `
                            <div class="tovar">
                             <div class="name_of_product">${name_product}</div>
                             <div  class="priceee">${(price - price * procent).toFixed(2)}BYN</div>
                             <div class="deliver" id="${id}" >Заказать</div>
                             <img src="${img}" class="img"></img>
                             </div>
                            `;
                    }
                }
                if (subcategory == "houses") {
                    if (procent != 0) {
                        htmlbirdhouses += `
                          <div class="tovar">
                           <div class="name_of_product">${name_product}</div>
                           <div  class="price">${(price - price * procent).toFixed(2)}BYN</div>
                           <div class="offprice">${price}BYN</div>
                           <div class="deliver" id="${id}" >Заказать</div>
                           <img src="${img}" class="img"></img>
                           <div class="akti">Акция</div>
                           <div class="proccent">-${procent * 100}%</div>
                           </div>
                          `;
                    }
                    else {
                        htmlbirdhouses += `
                            <div class="tovar">
                             <div class="name_of_product">${name_product}</div>
                             <div  class="priceee">${(price - price * procent).toFixed(2)}BYN</div>
                             <div class="deliver" id="${id}" >Заказать</div>
                             <img src="${img}" class="img"></img>
                             </div>
                            `;
                    }
                }

            }
        });

        const htmlbird = `
        
        <div  class="act_tov">${htmlbirdfood}
       ${htmlbirdtoys}
        ${htmlbirdhouses}</div>
        `;
        ROOT_PRODUCTS.innerHTML = htmlbird;
    }
    renderFish() {
        let htmlfishfood = "";
        let htmlfishhouses = "";

        CATALOG.forEach(({ name_product, id ,price, img, procent, category, subcategory }) => {
            if (category == "fish") {
                if (subcategory == "food") {
                    if (procent != 0) {
                        htmlfishfood += `
                          <div class="tovar">
                           <div class="name_of_product">${name_product}</div>
                           <div  class="price">${(price - price * procent).toFixed(2)}BYN</div>
                           <div class="offprice">${price}BYN</div>
                           <div class="deliver" id="${id}" >Заказать</div>
                           <img src="${img}" class="img"></img>
                           <div class="akti">Акция</div>
                           <div class="proccent">-${procent * 100}%</div>
                           </div>
                          `;
                    }
                    else {
                        htmlfishfood += `
                            <div class="tovar">
                             <div class="name_of_product">${name_product}</div>
                             <div  class="priceee">${(price - price * procent).toFixed(2)}BYN</div>
                             <div class="deliver" id="${id}" >Заказать</div>
                             <img src="${img}" class="img"></img>
                             </div>
                            `;
                    }

                }

                if (subcategory == "houses") {
                    if (procent != 0) {
                        htmlfishhouses += `
                          <div class="tovar">
                           <div class="name_of_product">${name_product}</div>
                           <div  class="price">${(price - price * procent).toFixed(2)}BYN</div>
                           <div class="offprice">${price}BYN</div>
                           <div class="deliver" id="${id}" >Заказать</div>
                           <img src="${img}" class="img"></img>
                           <div class="akti">Акция</div>
                           <div class="proccent">-${procent * 100}%</div>
                           </div>
                          `;
                    }
                    else {
                        htmlfishhouses += `
                            <div class="tovar">
                             <div class="name_of_product">${name_product}</div>
                             <div  class="priceee">${(price - price * procent).toFixed(2)}BYN</div>
                             <div class="deliver" id="${id}" >Заказать</div>
                             <img src="${img}" class="img"></img>
                             </div>
                            `;
                    }
                }

            }
        });

        const htmlfish = `
        
        <div  class="act_tov">${htmlfishfood}
        ${htmlfishhouses}</div>
        `;
        ROOT_PRODUCTS.innerHTML = htmlfish;
    }
    renderDogHygiene() {
        let htmldoghygiene = "";
        CATALOG.forEach(({ name_product,id , price, img, procent, category, subcategory }) => {
            if (category == "dog") {
                if (subcategory == "hygiene") {
                    if (procent != 0) {
                        htmldoghygiene += `
                          <div class="tovar">
                           <div class="name_of_product">${name_product}</div>
                           <div  class="price">${(price - price * procent).toFixed(2)}BYN</div>
                           <div class="offprice">${price}BYN</div>
                           <div class="deliver" id="${id}" >Заказать</div>
                           <img src="${img}" class="img"></img>
                           <div class="akti">Акция</div>
                           <div class="proccent">-${procent * 100}%</div>
                           </div>
                          `;
                    }
                    else {
                        htmldoghygiene += `
                            <div class="tovar">
                             <div class="name_of_product">${name_product}</div>
                             <div  class="priceee">${(price - price * procent).toFixed(2)}BYN</div>
                             <div class="deliver" id="${id}" >Заказать</div>
                             <img src="${img}" class="img"></img>
                             </div>
                            `;
                    }
                }
            }
        });

        ROOT_KATEGORYI.innerHTML = htmldoghygiene;
    }
    renderCatFood() {
        let htmlcatfood = "";
        CATALOG.forEach(({ name_product, id ,price, img, procent, category, subcategory }) => {
            if (category == "cat") {
                if (subcategory == "food") {
                    if (procent != 0) {
                        htmlcatfood += `
                          <div class="tovar">
                           <div class="name_of_product">${name_product}</div>
                           <div  class="price">${(price - price * procent).toFixed(2)}BYN</div>
                           <div class="offprice">${price}BYN</div>
                           <div class="deliver" id="${id}" >Заказать</div>
                           <img src="${img}" class="img"></img>
                           <div class="akti">Акция</div>
                           <div class="proccent">-${procent * 100}%</div>
                           </div>
                          `;
                    }
                    else {
                        htmlcatfood += `
                            <div class="tovar">
                             <div class="name_of_product">${name_product}</div>
                             <div  class="priceee">${(price - price * procent).toFixed(2)}BYN</div>
                             <div class="deliver" id="${id}" >Заказать</div>
                             <img src="${img}" class="img"></img>
                             </div>
                            `;
                    }
                }
            }
        });

        ROOT_KATEGORYI.innerHTML = htmlcatfood;
    }
    renderDogFood() {
        let htmldogfood = "";
        CATALOG.forEach(({ name_product, id ,price, img, procent, category, subcategory }) => {
            if (category == "dog") {
                if (subcategory == "food") {
                    if (procent != 0) {
                        htmldogfood += `
                          <div class="tovar">
                           <div class="name_of_product">${name_product}</div>
                           <div  class="price">${(price - price * procent).toFixed(2)}BYN</div>
                           <div class="offprice">${price}BYN</div>
                           <div class="deliver" id="${id}" >Заказать</div>
                           <img src="${img}" class="img"></img>
                           <div class="akti">Акция</div>
                           <div class="proccent">-${procent * 100}%</div>
                           </div>
                          `;
                    }
                    else {
                        htmldogfood += `
                            <div class="tovar">
                             <div class="name_of_product">${name_product}</div>
                             <div  class="priceee">${(price - price * procent).toFixed(2)}BYN</div>
                             <div class="deliver" id="${id}" >Заказать</div>
                             <img src="${img}" class="img"></img>
                             </div>
                            `;
                    }
                }
            }
        });

        ROOT_KATEGORYI.innerHTML = htmldogfood;
    }
    renderRodentHouses() {
        let htmlrodenthouses = "";
        CATALOG.forEach(({ name_product, id ,price, img, procent, category, subcategory }) => {
            if (category == "rodent") {
                if (subcategory == "houses") {
                    if (procent != 0) {
                        htmlrodenthouses += `
                          <div class="tovar">
                           <div class="name_of_product">${name_product}</div>
                           <div  class="price">${(price - price * procent).toFixed(2)}BYN</div>
                           <div class="offprice">${price}BYN</div>
                           <div class="deliver" id="${id}" >Заказать</div>
                           <img src="${img}" class="img"></img>
                           <div class="akti">Акция</div>
                           <div class="proccent">-${procent * 100}%</div>
                           </div>
                          `;
                    }
                    else {
                        htmlrodenthouses += `
                            <div class="tovar">
                             <div class="name_of_product">${name_product}</div>
                             <div  class="priceee">${(price - price * procent).toFixed(2)}BYN</div>
                             <div class="deliver" id="${id}" >Заказать</div>
                             <img src="${img}" class="img"></img>
                             </div>
                            `;
                    }
                }
            }
        });

        ROOT_KATEGORYI.innerHTML = htmlrodenthouses;
    }
    renderFishHouses() {
        let htmlfishhouses = "";
        CATALOG.forEach(({ name_product, id , price, img, procent, category, subcategory }) => {
            if (category == "fish") {
                if (subcategory == "houses") {
                    if (procent != 0) {
                        htmlfishhouses += `
                          <div class="tovar">
                           <div class="name_of_product">${name_product}</div>
                           <div  class="price">${(price - price * procent).toFixed(2)}BYN</div>
                           <div class="offprice">${price}BYN</div>
                           <div class="deliver" id="${id}" >Заказать</div>
                           <img src="${img}" class="img"></img>
                           <div class="akti">Акция</div>
                           <div class="proccent">-${procent * 100}%</div>
                           </div>
                          `;
                    }
                    else {
                        htmlfishhouses += `
                            <div class="tovar">
                             <div class="name_of_product">${name_product}</div>
                             <div  class="priceee">${(price - price * procent).toFixed(2)}BYN</div>
                             <div class="deliver" id="${id}" >Заказать</div>
                             <img src="${img}" class="img"></img>
                             </div>
                            `;
                    }
                }
            }
        });

        ROOT_KATEGORYI.innerHTML = htmlfishhouses;
    }

}

const products = new Products;

function forma(){
    let del = document.getElementsByClassName("deliver")
for(let i = 0; i < del.length; i++){
  del[i].onclick = function(){
   let id =  this.id;
   let product = CATALOG.find(product => product.id === id);
   let forma = '';
        
        
   forma =
     `<div class="content">
     <div class="title"><span><h2> Форма оформления заказа </h2></span></div>
     <p></p>
     <div class="krest">&#10006;</div>
     <div class="form"><form action="_адрес для отправки_" method= "GET" name="my_form">
     <div class="nmtvr">Наименование товара:</div>
     <div class="nam">${product.name_product}</div>
       <p></p>
       <div class="pr">Цена: ${product.price}BYN</div>
       <div class="sk">Скидка: ${(product.price-(product.price - product.price * product.procent).toFixed(2)).toFixed(2)}BYN</div>
       <p></p>
       <div class="pr_sk">Цена cо скидкой: <span class="prsk">${(product.price - product.price * product.procent).toFixed(2)}BYN </span></div>
       <p></p>
       <div></div>
       <label><span class="fio"> Введите свою фамилию и имя:</span> <br />
       <input type="text"class="guest"/>     <input type="text"class="guest"/></label><p></p>
       <label><span class="phone"> Телефон:</span><br />
       <input type="text"class="guest"/></label><p></p>
       
       <span class="goods"> Способ доставки:</span><br />
       <select name="goods"class="guest"> 
         <option value="Самовызов">Самовызов</option> 
          <option value="Доставка">Доставка</option>
       </select><p></p>
       <label><span class="number"> Количество:</span><br />
       <input type="search" class="guest"/></label><p></p>
       <label><span class="date"> Дата доставки:</span><br />
       <input type="date"class="guest"/></label><p></p>
     
     <div class="bottom">
     <input type="submit" class="bottom1" value="Заказать"/>
     <input type="submit" class="bottom2" value="Очистить"/></div>
       </div>
       <p></p>
           </div>`
 
   ROOT_forma.innerHTML = forma;
   document.getElementsByClassName("krest")[0].onclick=function(){
    document.getElementsByClassName("content")[0].style.display="none";
   }

 
  }
}
}

function HTMLDog() {
    
    products.renderDog();
    forma()
}
function HTMLCat() {
    products.renderCat();
    forma()
}
function HTMLRodent() {
    products.renderRodent();
    forma()
}
function HTMLBird() {
    products.renderBird();
    forma()
}
function HTMLFish() {
    products.renderFish();
    forma()
}
function HTMLDogHygiene() {
    products.renderDogHygiene();
    forma()
}
function HTMLCatFood() {
    products.renderCatFood();
    forma()
}
function HTMLDogFood() {
    products.renderDogFood();
    forma()
}
function HTMLRodentHouses() {
    products.renderRodentHouses()
    forma()
}
function HTMLFishHouses() {
    products.renderFishHouses()
    forma()
}


