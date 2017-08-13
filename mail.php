<?php
ob_start();
echo 'Name: '.$_POST['name'].'<br>';
echo 'Email: '.$_POST['email'].'<br>';
echo 'Phone: '.$_POST['tel'].'<br>';
echo 'From Zip: '.$_POST['movingfromzip'].'<br>';
echo 'To Zip: '.$_POST['movingtozip'].'<br>';
echo 'Date: '.$_POST['movingdate'].'<br>';
echo 'Size: '.$_POST['movesize'].'<br>';

$mails_content = ob_get_clean();
$headers = 'MIME-Version: 1.0' . "\r\n";
$headers = 'From: info@vectormoversnj.com' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
mail('mvrsleads@gmail.com', 'New lead from VectorMoversNJ.com'. $_post['name'], $mails_content, $headers);
 


ob_start();

echo 'Dear '.$_POST['name'].'<br>
<br>
Thank you for your interest in our moving services. Vector Moving is committed to providing you with a quality and stress-free move at the best-guaranteed prices.<br>
<br>
We have received your information and one of our relocation consultants will contact you shortly. You can call us at 201-266-366 at any time.<br>
<br><br>
<br>
Sincerely,<br>
<br>
Customer Service Team<br>
<br>
Vector Moving<br>
P.  201-266-3666<br>
E.  info@vectormovers.com<br>
W. vectormovers.com<br>';

$mail_content = ob_get_clean();
mail($_POST['email'], 'Thank you from Vector Team! We received your request', $mail_content, $headers);

?>
<script>
	location.href='http://www.vectormoversnj.com/oldwebsite/thank-you.html';
</script>
 
  