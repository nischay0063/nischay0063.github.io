<?php
			$username = 'nischay';
			$password = 'nischay';
			$db = 'hasiee';
			
			$db = new mysqli('localhost', $username, $password, $db) or die("Unable to connect");
			
			$run=mysqli_query($db,"INSERT INTO main_donation VALUES('$_POST["name"]', '$_POST["email"]', '$_POST["phone"]', '$_POST["amount"]','$_POST["sc"]',$_POST["address"]')");
			
			if($run)
			{
			echo 'successfull';
			}
			else
			{
			echo 'did not run';
			}
			
?>