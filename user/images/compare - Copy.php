
 <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>


<div class="container">
	<div class="row">
	<h2>Compare Ali Express/ eBay/ Amazon/ FlipKart Products</h2>
	<form method="post" style="padding:20px;">
		<input type="text" name="val" class="form-control" placeholder="Enter product name to compare. (Without space)"  />
		<br>
		<input type="submit" name="submit" value="search" class="btn btn-primary mb-2"/>
	</form> 
<hr>
<?php
if(isset($_POST['submit'])){
	$val=$_POST['val'];
	
	$user_id='sample';
$curl = curl_init();

curl_setopt_array($curl, [
	CURLOPT_URL => "https://magic-aliexpress1.p.rapidapi.com/api/products/search?name=".$val."&minSalePrice=5&shipToCountry=FR&sort=NEWEST_DESC&page=1&shipFromCountry=CN&fastDelivery=true&getShopInformation=false",
	CURLOPT_RETURNTRANSFER => true,
	CURLOPT_FOLLOWLOCATION => true,
	CURLOPT_ENCODING => "",
	CURLOPT_MAXREDIRS => 10,
	CURLOPT_TIMEOUT => 30,
	CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	CURLOPT_CUSTOMREQUEST => "GET",
	CURLOPT_HTTPHEADER => [
		"X-RapidAPI-Host: magic-aliexpress1.p.rapidapi.com",
		"X-RapidAPI-Key: 821bb2f829msh0f97ab8e0a4fb68p1cb3dfjsnb77b9d11975e"
	],
]);

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
	echo "cURL Error #:" . $err;
} else {
	//echo $response;
	$array = json_decode($response, true);
	$a=0;
	?>
	<div class="col-md-3" style="padding:5px; border: 1px solid;height:500px;overflow-x:scroll;">
	<h2>Ali Express</h2>
	
	<?php
	
	$count=15;
	for($i=0;$i<15;$i++){
		/*echo @$name = $array['docs'][$a]['app_sale_price'];
		echo @$name = $array['docs'][$a]['product_main_image_url'];
		echo @$name = $array['docs'][$a]['app_sale_price_currency'];
		echo @$name = $array['docs'][$a]['product_title'];
		echo @$name = $array['docs'][$a]['product_detail_url'];*/
		
		?>
		<div style="padding:5px;border:1px solid black;margin:5px;box-shadow: 5px 5px #eee;">
		
		<img src="<?php echo ltrim($array['docs'][$a]['product_main_image_url'],'https:'); ?>" height="200"/>
		<h4><?php echo $array['docs'][$a]['product_title']; ?></h4>	
		<label><?php echo $array['docs'][$a]['app_sale_price']; ?>-<?php echo $array['docs'][$a]['app_sale_price_currency']; ?></label>	
		<a target="_blank" href="<?php echo $array['docs'][$a]['product_detail_url']; ?>"><button> Order</button></a>
		<a target="_blank" href="fav.php?user=<?php echo $user_id ?>&link=<?php echo $array['docs'][$a]['product_detail_url']; ?>"><img src="icon.png" width="40"/></a>
		</div>
		<?php
		$a++;
		echo "<br>";
		
	}
	?>
	</div>
	<?php
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






$curl = curl_init();

curl_setopt_array($curl, [
	CURLOPT_URL => "https://ebay-data-scraper.p.rapidapi.com/products?page_number=1&product_name=".$val."&country=US",
	CURLOPT_RETURNTRANSFER => true,
	CURLOPT_FOLLOWLOCATION => true,
	CURLOPT_ENCODING => "",
	CURLOPT_MAXREDIRS => 10,
	CURLOPT_TIMEOUT => 30,
	CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	CURLOPT_CUSTOMREQUEST => "GET",
	CURLOPT_HTTPHEADER => [
		"X-RapidAPI-Host: ebay-data-scraper.p.rapidapi.com",
		"X-RapidAPI-Key: 821bb2f829msh0f97ab8e0a4fb68p1cb3dfjsnb77b9d11975e"
	],
]);

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
	echo "cURL Error #:" . $err;
} else {
	//echo $response;
	$array = json_decode($response, true);
	$a=0;
	?>
	<div class="col-md-3" style="padding:5px; border: 1px solid;height:500px;overflow-x:scroll;">
	<h2>eBay</h2>
	<?php
	
	
	for($i=0;$i<$count;$i++){
		/*echo @$name = $array['docs'][$a]['app_sale_price'];
		echo @$name = $array['docs'][$a]['product_main_image_url'];
		echo @$name = $array['docs'][$a]['app_sale_price_currency'];
		echo @$name = $array['docs'][$a]['product_title'];
		echo @$name = $array['docs'][$a]['product_detail_url'];*/
		
		?>
		<div style="padding:5px;border:1px solid black;margin:5px;box-shadow: 5px 5px #eee;">
		<img src="<?php echo $array[$a]['thumbnail']; ?>" height="200"/>
		<h4><?php echo $array[$a]['name']; ?></h4>	
		<label><?php echo $array[$a]['price']; ?></label>	
		<a target="_blank" href="<?php echo $array[$a]['link']; ?>"><button> Order</button></a>
		<a target="_blank" href="fav.php?user=<?php echo $user_id ?>&link=<?php echo $array[$a]['link']; ?>"><img src="icon.png" width="40"/></a>
		</div>
		<?php
		$a++;
		echo "<br>";
		
	}
	?>
	</div>
	<?php
}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





