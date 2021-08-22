<?php
    use Infrastructure\Mapper\RisksMapper;

    class GetRiskSummaryController
    {
        #[Route('GET', '/risks')]
        public function Controller()
        {
            try
            {
                $mapper = new RisksMapper(); 
                $handler = new GetRiskSummaryQuery();
                $resultArray = $handler->GetRiskSummary();
                $responseResult = $mapper->populateFromCollection($resultArray); 
                return(["succeeded" => true, "data" => $responseResult]);
            }
            catch(Exception $e)
            {
                return ["succeeded" => false, "data" => $e->getMessage()];    
            }
        }
    }
