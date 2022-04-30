<?php

    use Provider\Database;

    class EditRiskQuery
    {
        public function GetRisk($riskid, string $goto=null)
        {
            $sql = "SELECT  JSON_OBJECT('riskid', 		      r.RiskID,
                                        'creatorid', 	      r.CreatorID,
                                        'ownerid', 		      r.OwnerID,
                                        'approverid', 	      r.ApproverID,
                                        'risktitle', 	      r.RiskTitle,
                                        'riskstatement',	  r.RiskStatement,
                                        'closurecriteria', 	  r.ClosureCriteria,
                                        'riskstate', 	      r.RiskState,
                                        'context', 		      r.Context,
                                        'assessmentdate', 	  r.AssessmentDate,
                                        'creatorlastname',    GetRiskUserLastOrFirstName(GetRiskUserID('Creator', r.RiskID),r.RiskID, 'Last'),
                                        'creatorfirstname',   GetRiskUserLastOrFirstName(GetRiskUserID('Creator', r.RiskID),r.RiskID, 'First'),
                                        'ownerlastname',      GetRiskUserLastOrFirstName(GetRiskUserID('Owner',   r.RiskID),r.RiskID, 'Last'),  
                                        'ownerfirstname',     GetRiskUserLastOrFirstName(GetRiskUserID('Owner',   r.RiskID),r.RiskID, 'First'),
                                        'approverlastname',   GetRiskUserLastOrFirstName(GetRiskUserID('Approver',r.RiskID),r.RiskID, 'Last'),  
                                        'approverfirstname',  GetRiskUserLastOrFirstName(GetRiskUserID('Approver',r.RiskID),r.RiskID, 'First'), 
                                        'originallikelihood', r.Likelihood,								                        	
                                        'originaltechnical',  r.Technical, 									                
                                        'originalschedule',   r.Schedule, 								
                                        'originalcost', 	  r.Cost, 									
                                        'originalconsequence',GREATEST(r.Technical, r.Schedule, r.Cost),                              
                                        'originalvalue', 	  RiskValue(r.Likelihood, GREATEST(r.Technical, r.Schedule, r.Cost)),           
                                        'originallevel', 	  RiskLevel(RiskValue(r.Likelihood, GREATEST(r.Technical, r.Schedule, r.Cost))),
                                        'latesteventdate',    LatestEventDate(r.RiskID),
                                        'currentlikelihood',  CurrentLikelihood(r.RiskID),	
                                        'currentconsequence', CurrentConsequence(r.RiskID),	
                                        'currentvalue', 	  CurrentRiskValue(r.RiskID),		
                                        'currentlevel', 	  RiskLevel(CurrentRiskValue(r.RiskID)),
                                        'events', JSON_ARRAYAGG(
                                               JSON_OBJECT( 'eventid', 	          e.eventid, 
                                                            'eventitle', 	      e.eventtitle, 
                                                            'eventstatus', 	      e.eventstatus, 
                                                            'eventownerid', 	  e.eventownerid, 
                                                            'actualdate', 	      e.actualdate,
                                                            'scheduledate', 	   e.scheduledate,
                                                            'actuallikelihood',    e.actuallikelihood,
                                                            'actualschedule', 	   e.actualschedule,
                                                            'actualcost', 	       e.actualcost,
                                                            'scheduledlikelihood', e.scheduledlikelihood,
                                                            'scheduledtechnical',  e.scheduledschedule,
                                                            'scheduledschedule',   e.scheduledschedule,
                                                            'scheduledcost', 	   e.scheduledcost,
                                                            'baselinelikelihood',  e.baselinelikelihood,
                                                            'baselinetechnical',   e.baselinetechnical,
                                                            'baselineschedule',    e.baselineschedule,
                                                            'baselinecost', 	   e.baselinecost)))
                FROM  risks r
                RIGHT JOIN  riskevents e
                ON e.riskid = r.riskid   
                WHERE r.riskid = GetRiskID(:riskid, :goto)";
            try
            {
                $db = new Database();
                $statement = $db->prepare($sql);
                $statement->bindParam(':riskid', $riskid);
                $statement->bindParam(':goto', $goto);
                $statement->execute();
                $result = $statement->fetch();
                return json_decode($result[0], true);
            }
            catch (PDOException $e)
            {
                return $e->getMessage();
            }
        }
    }