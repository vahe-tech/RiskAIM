<?php
    spl_autoload_extensions(".php");
    spl_autoload_register('Autoloader::loadFolder');

    class Autoloader
    {
        public function __construct()
        {
            spl_autoload_register([$this, 'loadFolder']);
        }

        private static function rglob($pattern, $flags = 0) 
        {
            $files = glob($pattern, $flags); 
            foreach (glob(dirname($pattern).'/*', GLOB_ONLYDIR|GLOB_NOSORT) as $dir) {
                $files = array_merge($files, self::rglob($dir.'/'.basename($pattern), $flags));
            }
            return $files;
        }

        public static function loadFolder($classPath = null)
        {
            $matches = self::rglob("$classPath/*.*");
            foreach ($matches as $fileName) 
            {
                $filePath = realpath($fileName);
                if (!in_array($filePath, get_included_files()) && file_exists($filePath))
                {
                    include $filePath;       
                }
            }
        }
    }