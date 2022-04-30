<?php
	require_once __DIR__ . "/autoloader.php";
	require_once __DIR__ . "/Router/Classes/ClassLoader.php";
	require_once __DIR__ . "/Router/loader.php";
	
	class API
	{
		public function processRequest()
		{
			$requestPath = '';
	
			if (isset($_GET['requestPath']))
				$requestPath = $_GET['requestPath'];
			if (empty($requestPath)){
				echo "RiskAIM API";
				return;
			}else{
				// Force it to begin with a forward slash
				$requestPath = sprintf("/%s", $requestPath);
			}
		
			/**
			* Set up the router by including only route specific class files
			*/
			$staticRouteHandler = new AttrRouter\ClassLoader;
			$staticRouteHandler->setRoutesConfig(__DIR__ . "/routes.json");
		
			/**
			* Initialize the router and set
			* the folder for Controller classes
			*/
			$router = new AttrRouter\Router;
			$searchDir = __DIR__."/Features";
			$router->setFeaturesFolder($searchDir);
		
			foreach (['/Domain', '/Provider', '/Infrastructure'] as $reqiredPath)
				call_user_func('Autoloader::loadFolder', __DIR__.'/'.$reqiredPath);

			$requestPathUpdated = str_replace('/', '\/', $requestPath);
			$requestPathUpdated = preg_replace("/([w]+)$/", "({{\$1}})", $requestPathUpdated);
			$requestPathUpdated = preg_replace("/(first|next|prev|last)$/", "{([a-zA-Z]+)}", $requestPathUpdated);
			$requestPathTemplate = preg_replace("/[0-9]+/", "{([a-zA-Z]+)}", $requestPathUpdated);
			#$requestPathTemplate = str_replace('{', '\{', $requestPathTemplate);
			#$requestPathTemplate = str_replace('}', '\}', $requestPathTemplate);
			$response = AttrRouter\RequestHandler::process($requestPathTemplate, $_SERVER['REQUEST_METHOD'], $searchDir, $router, $staticRouteHandler);
			header("Access-Control-Allow-Origin: *");
			
			if (is_array($response) && array_key_exists('succeeded', $response) && $response['succeeded'])
			{
				$status = 200;
				header("Content-Type: application/json"); 
				header("HTTP/1.1 " . $status . " " . self::requestStatus($status));
				return json_encode($response, JSON_NUMERIC_CHECK|JSON_PRETTY_PRINT);
			}
			else
			{
				$status = 404;
				header("Content-Type: text/html");
				header("HTTP/1.1 " . $status . " " . self::requestStatus($status));
				return "Invalid Endpoint: /api" . str_replace('\\', "", $requestPath);
			}
		}

		public static function requestStatus($code){
            $status = array (
                200 => 'OK',
                400 => 'Bad Request',
                404 => 'Not Found',
                405 => 'Method Not Allowed',
                500 => 'Internal Server Error'
            );
            return ($status[$code])?$status[$code]:$status[500];
        }
	}

	$api = new API();
	$response = $api->processRequest();
	echo $response;