<?php
	namespace AttrRouter;

	require_once __DIR__ . "/../Attributes/Route.php";

	class Router{

		private $featuresFolder = "";

		/** @property ReflectionMethod[] $routableMethods */
		public $routableMethods = [];

		/**
		* Sets the features folder
		*/
		public function setFeaturesFolder(string $path){
			$this->featuresFolder = $path;
		}

		/**
		* Loads the API features Folder classes
		* from the Features Folder
		*/
		public function loadAPIFeatures(string $innerDirectory = ""){
			if ($innerDirectory === ""){
				$fileNames = array_diff(scandir($this->featuresFolder), ['.','..']);
			}else{
				$fileNames = array_diff(scandir(sprintf("%s/%s", $this->featuresFolder, $innerDirectory)), ['.','..']);
			}

			foreach ($fileNames as $featureFileName){
				if ($innerDirectory === ""){
					$featurePath = sprintf("%s/%s", $this->featuresFolder, $featureFileName);
				}else{
					$featurePath = sprintf("%s/%s/%s", $this->featuresFolder, $innerDirectory, $featureFileName);
				}

				if (is_dir($featurePath)){
					$this->loadAPIFeatures(sprintf("%s/%s", $innerDirectory, $featureFileName));
				}else{
					// The class name _must_ be the file name minus the extension
					$fileExtension = pathinfo($featureFileName, PATHINFO_EXTENSION);
					if ($fileExtension === "php"){
						$className = pathinfo($featureFileName, PATHINFO_FILENAME);
					
						require($featurePath);
						$classReflector = new \ReflectionClass("$className");
						$featureMethods = $classReflector->getMethods(\ReflectionMethod::IS_PUBLIC);
						$this->routableMethods[] = [new $className(), $featureMethods];
					}
				}
			}
		}

		/**
		* @return string|null
		*/
		public function route(string $requestMethod, string $uri, $methodParamRegex = "({[a-zA-Z]+})"){

			// Go through all the methods collected from the feature classes
			foreach ($this->routableMethods as $methodData){
				$classInstance = $methodData[0];
				$methods = $methodData[1];

				// The router will first find all methods
				// that have a matching route.
				// Then, later, it will verify any additional attributes
				// also pass. Otherwise, no route is returned/invoked
				$routeMethodsToAttempt = [];

				// Loop through the methods
				foreach($methods as $method){

					// Get the attributes (if any) of the method
					$attributes = $method->getAttributes();

					/**
					* To be defined eventually...
					*/
					$routeClass = null;
					$routeMethod = null;
					$attemptRouting = false;

					// Loop through attributes and only check the route here
					foreach ($attributes as $attribute){
						$attrName = $attribute->getName();

						// Check if this attribute name is "Route"
						if ($attrName === "Route"){
							$routeAttribute = $attribute->newInstance();

							// Check if the first argument (request method arg)
							// matches the server request method
							if (strtolower($routeAttribute->method) === strtolower($requestMethod)){

								// Is the route a regular expression?
								/*if ($routeAttribute->isRegex === false){
									// No, it is a plain string match
									if ($routeAttribute->uri === $uri){
										$routeMethodsToAttempt[] = $method;
									}
								}else{*/
									// Yes, it needs to be matched against the URI
									$uriDidMatch = preg_match($uri, $routeAttribute->uri, $matches);
									if ($uriDidMatch === 1){
										// Add the matches to the requests GET array
										$paramsDidMatch = preg_match_all($methodParamRegex, $routeAttribute->uri, $params);
										if ($paramsDidMatch !== 0){
											//Condiigonally remove navigation token from routeAttribute->uri and replace with empty string, 
											//only if the request has no corresponding first or next or prev or last present in url
											#$uriMask = str_replace('/{goto}', '', $routeAttribute->uri);
											$uriMaskKeys = explode('/', ltrim(preg_replace('/\/[a-zA-Z]+/', '',  $routeAttribute->uri), '/'));
											//Store the navigation token
											preg_match("(first|next|prev|last)", $_GET['requestPath'], $goto);
											//Isolate the navigation goto token
											$uriPath = preg_replace('/^\/(first|next|prev|last)+/', '/({${1}})', "/{$_GET['requestPath']}");
											//Substitute {riskid} after risks/  if not present already (before navigation token - first, next, prev, last)
											$uriPath = preg_replace('/^\/([a-zA-Z]+)\/(first|next|prev|last)+/', '/${1}/{}/${2}', $uriPath);
											//Remove non token values, plain strings without curly braces that is
											$uriPath = ltrim(preg_replace('/^\/[a-zA-Z]+/', '', $uriPath), '/');
											//Remove curly braces for proper processing
											$uriPathValues = explode('/', $uriPath);
											foreach($uriMaskKeys as $idx=>$uriPathKey)
												$_GET[trim($uriPathKey, '{}')] = null;
											foreach($uriPathValues as $idx=>$uriValue)
												$_GET[trim($uriMaskKeys[$idx], '{}')] = match($uriValue){'{}'=> null, default => $uriValue};
											
										}
										$routeMethodsToAttempt[] = $method;
									}
								//}
							}
						}
					}

					// Loop through the methods that routes matched
					// and run their additional attributes, if any.
					// The first one to pass all should be invoked as the correct
					// route.
					$acceptedRoutes = [];
					foreach ($routeMethodsToAttempt as $method){
						$attributes = $method->getAttributes();

						// Check everything except the route
						$passedAttributes = 0;
						$neededToRoute = count($attributes) - 1;

						foreach ($attributes as $attribute){
							$attrName = $attribute->getName();

							if ($attrName !== "Route"){
								$attrInstance = $attribute->newInstance();
								if ($attrInstance->passed){
									++$passedAttributes;
								}else{
									// This attribute failed. This method is not routable
									// Move on to the next, break this inner for loop
									break 1;
								}
							}
						}
						$args = $_GET;
						array_shift($args);
						if ($passedAttributes === $neededToRoute){
							return $method->invokeArgs($classInstance, $args);
						}
					}
				}

			}
			return null;
		}
	}
