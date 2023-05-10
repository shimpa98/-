


class Products_skidka {
  
  render() {

    let htmlskidki = '';
    let n = 0;


    CATALOG.forEach(({ name_product, price, img, procent,id }) => {
      if (procent != 0) {
        
        n++;
        htmlskidki += `
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
      
    });

    const htmskidki = `<div class="act_tov">${htmlskidki}</div>`
    ROOT_PRODUCTS_SKIDKA.innerHTML = htmskidki;
    const htmln = `<span class="n">${n}</span>`;
    ROOT_actiskid.innerHTML += htmln;
  }
}


const products_skidka = new Products_skidka();
products_skidka.render();


let deliver = document.getElementsByClassName("deliver")
for(let i = 0; i < deliver.length; i++){
  deliver[i].onclick = function(){
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
           <div class="pr_sk">Цена cо скидкой:  <span class="prsk">${(product.price - product.price * product.procent).toFixed(2)}BYN </span> </div>
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
         <input type="button" class="bottom2" value="Очистить"/></div>
           </div>
           <p></p>
           </div>`
 
   ROOT_forma.innerHTML = forma;


   
   document.getElementsByClassName("krest")[0].onclick=function(){
    document.getElementsByClassName("content")[0].style.display="none";
   }


   
   document.getElementsByClassName("bottom2")[0].onclick=function(){
    document.getElementsByClassName("guest")[0].value='';
    document.getElementsByClassName("guest")[1].value='';
    document.getElementsByClassName("guest")[2].value='';
    document.getElementsByClassName("guest")[3].value='';
    document.getElementsByClassName("guest")[4].value='';
    document.getElementsByClassName("guest")[5].value='';
   }

 
  }
}

