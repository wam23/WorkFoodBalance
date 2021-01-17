<VirtualHost *:80>
	ServerAdmin hawkie@hawkie.ch
	ServerName www.hawkie.ch
	ServerAlias hawkie.ch

	DocumentRoot /var/www/hawkie.ch/WorkFoodBalance/rails/leaderboard/public/
	
        <Directory /var/www/hawkie.ch/WorkFoodBalance/rails/leaderboard/public>
            Allow from all
	    Options -MultiViews
	    # Uncomment this if you're on Apache >= 2.4:
	    Require all granted
	</Directory>

	<Directory />
		Options -Indexes +FollowSymLinks
		AllowOverride None
	</Directory>
	
	ErrorLog /var/log/apache2/hawkie.ch/error.log

        # Possible values include: debug, info, notice, warn, error, crit,
        # alert, emerg.
        LogLevel warn

       	CustomLog /var/log/apache2/hawkie.ch/access.log combined
        ServerSignature Off
</VirtualHost>
