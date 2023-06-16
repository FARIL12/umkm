// Mendapatkan parameter dari URL
function getUrlParameter(name) {
  name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Mendapatkan detail produk berdasarkan parameter URL
function getProductDetails() {
  var productId = getUrlParameter('productId');
  // Simulasi mendapatkan detail produk dari API atau database
  var productDetails = {
      id: productId,
      name: 'Produk 1',
      price: 100000
  };
  return productDetails;
}

// Mengupdate tampilan detail produk
function updateProductDetails() {
  var productDetails = getProductDetails();
  var productDetailsElement = document.getElementById('product-details');
  if (productDetails) {
      var html = '<h3>' + productDetails.name + '</h3>' +
                 '<p>Harga: Rp ' + productDetails.price + '</p>';
      productDetailsElement.innerHTML = html;
  } else {
      productDetailsElement.innerHTML = 'Produk tidak ditemukan.';
  }
}

// Menghitung total harga berdasarkan jumlah produk
function calculateTotalPrice() {
  var productDetails = getProductDetails();
  var quantity = document.getElementById('quantity').value;
  var totalPriceElement = document.getElementById('total-price');
  if (productDetails) {
      var totalPrice = productDetails.price * quantity;
      totalPriceElement.value = 'Rp ' + totalPrice;
  } else {
      totalPriceElement.value = '';
  }
}

// Mengupdate tampilan detail produk dan total harga saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
  updateProductDetails();
  calculateTotalPrice();
});

// Menangani perubahan jumlah produk dan menghitung total harga
document.getElementById('quantity').addEventListener('change', function() {
  calculateTotalPrice();
});
