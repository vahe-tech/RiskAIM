<?php
    namespace Infrastructure\Mapper;
    
    use Domain\Risk;
    use Infrastructure\Mapper;

    class RisksMapper extends Mapper 
    {
        protected function _performMapping($array, $object) : Risk
        {
            return parent::_performMapping($array, $object);
        }

        public function mapFromArray($array) : Risk
        {
            $risk = $this->_performMapping($array, new Risk());

            $risk->creator = $risk->getCreatorFullName();
            $risk->owner = $risk->getOwnerFullName();
            $risk->approver = $risk->getApproverFullName();
            return $risk;               
        }
    }
