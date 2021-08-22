<?php
	namespace AttrRouter;

	class ClassLoader{
		public string $routesFile = "";
		public array $routesConfig = [];
        
		/**
		* Sets the routes file to use for class loading
		* @param string $routesFilePath The full file path
		* @return
		*/
		public function setRoutesConfig(string $routesFilePath){
			$this->routesFile = $routesFilePath;

			/**
			* Do not use Swoole's coroutine API for this.
			* The routes is expected to be set after this method is called
			*/
			$this->routesConfig = json_decode(file_get_contents($routesFilePath), true);
		}
	}