$curl = curl_init();

curl_setopt_array($curl, [
	CURLOPT_URL => "https://amazon23.p.rapidapi.com/product-search?query=".$val."&country=US",
	CURLOPT_RETURNTRANSFER => true,
	CURLOPT_FOLLOWLOCATION => true,
	CURLOPT_ENCODING => "",
	CURLOPT_MAXREDIRS => 10,
	CURLOPT_TIMEOUT => 30,
	CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	CURLOPT_CUSTOMREQUEST => "GET",
	CURLOPT_HTTPHEADER => [
		"X-RapidAPI-Host: amazon23.p.rapidapi.com",
		"X-RapidAPI-Key: 821bb2f829msh0f97ab8e0a4fb68p1cb3dfjsnb77b9d11975e"
	],
]);

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
	echo "cURL Error #:" . $err;
} else {
	//echo $response;
	$array = json_decode($response, true);
	$a=0;
	?>
	<div class="col-md-3" style="padding:5px; border: 1px solid;height:500px;overflow-x:scroll;">
	<h2>Amazon</h2>
	<?php
	
	
	for($i=0;$i<$count;$i++){
		/*echo @$name = $array['docs'][$a]['app_sale_price'];
		echo @$name = $array['docs'][$a]['product_main_image_url'];
		echo @$name = $array['docs'][$a]['app_sale_price_currency'];
		echo @$name = $array['docs'][$a]['product_title'];
		echo @$name = $array['docs'][$a]['product_detail_url'];*/
		
		?>
		<div style="padding:5px;border:1px solid black;margin:5px;box-shadow: 5px 5px #eee;">
		<img src="<?php echo $array['result'][$a]['thumbnail']; ?>" height="200"/>
		<h4><?php echo $array['result'][$a]['title']; ?></h4>	
		<label><?php echo $array['result'][$a]['price']['current_price']; ?>-<?php echo $array['result'][$a]['price']['currency']; ?></label>	
		<a target="_blank" href="<?php echo $array['result'][$a]['url']; ?>"><button> Order</button></a>
		<a target="_blank" href="fav.php?user=<?php echo $user_id ?>&link=<?php echo $array['result'][$a]['url']; ?>"><img src="icon.png" width="40"/></a>
		</div>
		<?php
		$a++;
		echo "<br>";
		
	}
	?>
	</div>
	<?php
	
	
	
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


$flipkart_url="https://flipkart.dvishal485.workers.dev/search/".$val;

 $json = file_get_contents($flipkart_url);



	//echo $response;
	 $array = json_decode($json, true);
	$a=0;
	?>
	<div class="col-md-3" style="padding:5px; border: 1px solid;height:500px;overflow-x:scroll;">
	<h2>Flip Kart</h2>
	<?php
	
	
	for($i=0;$i<$count;$i++){
		/*echo @$name = $array['docs'][$a]['app_sale_price'];
		echo @$name = $array['docs'][$a]['product_main_image_url'];
		echo @$name = $array['docs'][$a]['app_sale_price_currency'];
		echo @$name = $array['docs'][$a]['product_title'];
		echo @$name = $array['docs'][$a]['product_detail_url'];*/
		
		?>
		<div style="padding:5px;border:1px solid black;margin:5px;box-shadow: 5px 5px #eee;">
		<img src="<?php echo $array['result'][$a]['thumbnail']; ?>" height="200"/>
		<h4><?php echo $array['result'][$a]['name']; ?></h4>	
		<label><?php echo $array['result'][$a]['current_price']; ?>-INR</label>	
		<a target="_blank" href="<?php echo $array['result'][$a]['link']; ?>"><button> Order</button></a>
		<a target="_blank" href="fav.php?user=<?php echo $user_id ?>&link=<?php echo $array['result'][$a]['link']; ?>"><img src="icon.png" width="40"/></a>
		</div>
		<?php
		$a++;
		echo "<br>";
		
	}
	?>
	</div>
	<?php
	
	






}
?>



</div>
</div>
