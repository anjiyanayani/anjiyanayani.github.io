
 document.getElementById("top-bar").innerHTML =   
        '<div class="container">'+
            '<div class="navbar-header">'+
                '<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">'+
                '<span class="sr-only">Toggle navigation</span>'+
                '<span class="icon-bar"></span>'+
                '<span class="icon-bar"></span>'+
                '<span class="icon-bar"></span>'+
                '</button>'+

                '<div class="navbar-brand">'+
                    '<a href="index.html" >'+
                        '<img src="images/logo.png" alt="">'+
                    '</a>'+
                '</div>'+

            '</div>'+

            '<nav class="collapse navbar-collapse navbar-right" role="navigation">'+
                '<div class="main-menu">'+
                    '<ul class="nav navbar-nav navbar-right">'+
                        '<li>'+
                            '<a href="index.html" >Home</a>'+
                        '</li>'+
                        '<li><a href="champions.html">Champions</a></li>'+
                        '<li><a href="matches.html">Matches</a></li>'+
                        '<li><a href="items.html">Items</a></li>'+
                        '<li class="dropdown">'+
                            '<a href="#" class="dropdown-toggle" data-toggle="dropdown">Game Modes<span class="caret"></span></a>'+
                            '<div class="dropdown-menu">'+
                                '<ul>'+
                                    '<li><a href="summoners-rift.html">Summoner\'s Rift</a></li>'+
                                    '<li><a href="twisted-treeline.html">Twisted Treeline</a></li>'+
                                    '<li><a href="howling-abyss.html">Howling Abyss</a></li>'+
                                '</ul>'+
                            '</div>'+
                        '</li>'+
                        '<li><a href="about.html">About</a></li>'+
                    '</ul>'+
                '</div>'+
            '</nav>'+

        '</div>';    
