//ET Holiday Gift Guide
(function(){
	var model = {
			products:[
				{
					id: 1,
					name: "Charge Wristband",
					from: "by Fitbit",
					imgModalUrl: "http://www.etonline.com/media/img/Fitbit_Charge_modal.jpg",
					imgOverviewUrl: "http://www.etonline.com/media/img/Fitbit-Charger_overview.jpg",
					buyLink: "http://www.amazon.com/gp/product/B00N2BVOUE/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00N2BVOUE&linkCode=as2&tag=eton07-20&linkId=ZH4KIBIY5W7PLC5N",
					price: "$115.05",
					website: "AMAZON.COM",
					productWhat:"A wireless activity wristband.",
					productWhy: "It accurately tracks your steps taken, distance traveled, calories burned and stairs climbed for the whole day.",
					perfectFor: "The fitness fanatic in your life."				
				},
				{
					id: 2,
					name: "The Pioneer Woman Cooks: Dinnertime",
					from: "by Ree Drummond",
					imgModalUrl: "http://www.etonline.com/media/img/Dinnertime-Cookbook_modal.jpg",
					imgOverviewUrl: "http://www.etonline.com/media/img/Dinnertime-Cookbook_overview.jpg",
					buyLink: "http://www.barnesandnoble.com/w/the-pioneer-woman-cooks-ree-drummond/1121727469?ean=9780062225245",
					price: "$17.99",
					website: "BARNESANDNOBLE.COM",
					productWhat: "The perfect dinnertime cookbook for the busy family.",
					productWhy: "Blogger and best-selling author Ree Drummond rings the dinner bell with 125 easy but comforting recipes she taste-tested with her own family.",
					perfectFor: "Anyone who believes dinner is actually the most important family meal of the day."		
				},
				{
					id: 3,
					name: "Portable Charger",
					from: "by Jackery",
					imgModalUrl: "http://www.etonline.com/media/img/Jackery_Charger_modal.jpg",
					imgOverviewUrl: "http://www.etonline.com/media/img/Jockey-Charger_overview.jpg",
					buyLink: "http://www.amazon.com/gp/product/B00AA6CS86/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00AA6CS86&linkCode=as2&tag=eton07-20&linkId=JGHQPELIFBODWRDG",
					price: "$10.99 ",
					website: "AMAZON.COM",
					productWhat:"The only charger you'll ever need.",
					productWhy: "It's the world's smallest external battery charger and power bank.",
					perfectFor: "The techie in your life."	
				},
					{
					id: 4,
					name: "Portable 3-Speed Turntable",
					from: "by Crosley",
					imgModalUrl: "http://www.etonline.com/media/img/Record_Player_modal.jpg",
					imgOverviewUrl: "http://www.etonline.com/media/img/record-player_overview.jpg",
					buyLink: "http://www.amazon.com/gp/product/B008AFYZ1M/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B008AFYZ1M&linkCode=as2&tag=eton07-20&linkId=4VNKXYBJJ3ESHSEQ",
					price: "$128.49",
					website: "AMAZON.COM",
					productWhat:"A modern-day record player.",
					productWhy: "In addition to playing vinyl records, it also has software for ripping and editing audio content and full-range stereo speakers.",
					perfectFor: "The nostalgic DJ in your family."	
				},
				{
					id: 5,
					name: "Outlander Season One: The Ultimate Collection",
					from: "by Starz",
					imgModalUrl: "http://www.etonline.com/media/img/Outlander_modal.jpg",
					imgOverviewUrl: "http://www.etonline.com/media/img/Outlander-Box_overview.jpg",
					buyLink: "http://www.amazon.com/gp/product/B013JBH0CC/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B013JBH0CC&linkCode=as2&tag=eton07-20&linkId=2OCSH2AWQYORIN5J",
					price: "$99.99",
					website: "AMAZON.COM",
					productWhat:"A TV show based on the best-selling book series by Diana Gabaldon, which spans the genres of romance, science fiction, history and adventure.",
					productWhy: "The box set includes special features such as a keepsake box, a flask and a collectible book that takes a deeper look into the first season.",
					perfectFor: "Anyone wanting to go deeper into the series."	
				},
				{
					id: 6,
					name: "SoundTrue Headphones",
					from: "by Bose",
					imgModalUrl: "http://www.etonline.com/media/img/Bose_Headphones_modal.jpg",
					imgOverviewUrl: "http://www.etonline.com/media/img/Bose-Headphones_overview.jpg",
					buyLink: "http://www.amazon.com/gp/product/B0117RGG8E/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B0117RGG8E&linkCode=as2&tag=eton07-20&linkId=XS7FC5NMZ5EPI2XP",
					price: "$279.95",
					website: "AMAZON.COM",
					productWhat: "A way to listen to music the way the artist intended.",
					productWhy: "They're the same headphones NFL coaches use to block out stadium crowd noise during games.",
					perfectFor: "The music lover in your life."	
				},
				{	
					id: 7,
					name: "BB-8 Droid",
					from: "by Sphero",
					imgModalUrl: "http://www.etonline.com/media/img/BB8_modal.jpg",
					imgOverviewUrl: "http://www.etonline.com/media/img/BB8-Droid_overview.jpg",
					buyLink: "http://www.amazon.com/gp/product/B0107H5FJ6/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B0107H5FJ6&linkCode=as2&tag=eton07-20&linkId=HRL5DV3ZABH74BFF",
					price: "$198.00",
					website: "AMAZON.COM",
					productWhat: "Your own trustworthy astromech droid.",
					productWhy: "The app-enabled robot adapts its personality based on your interactions, making it possible for you to take home a piece of <i>Star Wars</i>: The Force Awakens -- and it's adorable.",
					perfectFor: "Anyone who's ever dreamed of piloting a starship."	},
				{
					id: 8,
					name: "The Wire: The Complete Series",
					from: "by HBO",
					imgModalUrl: "http://www.etonline.com/media/img/The_Wire_Box_modal.jpg",
					imgOverviewUrl: "http://www.etonline.com/media/img/TheWire-Collectors-Box_overview.jpg",
					buyLink: "http://www.amazon.com/gp/product/B00UCOXZLU/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00UCOXZLU&linkCode=as2&tag=eton07-20&linkId=HOUWNFK7XMNJJJT3",
					price: "$148.70",
					website: "AMAZON.COM",
					productWhat:"3,645 minutes of one of HBO's proudest accomplishments.",
					productWhy: "It's literally one of the best shows in the history of television.",
					perfectFor: "The last person in your friend group who still hasn't seen it."	
				},
				{
					id: 9,
					name: "Desktop Basketball Game",
					from: "by Perfect Life Ideas",
					imgModalUrl: "http://www.etonline.com/media/img/Desktop_Basketball_modal.jpg",
					imgOverviewUrl: "http://www.etonline.com/media/img/Desktop-Basketball_overview.jpg",
					buyLink: "http://www.amazon.com/gp/product/B00RCJ23T8/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00RCJ23T8&linkCode=as2&tag=eton07-20&linkId=JCCBZXTRORWVCHL2",
					price: "$18.95",
					website: "AMAZON.COM",
					productWhat: "A one- or two-player tabletop arcade basketball game.",
					productWhy: "No batteries. No complicated instructions. This feels like a great indoor stress reliever that can be played at home or at the office.",
					perfectFor: "A kid or an adult who's a kid at heart."	
				},
				{
					id: 10,
					name: "Cord Taco Leather Organizers",
					from: "by This Is Ground",
					imgModalUrl: "http://www.etonline.com/media/img/Cord_Tacos_modal.jpg",
					imgOverviewUrl: "http://www.etonline.com/media/img/cord-taco_overview.jpg",
					buyLink: "http://www.amazon.com/gp/product/B00GMVDRSI/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00GMVDRSI&linkCode=as2&tag=eton07-20&linkId=KXX6TJ7DBA7ZXZKP",
					price: "$29.00",
					website: "AMAZON.COM",
					productWhat: "Leather clasps with metal button enclosures.",
					productWhy: "They're perfect for organizing your messy cords.",
					perfectFor: "Anyone tired of dealing with tangled earbuds, USB cables and the like."	
				},		
				{
					id: 11,
					name: "Darth Vader Slippers",
					from: "by Amazon Fashion",
					imgModalUrl: "http://www.etonline.com/media/img/Darth_Vader_Slippers_modal.jpg",
					imgOverviewUrl: "http://www.etonline.com/media/img/DarthVader-Slippers_overview.jpg",
					buyLink: "http://www.amazon.com/gp/product/B00P04IS14/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00P04IS14&linkCode=as2&tag=eton07-20&linkId=BBUBHBM7UXHLDBIY",
					price: "$18.98 - $24.99",
					website: "AMAZON.COM",
					productWhat:"House slippers for Star Wars fans.",
					productWhy: "This plush footwear can make even the nicest guy feel the power of the dark side, while keeping his or her toes nice and toasty.",
					perfectFor: 'Anyone who knows the meaning behind the phrase "Han shot first."'	
				},
				{
					id: 12,
					name: "Waterproof Bluetooth Speaker",
					from: "by BOOM",
					imgModalUrl: "http://www.etonline.com/media/img/Boom_Speakers_modal.jpg",
					imgOverviewUrl: "http://www.etonline.com/media/img/BOOM-Loudspeaker_overview.jpg",
					buyLink: "http://www.amazon.com/gp/product/B015OWJEPU/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B015OWJEPU&linkCode=as2&tag=eton07-20&linkId=FM67UW6D5SP5UOEV",
					price: "$39.00",
					website: "AMAZON.COM",
					productWhat: "Speakers built to last.",
					productWhy: "The Swimmer can be immersed in up to three feet of water for 30 minutes and can loop around virtually any object.",
					perfectFor: "Housemates that sing in the shower."	
				}
			],
			index:{
				value:""
			} 
	};
			
	var controller = {
		init: function(){
			view.init();
		},

		getProductData: function(){
			return model.products;
		},

		getProductDataById: function(id){
			for(i=0; i < model.products.length; i++){
				if(model.products[i].id == id ){
					return model.products[i];
				}			
			}
		},

		getProductCount: function(){
			return model.products.length;
		},

		getIndexById: function(id){
			for(i = 0; i < model.products.length; i++){
				if(model.products[i].id == id){
					return i;
				}
				else{
					//error handle this
				}
			}
		},

		getPrevProduct: function(index){
			if(index > 0 && index < model.products.length){
					var newindex = index-=1;
					controller.setIndexValue(newindex);
					return model.products[newindex];
			}else{
				return model.products[index];
			}
		},

		getNextProduct: function(index){
			if(index >= 0 && index < model.products.length - 1){
					var newindex = index+=1;
					controller.setIndexValue(newindex);
					return model.products[newindex];
			}else{
				return model.products[index];			
			}
		},

		setIndexValue: function(index){
				model.index.value = index;
		},

		getIndexValue: function(){
				return model.index.value;
		}

	};

	var view = {
		init: function(){
			var productData = controller.getProductData();

			for(var product in productData){
				var context = productData[product],    
			    source      = $("#product-template").html(),
			    template    = Handlebars.compile(source),
			    html        = template(context);
				$("#product-wrapper").append(html);
			}

			$('.product-link').on("click", function(event){
				event.preventDefault();	
				var url  = $(this).attr('href'),
					id 	 = $(this).attr('data-product-id')
					name = controller.getProductDataById(id).name;

				trackOutboundLink(name, url);
			});

			// Sends the info to Google Analytics, if no Google Analytics send open window in 1 second
			function trackOutboundLink(product_name, productUrl) {		
				var opened_window = false,
					url	  		  = productUrl;
				setTimeout(openProductWindow(), 1000);
				
	            ga('send', 'event', 'Holiday Product Link', 'click', product_name, {
	            	hitCallback: openProductWindow(url)
	       		});

	       		function openProductWindow(){
	       			if(!opened_window){
	       				opened_window = true;
	       				window.open(url);
	       			}
	       		}
	        }

			view.render();
		},

		render: function(){
			var productId, theProduct, current, count, prev_product, next_product;
			var $modal = $("#productModal");

			$(".product").hover(
				function(){
					$(this).find(".product-caption-hover").addClass("hover");
				},
				function(){
					$(this).find(".product-caption-hover").removeClass("hover");
				}
			);

			$(".close-btn").hover(
				function(){
					$('.star-wrapper-gold .star-icon').addClass("twinkleLittleStar");
				},
				function(){
					$('.star-wrapper-gold .star-icon').removeClass("twinkleLittleStar");
				}
			);

			$(window).on("load resize", function(){
				whenToShowModal();
			});	

			$("#productModal").on('show.bs.modal', function(event){
				productId = $(event.relatedTarget).data('product-id');
				current_product = controller.getProductDataById(productId);
				controller.setIndexValue(controller.getIndexById(productId));
				totalCount = controller.getProductCount();

				updateModalProduct(current_product, controller.getIndexValue(), totalCount);
			});

			//clear modal pictures and text after close
			$("#productModal").on('hidden.bs.modal', function(event){
				$modal.find('.product-image img').attr('src', "");
			});

			$(".browse-btn.prev").click(function(){
				prev_product = controller.getPrevProduct(controller.getIndexValue());
				updateModalProduct(prev_product, controller.getIndexById(prev_product.id), totalCount);
			});

			$(".browse-btn.next").click(function(){
				next_product = controller.getNextProduct(controller.getIndexValue());
				updateModalProduct(next_product, controller.getIndexById(next_product.id), totalCount);
			});

			function updateModalProduct(product, current_placement, count){
				$modal.attr('data-product-id', product.id)
				$modal.find('.product-name').text(product.name);
				$modal.find('.product-by').text(product.from);
				$modal.find('.website.product-link').text(product.website);
				$modal.find('.price.product-link').text(product.price);
				$modal.find('.product-link').attr('href', product.buyLink).attr('data-product-id', product.id);
				$modal.find('#productWhat').html(product.productWhat);
				$modal.find('#productWhy').html(product.productWhy);
				$modal.find('#perfectFor').html(product.perfectFor);
				$modal.find('.product-image img').attr('src', product.imgModalUrl);
				$modal.find('#current-item').text(current_placement + 1);
				$modal.find('#total-items').text(count);
			}

			function whenToShowModal(){
				if( $(window).width() < 1024){
					$('.product').attr('data-toggle', '').attr('data-target', '');
				}
				else{
					$('.product').attr('data-toggle', 'modal');
					$('.product').attr('data-target', '#productModal');
				}
			}
		}
	}
	controller.init();
})();