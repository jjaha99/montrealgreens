<!DOCTYPE html>
<html>
<head>

	<title>Contact Us</title>

	<style>
		<?php include 'contactUs.css'; ?>
	</style>

	<style>
		.container {
      z-index: 2;
      top: 150vh;
      /*^edit value depending on your page*/
      width: 100%;
      height: initial;
      position: absolute;
      background: rgb(0, 0, 0);
	</style>

</head>
<body>
	<section class="contact">
    <div class="container-contact">
      <div class="questions">
        <h1>Get In Touch</h1>
      </div>
      <form method="post">
        <div class="contact-us">
          <div class="fname">
            <i class="fa fa-user" aria-hidden="true"></i>
            <input type="text" class="contact-input" id="fname" name="firstname" placeholder="    First Name" required>
          </div>
          <div class="lname">
            <i class="fa fa-user" aria-hidden="true"></i>
            <input type="text" class="contact-input" id="lname" name="lastname" placeholder="    Last Name" required>
          </div>
          <div class="email">
            <i class="fa fa-envelope"></i>
            <input type="email" class="contact-input" id="email" name="senderemail" placeholder="    Email" required>
          </div>
          <div class="subject">
            <textarea rows="5" id="subject" name="subject" placeholder="What is your query?" required></textarea>
          </div>
          <div class="sub">
            <input type="submit" value="Submit" name="formsub">
            <?php
            if (isset($_POST['formsub'])) {
              $firstname = $_POST['firstname'];
              $lastname = $_POST['lastname'];
              $to = 'montrealgreens@gmail.com';
              $subject = 'Montreal Greens Contact Form';
              $from = $_POST['senderemail'];
              $name = $_POST['firstname'] . $_POST['lastname'];
              $subject = $_POST['subject'];
              mail($to, "$subject from: $from name: $firstname $lastname", $subject);
              echo " <p style='color:white;'> Mail Sent. Thank you " . $firstname . $lastname . ", we will contact you shortly.";
            }
            ?>
          </div>
        </div>
      </form>
    </div>
  </section>
</body>
</html>