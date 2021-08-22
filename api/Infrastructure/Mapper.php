<?php
    namespace Infrastructure;

    abstract class Mapper
    {
        abstract protected function mapFromArray(array $result);

        public function populateFromCollection($results)
        {
            $return = [];  
            foreach($results as $result)
            {
                $return[] = $this->mapFromArray($result);
            }
            return $return; 
        }

        protected function _performMapping($array, $object)
        {
            foreach (array_keys($array) as $property)
            {
                $propertyNoDot = str_replace('.', '', $property);
                $lowerCaseProperty = strtolower($propertyNoDot);
                if (property_exists(get_class($object), $property))
                    $object->$property = $array[$property];
                else if (property_exists(get_class($object), $lowerCaseProperty))     
                    $object->$lowerCaseProperty = $array[$property];
            }
            return $object;
        }
    }