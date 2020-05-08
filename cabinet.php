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
    <!--Import Google Icon Font-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!--Import materialize.css-->
    <link type="text/css" rel="stylesheet" href="css/materialize.min.css" media="screen,projection" />
    <!--Let browser know website is optimized for mobile-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="shortcut icon" href="favicon.png" type="image/png">
    <link rel="stylesheet" href="css/style.css">
    <title>User page</title>
</head>


<body>
    <header class="site-header">
            <div class="row">
                <div class="col l8 offset-l2">
                    <div class="site-title center-align">User Cabinet</div>
                </div> 
                <div class="col l2">
                <button id="logout" class="logout-btn waves-effect waves-light btn light-blue lighten-5">
                    <i class="material-icons right">exit_to_app</i>
                    Logout
                </button>
                </div>
            </div>
    </header>
    <div class="container">
        <div class="row">
            <div class="col l6 offset-l3 center-align">
                <form>
                    <div class="row mt50">
                        <div class="input-field col s6">
                            <input id="signup-name" type="text" class="validate">
                            <label class="active" id="signup-name">Name</label>
                        </div>
                        <div class="input-field col s6">
                            <input id="signup-pass" type="text" class="validate">
                            <label class="active" id="signup-pass">Password</label>
                        </div>
                        <div class="input-field col s12">
                            <input id="signup-birthday" type="text" class="datepicker">
                            <label class="active" id="signup-birthday">Birthday</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col l12">
                            <div class="selection">If you want to change gender, you can:
                                <div>
                                    <label>
                                    <input type="radio" value="male" name="sex" class="sex with-gap"><span>male</span>
                                    </label>
                                </div>
                                <div>
                                
                                    <label>
                                        <input type="radio" value="female" name="sex" class="sex with-gap"><span>female</span>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input type="radio" value="other" name="sex" class="sex with-gap"><span>other</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                            <div class="coll l6">
                                <button type="submit" id="signup-submit" class="waves-effect waves-light btn blue darken-1">
                                    <i class="material-icons right">update</i>
                                    update
                                </button>
                            </div> 
                        </div>
                </form>
            </div>
        </div>
    </div>

    

    <script type="text/javascript" src="js/materialize.min.js"></script>
    <script src="script/ajax.js"></script>
    <script src="script/get_user_data.js"></script>
    <script src="script/logout.js"></script>
</body>

</html>