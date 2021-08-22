<?php
	namespace AttrRouter;

	require_once __DIR__ . "/Router.php";

	class RequestHandler{

		/**
		* Processes and routes a Swoole request
		* @param ViewSettings $viewSettings
		* @param Router $router
		*/
		public static function process(string $requestPath, string $requestType, string $searchDir, Router $router, ClassLoader $classLoader){
			$requestType = $_SERVER['REQUEST_METHOD'];
			$routes = $classLoader->routesConfig;
			$routeKeys = array_keys($routes);
			$pattern = sprintf("/^%s:%s/", $requestType, $requestPath);
			$routeKeysFound = preg_grep($pattern, $routeKeys);
			if ($routeKeysFound)
			{
				$routePath = $routes[$routeKeysFound[array_keys($routeKeysFound)[0]]];
				$router->setFeaturesFolder($searchDir .'/' . $routePath);
				$router->loadAPIFeatures();
				$requestPathRegex = sprintf("/^%s/", $requestPath);
				return $router->route($requestType, $requestPathRegex);
			}
			return false;
		}

	}
