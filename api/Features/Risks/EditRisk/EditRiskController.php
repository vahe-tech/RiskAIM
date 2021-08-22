<?php
    use Infrastructure\Mapper\RisksMapper;

    class EditRiskController
    {
        #[Route('GET', '/risks/{riskid}/{goto}')]
        public function GetRiskController($riskid, $goto)
        {
            try
            {
                $handler = new EditRiskQuery();
                $result = $handler->GetRisk($riskid, $goto);
                return(["succeeded" => true, "data" => $result]);
            }
            catch(Exception $e)
            {
                return ["succeeded" => false, "data" => $e->getMessage()];    
            }
        }

        #[Route('PUT', '/risks/{risk}')]
        public function UpdateRisk($riskid)
        {
        }
    }
