$( document ).ready( function() {

	var i;
	var content = '';
	for ( i = 1; i <= 2; i++ ) {
		
		content = '<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">' +
				'<div class="banner">' +
				'<img src="assets/img/banner-md-' + i + '.jpg" class="img-responsive" alt="Banner">' +
				'</div>' +
				'</div>';
		$( "#banners-md" ).prepend( content );

	}

	for ( i = 1; i <= 3; i++ ) {
		
		content = '<div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">' +
				'<div class="banner">' +
				'<img src="assets/img/banner-sm-' + i + '.jpg" class="img-responsive" alt="Banner">' +
				'</div>' +
				'</div>';
		$( "#banners-sm" ).prepend( content );

	}

	for ( i = 1; i <= 4; i++ ) {

		content = '<div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">' +
				'<div class="product">' +
				'<div class="single-product">' +
				'<img src="assets/img/produto.jpg" class="img-responsive product-image" alt="Produto">' +
				'<span class="label label-to-left bg-black">' +
				'<i class="fa fa-star"></i> novo' +
				'</span>' +
				'<span class="label label-to-right bg-blue">' +
				'<i class="fa fa-truck"></i> frete grátis' +
				'</span>' +
				'<span class="label label-to-right-2 bg-pink">' +
				'<i class="fa fa-shopping-basket"></i> oferta' +
				'</span>' +
				'</div>' +
				'<h3 class="text-center product-name">' +
				'<strong>LOREM IPSUM DOLOR SIT LOREM IPSUM DOLOR SIT AMET</strong>' +
				'</h3>' +
				'<div class="text-center">' +
				'<del class="text-gray">R$ 280,00</del>' +
				'<span class="text-pink">' +
				'<strong>R$ 190,00</strong>' +
				'</span>' +
				'</div>' +
				'<div class="text-center">' +
				'<strong>12x de R$ 66,00</strong>' +
				'</div>' +
				'<a class="btn-buy" href="">' +
				'<i class="fa fa-shopping-bag"></i> COMPRAR' +
				'</a>' +					
				'</div>' +
				'</div>';
		$( "#products-loop" ).prepend( content );			

	}

} );