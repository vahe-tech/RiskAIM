<?php
     namespace Domain;

     class Risk
     {
          public $riskid;          
          public $risktitle;
          public $riskstate;
          public $riskstatement;
          public $context;
          public $approver;
          public $owner;
          public $creator;
          public $approverid;
          public $ownerid;
          public $creatorid;
          public $assessmentdate;
          public $latesteventdate;

          public $originallikelihood;
          public $originaltechnical;
          public $originalschedule;
          public $originalcost;
          public $originalconsequence;

          public $currentlikelihood;
          public $currenttechnical;
          public $currentschedule;
          public $currentcost;
          public $currentconsequence;

          public $originallevel = '';
          public $originalvalue = '';

          public $currentlevel = '';
          public $currentvalue = '';

          public $creatorlastname = '';
          public $creatorfirstname = '';
          public $ownerlastname = '';
          public $ownerfirstname = '';
          public $approverlastname = '';
          public $approverfirstname = '';

          public function getCreatorFullName()
          {
               return trim(join(', ', [$this->creatorlastname, $this->creatorfirstname]), ', ');
          }

          public function getOwnerFullName()
          {
               return trim(join(', ', [$this->ownerlastname, $this->ownerfirstname]), ', ');
          }

          public function getApproverFullName()
          {
               return trim(join(', ', [$this->approverlastname, $this->approverfirstname]), ', ');
          }
     }