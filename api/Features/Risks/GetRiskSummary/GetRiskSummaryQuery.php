<?php
    use Provider\Database;

    class GetRiskSummaryQuery
    {
        public function GetRiskSummary()
        {
            $sql = "SELECT  r.RiskID,
                            r.CreatorID,
                            r.OwnerID,
                            r.ApproverID,
                            r.RiskTitle,
                            r.RiskStatement,
                            r.ClosureCriteria,
                            r.RiskState,
                            r.Context,
                            r.AssessmentDate,
                            GetRiskUserLastOrFirstName(GetRiskUserID('Creator', r.RiskID),r.RiskID, 'Last')	 AS 'creator.lastname',
                            GetRiskUserLastOrFirstName(GetRiskUserID('Creator', r.RiskID),r.RiskID, 'First') AS 'creator.firstname',
                            GetRiskUserLastOrFirstName(GetRiskUserID('Owner',   r.RiskID),r.RiskID, 'Last')  AS 'owner.lastname', 
                            GetRiskUserLastOrFirstName(GetRiskUserID('Owner',   r.RiskID),r.RiskID, 'First') AS 'owner.firstname',
                            GetRiskUserLastOrFirstName(GetRiskUserID('Approver',r.RiskID),r.RiskID, 'Last')  AS 'approver.lastname',
                            GetRiskUserLastOrFirstName(GetRiskUserID('Approver',r.RiskID),r.RiskID, 'First') AS 'approver.firstname',
                            r.Likelihood 									                                 AS 'OriginalLikelihood',
                            r.Technical 									                                 AS 'OriginalTechnical',
                            r.Schedule 									                                     AS 'OriginalSchedule',
                            r.Cost 										                                     AS 'OriginalCost',
                            GREATEST(r.Technical, r.Schedule, r.Cost)                              		     AS 'OriginalConsequence',
                            RiskValue(r.Likelihood, GREATEST(r.Technical, r.Schedule, r.Cost))             	 AS 'OriginalValue',
                            RiskLevel(RiskValue(r.Likelihood, GREATEST(r.Technical, r.Schedule, r.Cost)))  	 AS 'OriginalLevel',
                            LatestEventDate(r.RiskID, r.AssessmentDate)					                     AS 'LatestEventDate',
                            CurrentLikelihood(r.RiskID)	 				      	       	                     AS 'CurrentLikelihood',
                            CurrentConsequence(r.RiskID)				      		       	                 AS 'CurrentConsequence',
                            CurrentRiskValue(r.RiskID)						       	                         AS 'CurrentValue',
                            RiskLevel(CurrentRiskValue(r.RiskID))					                    	 AS 'CurrentLevel'
                    FROM  risks r";
            try
            {
                $db = new Database();
                $statement = $db->prepare($sql);
                $statement->execute();
                $resultArray = $statement->fetchAll();
                return $resultArray;
            }
            catch (PDOException $e)
            {
                return $e->getMessage();
            }
        }
    }