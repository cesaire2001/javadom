const articles = document.querySelectorAll('.article');
    const totalPrice = document.getElementById('total-price');

    let pricePerItem = 15000; // Prix par article

    articles.forEach(article => {
      const btnPlus = article.querySelector('.btn-plus');
      const btnMinus = article.querySelector('.btn-minus');
      const btnDelete = article.querySelector('.btn-delete');
      const btnLike = article.querySelector('.btn-like');
      const quantiteSpan = article.querySelector('.quantite');

      let quantite = parseInt(quantiteSpan.textContent);

      btnPlus.addEventListener('click', function(){
        quantite++;
        quantiteSpan.textContent = quantite;
        calculateTotalPrice();
      });

      btnMinus.addEventListener('click', function()  {
        if (quantite > 0) {
          quantite--;
          quantiteSpan.textContent = quantite;
          calculateTotalPrice();
        }
      });

      btnDelete.addEventListener('click', function() {
        article.remove();
        calculateTotalPrice();
      });

      btnLike.addEventListener('click', function() {
        btnLike.classList.toggle('liked');
      });
    });

    function calculateTotalPrice() {
      let total = 0;
      articles.forEach(article => {
        const quantite = parseInt(article.querySelector('.quantite').textContent);
        total += quantite * pricePerItem;
      });
      totalPrice.textContent = total;
    } 