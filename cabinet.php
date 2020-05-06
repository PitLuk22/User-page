<?php
    //var_dump($_COOKIE);
    if ( !isset($_COOKIE['email']) OR trim($_COOKIE['email']) ==''){
        header("Location: index.html");
        exit; 
    }
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="shortcut icon" href="favicon.png" type="image/png">
    <title>User page</title>
</head>

<body>
    <h1>User Page</h1>
    <button id="logout">LogOUT</button>
    
    <form>
        <div>User name: <input type="text" name="name" id="signup-name"></div>
        <div>New password: <input type="text" name="pass" id="signup-pass"></div>
        <div>Change your birthday: <input type="text" name="email" id="signup-birthday"></div>
        <div style="display: flex; flex-direction: column">If you want to change gender, you can:
            <div style="display: inline-block"> <input type="radio" value="male" name="sex" checked class="sex" id="sex-male"><label for="sex-male">male</label></div>
            <div style="display: inline-block"><input type="radio" value="female" name="sex" class="sex" id="sex-female"><label for="sex-female">female</label></div>
            <div style="display: inline-block"><input type="radio" value="other" name="sex" class="sex" id="sex-other"><label for="sex-other">other</label></div>
        </div>        
        <input type="submit" value="Update" id="signup-submit">
    </form>

    <script src="script/ajax.js"></script>
    <script src="script/get_user_data.js"></script>
    <script src="script/logout.js"></script>
</body>

</html>